import type { Cv } from './types';

export const cvFr: Cv = {
  lang: 'fr',
  url: 'https://dicdaplon.github.io/InteractiveVitae/',
  person: {
    name: 'Chafik Lekouara',
    title: 'Développeur C/C++ — Systèmes embarqués & logiciels innovants',
    location: 'Lyon, France',
    email: 'chafik.lekouara@gmail.com',
    phone: '06 68 00 29 02',
    links: [
      {
        label: 'linkedin.com/in/chafiklekouara',
        href: 'https://www.linkedin.com/in/chafiklekouara',
      },
    ],
    notes: ['Ouvert au télétravail', 'Pas de permis de conduire'],
  },
  summary:
    'Développeur C/C++ expérimenté en systèmes embarqués, traitement du signal, imagerie et 3D, à la recherche de projets ambitieux alliant performance et innovation.',
  experiences: [
    {
      id: 'aiotrust',
      role: 'Développeur firmware C++ embarqué',
      company: 'AIoTrust',
      context: 'Cybersécurité industrielle (OT)',
      period: 'Oct. 2025 – présent',
      summary:
        'Firmware temps réel C++ sur Cortex-M0+ (SAMD21) : acquisition cadencée, prétraitement embarqué, télémétrie MQTT et détection d’anomalies par autoencodeur GRU.',
      details: [
        'Acquisition cadencée et auto-détection des cartes connectées ; télémétrie JSON via MQTT avec resynchronisation après coupure réseau.',
        'Prétraitement embarqué : statistiques glissantes et détection de transitions.',
        'Persistance de la configuration en flash interne : format binaire, CRC, repli sur une configuration par défaut.',
        'Outil de configuration USB : protocole série et interface de paramétrage.',
        'Tests unitaires GTest exécutés en intégration continue.',
        'Conception d’un autoencodeur GRU (Keras/TensorFlow) pour la détection d’anomalies sur séries temporelles.',
      ],
      technologies: [
        'C++',
        'SAMD21 / Cortex-M0+',
        'MQTT',
        'GTest',
        'Intégration continue',
        'Python',
        'TensorFlow',
        'Keras',
        'Arduino',
        'Git',
      ],
      keyTechnologies: ['C++', 'SAMD21 / Cortex-M0+', 'MQTT', 'GTest', 'TensorFlow'],
    },
    {
      id: 'augmenta',
      role: 'Développeur C++ et vision 3D',
      company: 'Augmenta',
      context: 'Nuages de points temps réel pour le spectacle vivant',
      period: '2025 (6 mois)',
      summary:
        'Traitement temps réel de nuages de points en C++ : régulateur adaptatif de filtrage VoxelGrid et moteur de monitoring thread-safe.',
      details: [
        'Régulateur de filtrage VoxelGrid : ajuste automatiquement la taille de voxel pour tenir un nombre de points cible, quelle que soit la densité de la scène.',
        'Moteur de monitoring C++ centralisé et thread-safe (JUCE) : collecte non bloquante, statistiques temps réel sur les flux de points et de clusters.',
        'Choix d’architecture documentés et arbitrés en ADR.',
        'Interfaces 3D web (Babylon.js) reliées au moteur par OSC et WebSockets.',
      ],
      technologies: [
        'C++',
        'PCL',
        'JUCE',
        'Multithreading',
        'OSC',
        'WebSockets',
        'JavaScript',
        'Babylon.js',
        'Vite',
        'Git',
      ],
      keyTechnologies: ['C++', 'PCL', 'JUCE', 'Multithreading', 'OSC'],
    },
    {
      id: 'mylight',
      role: 'Développeur firmware C++ embarqué et IoT',
      company: 'MyLight Systems',
      context: 'Énergie et IoT',
      period: '2022 – 2025 (2 ans 9 mois)',
      summary:
        'Firmware C++17 de pilotage et de mesure d’installations électriques (solaire, chauffe-eau, borne de recharge), connecté à Azure IoT.',
      details: [
        'Firmware C++17 pour le pilotage et la mesure d’équipements électriques : production solaire, chauffe-eau, borne de recharge.',
        'Échanges avec le backend via Azure IoT : messages JSON, Device Twin.',
        'Optimisation de l’usage de la production solaire.',
        'Outils de diagnostic et scripts Shell sous OpenWrt (Linux embarqué).',
        'Tests unitaires GTest.',
      ],
      technologies: ['C++', 'OpenWrt', 'Linux embarqué', 'Azure IoT', 'GTest', 'Bash', 'Git'],
      keyTechnologies: ['C++', 'OpenWrt', 'Azure IoT', 'GTest', 'Bash'],
    },
    {
      id: 'technodigit',
      role: 'Développeur C++, traitement de nuages de points',
      company: 'Technodigit',
      context: 'Logiciel 3D, ingénierie et métrologie',
      period: '2022 (4 mois)',
      summary:
        'Opérations sur nuages de points LiDAR et outils d’interaction 3D dans un logiciel de métrologie (C++17, Qt).',
      details: [
        'Développement d’opérations sur des nuages de points LiDAR.',
        'Outils de visualisation et d’interaction dans un logiciel 3D ; interface utilisateur Qt.',
        'Équipe Scrum, documentation Doxygen.',
      ],
      technologies: ['C++', 'Qt', 'Nuages de points', 'Visual Studio', 'Scrum', 'Doxygen', 'Git'],
      keyTechnologies: ['C++', 'Qt', 'Nuages de points'],
    },
    {
      id: 'laris',
      role: 'Développeur, vision par ordinateur 3D',
      company: 'LARIS',
      context: 'Reconstruction 3D par imagerie multi-vues et IA',
      period: '2020 – 2022 (1 an 6 mois)',
      summary:
        'Reconstruction 3D par Structure from Motion et réseaux de neurones pour restituer les structures occultées par le feuillage.',
      details: [
        'Chaîne de capture d’images RGB et prétraitement : segmentation, débruitage, normalisation.',
        'Reconstruction 3D par Structure from Motion à partir de vues 2D multiples.',
        'Modèles Keras/TensorFlow pour reconstituer les structures occultées par le feuillage.',
      ],
      technologies: [
        'Python',
        'OpenCV',
        'Structure from Motion',
        'TensorFlow',
        'Keras',
        'Blender',
        'Unity',
        'L-System',
      ],
      keyTechnologies: ['Python', 'OpenCV', 'Structure from Motion', 'TensorFlow'],
    },
  ],
  projects: [
    {
      id: 'ecole-du-loup',
      name: 'École du Loup(s)',
      context: 'Cours de musique en ligne avec outils audio interactifs',
      period: '2026',
      url: 'https://ecoleduloup.fr',
      summary:
        'Site d’enseignement musical conçu et développé seul : filtres biquad, détection de hauteur en temps réel et transcription audio dans le navigateur.',
      details: [
        'Exercices de mixage : filtres biquad écrits à la main, réponse en fréquence, modèle gain/bruit/écrêtage corrigé automatiquement et testable hors navigateur.',
        'Accordeur et vérification d’accords au micro : détection de hauteur CREPE et transcription Basic Pitch (TensorFlow.js), un seul contexte audio partagé.',
        'Soliste génératif (ImprovRNN) isolé dans un Web Worker pour ne pas bloquer le son.',
        'Comptes et progression (Firebase Auth/Firestore), règles de sécurité testées sur émulateur.',
        'Décisions d’architecture écrites, revue d’architecture vérifiée par exécution.',
      ],
      technologies: [
        'TypeScript',
        'Web Audio',
        'Traitement du signal',
        'TensorFlow',
        'Web Workers',
        'Tone.js',
        'Next.js',
        'Firebase',
      ],
      keyTechnologies: ['TypeScript', 'Web Audio', 'Traitement du signal', 'TensorFlow'],
    },
    {
      id: 'lolouplive',
      name: 'LoloupLive',
      context: 'Application web temps réel pour les jams du collectif',
      period: '2025',
      url: 'https://dicdaplon.github.io/LoloupLive/',
      repo: 'https://github.com/Dicdaplon/LoloupLive',
      summary:
        'Application temps réel utilisée en session : paroles et grilles d’accords, chat projeté, capture photo ; logique testée et design system vérifié par test.',
      details: [
        'Synchronisation temps réel (Firebase Realtime Database), traitement d’images côté serveur (Cloud Functions).',
        'Logique extraite des composants et testée (Vitest), dont un parseur de notation d’accords.',
        'Design system piloté par les contraintes de la scène (salle sombre, cibles tactiles), documenté et vérifié par test.',
      ],
      technologies: ['TypeScript', 'React', 'Firebase', 'Vitest', 'Vite'],
      keyTechnologies: ['TypeScript', 'React', 'Firebase', 'Vitest'],
    },
  ],
  technicalSkills: [
    { label: 'Langages', value: 'C++17 (design patterns, RAII), C, Python, JavaScript' },
    {
      label: 'Signal, image et vision 3D',
      value:
        'OpenCV, PCL, nuages de points, Structure from Motion, JUCE, Keras, TensorFlow, conception de modèles',
    },
    {
      label: 'Systèmes embarqués',
      value: 'SAMD21, ARM Cortex-M0+, Arduino, MQTT, I2C, OSC, temps réel',
    },
    {
      label: 'Systèmes et outils',
      value:
        'Linux, OpenWrt, Azure IoT, Git, GTest, intégration continue, Qt, Vite, Babylon.js, Scrum, Doxygen, UML',
    },
    {
      label: 'Outils 3D et création',
      value: 'Blender, Unity, SolidWorks, impression 3D, Adobe Premiere',
    },
    { label: 'Développement assisté par IA', value: 'Claude Code, workflows agentiques' },
  ],
  softSkills: [
    {
      label: 'Pédagogie et transmission',
      value:
        'Enseignement des mathématiques, de la physique et de la musique ; soutien scolaire bénévole',
    },
    {
      label: 'Gestion de projet et d’événements',
      value:
        'Création et gestion d’un collectif musical à Lyon depuis 3 ans (événementiel, coordination, dimension sociale)',
    },
    {
      label: 'Méthode et qualité',
      value:
        'Rédaction d’ADR et documentation technique, méthodologie Agile (Scrum), tests et intégration continue',
    },
    {
      label: 'Création audiovisuelle et image',
      value:
        'Traitement du son, montage vidéo (Adobe Premiere), photographie événementielle ; créativité et autonomie',
    },
  ],
  sectors: [
    'Cybersécurité industrielle (OT)',
    'Énergie et IoT',
    'Spectacle vivant et événementiel',
    'Ingénierie et métrologie 3D',
    'Vision par ordinateur et imagerie',
    'Formation et enseignement',
    'Audiovisuel et culturel',
  ],
  languages: [
    { name: 'Français', level: 'langue maternelle' },
    { name: 'Anglais', level: 'professionnel' },
  ],
  education: [
    {
      degree: 'Master EEA',
      field: 'Électronique, Signal, Audio, Vidéo',
      school: 'Université Toulouse III Paul Sabatier',
      period: '2018 – 2020',
    },
    {
      degree: 'Licence EEA',
      field: 'Électronique',
      school: 'Université Lyon 1 Claude Bernard',
      period: '2015 – 2018',
    },
  ],
  ui: {
    summary: 'Profil',
    experience: 'Expérience professionnelle',
    projects: 'Réalisations personnelles',
    technicalSkills: 'Compétences techniques',
    softSkills: 'Compétences transversales',
    sectors: 'Secteurs et domaines',
    languages: 'Langues',
    education: 'Formation',
    technologies: 'Technologies',
    details: 'Détails',
    moreTechnologies: 'Autres technologies',
    expandAll: 'Tout déplier',
    collapseAll: 'Tout replier',
    print: 'Imprimer / PDF',
    themeToggle: 'Changer de thème',
    filterHint: 'Choisissez une technologie pour mettre en évidence les expériences associées.',
    filterResult: '{count} élément(s) avec {tech}',
    clearFilter: 'Tout afficher',
    visitSite: 'Voir le site',
    sourceCode: 'Code source',
    onlineVersion: 'Version interactive et détails :',
  },
};
