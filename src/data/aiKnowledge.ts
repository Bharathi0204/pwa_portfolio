export interface GroundedQA {
  keywords: string[];
  questionPattern: RegExp;
  category: 'projects' | 'internships' | 'skills' | 'dsa' | 'achievements' | 'general' | 'contact';
  response: string;
  suggestedQuestions?: string[];
}

export const GROUNDED_KNOWLEDGE_BASE: GroundedQA[] = [
  {
    keywords: ['ai', 'voice', 'ml', 'machine learning', 'artificial intelligence', 'genai', 'generative'],
    questionPattern: /(what|which|tell me about).*(ai|voice|ml|machine learning|generative|openai|whisper)/i,
    category: 'projects',
    response: `Bharathi has built several prominent AI and Voice AI applications:

1. **AGRIMISTRO (1st Prize SRM Project Day 2026 - ₹50,000)**: An IoT Agricultural platform combining ESP32 telemetry with an OpenAI reasoning engine supporting **22 Indian languages** for agricultural advisory.
2. **ULAVI VOCIS (Ulavi Technologies Internship)**: A Multilingual Voice AI travel concierge using OpenAI Whisper for speech-to-text, Express.js for NLP entity extraction, and automated Twilio WhatsApp / SendGrid notifications with resilient transcription fallback handling.
3. **NUTRIFY**: A full-stack health platform with a **Scikit-learn** Machine Learning model predicting diabetes risk metrics to tailor nutrition and food recommendations.
4. **TaskOS (HackForge 2025)**: An AI-generated micro-operating system that synthesizes ephemeral Docker execution environments on the fly.`,
    suggestedQuestions: [
      'Tell me about the AGRIMISTRO architecture',
      'How does ULAVI VOCIS handle voice errors?',
      'What is Bharathi\'s LeetCode DSA profile?'
    ]
  },
  {
    keywords: ['agrimistro', 'iot', 'farming', 'esp32', 'agriculture', 'prize', '50000', '50,000'],
    questionPattern: /agrimistro|iot|farming|esp32|agriculture/i,
    category: 'projects',
    response: `**AGRIMISTRO** is Bharathi's award-winning IoT Agricultural Telemetry Platform (1st Prize - AI & Generative AI @ SRM Project Day 2026, ₹50,000 Cash Award).

- **Hardware & Sensors**: ESP32 microcontroller with 5 real-time sensors (Soil Moisture, Water Level, Ambient Temp, Humidity, pH).
- **Backend & Data Pipeline**: Real-time telemetry sent to Python / FastAPI, persisted in Supabase PostgreSQL.
- **Frontend**: Interactive React dashboard with live gauges and pump controls.
- **AI Layer**: Generative AI agronomy engine providing real-time diagnosis & automated alerts across **22 Indian languages**.
- **Impact**: Demonstrated 45% water savings using compact vertical fogger/aeroponic farming.`,
    suggestedQuestions: [
      'What role did Bharathi have in ULAVI VOCIS?',
      'Which internships did Bharathi do?',
      'What are Bharathi\'s top backend skills?'
    ]
  },
  {
    keywords: ['ulavi', 'vocis', 'travel', 'whisper', 'voice concierge'],
    questionPattern: /ulavi|vocis|travel.*voice|whisper/i,
    category: 'projects',
    response: `**ULAVI VOCIS** is a multilingual Voice AI travel concierge developed by Bharathi during his internship at Ulavi Technologies (May–Jun 2026).

- **Architecture**: User Voice → Whisper STT → Language/Entity Extraction → Express.js Backend → OpenAI AI reasoning → Supabase Store → Twilio WhatsApp & SendGrid Email dispatch.
- **Key Engineering Challenge**: Bharathi engineered a **graceful transcription fallback handler** so background noise and audio transcription drops never crash the live conversation.`,
    suggestedQuestions: [
      'What backend technologies does Bharathi know?',
      'What is Bharathi\'s experience with Angular?',
      'What is Bharathi\'s education & CGPA?'
    ]
  },
  {
    keywords: ['internship', 'internships', 'experience', 'companies', 'work', 'infosys', 'dlk', 'savyasasy'],
    questionPattern: /(internship|experience|where has|companies|work history|infosys|dlk|savyasasy)/i,
    category: 'internships',
    response: `Bharathi has completed **4 industry internships**:

1. **Savyasasy Software Solutions** (Current, 2 months, Chennai): Full Stack Intern focusing on **Angular**, TypeScript, RxJS, and enterprise ERP development.
2. **Ulavi Technologies** (May–Jun 2026, Chennai): AI Voice Application Developer Intern — built **ULAVI VOCIS** with Whisper STT, OpenAI, Node/Express, Twilio, and Supabase.
3. **Infosys SpringBoard** (Oct–Dec 2025, Remote): Full Stack Intern — built **StarWall** Employee Recognition platform using React, FastAPI, PostgreSQL, and JWT/RBAC security.
4. **DLK Software Technologies** (Dec 2024–Jan 2025, Chennai): Web Development Intern — Python, Django MVT, MySQL, REST APIs, and Git version control.`,
    suggestedQuestions: [
      'Has Bharathi worked with Angular?',
      'What did Bharathi build at Infosys?',
      'Tell me about the AGRIMISTRO project'
    ]
  },
  {
    keywords: ['angular', 'rxjs', 'typescript', 'savyasasy'],
    questionPattern: /angular|rxjs|typescript/i,
    category: 'skills',
    response: `Yes! Bharathi is currently working extensively with **Angular & TypeScript** at Savyasasy Software Solutions:

- **Key Focus**: Enterprise software & ERP systems.
- **Core Skills**: Angular Components, Directives, Services, Dependency Injection, RxJS Observables, HttpClient REST integration, Form validation, and Strict TypeScript typing.
- **Philosophy**: Applies strict types and clean modular architecture for maintainable enterprise applications.`,
    suggestedQuestions: [
      'What Python frameworks does Bharathi use?',
      'What is Bharathi\'s DSA background?',
      'How to contact Bharathi?'
    ]
  },
  {
    keywords: ['backend', 'python', 'fastapi', 'django', 'express', 'node', 'api', 'rest'],
    questionPattern: /(backend|python|fastapi|django|express|api|rest)/i,
    category: 'skills',
    response: `Bharathi's core strength is **Backend Engineering with Python**:

- **Python**: Primary language (OOP, Generators, Decorators, Virtual Environments, Async programming).
- **FastAPI**: Asynchronous REST endpoints, Pydantic schemas, dependency injection, and OpenAPI documentation (used in StarWall & AGRIMISTRO).
- **Django & DRF**: MVT architecture, ORM queries, authentication, middleware, and MySQL integration (DLK & NUTRIFY).
- **Express.js / Node.js**: REST routing, middleware, and AI API orchestration (ULAVI VOCIS).
- **Security**: JWT tokens, Role-Based Access Control (RBAC), password hashing, CORS, and input validation.`,
    suggestedQuestions: [
      'What databases does Bharathi work with?',
      'What is Bharathi\'s LeetCode score?',
      'Show me the contact information'
    ]
  },
  {
    keywords: ['database', 'databases', 'sql', 'postgres', 'postgresql', 'mysql', 'supabase'],
    questionPattern: /(database|databases|sql|postgres|mysql|supabase)/i,
    category: 'skills',
    response: `Bharathi has hands-on production experience with multiple database systems:

- **PostgreSQL**: Used in Infosys StarWall and NUTRIFY for relational integrity, schema indexing, and complex queries.
- **Supabase**: Used in AGRIMISTRO and ULAVI VOCIS for real-time cloud data, authentication, and time-series telemetry storage.
- **MySQL**: Used in Django projects at DLK Software Technologies for CRUD operations and relational data modeling.
- **Database Concepts**: Skilled in Normalization, Primary/Foreign Key relations, Transactions, Joins, Indexes, and Constraints.`,
    suggestedQuestions: [
      'What is Bharathi\'s education & CGPA?',
      'What awards has Bharathi won?',
      'Tell me about the 100 LeetCode milestone'
    ]
  },
  {
    keywords: ['dsa', 'leetcode', 'algorithms', 'data structures', 'problem solving'],
    questionPattern: /(dsa|leetcode|algorithm|problem solving|data structures)/i,
    category: 'dsa',
    response: `Bharathi has solved **100+ LeetCode problems** with an impressive **88.6% Acceptance Rate**:

- **Distribution**: 43 Easy | 52 Medium | 5 Hard.
- **Mastered Patterns**:
  - Tree Traversals & BST (Level order, Zigzag, Right-side view, Kth smallest BST)
  - Two Pointers & Sliding Window (Subarrays, Anagrams, Two Sum)
  - Hashing & Prefix Sum (Subarray sum equals K)
  - Binary Search (Rotated sorted arrays, boundary checks)
  - Monotonic Stack & Queue (Daily temperatures, Min stack)
  - Graph / BFS / DFS (Number of islands, Path sum)
- **Core Philosophy**: *"Do not memorize 100 individual solutions; master the underlying algorithmic pattern."*`,
    suggestedQuestions: [
      'Tell me about AGRIMISTRO',
      'What are Bharathi\'s academic achievements?',
      'What are Bharathi\'s contact details?'
    ]
  },
  {
    keywords: ['education', 'college', 'university', 'cgpa', 'srm', 'mca', 'bca', 'marks', 'degree'],
    questionPattern: /(education|college|university|cgpa|srm|mca|bca|degree|academic)/i,
    category: 'achievements',
    response: `Bharathi's academic background:

- **MCA (2025–2027)**: SRM Institute of Science and Technology, Ramapuram — **CGPA: 9.90 / 10** (Top Academic Standing).
- **BCA (2022–2025)**: Mar Gregorios College, University of Madras — **CGPA: 8.0 / 10** (Distinction).`,
    suggestedQuestions: [
      'What awards has Bharathi won?',
      'What are Bharathi\'s project case studies?',
      'How can I get in touch with Bharathi?'
    ]
  },
  {
    keywords: ['contact', 'email', 'github', 'linkedin', 'hire', 'location', 'phone'],
    questionPattern: /(contact|email|reach|hire|github|linkedin|location|connect)/i,
    category: 'contact',
    response: `You can connect with Bharathi E directly:

- **Location**: Chennai, India
- **Email**: bharathie0204@gmail.com
- **GitHub**: [github.com/Bharathi0204](https://github.com/Bharathi0204)
- **Portfolio Repository**: [github.com/Bharathi0204/pwa_portfolio](https://github.com/Bharathi0204/pwa_portfolio)
- **LinkedIn**: [Bharathi E on LinkedIn](https://www.linkedin.com/in/bharathi-e-tech)`,
    suggestedQuestions: [
      'What are Bharathi\'s top projects?',
      'What AI skills does Bharathi have?',
      'Tell me about the Infosys internship'
    ]
  }
];

export function queryAssistant(userPrompt: string): { response: string; suggestedQuestions: string[] } {
  const promptLower = userPrompt.trim().toLowerCase();
  
  if (!promptLower) {
    return {
      response: "Hello! I am Bharathi's grounded AI assistant. Ask me anything about his technical projects (AGRIMISTRO, ULAVI VOCIS, TaskOS), 4 internships, Python/Angular skill stack, 100+ LeetCode DSA patterns, or academic milestones!",
      suggestedQuestions: [
        'What AI and Voice projects has Bharathi built?',
        'Tell me about the AGRIMISTRO 1st prize project',
        'Which internships involved backend development?',
        'What is Bharathi\'s DSA and LeetCode milestone?'
      ]
    };
  }

  // 1. Direct regex pattern match
  for (const item of GROUNDED_KNOWLEDGE_BASE) {
    if (item.questionPattern.test(promptLower)) {
      return {
        response: item.response,
        suggestedQuestions: item.suggestedQuestions || [
          'What are Bharathi\'s top projects?',
          'Tell me about Bharathi\'s 4 internships',
          'How can I contact Bharathi?'
        ]
      };
    }
  }

  // 2. Keyword score matching
  let bestMatch: GroundedQA | null = null;
  let bestScore = 0;

  for (const item of GROUNDED_KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of item.keywords) {
      if (promptLower.includes(kw.toLowerCase())) {
        score += 2;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && bestScore >= 2) {
    return {
      response: bestMatch.response,
      suggestedQuestions: bestMatch.suggestedQuestions || [
        'What are Bharathi\'s top projects?',
        'What is Bharathi\'s LeetCode milestone?',
        'How to contact Bharathi?'
      ]
    };
  }

  // Default grounded fallback
  return {
    response: `I am grounded in Bharathi's verified technical portfolio blueprint. 

Here is what you can ask me:
• **AI & Voice**: AGRIMISTRO (1st Prize SRM Project Day), ULAVI VOCIS (Whisper + OpenAI), NUTRIFY, TaskOS
• **Work Experience**: 4 Internships (Savyasasy, Ulavi, Infosys SpringBoard, DLK)
• **Tech Stack**: Python (FastAPI, Django), React, Angular, TypeScript, PostgreSQL, Supabase, Docker, IoT
• **DSA Profile**: 100 LeetCode problems (88.6% acceptance rate, BFS/DFS, Trees, BST, Sliding Window)
• **Education**: MCA @ SRM IST (CGPA: 9.90/10) & BCA (CGPA: 8.0/10)`,
    suggestedQuestions: [
      'What AI projects has Bharathi built?',
      'Tell me about the AGRIMISTRO project',
      'What internships has Bharathi completed?',
      'What are Bharathi\'s contact links?'
    ]
  };
}
