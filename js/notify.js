async function notify(userId, title, message, type = 'info', link = null) {
    await db.from('notifications').insert({
      user_id: userId,
      title, message, type, link
    });
  }
  
  // Pour notifier le pro quand un client réserve (à appeler dans booking.html)
  async function notifyProBooking(proId, clientName) {
    const { data: pro } = await db.from('professionals').select('user_id').eq('id', proId).single();
    if (pro) {
      await notify(pro.user_id, 
        '📅 Nouvelle réservation', 
        `${clientName} a réservé un créneau avec toi`, 
        'booking', 
        'pro-dashboard.html'
      );
    }
  }