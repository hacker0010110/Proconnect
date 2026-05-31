async function loadUser() {
    const user = await getCurrentUser();
    if (user) {
      const greeting = document.getElementById('greeting');
      if (greeting) {
        greeting.innerHTML = `
          <i class="fa-solid fa-hand-wave" style="color: var(--orange)"></i>
          <span>Bonjour ${user.name.split(' ')[0]} !</span>
        `;
      }
    }
  }
  async function loadFeaturedPros() {
    const { data, error } = await db
      .from('professionals')
      .select('*')
      .eq('is_available', true)
      .order('rating', { ascending: false })
      .limit(6);
    const grid = document.getElementById('prosGrid');
    if (error || !data || data.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted)">
          Aucun professionnel disponible pour le moment
        </div>
      `;
      return;
    }
    const userLocation = await getUserLocation();
    let pros = data;
    if (userLocation && typeof enrichProsWithDistance === 'function') {
      pros = enrichProsWithDistance(data, userLocation);
      pros = sortByDistance(pros);
    }
    grid.innerHTML = pros.map(pro => `
      <a href="booking.html?id=${pro.id}&name=${encodeURIComponent(pro.name)}&job=${encodeURIComponent(pro.job)}" class="pro-card">
        <div class="pro-header">
          <div class="pro-avatar">${pro.name[0].toUpperCase()}</div>
          <div class="pro-info">
            <h4>${pro.name}</h4>
            <p>${pro.job}</p>
          </div>
        </div>
        <div class="pro-meta">
          <span class="pro-meta-item">
            <i class="fa-solid fa-location-dot"></i> ${pro.city}
          </span>
          <span class="pro-meta-item">
            <i class="fa-solid fa-star" style="color: var(--orange)"></i> ${pro.rating || '0.0'}
          </span>
        </div>
        ${pro.distance !== null && pro.distance !== undefined ? `
          <div style="display: inline-flex; align-items: center; gap: 4px; background: rgba(6,182,212,0.15); color: var(--cyan); padding: 4px 10px; border-radius: 100px; font-size: 12px; font-weight: 600; margin-bottom: 8px;">
            <i class="fa-solid fa-location-arrow"></i> à ${formatDistance(pro.distance)}
          </div>
        ` : ''}
        ${pro.price_per_hour ? `<div class="pro-price">${pro.price_per_hour} DA/h</div>` : ''}
      </a>
    `).join('');
  }
  function handleSearch(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
      window.location.href = `professionals.html?search=${encodeURIComponent(query)}`;
    }
  }
  loadUser();
  loadFeaturedPros();