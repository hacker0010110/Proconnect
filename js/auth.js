let selectedRole = 'client';

function selectRole(role) {
  selectedRole = role;
  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('active'));
  document.querySelector(`[data-role="${role}"]`)?.classList.add('active');
  
  const proFields = document.getElementById('proFields');
  if (proFields) {
    proFields.style.display = role === 'professional' ? 'block' : 'none';
  }
}

function showError(msg) {
  const err = document.getElementById('errorMsg');
  err.textContent = msg;
  err.classList.add('show');
}

function hideError() {
  document.getElementById('errorMsg').classList.remove('show');
}

function setLoading(loading) {
  const btn = document.getElementById('submitBtn');
  const text = document.getElementById('btnText');
  if (loading) {
    btn.disabled = true;
    text.innerHTML = '<div class="spinner"></div>';
  } else {
    btn.disabled = false;
    text.textContent = btn.dataset.originalText || 'Valider';
  }
}

async function handleLogin(e) {
  e.preventDefault();
  hideError();
  
  const btn = document.getElementById('submitBtn');
  btn.dataset.originalText = 'Se connecter';
  setLoading(true);

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const { data, error } = await db.auth.signInWithPassword({ email, password });
    if (error) throw error;

    // Récupère le rôle
    const { data: userData } = await db
      .from('users')
      .select('role')
      .eq('id', data.user.id)
      .single();

    if (userData?.role === 'professional') {
      window.location.href = 'pro-dashboard.html';
    } else {
      window.location.href = 'index.html';
    }
  } catch (err) {
    showError("Email ou mot de passe incorrect");
    setLoading(false);
  }
}

async function handleRegister(e) {
  e.preventDefault();
  hideError();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  
  if (selectedRole === 'professional') {
    const job = document.getElementById('job').value;
    const city = document.getElementById('city').value.trim();
    if (!job) return showError("Choisis ton métier");
    if (!city) return showError("Indique ta ville");
  }

  const btn = document.getElementById('submitBtn');
  btn.dataset.originalText = 'Créer mon compte';
  setLoading(true);

  try {
    const { data, error } = await db.auth.signUp({ email, password });
    if (error) throw error;
    if (!data.user) throw new Error("Création échouée");

    // Insère dans users
    await db.from('users').insert({
      id: data.user.id,
      name, email, role: selectedRole
    });

    // Si pro, insère dans professionals
    if (selectedRole === 'professional') {
      const job = document.getElementById('job').value;
      const city = document.getElementById('city').value.trim();
      const price = parseFloat(document.getElementById('price').value) || null;

      await db.from('professionals').insert({
        user_id: data.user.id,
        name, job, city,
        price_per_hour: price,
        rating: 0,
        review_count: 0,
        is_available: true,
        status: 'active'
      });

      window.location.href = 'pro-dashboard.html';
    } else {
      window.location.href = 'index.html';
    }
  } catch (err) {
    if (err.message?.includes('already')) {
      showError("Cet email est déjà utilisé");
    } else {
      showError("Erreur : " + err.message);
    }
    setLoading(false);
  }
}