// =====================================================
//  TRANSLATIONS — EN / FR
// =====================================================
const translations = {
  en: {
    // Sidebar / Nav
    "sidebar.label":   "Employee Training",
    "nav.intro":       "Introduction",
    "nav.social":      "Social Engineering",
    "nav.wireless":    "Wireless Security",
    "nav.account":     "Account Security",
    "nav.software":    "Software Security",
    "nav.hybrid":      "Hybrid Work",
    "nav.data":        "Data Security",
    "nav.checklist":   "Checklist",
    "nav.quiz":        "Quiz",
    "btn.theme":       "Theme",

    // Hero
    "hero.badge":    "Security First",
    "hero.title":    "Cybersecurity Awareness for Employees",
    "hero.subtitle": "Protect your data, your identity, and your organization from modern cyber threats. Cybersecurity starts with you.",
    "hero.meta1":    "Module 1 — Core Fundamentals",
    "hero.meta2":    "HR Security Training",
    "hero.cta1":     "View Checklist",
    "hero.cta2":     "Take the Quiz",

    // Introduction
    "intro.p1":      "Cybersecurity is a shared responsibility across the entire organization. Every employee, regardless of their role, interacts with systems, data, and networks that can be targeted by attackers.",
    "intro.p2":      "Simple daily actions — such as opening an email, clicking a link, connecting to Wi-Fi, or installing software — can create vulnerabilities if not handled carefully.",
    "intro.callout": "Cybercriminals often exploit human behavior rather than technical weaknesses. Awareness is your best defense.",

    // Social Engineering
    "social.lead":        "Attackers manipulate people into revealing confidential information or taking unsafe actions — without any hacking required.",
    "social.phish.title": "Phishing",
    "social.phish.desc":  "Fake emails that look real, designed to steal your login or data. Always check the sender's actual address.",
    "social.vish.title":  "Vishing",
    "social.vish.desc":   "Attackers call pretending to be IT support or your bank. Never share passwords over the phone.",
    "social.smish.title": "Smishing",
    "social.smish.desc":  "Phishing via SMS text messages. Treat all unexpected links in texts with suspicion.",
    "social.share.title": "Oversharing Online",
    "social.share.desc":  "Posting work details on social media gives attackers free intelligence. Keep professional info private.",
    "social.risk1": "Identity theft",
    "social.risk2": "Unauthorized access",
    "social.risk3": "Financial loss",
    "social.risk4": "Data breach",
    "social.bp1":   "Verify the sender",
    "social.bp2":   "Do not click suspicious links",
    "social.bp3":   "Never share passwords",
    "social.bp4":   "Be suspicious of urgency",

    // Labels
    "label.types":         "Common Attack Types",
    "label.risks":         "Risks",
    "label.bestpractices": "Best Practices",

    // Wireless
    "wireless.lead":        "Wireless networks, especially public ones, are often unsecured and can be exploited to intercept your data.",
    "wireless.warning":     "Never access sensitive company data or banking apps on public Wi-Fi without a VPN. Attackers may create fake hotspots with familiar names.",
    "wireless.home.title":  "Home Wi-Fi Safety",
    "wireless.home.l1":     "Change the default router password",
    "wireless.home.l2":     "Use WPA2 or WPA3 encryption",
    "wireless.home.l3":     "Keep router firmware up to date",
    "wireless.home.l4":     "Disable auto-connect to unknown networks",
    "wireless.vpn.title":   "Using a VPN",
    "wireless.vpn.l1":      "Use the corporate VPN on public networks",
    "wireless.vpn.l2":      "Connect before accessing company resources",
    "wireless.vpn.l3":      "Keep VPN software up to date",

    // Account
    "account.lead":       "User accounts are one of the most targeted entry points. A compromised account can give an attacker access to everything you can access.",
    "account.pass.title": "Strong Passwords",
    "account.pass.desc":  "Use passphrases like \"BlueHorse!RunsFast\". Avoid short or obvious passwords. Never reuse passwords across sites.",
    "account.pass.l1":    "Minimum 12 characters",
    "account.pass.l2":    "Mix letters, numbers, symbols",
    "account.pass.l3":    "Use a password manager",
    "account.mfa.title":  "Multi-Factor Authentication (MFA)",
    "account.mfa.desc":   "Even if a password is stolen, MFA prevents attackers from logging in. It requires a second verification — like a code from your phone.",
    "account.mfa.tip":    "Enable MFA on all work accounts, email, and cloud apps.",
    "account.breach":     "Data breaches expose millions of passwords. Check haveibeenpwned.com to see if your email has been leaked and change affected passwords immediately.",

    // Software
    "software.lead":           "Software vulnerabilities are one of the most common ways attackers gain access to systems. Keeping software updated is one of the simplest and most effective defenses.",
    "software.updates.title":  "Updates & Patching",
    "software.updates.desc":   "Updates fix known security holes (CVEs). Delaying them leaves the door open for attackers. Enable automatic updates whenever possible.",
    "software.malware.title":  "Malware & Ransomware",
    "software.malware.desc":   "Malware can steal, delete, or encrypt your files. Ransomware locks you out until you pay. Never download attachments or software from unknown sources.",
    "software.lifecycle.title":"How a Cyber Attack Works",
    "software.step1.num":      "Step 1",
    "software.step1.title":    "Initial Access",
    "software.step1.desc":     "Via phishing email or known vulnerability",
    "software.step2.num":      "Step 2",
    "software.step2.title":    "Execution",
    "software.step2.desc":     "Malware runs on the system",
    "software.step3.num":      "Step 3",
    "software.step3.title":    "Persistence",
    "software.step3.desc":     "Attacker stays hidden in the system",
    "software.step4.num":      "Step 4",
    "software.step4.title":    "Exfiltration",
    "software.step4.desc":     "Data is stolen or systems are damaged",

    // Hybrid
    "hybrid.lead":             "Working from cafes, airports, or home increases exposure to risks. Treat your device and its data as if they are the company's most valuable asset — because they are.",
    "hybrid.physical.title":   "Physical Security",
    "hybrid.physical.desc":    "Lock your screen when stepping away (Win+L / Cmd+Ctrl+Q). Never leave a device unattended in public, even for a moment.",
    "hybrid.device.title":     "Device Protection",
    "hybrid.device.desc":      "Enable full-disk encryption. Keep antivirus active. Report any lost or stolen device to IT immediately — every minute counts.",
    "hybrid.mobile.title":     "Mobile Threats",
    "hybrid.mobile.desc":      "Only install apps from official app stores. Be alert for smishing (fraudulent SMS) targeting your work phone number.",
    "hybrid.scenario.title":   "Scenario: Stolen Laptop",
    "hybrid.scenario.desc":    "An employee leaves their laptop in a café for 5 minutes. It is stolen. If the disk is not encrypted and the screen is unlocked, an attacker has immediate access to all company systems, emails, and files. Encryption + screen lock = time to respond.",

    // Data
    "data.lead":          "Data is one of the most valuable and most targeted assets of any organization. Protecting it is both a legal obligation and an ethical responsibility.",
    "data.ip.title":      "Intellectual Property",
    "data.ip.desc":       "Source code, product designs, trade secrets. Never share externally without authorization.",
    "data.customer.title":"Customer Data",
    "data.customer.desc": "Personal & financial info protected by GDPR and other laws. A breach can result in major fines and loss of trust.",
    "data.employee.title":"Employee Data",
    "data.employee.desc": "HR records, health info, salaries. Treat this with the highest level of confidentiality.",
    "data.risk1": "Data leaks",
    "data.risk2": "Unauthorized sharing",
    "data.risk3": "Compliance violations (GDPR)",
    "data.bp1":   "Share only when necessary",
    "data.bp2":   "Follow company policies",
    "data.bp3":   "Store data in approved systems",

    // Checklist
    "checklist.lead": "Click each item to confirm you follow this practice. Build good habits one step at a time.",
    "checklist.done": "completed",
    "checklist.i1": "I use unique, strong passwords for every account.",
    "checklist.i2": "I have MFA enabled on all work accounts.",
    "checklist.i3": "I avoid clicking suspicious links or attachments.",
    "checklist.i4": "I keep all my software and systems up to date.",
    "checklist.i5": "I use a VPN on public Wi-Fi networks.",
    "checklist.i6": "I lock my screen when leaving my device unattended.",
    "checklist.i7": "I share sensitive data only through approved channels.",

    // Quiz
    "quiz.lead": "Answer the following questions to test your understanding. Select the best answer for each question.",
    "quiz.btn.next":    "Next Question",
    "quiz.btn.restart": "Restart Quiz",
    "quiz.result.title":"Quiz Complete!",
    "quiz.result.score":"Your Score",
    "quiz.result.excellent":"Excellent!",
    "quiz.result.good":   "Good job!",
    "quiz.result.review": "Keep practicing",

    // Footer
    "footer.msg":    "You are part of the security team. Every action counts.",
    "footer.policy": "Security Policy",
    "footer.report": "Report Incident",
  },

  fr: {
    // Sidebar / Nav
    "sidebar.label":   "Formation Employés",
    "nav.intro":       "Introduction",
    "nav.social":      "Ingénierie Sociale",
    "nav.wireless":    "Sécurité Sans Fil",
    "nav.account":     "Sécurité des Comptes",
    "nav.software":    "Sécurité Logicielle",
    "nav.hybrid":      "Travail Hybride",
    "nav.data":        "Sécurité des Données",
    "nav.checklist":   "Checklist",
    "nav.quiz":        "Quiz",
    "btn.theme":       "Thème",

    // Hero
    "hero.badge":    "La Sécurité Avant Tout",
    "hero.title":    "Sensibilisation à la Cybersécurité",
    "hero.subtitle": "Protégez vos données, votre identité et votre entreprise contre les menaces numériques modernes. La cybersécurité commence par vous.",
    "hero.meta1":    "Module 1 — Fondamentaux",
    "hero.meta2":    "Formation Sécurité RH",
    "hero.cta1":     "Voir la Checklist",
    "hero.cta2":     "Faire le Quiz",

    // Introduction
    "intro.p1":      "La cybersécurité est une responsabilité partagée par toute l'organisation. Chaque employé, quel que soit son rôle, interagit avec des systèmes, des données et des réseaux qui peuvent être ciblés par des attaquants.",
    "intro.p2":      "Des actions simples du quotidien — ouvrir un email, cliquer sur un lien, se connecter à un Wi-Fi — peuvent créer des vulnérabilités si elles ne sont pas maîtrisées.",
    "intro.callout": "Les cybercriminels exploitent souvent le comportement humain plutôt que les failles techniques. La sensibilisation est votre meilleure défense.",

    // Social Engineering
    "social.lead":        "Les attaquants manipulent les individus pour qu'ils divulguent des informations confidentielles — sans aucun piratage technique.",
    "social.phish.title": "Hameçonnage (Phishing)",
    "social.phish.desc":  "Faux emails qui semblent légitimes, conçus pour voler vos identifiants. Vérifiez toujours l'adresse réelle de l'expéditeur.",
    "social.vish.title":  "Hameçonnage Vocal (Vishing)",
    "social.vish.desc":   "Les attaquants appellent en se faisant passer pour le support IT ou votre banque. Ne partagez jamais de mots de passe au téléphone.",
    "social.smish.title": "Hameçonnage par SMS (Smishing)",
    "social.smish.desc":  "Tentatives de phishing via des SMS. Traitez tout lien inattendu dans un message avec méfiance.",
    "social.share.title": "Surpartage en Ligne",
    "social.share.desc":  "Publier des détails professionnels sur les réseaux sociaux donne des renseignements gratuits aux attaquants. Gardez les infos professionnelles privées.",
    "social.risk1": "Vol d'identité",
    "social.risk2": "Accès non autorisé",
    "social.risk3": "Perte financière",
    "social.risk4": "Fuite de données",
    "social.bp1":   "Vérifier l'expéditeur",
    "social.bp2":   "Ne pas cliquer sur des liens suspects",
    "social.bp3":   "Ne jamais partager ses mots de passe",
    "social.bp4":   "Se méfier de l'urgence artificielle",

    // Labels
    "label.types":         "Types d'Attaques Courants",
    "label.risks":         "Risques",
    "label.bestpractices": "Bonnes Pratiques",

    // Wireless
    "wireless.lead":        "Les réseaux sans fil, notamment publics, sont souvent non sécurisés et peuvent être exploités pour intercepter vos données.",
    "wireless.warning":     "Ne consultez jamais de données sensibles ou d'applications bancaires sur un Wi-Fi public sans VPN. Des attaquants peuvent créer de faux points d'accès.",
    "wireless.home.title":  "Sécurité Wi-Fi Domicile",
    "wireless.home.l1":     "Changer le mot de passe par défaut du routeur",
    "wireless.home.l2":     "Utiliser le chiffrement WPA2 ou WPA3",
    "wireless.home.l3":     "Maintenir le firmware à jour",
    "wireless.home.l4":     "Désactiver la connexion automatique aux réseaux inconnus",
    "wireless.vpn.title":   "Utilisation d'un VPN",
    "wireless.vpn.l1":      "Utiliser le VPN d'entreprise sur les réseaux publics",
    "wireless.vpn.l2":      "Se connecter avant d'accéder aux ressources de l'entreprise",
    "wireless.vpn.l3":      "Maintenir le logiciel VPN à jour",

    // Account
    "account.lead":       "Les comptes utilisateurs sont l'une des cibles principales. Un compte compromis peut donner à un attaquant accès à tout ce à quoi vous avez accès.",
    "account.pass.title": "Mots de Passe Forts",
    "account.pass.desc":  "Utilisez des phrases secrètes comme \"ChevalBleu!CourteVite\". Évitez les mots de passe courts ou évidents. Ne réutilisez jamais un mot de passe.",
    "account.pass.l1":    "Minimum 12 caractères",
    "account.pass.l2":    "Mélanger lettres, chiffres, symboles",
    "account.pass.l3":    "Utiliser un gestionnaire de mots de passe",
    "account.mfa.title":  "Authentification Multifacteur (AMF/MFA)",
    "account.mfa.desc":   "Même si un mot de passe est volé, le MFA empêche les attaquants de se connecter. Il exige une deuxième vérification, comme un code sur votre téléphone.",
    "account.mfa.tip":    "Activez le MFA sur tous les comptes professionnels, emails et applications cloud.",
    "account.breach":     "Les fuites de données exposent des millions de mots de passe. Vérifiez sur haveibeenpwned.com si votre email a été compromis.",

    // Software
    "software.lead":           "Les vulnérabilités logicielles sont l'un des vecteurs d'attaque les plus courants. Maintenir les logiciels à jour est la défense la plus simple et la plus efficace.",
    "software.updates.title":  "Mises à Jour & Correctifs",
    "software.updates.desc":   "Les mises à jour corrigent les failles connues (CVE). Les retarder laisse la porte ouverte aux attaquants. Activez les mises à jour automatiques.",
    "software.malware.title":  "Malwares & Ransomwares",
    "software.malware.desc":   "Les malwares peuvent voler, supprimer ou chiffrer vos fichiers. Un ransomware vous bloque l'accès jusqu'au paiement. Ne téléchargez jamais depuis des sources inconnues.",
    "software.lifecycle.title":"Comment se Déroule une Cyberattaque",
    "software.step1.num":      "Étape 1",
    "software.step1.title":    "Accès Initial",
    "software.step1.desc":     "Via un email de phishing ou une vulnérabilité connue",
    "software.step2.num":      "Étape 2",
    "software.step2.title":    "Exécution",
    "software.step2.desc":     "Le malware s'exécute sur le système",
    "software.step3.num":      "Étape 3",
    "software.step3.title":    "Persistance",
    "software.step3.desc":     "L'attaquant reste caché dans le système",
    "software.step4.num":      "Étape 4",
    "software.step4.title":    "Exfiltration",
    "software.step4.desc":     "Les données sont volées ou les systèmes sont endommagés",

    // Hybrid
    "hybrid.lead":             "Travailler dans des cafés, aéroports ou à domicile augmente l'exposition aux risques. Traitez votre appareil comme l'actif le plus précieux de l'entreprise — car c'en est un.",
    "hybrid.physical.title":   "Sécurité Physique",
    "hybrid.physical.desc":    "Verrouillez votre écran à chaque absence (Win+L / Cmd+Ctrl+Q). Ne laissez jamais un appareil sans surveillance en public.",
    "hybrid.device.title":     "Protection des Appareils",
    "hybrid.device.desc":      "Activez le chiffrement du disque. Maintenez l'antivirus actif. Signalez immédiatement tout appareil perdu ou volé au service IT.",
    "hybrid.mobile.title":     "Menaces Mobiles",
    "hybrid.mobile.desc":      "N'installez que des applications depuis les boutiques officielles. Soyez vigilant face au smishing (SMS frauduleux) ciblant votre téléphone professionnel.",
    "hybrid.scenario.title":   "Scénario : Ordinateur Portable Volé",
    "hybrid.scenario.desc":    "Un employé laisse son ordinateur portable dans un café 5 minutes. Il est volé. Si le disque n'est pas chiffré et l'écran déverrouillé, l'attaquant a accès immédiat à tout. Chiffrement + verrouillage = temps de réaction.",

    // Data
    "data.lead":          "Les données sont l'un des actifs les plus précieux et les plus ciblés. Les protéger est une obligation légale et une responsabilité éthique.",
    "data.ip.title":      "Propriété Intellectuelle",
    "data.ip.desc":       "Code source, conceptions de produits, secrets commerciaux. Ne jamais partager en dehors sans autorisation.",
    "data.customer.title":"Données Clients",
    "data.customer.desc": "Informations personnelles et financières protégées par le RGPD. Une fuite peut entraîner de lourdes amendes et une perte de confiance.",
    "data.employee.title":"Données Employés",
    "data.employee.desc": "Dossiers RH, informations de santé, salaires. À traiter avec le plus haut niveau de confidentialité.",
    "data.risk1": "Fuites de données",
    "data.risk2": "Partage non autorisé",
    "data.risk3": "Violations de conformité (RGPD)",
    "data.bp1":   "Partager uniquement si nécessaire",
    "data.bp2":   "Respecter les politiques de l'entreprise",
    "data.bp3":   "Stocker dans des systèmes approuvés",

    // Checklist
    "checklist.lead": "Cochez chaque élément pour confirmer que vous appliquez cette bonne pratique.",
    "checklist.done": "terminés",
    "checklist.i1": "J'utilise des mots de passe uniques et forts pour chaque compte.",
    "checklist.i2": "J'ai activé le MFA sur tous mes comptes professionnels.",
    "checklist.i3": "J'évite de cliquer sur des liens ou pièces jointes suspects.",
    "checklist.i4": "Je maintiens tous mes logiciels et systèmes à jour.",
    "checklist.i5": "J'utilise un VPN sur les réseaux Wi-Fi publics.",
    "checklist.i6": "Je verrouille mon écran dès que je quitte mon poste.",
    "checklist.i7": "Je partage les données sensibles uniquement via des canaux approuvés.",

    // Quiz
    "quiz.lead": "Répondez aux questions suivantes pour tester vos connaissances. Sélectionnez la meilleure réponse.",
    "quiz.btn.next":    "Question Suivante",
    "quiz.btn.restart": "Recommencer le Quiz",
    "quiz.result.title":"Quiz Terminé !",
    "quiz.result.score":"Votre Score",
    "quiz.result.excellent":"Excellent !",
    "quiz.result.good":   "Bien joué !",
    "quiz.result.review": "Continuez à apprendre",

    // Footer
    "footer.msg":    "Vous faites partie de l'équipe de sécurité. Chaque action compte.",
    "footer.policy": "Politique de Sécurité",
    "footer.report": "Signaler un Incident",
  }
};

// =====================================================
//  QUIZ DATA
// =====================================================
const quizData = {
  en: [
    {
      q: "What is the main goal of a phishing email?",
      options: ["Improve security awareness", "Steal sensitive information or credentials", "Update your software"],
      correct: 1,
      explanation: "Phishing emails are crafted to trick users into giving up passwords, credit card numbers, or other sensitive data."
    },
    {
      q: "What is the safest way to handle public Wi-Fi?",
      options: ["Access your bank account normally", "Use a VPN or avoid sensitive tasks entirely", "Share your hotspot password"],
      correct: 1,
      explanation: "A VPN encrypts your traffic, making it much harder for attackers to intercept on public networks."
    },
    {
      q: "Why is Multi-Factor Authentication (MFA) important?",
      options: ["It completely replaces the need for passwords", "It adds a second layer of security even if your password is stolen", "It makes login faster"],
      correct: 1,
      explanation: "MFA means an attacker with your password still cannot log in without also having your second factor (e.g., your phone)."
    },
    {
      q: "You receive an unexpected link in an email. What should you do?",
      options: ["Click it immediately to check what it is", "Verify with the sender via a separate channel before clicking", "Forward it to colleagues"],
      correct: 1,
      explanation: "Always verify unexpected links out-of-band (call, Slack, etc.) before clicking — even if the sender appears to be someone you know."
    },
    {
      q: "What is ransomware?",
      options: ["A type of firewall that protects your system", "Malware that encrypts your files and demands payment to restore access", "A tool to safely back up your data"],
      correct: 1,
      explanation: "Ransomware locks your files until you pay the attacker. Regular backups and keeping software updated are the best defenses."
    }
  ],
  fr: [
    {
      q: "Quel est l'objectif principal d'un email de phishing ?",
      options: ["Améliorer la sensibilisation à la sécurité", "Voler des informations sensibles ou des identifiants", "Mettre à jour vos logiciels"],
      correct: 1,
      explanation: "Les emails de phishing sont conçus pour tromper les utilisateurs et leur soutirer mots de passe et données sensibles."
    },
    {
      q: "Quelle est la manière la plus sûre d'utiliser un Wi-Fi public ?",
      options: ["Accéder normalement à votre compte bancaire", "Utiliser un VPN ou éviter toute tâche sensible", "Partager le mot de passe de votre point d'accès"],
      correct: 1,
      explanation: "Un VPN chiffre votre trafic, rendant l'interception beaucoup plus difficile pour les attaquants sur les réseaux publics."
    },
    {
      q: "Pourquoi le MFA (authentification multifacteur) est-il important ?",
      options: ["Il remplace entièrement les mots de passe", "Il ajoute une couche supplémentaire même si votre mot de passe est volé", "Il accélère la connexion"],
      correct: 1,
      explanation: "Avec le MFA, un attaquant qui a votre mot de passe ne peut toujours pas se connecter sans votre deuxième facteur (ex : votre téléphone)."
    },
    {
      q: "Vous recevez un lien inattendu par email. Que faites-vous ?",
      options: ["Cliquer immédiatement pour vérifier", "Contacter l'expéditeur par un autre moyen avant de cliquer", "Le transférer à des collègues"],
      correct: 1,
      explanation: "Vérifiez toujours les liens inattendus hors canal (appel, Slack) avant de cliquer, même si l'expéditeur semble familier."
    },
    {
      q: "Qu'est-ce qu'un ransomware ?",
      options: ["Un pare-feu qui protège votre système", "Un malware qui chiffre vos fichiers et demande une rançon", "Un outil de sauvegarde sécurisé"],
      correct: 1,
      explanation: "Un ransomware bloque l'accès à vos fichiers jusqu'au paiement. Sauvegardes régulières et mises à jour sont les meilleures défenses."
    }
  ]
};

// =====================================================
//  STATE
// =====================================================
let lang  = localStorage.getItem('ca_lang')  || 'en';
let theme = localStorage.getItem('ca_theme') || 'dark';
let currentQ = 0;
let score    = 0;

// =====================================================
//  INIT
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(theme);
  applyLang(lang);
  initChecklist();
  renderQuiz();
  initScrollSpy();
  initAnimations();
  initMobileMenu();

  document.getElementById('lang-toggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'fr' : 'en';
    localStorage.setItem('ca_lang', lang);
    applyLang(lang);
    renderQuiz(); // re-render quiz in new lang
  });

  document.getElementById('theme-toggle').addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('ca_theme', theme);
    applyTheme(theme);
  });
});

// =====================================================
//  THEME
// =====================================================
function applyTheme(t) {
  const body = document.body;
  const icon = document.querySelector('.theme-icon');
  if (t === 'dark') {
    body.classList.add('dark-mode');
    if (icon) { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
  } else {
    body.classList.remove('dark-mode');
    if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
  }
}

// =====================================================
//  LANGUAGE
// =====================================================
function applyLang(l) {
  document.getElementById('current-lang').textContent = l.toUpperCase();
  const dict = translations[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
}

// =====================================================
//  CHECKLIST
// =====================================================
function initChecklist() {
  const items = document.querySelectorAll('.check-item');
  const bar   = document.getElementById('progress-bar');
  const count = document.getElementById('progress-count');
  const total = items.length;
  let done = 0;

  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      done = document.querySelectorAll('.check-item.checked').length;
      count.textContent = done;
      bar.style.width = ((done / total) * 100) + '%';
    });
  });
}

// =====================================================
//  QUIZ
// =====================================================
function renderQuiz() {
  currentQ = 0; score = 0;
  showQuestion();
}

function showQuestion() {
  const container = document.getElementById('quiz-container');
  const dict = translations[lang];
  const questions = quizData[lang];

  if (currentQ >= questions.length) {
    const pct = Math.round((score / questions.length) * 100);
    const label = pct >= 80 ? dict['quiz.result.excellent'] : pct >= 50 ? dict['quiz.result.good'] : dict['quiz.result.review'];
    container.innerHTML = `
      <div class="quiz-result">
        <h3>${dict['quiz.result.title']}</h3>
        <div class="score-circle">${score}/${questions.length}</div>
        <p>${label} - ${dict['quiz.result.score']}: ${pct}%</p>
        <button class="btn-next" style="display:inline-block; margin-top:1.5rem" onclick="renderQuiz()">
          ${dict['quiz.btn.restart']}
        </button>
      </div>`;
    return;
  }

  const q = questions[currentQ];
  const optionsHTML = q.options.map((opt, i) =>
    `<button class="option-btn" data-index="${i}">${opt}</button>`
  ).join('');

  container.innerHTML = `
    <div class="quiz-header">Question ${currentQ + 1} / ${questions.length}</div>
    <div class="question-text">${q.q}</div>
    <div class="options-grid">${optionsHTML}</div>
    <div class="quiz-feedback" id="quiz-feedback"></div>
    <button class="btn-next" id="btn-next">${dict['quiz.btn.next']}</button>
  `;

  const optBtns = container.querySelectorAll('.option-btn');
  const feedback = document.getElementById('quiz-feedback');
  const nextBtn  = document.getElementById('btn-next');

  optBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      optBtns.forEach(b => b.disabled = true);
      const chosen = parseInt(btn.getAttribute('data-index'));

      if (chosen === q.correct) {
        btn.classList.add('correct');
        score++;
        feedback.textContent = 'Correct: ' + q.explanation;
        feedback.className = 'quiz-feedback correct-fb show';
      } else {
        btn.classList.add('incorrect');
        optBtns[q.correct].classList.add('correct');
        feedback.textContent = 'Incorrect: ' + q.explanation;
        feedback.className = 'quiz-feedback incorrect-fb show';
      }

      nextBtn.style.display = 'inline-block';
    });
  });

  nextBtn.addEventListener('click', () => { currentQ++; showQuestion(); });
}

// =====================================================
//  SCROLL SPY
// =====================================================
function initScrollSpy() {
  const sections = document.querySelectorAll('.section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
}

// =====================================================
//  FADE-IN ANIMATIONS
// =====================================================
function initAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
}

// =====================================================
//  MOBILE MENU (for sidebar on small screens)
// =====================================================
function initMobileMenu() {
  const fab     = document.getElementById('mobile-menu-btn');
  const navList = document.querySelector('.nav-links');
  const icon    = fab.querySelector('i');
  const navItems = document.querySelectorAll('.nav-item');

  fab.addEventListener('click', () => {
    navList.classList.toggle('show-mobile');
    const open = navList.classList.contains('show-mobile');
    icon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navList.classList.remove('show-mobile');
        icon.className = 'fa-solid fa-bars';
      }
    });
  });
}
