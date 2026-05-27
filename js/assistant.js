// Base de connaissances avec mots-clés par métier
const jobKnowledge = {
    'Plomberie': {
      keywords: ['fuite', 'robinet', 'évier', 'lavabo', 'douche', 'wc', 'toilette', 'eau', 'tuyau', 'bouché', 'bouchée', 'canalisation', 'chauffe-eau', 'chasse', 'tuyauterie', 'goutte', 'pression', 'baignoire', 'fuit', 'dégât des eaux', 'plombier'],
      icon: '🔧',
      response: "On dirait que tu as besoin d'un **plombier**. Je vais te montrer les meilleurs pros disponibles."
    },
    'Électricité': {
      keywords: ['électricité', 'electricite', 'court-circuit', 'prise', 'disjoncteur', 'panne électrique', 'lumière', 'ampoule', 'tableau électrique', 'câble', 'cable', 'fil', 'interrupteur', 'compteur', 'éclairage', 'electricien', 'électricien', 'courant'],
      icon: '⚡',
      response: "Pour un problème électrique, il te faut un **électricien**. Voici les pros disponibles."
    },
    'Ménage': {
      keywords: ['ménage', 'menage', 'nettoyage', 'nettoyer', 'propre', 'sale', 'aspirateur', 'serpillière', 'femme de ménage', 'cleaning', 'poussière', 'vitres', 'sol', 'cuisine sale', 'salle de bain'],
      icon: '🧹',
      response: "Tu cherches quelqu'un pour faire le **ménage** ? J'ai ce qu'il te faut."
    },
    'Jardinage': {
      keywords: ['jardin', 'jardinage', 'pelouse', 'tondre', 'tondeuse', 'gazon', 'arbre', 'taille', 'haie', 'plante', 'fleurs', 'jardinier', 'élagage', 'élaguer', 'entretien jardin'],
      icon: '🌿',
      response: "Pour ton **jardin**, voici les jardiniers disponibles près de toi."
    },
    'Peinture': {
      keywords: ['peinture', 'peindre', 'peintre', 'mur', 'plafond', 'couleur', 'repeindre', 'tapisser', 'tapisserie', 'papier peint', 'décoration murale', 'enduit'],
      icon: '🎨',
      response: "Tu veux **peindre** quelque chose ? Voici les peintres disponibles."
    },
    'Informatique': {
      keywords: ['ordinateur', 'pc', 'laptop', 'wifi', 'internet', 'windows', 'mac', 'virus', 'lent', 'plante', 'écran bleu', 'imprimante', 'réseau', 'reseau', 'informatique', 'informaticien', 'bug', 'logiciel', 'mot de passe', 'mail'],
      icon: '💻',
      response: "Pour un problème **informatique**, je te propose ces pros."
    },
    'Mécanique': {
      keywords: ['voiture', 'auto', 'véhicule', 'vehicule', 'moteur', 'freins', 'pneu', 'pneus', 'vidange', 'mécanicien', 'mecanicien', 'garage', 'embrayage', 'batterie', 'démarre pas', 'panne voiture'],
      icon: '🔩',
      response: "Pour ta **voiture**, voici les mécaniciens disponibles."
    },
    'Maçonnerie': {
      keywords: ['mur', 'brique', 'béton', 'beton', 'ciment', 'mortier', 'construire', 'maçon', 'macon', 'maconnerie', 'maçonnerie', 'fondation', 'chape', 'parpaing', 'dalle', 'crépi'],
      icon: '🧱',
      response: "Pour des travaux de **maçonnerie**, voici les pros."
    },
    'Menuiserie': {
      keywords: ['bois', 'menuisier', 'menuiserie', 'porte', 'fenêtre', 'fenetre', 'placard', 'meuble', 'étagère', 'etagere', 'parquet', 'charpente', 'volet'],
      icon: '🪚',
      response: "Pour du travail du **bois**, voici les menuisiers."
    },
    'Climatisation': {
      keywords: ['climatisation', 'climatiseur', 'clim', 'chauffage', 'chaudière', 'chaudiere', 'radiateur', 'froid', 'chaud', 'température', 'ventilation', 'pompe à chaleur'],
      icon: '❄️',
      response: "Pour la **climatisation/chauffage**, voici les pros."
    },
    'Transport & Livraison': {
      keywords: ['transport', 'livraison', 'livrer', 'déménagement', 'demenagement', 'déménager', 'demenager', 'camion', 'colis', 'meuble lourd', 'transporter', 'porter', 'déplacement', 'navette', 'taxi colis'],
      icon: '🚚',
      response: "Pour du **transport ou de la livraison**, voici les pros disponibles."
    },
    'Coiffure': {
      keywords: ['coiffure', 'coiffeur', 'coiffeuse', 'cheveux', 'coupe', 'couleur cheveux', 'mèches', 'meches', 'brushing', 'mariage coiffure'],
      icon: '✂️',
      response: "Pour la **coiffure**, voici les pros."
    },
    'Esthétique': {
      keywords: ['esthétique', 'esthetique', 'manucure', 'pédicure', 'pedicure', 'maquillage', 'épilation', 'epilation', 'soin visage', 'massage', 'beauté', 'esthéticienne'],
      icon: '💄',
      response: "Pour des soins **esthétiques**, voici les pros."
    }
  };
  
  const greetings = [
    "Salut ! 👋 Je suis ProBot, ton assistant intelligent. Dis-moi ce dont tu as besoin et je trouve le bon pro pour toi.",
    "Tu peux me dire par exemple : *\"J'ai une fuite d'eau\"* ou *\"Je dois déménager\"*"
  ];
  
  let conversationStarted = false;
  
  // Initialise la conversation
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => addBotMessage(greetings[0]), 400);
    setTimeout(() => {
      addBotMessage(greetings[1]);
      showQuickReplies(['🔧 Fuite d\'eau', '⚡ Panne électrique', '🚚 Déménagement', '💻 Problème PC']);
    }, 1400);
  });
  
  function addMessage(content, isUser = false) {
    const chat = document.getElementById('chatArea');
    const msg = document.createElement('div');
    msg.className = `msg ${isUser ? 'msg-user' : 'msg-bot'}`;
    msg.innerHTML = content;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
  }
  
  function addBotMessage(content) {
    // Convertit **texte** en gras
    content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    addMessage(content, false);
  }
  
  function showTyping() {
    const chat = document.getElementById('chatArea');
    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.id = 'typingIndicator';
    typing.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    chat.appendChild(typing);
    chat.scrollTop = chat.scrollHeight;
  }
  
  function hideTyping() {
    const t = document.getElementById('typingIndicator');
    if (t) t.remove();
  }
  
  function showQuickReplies(replies) {
    const chat = document.getElementById('chatArea');
    const container = document.createElement('div');
    container.className = 'quick-replies';
    container.innerHTML = replies.map(r => 
      `<div class="quick-reply" onclick="handleQuickReply('${r.replace(/'/g, "\\'")}')">${r}</div>`
    ).join('');
    chat.appendChild(container);
    chat.scrollTop = chat.scrollHeight;
  }
  
  function handleQuickReply(text) {
    document.querySelectorAll('.quick-replies').forEach(el => el.remove());
    document.getElementById('userInput').value = text;
    handleSend(new Event('submit'));
  }
  
  function handleSend(e) {
    e.preventDefault();
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text) return;
  
    // Supprime les quick replies précédentes
    document.querySelectorAll('.quick-replies').forEach(el => el.remove());
  
    addMessage(text, true);
    input.value = '';
  
    showTyping();
    setTimeout(() => processMessage(text), 800 + Math.random() * 600);
  }
  
  async function processMessage(userText) {
    hideTyping();
    
    const lower = userText.toLowerCase();
    
    // Détecte le métier basé sur les mots-clés
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [job, data] of Object.entries(jobKnowledge)) {
      let score = 0;
      for (const keyword of data.keywords) {
        if (lower.includes(keyword)) {
          score += keyword.length; // Mots plus longs = plus pertinents
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = { job, ...data };
      }
    }
  
    // Salutations
    if (lower.match(/^(salut|bonjour|bonsoir|hello|hi|coucou|hey)/)) {
      addBotMessage("Salut ! 😊 Que puis-je faire pour toi ? Décris-moi ton problème et je te trouverai le bon pro.");
      return;
    }
  
    // Remerciements
    if (lower.match(/(merci|thanks|thx)/)) {
      addBotMessage("Avec plaisir ! 🙌 N'hésite pas si tu as besoin d'autre chose.");
      return;
    }
  
    // Aide
    if (lower.match(/(aide|help|comment|que peux-tu)/)) {
      addBotMessage("Je peux t'aider à trouver le bon professionnel pour n'importe quel service ! Décris simplement ton besoin en quelques mots.");
      showQuickReplies(['🔧 Plomberie', '⚡ Électricité', '🧹 Ménage', '🚚 Livraison']);
      return;
    }
  
    if (bestMatch) {
      addBotMessage(`${bestMatch.icon} J'ai analysé ta demande... ${bestMatch.response}`);
      
      // Recherche les pros
      setTimeout(async () => {
        showTyping();
        
        const { data: pros } = await db.from('professionals')
          .select('*')
          .eq('is_available', true)
          .or(`job.eq.${bestMatch.job},specialties.cs.{${bestMatch.job}}`)
          .order('rating', { ascending: false })
          .limit(3);
  
        hideTyping();
        
        if (!pros || pros.length === 0) {
          addBotMessage(`😔 Désolé, aucun pro en ${bestMatch.job} n'est disponible pour le moment. Tu peux <a href="professionals.html" style="color: var(--primary-light); text-decoration: underline;">consulter tous les pros</a>.`);
          return;
        }
  
        // Affiche les suggestions de pros
        const suggestions = `
          <div class="pros-suggestion">
            ${pros.map(p => `
              <a href="pro-detail.html?id=${p.id}" class="pro-suggest-card">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--cyan)); display: flex; align-items: center; justify-content: center; font-weight: bold; color: white;">${p.name[0].toUpperCase()}</div>
                  <div>
                    <strong>${p.name}</strong>
                    <p style="font-size: 12px; color: var(--text-secondary);">${p.job}</p>
                  </div>
                </div>
                <div style="font-size: 12px; color: var(--text-secondary);">
                  📍 ${p.city} • ⭐ ${p.rating || '0.0'}
                  ${p.price_per_hour ? `<br>💰 ${p.price_per_hour} DA/h` : ''}
                </div>
              </a>
            `).join('')}
          </div>
        `;
        
        addBotMessage(`✨ J'ai trouvé ${pros.length} pro${pros.length > 1 ? 's' : ''} qui peuvent t'aider :${suggestions}`);
        
        setTimeout(() => {
          addBotMessage("Tu peux cliquer sur un pro pour voir son profil et réserver, ou me dire si tu as une autre question !");
          showQuickReplies(['📋 Voir tous les pros', '🗺️ Voir sur la carte', '✨ Autre problème']);
        }, 600);
      }, 600);
    } else {
      addBotMessage("🤔 Hmm, je n'ai pas bien compris ton besoin. Peux-tu reformuler ou choisir parmi ces catégories ?");
      showQuickReplies(['🔧 Plomberie', '⚡ Électricité', '🧹 Ménage', '🚚 Livraison', '💻 Informatique', '🎨 Peinture']);
    }
  }
  
  // Gestion des quick replies spéciales
  const originalHandleQuickReply = handleQuickReply;
  window.handleQuickReply = function(text) {
    if (text === '📋 Voir tous les pros') {
      window.location.href = 'professionals.html';
      return;
    }
    if (text === '🗺️ Voir sur la carte') {
      window.location.href = 'map.html';
      return;
    }
    originalHandleQuickReply(text);
  };