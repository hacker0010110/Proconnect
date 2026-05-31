let notifSound = null;
let notifChannel = null;
let lastNotifCount = 0;
function playNotifSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
  } catch (e) {
    console.log('Son notif non disponible');
  }
}
function showToast(notif) {
  const icons = { info: '💬', success: '✅', warning: '⚠️', booking: '📅' };
  const colors = { 
    info: '#06B6D4', 
    success: '#10B981', 
    warning: '#F59E0B', 
    booking: '#7C3AED' 
  };
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 90px;
    right: 24px;
    background: var(--bg-card);
    border: 1px solid ${colors[notif.type] || colors.info};
    border-left: 4px solid ${colors[notif.type] || colors.info};
    border-radius: 12px;
    padding: 16px 20px;
    max-width: 360px;
    z-index: 9999;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    animation: slideInRight 0.4s ease-out;
    cursor: pointer;
    display: flex;
    align-items: start;
    gap: 12px;
  `;
  toast.innerHTML = `
    <div style="width: 40px; height: 40px; border-radius: 10px; background: ${colors[notif.type] || colors.info}25; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
      ${icons[notif.type] || icons.info}
    </div>
    <div style="flex: 1;">
      <h4 style="font-size: 14px; margin-bottom: 4px; color: var(--text-primary);">${notif.title}</h4>
      <p style="font-size: 13px; color: var(--text-secondary);">${notif.message}</p>
    </div>
    <button onclick="this.parentElement.remove()" style="background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 18px;">×</button>
  `;
  toast.onclick = (e) => {
    if (e.target.tagName !== 'BUTTON' && notif.link) {
      window.location.href = notif.link;
    }
  };
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.4s ease-out';
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}
function injectNotifStyles() {
  if (document.getElementById('notif-animations')) return;
  const style = document.createElement('style');
  style.id = 'notif-animations';
  style.textContent = `
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(100px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideOutRight {
      from { opacity: 1; transform: translateX(0); }
      to { opacity: 0; transform: translateX(100px); }
    }
    @keyframes bellShake {
      0%, 100% { transform: rotate(0deg); }
      20%, 60% { transform: rotate(15deg); }
      40%, 80% { transform: rotate(-15deg); }
    }
    .bell-ring { animation: bellShake 0.6s ease-in-out; }
  `;
  document.head.appendChild(style);
}
function shakeNotifBell() {
  const bells = document.querySelectorAll('.fa-bell');
  bells.forEach(bell => {
    bell.parentElement.classList.add('bell-ring');
    setTimeout(() => bell.parentElement.classList.remove('bell-ring'), 600);
  });
}
async function updateNavbarBadge() {
  const user = await getCurrentUser();
  if (!user) return;
  const { data } = await db.from('notifications')
    .select('id').eq('user_id', user.id).eq('read', false);
  const count = data?.length || 0;
  const bellLink = document.querySelector('.fa-bell')?.parentElement;
  if (!bellLink) return;
  const oldBadge = bellLink.querySelector('span');
  if (oldBadge) oldBadge.remove();
  if (count > 0) {
    const badge = document.createElement('span');
    badge.style.cssText = 'position: absolute; top: 4px; right: 4px; background: var(--red); color: white; font-size: 10px; padding: 2px 6px; border-radius: 100px; font-weight: 700;';
    badge.textContent = count;
    bellLink.appendChild(badge);
  }
}
async function initRealtimeNotifs() {
  const user = await getCurrentUser();
  if (!user) return;
  injectNotifStyles();
  if (notifChannel) db.removeChannel(notifChannel);
  notifChannel = db.channel('realtime-notifs')
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'notifications',
      filter: `user_id=eq.${user.id}`
    }, (payload) => {
      const notif = payload.new;
      playNotifSound();
      showToast(notif);
      shakeNotifBell();
      updateNavbarBadge();
    })
    .subscribe();
}
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initRealtimeNotifs, 1500);
});