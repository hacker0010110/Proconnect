function calculateDistance(lat1, lon1, lat2, lon2) {
    if (!lat1 || !lon1 || !lat2 || !lon2) return null;
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return Math.round(R * c * 10) / 10;
  }
  function formatDistance(km) {
    if (km === null) return '';
    if (km < 1) return `${Math.round(km * 1000)} m`;
    if (km < 10) return `${km.toFixed(1)} km`;
    return `${Math.round(km)} km`;
  }
  async function getUserLocation() {
    const cached = sessionStorage.getItem('userLocation');
    if (cached) return JSON.parse(cached);
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(null);
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const loc = { latitude: pos.coords.latitude, longitude: pos.coords.longitude };
          sessionStorage.setItem('userLocation', JSON.stringify(loc));
          resolve(loc);
        },
        () => resolve(null),
        { timeout: 5000, enableHighAccuracy: false }
      );
    });
  }
  function enrichProsWithDistance(pros, userLocation) {
    if (!userLocation) return pros;
    return pros.map(pro => ({
      ...pro,
      distance: calculateDistance(
        userLocation.latitude, userLocation.longitude,
        pro.latitude, pro.longitude
      )
    }));
  }
  function sortByDistance(pros) {
    return [...pros].sort((a, b) => {
      if (a.distance === null) return 1;
      if (b.distance === null) return -1;
      return a.distance - b.distance;
    });
  }