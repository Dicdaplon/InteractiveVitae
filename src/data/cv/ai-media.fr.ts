import type { Cv } from '../types';

/**
 * Public default variant (AI, audio, image), deployed to GitHub Pages.
 * Standalone on purpose: importing another variant would ship its text in
 * the public bundle.
 */
const cv: Cv = {
  lang: 'fr',
  person: {
    name: 'Chafik Lekouara',
    title: 'Ingénieur logiciel C++ — ML, audio et vision 3D',
    location: 'Lyon, France',
    email: 'chafik.lekouara@gmail.com',
    links: [
      {
        label: 'github.com/Dicdaplon',
        href: 'https://github.com/Dicdaplon',
      },
      {
        label: 'linkedin.com/in/chafiklekouara',
        href: 'https://www.linkedin.com/in/chafiklekouara',
      },
    ],
    notes: ['Ouvert aux postes en télétravail complet'],
  },
  summary:
    'Ingénieur logiciel (C++, Python) depuis 2020, entre machine learning, signal et 3D : détection d’anomalies sur l’appareil (autoencodeur GRU compact, TFLite, STM32/i.MX8), SDK d’analyse audio temps réel, nuages de points LiDAR, segmentation 3D par IA. Master Électronique, Signal, Audio, Vidéo.',
  experiences: [
    {
      id: 'aiotrust',
      role: 'Ingénieur systèmes embarqués',
      company: 'AIoTrust',
      context: 'Cybersécurité industrielle (OT)',
      period: '10/2025 – présent',
      summary:
        'ML embarqué : autoencodeur GRU compact de détection d’anomalies, entraîné en Keras, exporté en TFLite, évalué sur STM32/i.MX8 (POC fonctionnel).',
      details: [
        'Responsable de l’architecture firmware C++ (modules, contrats d’interface), ADR.',
        'Chaîne capteurs : acquisition temps réel Cortex-M, prétraitement embarqué, MQTT.',
        'Autoencodeur GRU non supervisé de petite taille (Keras/TensorFlow), conçu pour l’embarqué : anomalies détectées par erreur de reconstruction et seuil ; entraînement, export TFLite, POC fonctionnel.',
        'Portage exploratoire sur STM32 et i.MX8 : mesures CPU/RAM, comparatif de faisabilité embarquée.',
        'GTest et GitLab CI ; développement agentique quotidien (Claude Code) avec revue et tests.',
      ],
      technologies: [
        'TensorFlow',
        'Keras',
        'TFLite',
        'Python',
        'C++',
        'STM32',
        'i.MX8',
        'ARM Cortex-M',
        'MQTT',
        'ThingsBoard',
        'GitLab CI',
        'GTest',
        'Arduino',
        'Git',
      ],
      keyTechnologies: ['TensorFlow', 'TFLite', 'Python', 'C++', 'STM32'],
      print: { highlights: 2 },
    },
    {
      id: 'augmenta',
      print: { highlights: 1 },
      role: 'Développeur C++ et JavaScript',
      company: 'Augmenta',
      context: 'Nuages de points temps réel pour le spectacle vivant',
      period: '05/2025 – 10/2025 (6 mois)',
      summary:
        'Filtrage adaptatif de nuages de points (PCL, VoxelGrid) qui tient un nombre de points cible quelle que soit la scène, et monitoring C++ thread-safe.',
      details: [
        'Interfaces 3D web Babylon.js via OSC/WebSockets ; choix d’architecture en ADR.',
        'Régulateur de filtrage VoxelGrid : ajuste automatiquement la taille de voxel pour tenir un nombre de points cible, quelle que soit la densité de la scène.',
        'Moteur de monitoring C++ centralisé et thread-safe (JUCE) : collecte non bloquante, statistiques temps réel sur les flux de points et de clusters.',
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
      keyTechnologies: ['C++', 'PCL', 'Multithreading', 'OSC'],
    },
    {
      id: 'mylight',
      print: { highlights: 1 },
      role: 'Développeur firmware',
      company: 'MyLight Systems',
      context: 'Énergie et IoT',
      period: '09/2022 – 05/2025 (2 ans 9 mois)',
      summary:
        'Firmware C++17 de mesure et de pilotage d’installations électriques sur Linux embarqué, intégré à Azure IoT.',
      details: ['Pattern Observer, contrat JSON backend, Device Twin Azure IoT, tests GTest.'],
      technologies: [
        'C++',
        'OpenWrt',
        'Linux embarqué',
        'Azure IoT',
        'GTest',
        'Bash',
        'Azure DevOps',
        'Git',
      ],
      keyTechnologies: ['C++', 'OpenWrt', 'Azure IoT', 'GTest'],
    },
    {
      id: 'technodigit',
      role: 'Développeur logiciel, nuages de points',
      company: 'Technodigit (Hexagon)',
      context: 'Logiciel 3D, ingénierie et métrologie',
      period: '03/2022 – 06/2022 (4 mois)',
      summary:
        'Visualisation et reconstruction de nuages de points LiDAR en métrologie 3D (C++, Qt).',
      details: [
        'Opérations de reconstruction et de manipulation sur des nuages de points LiDAR.',
        'Outils de visualisation et d’interaction 3D ; interface utilisateur Qt.',
        'Équipe Scrum, documentation Doxygen.',
      ],
      technologies: ['C++', 'Qt', 'Nuages de points', 'Visual Studio', 'Scrum', 'Doxygen', 'Git'],
      keyTechnologies: ['C++', 'Qt', 'Nuages de points'],
    },
    {
      id: 'laris',
      role: 'Chercheur en imagerie 3D et machine learning',
      company: 'LARIS, Angers',
      context: 'Équipe de recherche internationale, architectures 3D de rosiers',
      period: '10/2020 – 08/2021 (11 mois)',
      summary:
        'Segmentation par IA de modèles 3D de rosiers, comparée aux méthodes classiques ; modèles de croissance et simulation d’éclairage (ray tracing, LiDAR).',
      details: [
        'Amélioration et généralisation d’une segmentation par IA à des modèles 3D.',
        'Adaptation de méthodes de segmentation classiques pour comparer la méthode à l’état de l’art.',
        'Modèles de rosiers dynamiques : croissance, environnement lumineux, modélisation 3D.',
        'Simulation d’éclairage, ray tracing et LiDAR.',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'Keras',
        'Segmentation 3D',
        'Blender',
        'Unity',
        'Ray tracing',
        'OpenCV',
        'Structure from Motion',
        'L-System',
      ],
      keyTechnologies: ['Python', 'TensorFlow', 'Segmentation 3D', 'Ray tracing', 'Blender'],
    },
  ],
  projects: [
    {
      id: 'audiolab',
      name: 'AudioLab',
      context: 'SDK d’analyse audio temps réel dans le navigateur',
      period: '2026',
      url: 'https://dicdaplon.github.io/AudioLab/',
      repo: 'https://github.com/Dicdaplon/AudioLab',
      summary:
        'SDK open source d’analyse audio temps réel : détection de tonalité, d’accords et de tempo au micro, DSP écrit à la main et testé.',
      details: [
        'Tonalité par corrélation de Krumhansl–Schmuckler sur 24 tonalités et fenêtres glissantes ; accords par similarité cosinus avec 24 gabarits de triades.',
        'Tempo par enveloppe d’onsets et spectre de battement (40–240 BPM), capture sans trou sur le thread audio (AudioWorklet).',
        'Résultats fixés par les tests : 24/24 accords et tonalités synthétiques, 12/15 enregistrements réels en top-1 pour la tonalité, tempo à ±3 BPM.',
        'Deux jeux d’entraînement de l’oreille au micro ; cœur TypeScript sans framework et paquet React, CI et déploiement GitHub Pages.',
      ],
      technologies: [
        'Traitement du signal',
        'Web Audio',
        'AudioWorklet',
        'TypeScript',
        'FFT',
        'React',
        'Vitest',
      ],
      keyTechnologies: ['Traitement du signal', 'Web Audio', 'AudioWorklet', 'TypeScript'],
    },
    {
      id: 'ecole-du-loup',
      name: 'École du Loup(s)',
      context: 'Cours de musique en ligne avec outils audio interactifs',
      period: '2026',
      url: 'https://ecoleduloup.fr',
      summary:
        'Site d’enseignement musical conçu seul : DSP audio dans le navigateur (filtres biquad, réponse en fréquence) et prototypes d’IA audio sur l’appareil.',
      details: [
        'Filtres biquad écrits à la main et réponse en fréquence calculée ; modèle gain/bruit/écrêtage, correction automatique testée hors navigateur.',
        'Prototype non publié : inférence TensorFlow.js sur l’appareil, détection de hauteur CREPE et transcription Basic Pitch comparée à l’accord demandé.',
        'Prototype non publié : soliste génératif ImprovRNN (Magenta) isolé dans un Web Worker pour ne pas bloquer l’audio.',
        'Inférence locale : aucun audio envoyé à un serveur.',
      ],
      technologies: [
        'Traitement du signal',
        'TensorFlow',
        'Web Audio',
        'TypeScript',
        'Web Workers',
        'Tone.js',
        'Next.js',
        'Firebase',
      ],
      keyTechnologies: ['Traitement du signal', 'TensorFlow', 'Web Audio', 'TypeScript'],
    },
    {
      id: 'lolouplive',
      name: 'LoloupLive',
      context: 'Site et appli de jam du collectif musical que j’anime',
      period: '2025',
      url: 'https://dicdaplon.github.io/LoloupLive/#/info',
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
    {
      label: 'IA / ML',
      value:
        'TensorFlow/Keras (autoencodeurs, GRU), TFLite, TensorFlow.js, segmentation 3D, Python',
    },
    {
      label: 'Audio / DSP',
      value:
        'Détection temps réel de tonalité, d’accords et de tempo, FFT, détection d’onsets, filtres biquad, Web Audio / AudioWorklet',
    },
    {
      label: 'Vision / 3D',
      value:
        'Nuages de points (PCL, VoxelGrid, LiDAR), simulation (ray tracing, LiDAR), OpenCV, Blender/Unity',
    },
    {
      label: 'C++ et temps réel',
      value: 'C++17, multithreading, Qt, JUCE, GTest',
    },
    {
      label: 'Embarqué / edge',
      value: 'ARM Cortex-M (SAMD21, STM32), i.MX8, Linux embarqué, MQTT',
    },
    {
      label: 'Méthode',
      value: 'Git, GitLab CI, ADR, Claude Code (workflows agentiques)',
    },
  ],
  softSkills: [
    {
      label: 'Musique',
      value:
        'Collectif musical créé et animé à Lyon depuis 4 ans (jams, événements), dont je développe les outils.',
    },
    {
      label: 'Création audiovisuelle',
      value:
        'Traitement du son, montage vidéo (Adobe Premiere), photographie événementielle, Blender.',
    },
    {
      label: 'Transmission',
      value: 'Enseignement de la musique, des mathématiques et de la physique.',
    },
  ],
  languages: [
    {
      name: 'Français',
      level: 'langue maternelle',
    },
    {
      name: 'Anglais',
      level: 'courant, équipe de recherche internationale',
    },
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
    softSkills: 'Au-delà du code',
    languages: 'Langues',
    education: 'Formation',
    technologies: 'Technologies',
    details: 'Détails',
    moreTechnologies: 'Autres technologies',
    expandAll: 'Tout déplier',
    collapseAll: 'Tout replier',
    print: 'Imprimer / PDF',
    themeToggle: 'Changer de thème',
    filterHint: 'Choisissez une technologie pour voir où elle a servi.',
    filterResult: '{count} élément(s) avec {tech}',
    clearFilter: 'Tout afficher',
    visitSite: 'Voir le site',
    sourceCode: 'Code source',
    onlineVersion: 'Version interactive et détails :',
  },
  url: 'https://dicdaplon.github.io/InteractiveVitae/',
  alternate: {
    label: 'English',
    href: 'en/',
  },
};

export default cv;
