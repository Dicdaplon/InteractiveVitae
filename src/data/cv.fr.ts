import type { Cv } from './types';

export const cvFr: Cv = {
  lang: 'fr',
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
      highlights: [
        'Firmware temps réel sur SAMD21 (Cortex-M0+) : acquisition cadencée, auto-détection des cartes, télémétrie JSON via MQTT, resynchronisation réseau.',
        'Prétraitement embarqué (statistiques glissantes, détection de transitions) et persistance de configuration en flash interne (binaire, CRC, fallback).',
        'Outil de configuration USB : protocole série et interface de paramétrage. Tests GTest en intégration continue.',
        'Conception d’un autoencodeur GRU pour la détection d’anomalies sur séries temporelles.',
      ],
      technologies: ['C++', 'Arduino', 'Python', 'Keras', 'TensorFlow', 'GTest', 'MQTT', 'Git'],
    },
    {
      id: 'augmenta',
      role: 'Développeur C++ et vision 3D',
      company: 'Augmenta',
      context: 'Nuages de points temps réel pour spectacle vivant',
      period: '2025 (6 mois)',
      highlights: [
        'Développement d’un régulateur de filtrage VoxelGrid : ajustement automatique de la taille de voxel pour tenir un nombre de points cible, quelle que soit la densité de la scène.',
        'Moteur de monitoring C++ centralisé et thread-safe (JUCE) : collecte non bloquante, statistiques temps réel sur les flux points/clusters, architecture arbitrée par ADR.',
        'Interfaces 3D web interactives (Babylon.js), communication via OSC et WebSockets.',
      ],
      technologies: ['C++', 'PCL', 'JUCE', 'JavaScript', 'Vite', 'Babylon.js', 'Git'],
    },
    {
      id: 'mylight',
      role: 'Développeur firmware C++ embarqué et IoT',
      company: 'MyLight Systems',
      period: '2022 – 2025 (2 ans 9 mois)',
      highlights: [
        'Firmware C++ embarqué pour le pilotage et la mesure d’installations électriques (solaire, chauffe-eau, borne de recharge), intégration Azure IoT.',
        'Communication backend (JSON, Device Twin), optimisation solaire, outils de diagnostic, scripts Shell sous OpenWrt.',
      ],
      technologies: ['C++17', 'Git', 'Bash', 'OpenWrt', 'GTest'],
    },
    {
      id: 'technodigit',
      role: 'Développeur applicatif, traitement de nuages de points',
      company: 'Technodigit',
      context: 'Logiciel 3D, ingénierie et métrologie',
      period: '2022 (4 mois)',
      highlights: [
        'Opérations sur des nuages de points LiDAR ; outils de visualisation et d’interaction dans un logiciel 3D, interface utilisateur sous Qt.',
      ],
      technologies: ['C++17', 'Qt', 'Git', 'Visual Studio', 'Scrum', 'Doxygen'],
    },
    {
      id: 'laris',
      role: 'Développeur, vision par ordinateur 3D',
      company: 'LARIS',
      context: 'Reconstruction 3D par imagerie multi-vues et IA',
      period: '2020 – 2022 (1 an 6 mois)',
      highlights: [
        'Capture d’images RGB et prétraitement d’imagerie : segmentation, débruitage, normalisation.',
        'Reconstruction 3D via algorithmes Structure from Motion (SfM) à partir de multiples vues 2D, et IA pour reconstituer les structures occultées par le feuillage.',
      ],
      technologies: ['Python', 'Keras', 'TensorFlow', 'Blender', 'Unity', 'L-System', 'OpenCV'],
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
    technicalSkills: 'Compétences techniques',
    softSkills: 'Compétences transversales',
    sectors: 'Secteurs et domaines',
    languages: 'Langues',
    education: 'Formation',
    technologies: 'Technologies',
    print: 'Imprimer / PDF',
    themeToggle: 'Changer de thème',
    filterHint: 'Choisissez une technologie pour mettre en évidence les expériences associées.',
    clearFilter: 'Tout afficher',
  },
};
