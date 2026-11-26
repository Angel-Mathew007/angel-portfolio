// All the text, links and image paths for the site live here. Edit and save.
// Images go in public/images/. A missing image shows a placeholder frame.

export const portfolio = {
  fullName: 'Angel Anu Mathew',
  firstName: 'Angel',
  role: 'AI/ML',
  pill: 'AI/ML & Computer Vision · Navi Mumbai, Maharashtra',
  tagline: ['Computer Vision', 'Deep Learning', 'Full-Stack'],
  intro:
    "I'm an Information Technology graduate who builds computer vision systems and the apps around them. I've done AI research at TIFR Mumbai and IISER Mohali.",
  email: 'angelmathew.997@gmail.com',
  linkedin: 'https://www.linkedin.com/in/angelmathewofficial/',
  github: 'https://github.com/Angel-Mathew007',
  resume: '/Angel-Anu-Mathew-Resume.pdf',
  photo: '/images/me.jpg',
  heroNote: 'Dept. Rank 1 (third year) ★',
  checklist: ['PyTorch', 'YOLOv8 & RF-DETR', 'OpenCV', 'React & TypeScript', 'Flask & Node.js', 'Research writing'],
  ticker: ['Object Detection', 'Segmentation', 'Computer Vision', 'NLP', 'React', 'Python', 'Research'],

  about: {
    heading: 'More than just code.',
    story: [
      'I studied Information Technology at FCRIT, University of Mumbai, and finished with a CGPI of 9.19 out of 10.',
      'Along the way I inspected wirebonds on silicon sensor modules at TIFR, built a real-time fall detection system at IISER Mohali, and led the CSI IT Chapter at my college.',
    ],
    highlight: 'I like taking a model all the way to something people can actually use.',
    photo: '/images/about.webp',
    photoCaption: 'award day at FCRIT',
    currently: [
      'B.E. in IT completed, class of 2026',
      'Research paper accepted for a Taylor & Francis book chapter',
      'Exploring AI/ML and software roles',
    ],
  },

  skills: [
    { title: 'Languages', color: 'sky', tools: ['Python', 'SQL', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'HTML/CSS'] },
    { title: 'AI/ML & Vision', color: 'royal', tools: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLOv8', 'RF-DETR', 'Scikit-learn', 'NLP', 'Whisper', 'Wav2Lip'] },
    { title: 'Web, Cloud & Tools', color: 'blush', tools: ['React', 'Node.js', 'Express', 'Flask', 'MongoDB', 'Tailwind', 'Git', 'Docker', 'AWS', 'Linux', 'PyQt', 'Streamlit'] },
    { title: 'CS Core', color: 'butter', tools: ['Data Structures & Algorithms', 'DBMS', 'OOP', 'System Design'] },
  ],

  // Screenshots go in public/images/. Leave images as [] for a text-only card.
  projects: [
    {
      title: 'Wirebond Inspection System',
      meta: 'TIFR Mumbai · Jul 2025 – Jun 2026',
      did: 'Built automated optical inspection for silicon sensor modules in CERN HGCAL experiments: a 3-stage pipeline (alignment, micro-segmentation, RF-DETR defect detection) and a PyQt desktop app with analytics and reports.',
      results: ['84.1% mAP', '83.5% F1-score', '92 step-hole regions covered'],
      badge: '84.1% mAP',
      images: ['/images/wirebond-1.webp', '/images/wirebond-2.webp'],
    },
    {
      title: 'Fall Detection System',
      meta: 'IISER Mohali · Jul 2024 – Apr 2025',
      did: 'Developed real-time fall detection for smart surveillance with YOLOv8 and OpenCV, plus emergency alerts through Flask, Twilio SMS and cloud logging to Google Drive.',
      results: ['Real-time detection with SMS alerts', 'Journal publication, 2025'],
      badge: 'Published',
      images: ['/images/fall-detection.webp'],
    },
    {
      title: 'Multilingual Video Dubber',
      meta: 'Jan – Apr 2024',
      did: 'End-to-end video localisation: Whisper speech recognition, MarianMT translation and Wav2Lip lip-synced voice in another language.',
      results: ['Granted Indian Copyright registration'],
      badge: 'Copyrighted',
      images: ['/images/dubber-1.webp', '/images/dubber-2.webp', '/images/dubber-3.webp', '/images/dubber-4.webp'],
    },
    {
      title: 'Multi-Disease Predictor',
      meta: '2023 – 2024',
      did: 'Interactive health risk-assessment app in Python, Scikit-learn and Streamlit, with screens for diabetes, heart disease, Parkinson’s, breast and lung cancer, malaria and pneumonia.',
      results: ['Ensemble models on patient vitals'],
      badge: 'ML app',
      images: ['/images/disease-1.webp', '/images/disease-2.webp'],
    },
    {
      title: 'IDESS Career Platform',
      meta: 'Feb – Apr 2024',
      did: 'AI career exploration web app in React, TypeScript and Node.js, using fine-tuned NLP models.',
      results: ['Personalised skills-gap assessments', 'Localised learning roadmaps'],
      badge: 'NLP',
      images: [] as string[],
    },
    {
      title: 'Smart Canteen System',
      meta: '2023 – 2024',
      did: 'Full-stack ordering and inventory platform for campus canteens with React, Node.js, Express and MongoDB.',
      results: ['Real-time order tracking', 'Automated queue management'],
      badge: 'Full-stack',
      images: [] as string[],
    },
  ],

  education: [
    { years: '2022 – 2026', degree: 'B.E. Information Technology', place: 'Fr. Conceicao Rodrigues Institute of Technology, University of Mumbai', note: 'CGPI 9.19/10 · Dept. Rank 1 (third year) · Rank 2 (final year)' },
    { years: '2022', degree: 'HSC (Science)', place: 'Fr. Agnel Junior College', note: '76.6%' },
    { years: '2020', degree: 'SSC', place: "St. Mary's Multipurpose High School", note: '95.6%' },
  ],

  wins: [
    { title: 'Research & IP', items: ['“Scanner-Based Validation of Sensor Wirebonds using ML”, accepted, Taylor & Francis, UK (2026)', '“AI-Based Fall Detection Using Surveillance Systems”, International Research Journal (2025)', 'Indian Copyright: Multilingual Video Dubbing Architecture (2024)'] },
    { title: 'Awards', items: ['Topper Awards: 1st Rank (2025), 2nd Rank (2026)', '1st Place, PCUBE National Symposium Poster (2026)', '1st Prize, CSI National Project Presentation (2024)', '1st Prize, National Ideation & Innovation Competition (2024)', '2nd Place, National Summer Project Competition (2024)'] },
    { title: 'Leadership', items: ['President, CSI IT Chapter (Jul 2024 – Jun 2025)', 'Led 50 members; 10+ workshops, hackathons and competitions', 'Secured ₹30,000+ in sponsorships', 'Core creative team, E-Cell & Alumni Meet (2023–2025)'] },
    { title: 'Certifications', items: ['Forage simulations: AWS APAC Solutions Architecture, J.P. Morgan, Goldman Sachs, Electronic Arts, Verizon, Siemens Mobility, Accenture', 'Udemy: Python Bootcamp, Data Science A-Z, ITIL 4, GDPR & EU AI Act'] },
  ],

  steps: [
    { title: 'Look', question: 'What does the data really show?' },
    { title: 'Test', question: 'Which model holds up on real samples?' },
    { title: 'Track', question: 'Are the metrics moving the right way?' },
    { title: 'Learn', question: 'What do the errors teach me?' },
  ],

  openTo: ['AI/ML Engineer roles', 'Computer Vision roles', 'Software Developer roles', 'Research collaborations'],
  footerLine: 'Built with curiosity and plenty of test runs.',
}
