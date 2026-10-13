import type { Cv } from '../types';

/**
 * Public default variant (AI, audio, image), deployed to GitHub Pages.
 * Standalone on purpose: importing another variant would ship its text in
 * the public bundle.
 */
const cv: Cv = {
  lang: 'en',
  person: {
    name: 'Chafik Lekouara',
    title: 'C++ Engineer — ML, Audio DSP & 3D Vision',
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
    notes: ['Open to fully remote roles (CET)'],
  },
  summary:
    'Software engineer (C++, Python) with 5+ years across machine learning, signal processing and 3D: on-device anomaly detection (compact GRU autoencoder, TFLite, STM32/i.MX8), a real-time audio analysis SDK, LiDAR point clouds and AI-based 3D segmentation. MSc in Electronics, Signal, Audio & Video.',
  experiences: [
    {
      id: 'aiotrust',
      role: 'Embedded Systems Engineer',
      company: 'AIoTrust',
      context: 'Industrial cybersecurity (OT)',
      period: 'Oct 2025 – Present',
      summary:
        'On-device ML: compact GRU autoencoder for time-series anomaly detection, trained in Keras, exported to TFLite, evaluated on STM32/i.MX8 (working POC).',
      details: [
        'Own the C++ firmware architecture (modules, interface contracts), decisions in ADRs.',
        'Sensor pipeline: real-time acquisition on Cortex-M, on-device preprocessing, MQTT telemetry.',
        'Designed a compact unsupervised GRU autoencoder (Keras/TensorFlow) sized for embedded targets, flagging anomalies by reconstruction error and threshold; trained it, exported it to TFLite and delivered a working proof of concept.',
        'Ran exploratory ports to STM32 and i.MX8, measuring CPU and RAM to assess on-device feasibility.',
        'GTest and GitLab CI; daily agentic development (Claude Code) with review and tests.',
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
      role: 'C++ and JavaScript Developer',
      company: 'Augmenta',
      context: 'Real-time point clouds for live performance',
      period: 'May 2025 – Oct 2025 (6 months)',
      summary:
        'Adaptive point-cloud filtering (PCL, VoxelGrid) that holds a target point count at any scene density, plus a thread-safe C++ monitoring engine.',
      details: [
        'Babylon.js 3D web interfaces over OSC/WebSockets; architecture decisions in ADRs.',
        'Built a VoxelGrid filter controller that tunes voxel size to hold a target point count whatever the scene density.',
        'Designed a centralised, thread-safe C++ monitoring engine (JUCE): non-blocking collection, real-time statistics on point and cluster streams.',
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
      role: 'Firmware Developer',
      company: 'MyLight Systems',
      context: 'Energy and IoT',
      period: 'Sep 2022 – May 2025 (2 yrs 9 months)',
      summary:
        'C++17 firmware measuring and controlling energy installations on embedded Linux, integrated with Azure IoT.',
      details: ['Observer pattern, JSON backend contract, Azure IoT Device Twin, GTest suites.'],
      technologies: [
        'C++',
        'OpenWrt',
        'Embedded Linux',
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
      role: 'Software Developer, Point Clouds',
      company: 'Technodigit (Hexagon)',
      context: '3D software for engineering and metrology',
      period: 'Mar 2022 – Jun 2022 (4 months)',
      summary:
        'LiDAR point-cloud visualisation and reconstruction in 3D metrology software (C++, Qt).',
      details: [
        'Implemented reconstruction and manipulation operations on LiDAR point clouds.',
        'Built 3D visualisation and interaction tools with a Qt user interface.',
        'Worked in a Scrum team; documented code with Doxygen.',
      ],
      technologies: ['C++', 'Qt', 'Point clouds', 'Visual Studio', 'Scrum', 'Doxygen', 'Git'],
      keyTechnologies: ['C++', 'Qt', 'Point clouds'],
    },
    {
      id: 'laris',
      role: 'Researcher, 3D Imaging and Machine Learning',
      company: 'LARIS, Angers',
      context: 'International research team, 3D rose plant architectures',
      period: 'Oct 2020 – Aug 2021 (11 months)',
      summary:
        'AI segmentation of 3D rose plant models, benchmarked against classical methods; growth models and lighting simulation (ray tracing, LiDAR).',
      details: [
        'Improved and generalised an AI segmentation method to 3D models.',
        'Adapted classical segmentation methods to benchmark the approach against the state of the art.',
        'Built dynamic rose plant models: growth, light environment, 3D modelling.',
        'Simulated lighting, ray tracing and LiDAR acquisition.',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'Keras',
        '3D segmentation',
        'Blender',
        'Unity',
        'Ray tracing',
        'OpenCV',
        'Structure from Motion',
        'L-System',
      ],
      keyTechnologies: ['Python', 'TensorFlow', '3D segmentation', 'Ray tracing', 'Blender'],
    },
  ],
  projects: [
    {
      id: 'audiolab',
      name: 'AudioLab',
      context: 'Real-time audio analysis SDK for the browser',
      period: '2026',
      url: 'https://dicdaplon.github.io/AudioLab/',
      repo: 'https://github.com/Dicdaplon/AudioLab',
      summary:
        'Open-source real-time audio analysis SDK: key, chord and tempo detection from the microphone with hand-written, unit-tested DSP.',
      details: [
        'Key detection by Krumhansl–Schmuckler correlation over 24 keys on sliding windows; chord detection by cosine similarity against 24 triad templates.',
        'Tempo estimation from an onset-strength envelope and a beat spectrum (40–240 BPM), with gapless capture on the audio thread (AudioWorklet).',
        'Results pinned by the test suites: 24/24 synthetic chords and keys, 12/15 real recordings top-1 for key, tempo within 3 BPM on click tracks.',
        'Two microphone-driven ear-training games; framework-free TypeScript core plus a React package, with CI and GitHub Pages deployment.',
      ],
      technologies: [
        'Signal processing',
        'Web Audio',
        'AudioWorklet',
        'TypeScript',
        'FFT',
        'React',
        'Vitest',
      ],
      keyTechnologies: ['Signal processing', 'Web Audio', 'AudioWorklet', 'TypeScript'],
    },
    {
      id: 'ecole-du-loup',
      name: 'École du Loup(s)',
      context: 'Online music course with interactive audio tools',
      period: '2026',
      url: 'https://ecoleduloup.fr',
      summary:
        'Music teaching website built solo: in-browser audio DSP (biquad filters, frequency response) and on-device audio AI prototypes.',
      details: [
        'Hand-written biquad filters with computed frequency response; gain/noise/clipping model with automatic grading tested outside the browser.',
        'Unreleased prototype: on-device TensorFlow.js inference, CREPE pitch detection and Basic Pitch transcription checked against the expected chord.',
        'Unreleased prototype: ImprovRNN (Magenta) generative soloist isolated in a Web Worker so audio never blocks.',
        'Local inference only: no audio is sent to a server.',
      ],
      technologies: [
        'Signal processing',
        'TensorFlow',
        'Web Audio',
        'TypeScript',
        'Web Workers',
        'Tone.js',
        'Next.js',
        'Firebase',
      ],
      keyTechnologies: ['Signal processing', 'TensorFlow', 'Web Audio', 'TypeScript'],
    },
    {
      id: 'lolouplive',
      name: 'LoloupLive',
      context: 'Website and jam app of the music collective I run',
      period: '2025',
      url: 'https://dicdaplon.github.io/LoloupLive/#/info',
      repo: 'https://github.com/Dicdaplon/LoloupLive',
      summary:
        'Real-time app used live on stage: lyrics and chord charts, projected chat, photo capture; tested logic and a test-enforced design system.',
      details: [
        'Real-time sync with Firebase Realtime Database; server-side image processing with Cloud Functions.',
        'Logic extracted from components and unit-tested (Vitest), including a chord notation parser.',
        'Design system driven by stage constraints (dark room, touch targets), documented and enforced by tests.',
      ],
      technologies: ['TypeScript', 'React', 'Firebase', 'Vitest', 'Vite'],
      keyTechnologies: ['TypeScript', 'React', 'Firebase', 'Vitest'],
    },
  ],
  technicalSkills: [
    {
      label: 'AI / ML',
      value: 'TensorFlow/Keras (autoencoders, GRU), TFLite, TensorFlow.js, 3D segmentation, Python',
    },
    {
      label: 'Audio / DSP',
      value:
        'Real-time key, chord and tempo detection, FFT, onset detection, biquad filters, Web Audio / AudioWorklet',
    },
    {
      label: 'Vision / 3D',
      value:
        'Point clouds (PCL, VoxelGrid, LiDAR), simulation (ray tracing, LiDAR), OpenCV, Blender/Unity',
    },
    {
      label: 'C++ and real-time',
      value: 'C++17, multithreading, Qt, JUCE, GTest',
    },
    {
      label: 'Embedded / edge',
      value: 'ARM Cortex-M (SAMD21, STM32), i.MX8, embedded Linux, MQTT',
    },
    {
      label: 'Workflow',
      value: 'Git, GitLab CI, ADRs, Claude Code (agentic workflows)',
    },
  ],
  softSkills: [
    {
      label: 'Music',
      value:
        'Founded and run a music collective in Lyon for 4 years (jams, events); build its tools.',
    },
    {
      label: 'Audiovisual work',
      value: 'Sound processing, video editing (Adobe Premiere), event photography, Blender.',
    },
    {
      label: 'Teaching',
      value: 'Music, maths and physics.',
    },
  ],
  languages: [
    {
      name: 'French',
      level: 'native',
    },
    {
      name: 'English',
      level: 'fluent, professional; worked in an international research team',
    },
  ],
  education: [
    {
      degree: 'MSc in Electrical Engineering',
      field: 'Electronics, Signal, Audio, Video',
      school: 'Université Toulouse III Paul Sabatier',
      period: '2018 – 2020',
    },
    {
      degree: 'BSc in Electrical Engineering',
      field: 'Electronics',
      school: 'Université Lyon 1 Claude Bernard',
      period: '2015 – 2018',
    },
  ],
  ui: {
    summary: 'Profile',
    experience: 'Experience',
    projects: 'Personal projects',
    technicalSkills: 'Technical skills',
    softSkills: 'Beyond code',
    languages: 'Languages',
    education: 'Education',
    technologies: 'Technologies',
    details: 'Details',
    moreTechnologies: 'Other technologies',
    expandAll: 'Expand all',
    collapseAll: 'Collapse all',
    print: 'Print / PDF',
    themeToggle: 'Switch theme',
    filterHint: 'Pick a technology to see where it was used.',
    filterResult: '{count} item(s) using {tech}',
    clearFilter: 'Show all',
    visitSite: 'Visit',
    sourceCode: 'Source code',
    onlineVersion: 'Interactive version and details:',
  },
  url: 'https://dicdaplon.github.io/InteractiveVitae/en/',
  alternate: {
    label: 'Français',
    href: '../',
  },
};

export default cv;
