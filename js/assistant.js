const jobKnowledge = {
    'Plomberie': {
      keywords: ['fuite', 'fuit', 'fuites', 'robinet', 'évier', 'evier', 'lavabo', 'douche', 'wc', 'toilette', 'toilettes', 'eau', 'tuyau', 'tuyaux', 'bouché', 'bouchée', 'bouchés', 'bouche', 'canalisation', 'canalisations', 'chauffe-eau', 'chauffeau', 'chasse', 'tuyauterie', 'goutte', 'gouttes', 'pression', 'baignoire', 'dégât des eaux', 'plombier', 'plomberie', 'évacuation', 'evacuation', 'écoulement', 'ecoulement', 'siphon', 'mitigeur', 'joint', 'inondation', 'inondé', 'humidité', 'humidite', 'mouillé', 'flaque', 'égout', 'egout', 'fosse septique', 'eau chaude', 'eau froide', 'pas d\'eau', 'coule', 'qui coule', 'écoule', 'sanitaire', 'salle de bain'],
      icon: '🔧',
      response: "On dirait que tu as besoin d'un **plombier**. Je vais te montrer les meilleurs pros disponibles."
    },
    'Électricité': {
      keywords: ['électricité', 'electricite', 'élec', 'elec', 'court-circuit', 'court circuit', 'prise', 'prises', 'disjoncteur', 'panne électrique', 'panne electrique', 'lumière', 'lumiere', 'lumieres', 'ampoule', 'ampoules', 'tableau électrique', 'tableau electrique', 'câble', 'cable', 'cables', 'câbles', 'fil', 'fils', 'interrupteur', 'compteur', 'éclairage', 'eclairage', 'electricien', 'électricien', 'courant', 'plus de courant', 'pas de courant', 'pas de lumière', 'plus de lumière', 'lampe', 'lampes', 'spot', 'spots', 'led', 'néon', 'neon', 'plafonnier', 'lustre', 'plomb', 'sauté', 'saute', 'fusible', 'tension', 'volt', 'voltage', 'installation électrique', 'panne de courant'],
      icon: '⚡',
      response: "Pour un problème électrique, il te faut un **électricien**. Voici les pros disponibles."
    },
    'Ménage': {
      keywords: ['ménage', 'menage', 'nettoyage', 'nettoyer', 'propre', 'sale', 'aspirateur', 'serpillière', 'serpilliere', 'femme de ménage', 'cleaning', 'poussière', 'poussiere', 'vitres', 'vitre', 'sol', 'sols', 'cuisine sale', 'salle de bain sale', 'nettoie', 'aspirer', 'balayer', 'laver', 'aide ménagère', 'aide menagere', 'lessive', 'repassage', 'tâches ménagères', 'taches menageres'],
      icon: '🧹',
      response: "Tu cherches quelqu'un pour faire le **ménage** ? J'ai ce qu'il te faut."
    },
    'Jardinage': {
      keywords: ['jardin', 'jardinage', 'pelouse', 'tondre', 'tondeuse', 'gazon', 'arbre', 'arbres', 'taille', 'tailler', 'haie', 'haies', 'plante', 'plantes', 'fleurs', 'fleur', 'jardinier', 'élagage', 'élaguer', 'elagage', 'elaguer', 'entretien jardin', 'verdure', 'mauvaises herbes', 'arrosage', 'arroser', 'planter', 'plantation', 'potager', 'débroussailler', 'debroussailler'],
      icon: '🌿',
      response: "Pour ton **jardin**, voici les jardiniers disponibles près de toi."
    },
    'Peinture': {
      keywords: ['peinture', 'peindre', 'peintre', 'mur', 'murs', 'plafond', 'plafonds', 'couleur', 'couleurs', 'repeindre', 'tapisser', 'tapisserie', 'papier peint', 'décoration murale', 'enduit', 'enduire', 'rouleau', 'pinceau', 'sous-couche', 'lasure', 'vernis', 'vernir', 'peindre chambre', 'peindre salon', 'crépi', 'crepi', 'façade', 'facade'],
      icon: '🎨',
      response: "Tu veux **peindre** quelque chose ? Voici les peintres disponibles."
    },
    'Informatique': {
      keywords: ['ordinateur', 'ordi', 'pc', 'laptop', 'wifi', 'wi-fi', 'internet', 'windows', 'mac', 'macbook', 'virus', 'lent', 'plante', 'planté', 'plantage', 'écran bleu', 'ecran bleu', 'écran noir', 'imprimante', 'réseau', 'reseau', 'informatique', 'informaticien', 'bug', 'bugue', 'bogue', 'logiciel', 'logiciels', 'mot de passe', 'mail', 'email', 'gmail', 'outlook', 'word', 'excel', 'office', 'antivirus', 'malware', 'piratage', 'piraté', 'compte hacké', 'site web', 'application', 'app', 'téléphone', 'telephone', 'smartphone', 'android', 'iphone', 'tablette', 'sauvegarde', 'imprimer', 'scanner', 'photoshop', 'driver', 'pilote', 'mise à jour', 'update', 'installer windows', 'formater', 'ssd', 'disque dur', 'ram', 'mémoire', 'memoire', 'site internet', 'mon pc', 'mon ordi'],
      icon: '💻',
      response: "Pour un problème **informatique**, je te propose ces pros."
    },
    'Mécanique': {
      keywords: ['voiture', 'voitures', 'auto', 'automobile', 'véhicule', 'vehicule', 'moteur', 'freins', 'frein', 'pneu', 'pneus', 'vidange', 'mécanicien', 'mecanicien', 'mécano', 'mecano', 'garage', 'embrayage', 'batterie', 'démarre pas', 'demarre pas', 'panne voiture', 'panne auto', 'mécanique', 'mecanique', 'huile', 'plaquettes', 'amortisseur', 'amortisseurs', 'phare', 'phares', 'feu', 'feux', 'pot d\'échappement', 'echappement', 'transmission', 'turbo', 'injection', 'bougies', 'courroie', 'distribution', 'révision', 'revision', 'contrôle technique', 'controle technique', 'voiture cassée', 'voiture en panne'],
      icon: '🔩',
      response: "Pour ta **voiture**, voici les mécaniciens disponibles."
    },
    'Maçonnerie': {
      keywords: ['brique', 'briques', 'béton', 'beton', 'ciment', 'mortier', 'construire', 'construction', 'maçon', 'macon', 'maconnerie', 'maçonnerie', 'fondation', 'fondations', 'chape', 'parpaing', 'parpaings', 'dalle', 'dalles', 'crépi', 'crepi', 'mur porteur', 'casser un mur', 'abattre mur', 'élever mur', 'extension maison', 'agrandissement', 'cloison', 'cloisons', 'placo', 'plaque de plâtre'],
      icon: '🧱',
      response: "Pour des travaux de **maçonnerie**, voici les pros."
    },
    'Menuiserie': {
      keywords: ['bois', 'menuisier', 'menuiserie', 'porte', 'portes', 'fenêtre', 'fenetre', 'fenêtres', 'fenetres', 'placard', 'placards', 'meuble', 'meubles', 'étagère', 'etagere', 'étagères', 'etageres', 'parquet', 'charpente', 'volet', 'volets', 'escalier', 'escaliers', 'cuisine en bois', 'dressing', 'sur mesure', 'bibliothèque', 'bibliotheque', 'monter meuble', 'monter un meuble', 'ikea', 'montage'],
      icon: '🪚',
      response: "Pour du travail du **bois**, voici les menuisiers."
    },
    'Climatisation': {
      keywords: ['climatisation', 'climatiseur', 'clim', 'chauffage', 'chaudière', 'chaudiere', 'radiateur', 'radiateurs', 'froid', 'chaud', 'température', 'temperature', 'ventilation', 'vmc', 'pompe à chaleur', 'pompe a chaleur', 'climatiser', 'split', 'gainable', 'air conditionné', 'air conditionne', 'aération', 'aeration', 'ventilateur', 'plus de chauffage', 'pas de chauffage', 'fait froid', 'fait chaud'],
      icon: '❄️',
      response: "Pour la **climatisation/chauffage**, voici les pros."
    },
    'Transport & Livraison': {
      keywords: ['transport', 'livraison', 'livrer', 'déménagement', 'demenagement', 'déménager', 'demenager', 'camion', 'camionnette', 'colis', 'meuble lourd', 'transporter', 'porter', 'déplacement', 'navette', 'déménageur', 'demenageur', 'cartons', 'carton', 'transporter meuble', 'aide au déménagement', 'changement d\'adresse', 'transport meuble', 'livrer meuble', 'livraison express', 'aller chercher', 'récupérer', 'recuperer', 'fret', 'transport de marchandises'],
      icon: '🚚',
      response: "Pour du **transport ou de la livraison**, voici les pros disponibles."
    },
    'Coiffure': {
      keywords: ['coiffure', 'coiffeur', 'coiffeuse', 'cheveux', 'coupe', 'couper cheveux', 'couleur cheveux', 'mèches', 'meches', 'brushing', 'mariage coiffure', 'coiffer', 'se coiffer', 'salon de coiffure', 'shampoing', 'coloration', 'balayage', 'lissage', 'défrisage', 'defrisage', 'permanente', 'extension cheveux', 'chignon', 'tresse', 'tresses', 'barbe', 'barbier'],
      icon: '✂️',
      response: "Pour la **coiffure**, voici les pros."
    },
    'Esthétique': {
      keywords: ['esthétique', 'esthetique', 'manucure', 'pédicure', 'pedicure', 'maquillage', 'épilation', 'epilation', 'soin visage', 'massage', 'beauté', 'esthéticienne', 'estheticienne', 'ongles', 'vernis ongles', 'pose ongles', 'soin', 'soins', 'gommage', 'masque visage', 'mariage maquillage', 'institut beauté', 'spa', 'visage', 'peau', 'acné'],
      icon: '💄',
      response: "Pour des soins **esthétiques**, voici les pros."
    }
  };
  const greetings = [
    "Salut ! 👋 Je suis ProBot, ton assistant intelligent. Dis-moi ce dont tu as besoin et je trouve le bon pro pour toi.",
    "Tu peux me dire par exemple : *\"J'ai une fuite d'eau\"*, *\"Mon PC bug\"* ou *\"Je dois déménager\"*"
  ];
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
    if (text === '📋 Voir tous les pros') { window.location.href = 'professionals.html'; return; }
    if (text === '🗺️ Voir sur la carte') { window.location.href = 'map.html'; return; }
    document.querySelectorAll('.quick-replies').forEach(el => el.remove());
    document.getElementById('userInput').value = text;
    handleSend(new Event('submit'));
  }
  function handleSend(e) {
    e.preventDefault();
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text) return;
    document.querySelectorAll('.quick-replies').forEach(el => el.remove());
    addMessage(text, true);
    input.value = '';
    showTyping();
    setTimeout(() => processMessage(text), 600 + Math.random() * 500);
  }
  function normalize(text) {
    return text.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s']/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  async function processMessage(userText) {
    hideTyping();
    const normalized = normalize(userText);
    if (normalized.match(/^(salut|bonjour|bonsoir|hello|hi|coucou|hey|yo|ca va|cv|kifash|wesh)/)) {
      addBotMessage("Salut ! 😊 Que puis-je faire pour toi ? Décris-moi ton problème et je te trouverai le bon pro.");
      return;
    }
    if (normalized.match(/^(merci|thanks|thx|cimer|sahit)/)) {
      addBotMessage("Avec plaisir ! 🙌 N'hésite pas si tu as besoin d'autre chose.");
      return;
    }
    let bestMatch = null;
    let bestScore = 0;
    for (const [job, data] of Object.entries(jobKnowledge)) {
      let score = 0;
      for (const keyword of data.keywords) {
        const normalizedKeyword = normalize(keyword);
        if (normalized.includes(normalizedKeyword)) {
          score += normalizedKeyword.length;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = { job, ...data };
      }
    }
    if (bestMatch && bestScore > 0) {
      addBotMessage(`${bestMatch.icon} J'ai analysé ta demande... ${bestMatch.response}`);
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
      addBotMessage("🤔 Hmm, je n'ai pas bien compris. Peux-tu me dire dans quel domaine tu as besoin d'aide ?");
      showQuickReplies(['🔧 Plomberie', '⚡ Électricité', '🧹 Ménage', '🚚 Livraison', '💻 Informatique', '🎨 Peinture']);
    }
  }