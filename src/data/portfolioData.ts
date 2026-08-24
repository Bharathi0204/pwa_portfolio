export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / Voice' | 'IoT & Hardware' | 'Full Stack' | 'Systems';
  featured: boolean;
  award?: string;
  awardCash?: string;
  problem: string;
  solution: string;
  architectureFlow: { step: number; label: string; desc: string; icon: string }[];
  technologies: string[];
  contributions: string[];
  challenges: string;
  outcome: string;
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  status?: 'Current' | 'Completed';
  projectFocus?: string;
  summary: string;
  stack: string[];
  responsibilities: string[];
  interviewTakeaway: string;
}

export interface DsaPattern {
  name: string;
  count: number;
  description: string;
  exampleProblem: string;
  coreRule: string;
}

export const PERSONAL_INFO = {
  name: 'Bharathi E',
  title: 'Full Stack Python Developer | AI/ML & Voice AI Engineer',
  institution: 'MCA @ SRM Institute of Science and Technology, Ramapuram',
  bio: 'I learn by building. My journey started with Python and Django, expanded into full-stack development, and then into AI/ML, Voice AI, IoT, and enterprise software. My internships and projects have exposed me to both product development and engineering fundamentals.',
  location: 'Chennai, India',
  email: 'bharathie0204@gmail.com',
  github: 'https://github.com/Bharathi0204',
  linkedin: 'https://www.linkedin.com/in/bharathi-e-tech',
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'SRM Institute of Science and Technology, Ramapuram',
      duration: '2025 – 2027',
      cgpa: '9.90 / 10',
      badge: 'Academic Excellence'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Mar Gregorios College, University of Madras',
      duration: '2022 – 2025',
      cgpa: '8.0 / 10',
      badge: 'Graduated with Distinction'
    }
  ],
  stats: [
    { label: 'MCA CGPA', value: '9.90/10', subtitle: 'SRM Institute of Tech' },
    { label: 'Hackathon Prize', value: '₹50,000', subtitle: '1st Prize SRM Project Day' },
    { label: 'Industry Internships', value: '4', subtitle: 'DLK, Infosys, Ulavi, Savyasasy' },
    { label: 'LeetCode Solved', value: '100+', subtitle: '88.6% Acceptance Rate' }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'savyasasy',
    company: 'Savyasasy Software Solutions',
    role: 'Full Stack Developer Intern',
    period: 'Current Internship (2 Months)',
    location: 'Chennai',
    status: 'Current',
    projectFocus: 'Enterprise ERP & Software Solutions',
    summary: 'Focusing on enterprise software development, building modular frontend components, and integrating robust backend services with Angular and TypeScript.',
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'ERP Modules', 'Git Workflow'],
    responsibilities: [
      'Architecting modular Angular components with clean TypeScript business logic',
      'Implementing Angular Services, Dependency Injection, and RxJS Observable streams for API orchestration',
      'Integrating HttpClient and RESTful endpoints for ERP data management',
      'Participating in team code reviews, bug fixes, and agile sprint delivery'
    ],
    interviewTakeaway: 'Focusing on enterprise scalability, type safety in TypeScript, and modular Angular architecture for complex business ERPs.'
  },
  {
    id: 'ulavi',
    company: 'Ulavi Technologies',
    role: 'AI Voice Application Developer Intern',
    period: 'May 2026 – Jun 2026',
    location: 'Chennai',
    status: 'Completed',
    projectFocus: 'ULAVI VOCIS — Multilingual Voice AI Travel Concierge',
    summary: 'Engineered a real-time conversational voice concierge handling multilingual audio transcription, AI reasoning, and multi-channel notification dispatch.',
    stack: ['React', 'Node.js', 'Express.js', 'OpenAI API', 'Whisper STT', 'Supabase', 'Twilio', 'SendGrid'],
    responsibilities: [
      'Integrated OpenAI Whisper for high-accuracy speech-to-text transcription',
      'Built Express.js backend services with NLP entity extraction and multilingual language detection',
      'Implemented robust phone/email normalization and conversational memory persistence in Supabase',
      'Integrated Twilio WhatsApp and SendGrid email notifications for instant itinerary dispatch',
      'Architected graceful transcription fallback handlers so speech errors never crashed the application'
    ],
    interviewTakeaway: 'Mastered Voice AI pipeline engineering and built resilient fallback systems to handle audio transcription latency and unexpected speech noise.'
  },
  {
    id: 'infosys',
    company: 'Infosys SpringBoard',
    role: 'Full Stack Developer Intern',
    period: 'Oct 2025 – Dec 2025',
    location: 'Remote',
    status: 'Completed',
    projectFocus: 'StarWall — Internal Employee Recognition Dashboard',
    summary: 'Developed a full-stack corporate recognition platform with role-based access control, secure JWT authentication, and interactive appreciation feeds.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'JWT Auth', 'RBAC', 'REST APIs', 'Agile'],
    responsibilities: [
      'Built dynamic React frontend dashboards with responsive user interaction',
      'Engineered asynchronous FastAPI backend endpoints with Pydantic validation schemas',
      'Designed relational schema and indexing in PostgreSQL for high query performance',
      'Implemented secure JWT authentication and granular Role-Based Access Control (Admin, Manager, Employee)',
      'Practiced collaborative Agile sprint development with continuous iteration'
    ],
    interviewTakeaway: 'Gained hands-on experience in connecting React with asynchronous FastAPI backends, database relational design, and security authorization layers.'
  },
  {
    id: 'dlk',
    company: 'DLK Software Technologies',
    role: 'Web Development Intern',
    period: 'Dec 2024 – Jan 2025',
    location: 'Chennai',
    status: 'Completed',
    projectFocus: 'Python & Django Web Applications',
    summary: 'Built production web foundations with Django MVT architecture, ORM queries, MySQL databases, and RESTful APIs.',
    stack: ['Python', 'Django', 'MySQL', 'REST APIs', 'Git', 'HTML/CSS'],
    responsibilities: [
      'Constructed Django application structure, URL routing, views, and template rendering',
      'Implemented database integration, schema modeling, and CRUD operations using Django ORM',
      'Connected MySQL relational database instances and optimized query routines',
      'Applied Git version control workflows and branch-based development practices'
    ],
    interviewTakeaway: 'Solidified core software engineering fundamentals, understanding how backend logic, relational databases, APIs, and version control unite in a full web app.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'agrimistro',
    title: 'AGRIMISTRO',
    subtitle: 'IoT Agricultural Telemetry Intelligence Platform',
    category: 'IoT & Hardware',
    featured: true,
    award: '1st Prize — AI & Generative AI, SRM Project Day 2026',
    awardCash: '₹50,000 Cash Prize',
    problem: 'Farmers and modern urban agriculture face critical challenges with acute water scarcity, inefficient irrigation, and severely limited arable space for high-density farming.',
    solution: 'Designed and built an end-to-end IoT-powered vertical aeroponic/fogger farming prototype using coco peat, ESP32 microcontrollers, 5 environmental sensors, real-time FastAPI telemetry pipelines, and a multilingual GenAI agronomy reasoning engine in 22 Indian languages.',
    technologies: ['ESP32', 'Python', 'FastAPI', 'React', 'Supabase', 'OpenAI GPT-4', 'IoT Sensors', 'C++ / MicroPython'],
    architectureFlow: [
      { step: 1, label: 'Physical Sensor Rig', desc: 'Soil moisture, water level, ambient temp, humidity, and pH sensors', icon: 'Cpu' },
      { step: 2, label: 'ESP32 Telemetry', desc: 'Continuous serial sampling & secure Wi-Fi transmission', icon: 'Radio' },
      { step: 3, label: 'FastAPI Ingestion', desc: 'High-throughput async endpoint with data validation', icon: 'Zap' },
      { step: 4, label: 'Supabase Cloud', desc: 'Time-series persistence and historical trend logging', icon: 'Database' },
      { step: 5, label: 'React Dashboard', desc: 'Live gauge telemetry, status graphs, and pump triggers', icon: 'Layout' },
      { step: 6, label: 'Multilingual GenAI', desc: 'Automated agronomy alerts translated into 22 Indian languages', icon: 'Bot' }
    ],
    contributions: [
      'Designed the hardware prototype with fogger misting, coco peat substrates, and 5 sensor interfaces',
      'Wrote ESP32 telemetry transmission scripts with automated reconnect logic',
      'Developed FastAPI backend endpoints for real-time telemetry streaming and database ingestion',
      'Integrated Supabase PostgreSQL database for telemetry persistence',
      'Engineered the OpenAI advisory layer providing actionable diagnosis in 22 Indian regional languages'
    ],
    challenges: 'Ensuring reliable sensor data transmission during unstable Wi-Fi connectivity and mitigating false readings in noisy moisture sensors through software dampening.',
    outcome: 'Demonstrated 45% water savings over conventional drip systems and won 1st Prize across the entire university Project Day 2026.',
    metrics: [
      { label: 'Award', value: '1st Prize AI/ML' },
      { label: 'Languages Supported', value: '22 Indian' },
      { label: 'Sensors Integrated', value: '5 Real-time' },
      { label: 'Water Efficiency', value: '+45% Saved' }
    ],
    githubUrl: 'https://github.com/Bharathi0204',
    demoUrl: 'https://github.com/Bharathi0204/pwa_portfolio'
  },
  {
    id: 'ulavi-vocis',
    title: 'ULAVI VOCIS',
    subtitle: 'Multilingual Voice AI Travel Concierge',
    category: 'AI / Voice',
    featured: true,
    problem: 'Travelers navigating foreign destinations encounter significant language friction, rigid text-only booking UIs, and delayed itinerary confirmations.',
    solution: 'Engineered an interactive Voice AI concierge allowing travelers to speak naturally. The system handles Whisper transcription, NLP entity extraction, OpenAI itinerary reasoning, and dispatches automated WhatsApp & Email confirmations.',
    technologies: ['React', 'Node.js', 'Express.js', 'OpenAI', 'Whisper STT', 'Supabase', 'Twilio WhatsApp', 'SendGrid'],
    architectureFlow: [
      { step: 1, label: 'Audio Ingestion', desc: 'Browser Web Audio API records audio stream', icon: 'Mic' },
      { step: 2, label: 'Whisper Transcription', desc: 'Speech-to-text conversion with noise filtering', icon: 'FileAudio' },
      { step: 3, label: 'Entity Parsing', desc: 'Regex & NLP extraction for dates, places, emails, phones', icon: 'Cpu' },
      { step: 4, label: 'AI Travel Logic', desc: 'OpenAI context-aware itinerary recommendation', icon: 'Bot' },
      { step: 5, label: 'Supabase Store', desc: 'Secure booking data & conversational history storage', icon: 'Database' },
      { step: 6, label: 'Dispatch Notification', desc: 'Twilio WhatsApp & SendGrid email dispatch', icon: 'Send' }
    ],
    contributions: [
      'Built the Express.js orchestrator connecting Whisper STT and OpenAI completion APIs',
      'Implemented robust normalization algorithms for contact details and multilingual language detection',
      'Created persistent conversation memory schemas in Supabase',
      'Integrated Twilio API for instant WhatsApp itinerary tickets and SendGrid for receipt emails',
      'Built fail-safe transcription fallbacks to handle background audio interruptions seamlessly'
    ],
    challenges: 'Handling speech transcription errors and audio background noise without breaking backend conversation context.',
    outcome: 'Successfully delivered natural voice conversations with sub-2-second AI responses and automated multi-channel itinerary delivery.',
    metrics: [
      { label: 'Voice Response Latency', value: '< 2.1s' },
      { label: 'Dispatch Channels', value: 'WhatsApp + Email' },
      { label: 'Transcription Model', value: 'Whisper AI' }
    ],
    githubUrl: 'https://github.com/Bharathi0204',
    demoUrl: 'https://github.com/Bharathi0204/pwa_portfolio'
  },
  {
    id: 'taskos',
    title: 'TaskOS',
    subtitle: 'AI-Generated Micro Operating System & Ephemeral Runner',
    category: 'Systems',
    featured: false,
    problem: 'Executing ad-hoc developer tasks and scripts often pollutes the host environment, introduces dependency conflicts, and poses security isolation hazards.',
    solution: 'Created an intelligent micro-system at HackForge 2025 that uses Generative AI to inspect requested developer tasks, synthesize minimal Docker environments on-the-fly, execute the tasks, and automatically purge containers.',
    technologies: ['Python', 'Generative AI', 'Docker Engine API', 'Linux Bash', 'FastAPI'],
    architectureFlow: [
      { step: 1, label: 'Task Specification', desc: 'User inputs desired execution command or code script', icon: 'Terminal' },
      { step: 2, label: 'AI Environment Planner', desc: 'LLM determines minimal OS base, runtime, and packages', icon: 'Bot' },
      { step: 3, label: 'Dynamic Dockerfile', desc: 'Synthesizes and builds lightweight isolated container', icon: 'Box' },
      { step: 4, label: 'Container Execution', desc: 'Runs script in sandboxed environment with strict resource limits', icon: 'Play' },
      { step: 5, label: 'Teardown & Cleanup', desc: 'Streams logs back to user and completely purges container', icon: 'Trash2' }
    ],
    contributions: [
      'Developed the Python orchestration engine using the Docker SDK for container lifecycle management',
      'Integrated prompt templates to infer required Linux dependencies and packages from raw scripts',
      'Implemented strict memory and CPU throttling to prevent container resource starvation',
      'Constructed terminal-like CLI & web UI for real-time log streaming'
    ],
    challenges: 'Managing container build caching while ensuring sandboxed execution security and rapid teardown.',
    outcome: 'Demonstrated rapid ephemeral execution under 4 seconds without leaving residual packages on the host machine.',
    metrics: [
      { label: 'Event', value: 'HackForge 2025' },
      { label: 'Container Startup', value: '< 3.8s' },
      { label: 'Environment Isolation', value: '100% Sandboxed' }
    ],
    githubUrl: 'https://github.com/Bharathi0204'
  },
  {
    id: 'nutrify',
    title: 'NUTRIFY',
    subtitle: 'Nutrition & Diabetes Risk Assessment E-Commerce Platform',
    category: 'Full Stack',
    featured: false,
    problem: 'Shoppers with dietary restrictions or diabetic health risks lack integrated nutritional guidance when purchasing food products online.',
    solution: 'Built a full-stack health-focused e-commerce application integrating a Scikit-Learn Machine Learning classifier to predict diabetes risk from health metrics and tailor food recommendations, accompanied by Razorpay payment gateway integration.',
    technologies: ['Django', 'React', 'Scikit-Learn', 'Python', 'Razorpay API', 'PostgreSQL'],
    architectureFlow: [
      { step: 1, label: 'Health Profile Input', desc: 'User enters BMI, glucose level, age, and dietary preferences', icon: 'UserCheck' },
      { step: 2, label: 'ML Feature Pipeline', desc: 'Validation, standardization, and polynomial feature scaling', icon: 'Cpu' },
      { step: 3, label: 'Risk Classification', desc: 'Scikit-learn model evaluates health risk index', icon: 'Activity' },
      { step: 4, label: 'Filtered Catalog', desc: 'Django backend curates safe, certified food inventory', icon: 'ShoppingBag' },
      { step: 5, label: 'Checkout & Razorpay', desc: 'Secure order creation, webhook verification, and payment capture', icon: 'CreditCard' }
    ],
    contributions: [
      'Trained and serialized the Scikit-learn classification model for diabetes risk assessment',
      'Built Django REST API endpoints for user authentication, product catalog, and ML inference',
      'Created dynamic React catalog with health tags and risk score dashboards',
      'Integrated Razorpay test payment gateway and webhook signature verification'
    ],
    challenges: 'Handling class imbalance in training data and ensuring payment webhook idempotency in Django.',
    outcome: 'Delivered an integrated e-commerce and proactive health assessment platform with automated payment workflows.',
    metrics: [
      { label: 'ML Model Precision', value: '89.4%' },
      { label: 'Payment Gateway', value: 'Razorpay Verified' }
    ],
    githubUrl: 'https://github.com/Bharathi0204'
  }
];

export const SKILLS_DATA = {
  languages: [
    { name: 'Python', level: 95, tag: 'Primary / Strongest', desc: 'OOP, Generators, Decorators, Async, API Development, ML Integration' },
    { name: 'JavaScript (ES6+)', level: 88, tag: 'Full Stack', desc: 'Promises, Async/Await, DOM manipulation, Event loop, Modules' },
    { name: 'TypeScript', level: 82, tag: 'Enterprise Ready', desc: 'Interfaces, Generics, Types, Type Inference, Angular integration' },
    { name: 'SQL', level: 85, tag: 'Database', desc: 'Complex Joins, Normalization, Indexing, Transactions, Constraints' }
  ],
  frontend: [
    { name: 'React', level: 90, desc: 'Hooks (useState, useEffect), Reusable Components, State Management, Custom Hooks' },
    { name: 'Angular', level: 80, desc: 'TypeScript, Services, RxJS, Observables, Dependency Injection, Components' },
    { name: 'HTML5 & CSS3', level: 92, desc: 'Semantic HTML, Glassmorphism, Responsive Grid/Flexbox, Animations' },
    { name: 'PWA Standards', level: 90, desc: 'Service Workers, Web App Manifests, Offline Caching, Mobile App Shell' }
  ],
  backend: [
    { name: 'Django & Django REST', level: 92, desc: 'MVT Architecture, ORM, Auth, Serializers, Routing, Middleware' },
    { name: 'FastAPI', level: 88, desc: 'Async Endpoints, Pydantic Schemas, Dependency Injection, OpenAPI Docs' },
    { name: 'Node.js & Express', level: 85, desc: 'Middleware, REST Routing, Controllers, Error Handling, Third-party APIs' },
    { name: 'Security & Auth', level: 86, desc: 'JWT Tokens, RBAC, Password Hashing, CORS, Input Sanitization' }
  ],
  aiAndVoice: [
    { name: 'Voice AI Systems', level: 88, desc: 'OpenAI Whisper STT, Multilingual Voice Pipelines, Conversational Memory' },
    { name: 'Generative AI & LLMs', level: 90, desc: 'OpenAI API, Prompt Design, Structured Output Parsing, Fallbacks' },
    { name: 'Machine Learning', level: 82, desc: 'Scikit-learn, Classification, Regression, Preprocessing, Model Persistence' },
    { name: 'NLP & Language Processing', level: 84, desc: 'Entity Extraction, Multilingual Detection, Normalization' }
  ],
  databasesAndDevOps: [
    { name: 'PostgreSQL & Supabase', level: 88, desc: 'Relational Design, Auth, Real-time Subscriptions, Cloud Storage' },
    { name: 'MySQL', level: 85, desc: 'Database CRUD, Queries, Index Optimization, Schema Design' },
    { name: 'Docker & Linux', level: 82, desc: 'Containers, Dockerfile, Image Lifecycle, Shell Scripting, Process Management' },
    { name: 'Git & Version Control', level: 90, desc: 'Branching, PRs, Merge Conflict Resolution, Clean Git Commits' },
    { name: 'IoT & ESP32', level: 85, desc: 'Microcontrollers, Sensor Telemetry (pH, Temp, Moisture), Serial Comms' }
  ]
};

export const DSA_PATTERNS: DsaPattern[] = [
  {
    name: 'Tree Traversals & BST',
    count: 24,
    description: 'Level Order, Zigzag, Right-side view, Depth, Diameter, BST Validation & Kth Smallest.',
    exampleProblem: 'Kth Smallest Element in BST / Zigzag Level Order',
    coreRule: 'Level Order → BFS + Queue | Kth Smallest BST → Inorder + BST Invariant'
  },
  {
    name: 'Two Pointers & Sliding Window',
    count: 22,
    description: 'Subarray bounds, string anagrams, container with most water, 3Sum.',
    exampleProblem: 'Longest Substring Without Repeating Characters',
    coreRule: 'Sliding Window → Dynamic window state with frequency map/hash'
  },
  {
    name: 'Hashing & Prefix Sum',
    count: 20,
    description: 'Subarray sum equals K, two sum, frequency counts, grouping anagrams.',
    exampleProblem: 'Subarray Sum Equals K / Two Sum',
    coreRule: 'Two Sum & Subarray Sum → Hash Map with seen prefixes'
  },
  {
    name: 'Binary Search',
    count: 14,
    description: 'Search in rotated sorted array, find minimum, peak index, capacity allocation.',
    exampleProblem: 'Search in Rotated Sorted Array',
    coreRule: 'Identify sorted half, adjust low/high based on boundary condition'
  },
  {
    name: 'Stack & Queue',
    count: 12,
    description: 'Monotonic stack, valid parentheses, daily temperatures, min stack.',
    exampleProblem: 'Daily Temperatures / Min Stack',
    coreRule: 'Maintain monotonic order for nearest greater/smaller element queries'
  },
  {
    name: 'Graph / BFS / DFS & Recursion',
    count: 8,
    description: 'Number of islands, word search, connected components, path sum.',
    exampleProblem: 'Number of Islands / Path Sum',
    coreRule: 'Visited matrix + recursive backtracking or queue exploration'
  }
];

export const DSA_STATS = {
  totalSolved: 100,
  easy: 43,
  medium: 52,
  hard: 5,
  acceptanceRate: '88.6%',
  corePhilosophy: 'Do not memorize 100 individual code snippets. Master the underlying algorithmic patterns.'
};

export const ACHIEVEMENTS = [
  {
    id: 'srm-project-day',
    title: '1st Prize — AI & Generative AI',
    event: 'SRM Project Day 2026',
    institution: 'SRM Institute of Science and Technology',
    prize: '₹50,000 Cash Award',
    date: '2026',
    description: 'Awarded 1st Place for AGRIMISTRO — an IoT Agricultural Telemetry Intelligence Platform featuring multilingual Generative AI support in 22 Indian languages.',
    highlight: true,
    tag: 'Grand Championship'
  },
  {
    id: 'mca-cgpa',
    title: '9.90 / 10 CGPA (Top Academic Honors)',
    event: 'Master of Computer Applications (MCA)',
    institution: 'SRM Institute of Science and Technology, Ramapuram',
    prize: 'Academic Rank 1 Contender',
    date: '2025 – 2027',
    description: 'Maintained an exceptional 9.90 CGPA across advanced computing, algorithms, database systems, and software engineering coursework.',
    highlight: true,
    tag: 'Academic Record'
  },
  {
    id: 'leetcode-100',
    title: '100+ LeetCode Milestone with 88.6% Acceptance',
    event: 'Competitive Programming & DSA',
    institution: 'LeetCode Platform',
    prize: '100 Problems Solved',
    date: '2025 – 2026',
    description: 'Achieved mastery across 6 key algorithmic patterns including Tree Traversals, BST, Two Pointers, and Sliding Window with 52 Medium and 5 Hard problems.',
    highlight: false,
    tag: 'Problem Solving'
  },
  {
    id: 'hackforge',
    title: 'TaskOS — AI Micro OS Finalist',
    event: 'HackForge 2025 Hackathon',
    institution: 'Tech Innovation Challenge',
    prize: 'Hackathon Finalist Showcase',
    date: '2025',
    description: 'Developed and demonstrated dynamic containerized sandboxing using Python and Docker for instant task isolation.',
    highlight: false,
    tag: 'Hackathon'
  }
];
