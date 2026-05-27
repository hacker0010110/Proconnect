async function renderNavbar() {
    const user = await getCurrentUser();
    const navLinks = document.getElementById('navLinks');
    if (!navLinks) return;
  
    if (user) {
      const path = user.role === 'professional' ? 'pro-dashboard.html' : 'profile.html';
      
      const { data: notifs } = await db
        .from('notifications')
        .select('id')
        .eq('user_id', user.id)
        .eq('read', false);
      const unreadCount = notifs?.length || 0;
  
      navLinks.innerHTML = `
        <a href="assistant.html" class="nav-link" style="background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2)); color: var(--primary-light);"><i class="fa-solid fa-robot"></i> IA</a>
        <a href="map.html" class="nav-link"><i class="fa-solid fa-map"></i> Carte</a>
        <a href="professionals.html" class="nav-link"><i class="fa-solid fa-users"></i> Pros</a>
        <a href="notifications.html" class="nav-link" style="position: relative;">
          <i class="fa-solid fa-bell"></i>
          ${unreadCount > 0 ? `<span style="position: absolute; top: 4px; right: 4px; background: var(--red); color: white; font-size: 10px; padding: 2px 6px; border-radius: 100px; font-weight: 700;">${unreadCount}</span>` : ''}
        </a>
        <a href="${path}" class="nav-link"><i class="fa-solid fa-user"></i> ${user.name.split(' ')[0]}</a>     
        <button onclick="logout()" class="btn btn-secondary">Déconnexion</button>
      `;
    } else {
      navLinks.innerHTML = `
        <a href="assistant.html" class="nav-link" style="background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2)); color: var(--primary-light);"><i class="fa-solid fa-robot"></i> IA</a>
        <a href="map.html" class="nav-link"><i class="fa-solid fa-map"></i> Carte</a>
        <a href="professionals.html" class="nav-link"><i class="fa-solid fa-users"></i> Pros</a>
        <a href="login.html" class="nav-link">Connexion</a>
        <a href="register.html" class="btn btn-primary">S'inscrire</a>
      `;
    }
  }
  document.addEventListener('DOMContentLoaded', renderNavbar);