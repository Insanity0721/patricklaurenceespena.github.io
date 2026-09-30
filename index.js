/**
 * Patrick Laurence J. Espeña - Portfolio Engine
 * Object-Oriented Architecture (OOP)
 */

// 1. Data Store Model
class PortfolioModel {
  constructor() {
    this.personal = {
      name: "Patrick Laurence J. Espeña",
      title: "Full Stack Web Developer",
      headline: "Engineering resilient web systems across the PERN & Laravel stacks, AWS serverless pipelines, and Datadog observability architectures.",
      location: "Bulihan, Malolos, Bulacan[cite: 1]",
      email: "patrickespena016@gmail.com[cite: 1]",
      phone: "0949-704-5597[cite: 1]",
      linkedin: "https://linkedin.com/in/patrick-espena-a8a17126a[cite: 1]",
      linkedinDisplay: "linkedin.com/in/patrick-espena-a8a17126a[cite: 1]",
      github: "https://github.com",
      resumeFileName: "Espeña, Patrick Laurence Resume.pdf",
      aboutParagraphs: [
        "I am a Full Stack Web Developer experienced in engineering end-to-end web applications across modern JavaScript and PHP ecosystems[cite: 1]. At Meijun LLC, I worked on the Terra Education Portal & CMS, developing both frontend interfaces with React.js and robust backend services with Node.js and PostgreSQL[cite: 1].",
        "My experience spans serverless automation with AWS Lambda, enterprise observability through Datadog API and Session Replay, and automated issue tracking with Jira API[cite: 1]. Additionally, I manage relational databases—designing and optimizing schemas in PostgreSQL and MySQL—and interface with third-party platforms such as Typeform and Salesforce to align customer records and transaction states[cite: 1].",
        "My software foundation is complemented by a Computer Engineering degree (Cum Laude, Best Thesis Award) and Mechatronics training, reinforcing disciplined troubleshooting, system architecture, and performance-focused coding[cite: 1]."
      ],
      metrics: [
        { value: "Dec 2023–2026", title: "Meijun LLC (Remote)[cite: 1]", subtitle: "React, Node, PostgreSQL, AWS, Datadog[cite: 1]" },
        { value: "Cum Laude", title: "BS Computer Eng.[cite: 1]", subtitle: "STI College & Best Thesis Award[cite: 1]" },
        { value: "Dual Stack", title: "Production Runtimes[cite: 1]", subtitle: "PERN Stack & PHP Laravel Ecosystems[cite: 1]" },
        { value: "packetHACKS", title: "2023 Hackathon[cite: 1]", subtitle: "Finalist: Smart Utility (IoT Conference)[cite: 1]" }
      ]
    };

    this.skills = [
      {
        category: "Languages & Core",
        items: ["JavaScript (ES6+)", "TypeScript", "Python", "PHP", "C++", "HTML5", "CSS3"][cite: 1]
      },
      {
        category: "Frameworks & Libraries",
        items: ["React.js", "Node.js", "Laravel", "Django", "Livewire"][cite: 1]
      },
      {
        category: "Cloud & Integrations",
        items: ["AWS Lambda", "AWS Firehose", "AWS QuickSight", "AWS Glue", "AWS Athena", "AWS CloudWatch", "AWS CloudFormation", "Typeform API", "Datadog API", "Salesforce"][cite: 1]
      },
      {
        category: "Databases",
        items: ["PostgreSQL", "MySQL"][cite: 1]
      },
      {
        category: "Tools & Platforms",
        items: ["Git", "GitHub", "Bitbucket", "VS Code", "Jira", "Slack", "REST APIs"][cite: 1]
      },
      {
        category: "IT & System Competencies",
        items: ["System Troubleshooting", "Hardware Assembly & Maintenance", "Peripheral Device Setup", "Driver Installation", "Software Installations"][cite: 1]
      }
    ];

    this.experiences = [
      {
        role: "Full Stack Web Developer[cite: 1]",
        company: "Meijun LLC[cite: 1]",
        location: "San Diego, California (Remote)[cite: 1]",
        period: "December 2023 - July 2026[cite: 1]",
        subProjects: [
          {
            title: "Terra Education (Portal & CMS)[cite: 1]",
            highlights: [
              "Developed and maintained full-stack web applications utilizing React.js, Node.js, and PostgreSQL (PERN stack)[cite: 1].",
              "Built dynamic content handling and user interactions integrated with the Typeform API for dynamic form submissions[cite: 1].",
              "Implemented AWS Lambda serverless functions to automate backend processing workflows[cite: 1].",
              "Integrated Datadog monitoring with Jira API for automated issue tracking, and implemented Session Replay to capture user interactions for debugging and observability[cite: 1].",
              "Integrated third-party APIs including Typeform and Datadog API for performance monitoring, error tracking, and system observability[cite: 1].",
              "Worked with Salesforce for client data management and corrected spreadsheet data regarding customer records, payment statuses, and Salesforce alignment[cite: 1].",
              "Managed PostgreSQL operations, schema design, and query optimization[cite: 1].",
              "Conducted regular testing, debugging, and deployments across staging and production environments[cite: 1].",
              "Collaborated with cross-functional teams in agile sprints, daily stand-ups, code reviews, and Jira task tracking[cite: 1]."
            ]
          },
          {
            title: "RCP (Rock Church Project)[cite: 1]",
            timeline: "December 2023 - June 2024[cite: 1]",
            highlights: [
              "Contributed to an existing church management web application by implementing features and frontend enhancements using PHP, Laravel, and Livewire[cite: 1].",
              "Delivered UI improvements, system bug fixes, and collaborated on MySQL database operations[cite: 1]."
            ]
          }
        ]
      },
      {
        role: "Full Stack Web Developer[cite: 1]",
        company: "Makopa Inc[cite: 1]",
        location: "Parañaque City (Freelance - Remote)[cite: 1]",
        period: "September 2023 - December 2023[cite: 1]",
        subProjects: [
          {
            title: "MakeItMemories[cite: 1]",
            timeline: "November - December 2023[cite: 1]",
            highlights: [
              "Developed an interactive online photo gallery enabling users to upload media, share moments, and manage digital memories using PHP, Laravel, and MySQL[cite: 1]."
            ]
          },
          {
            title: "Salam Organization System[cite: 1]",
            timeline: "September 2023[cite: 1]",
            highlights: [
              "Built a web platform for managing organizational activities, events, and member registrations for a non-profit organization using PHP, Laravel, and MySQL[cite: 1]."
            ]
          }
        ]
      }
    ];

    this.projects = [
      {
        id: "terra-education",
        name: "Terra Education Portal & CMS",
        timeline: "Meijun LLC (Dec 2023 - Jul 2026)[cite: 1]",
        summary: "Comprehensive educational web system and CMS supporting dynamic workflows, data reconciliation, and integrated observability[cite: 1].",
        tech: ["React.js", "Node.js", "PostgreSQL", "AWS Lambda", "Datadog API", "Typeform API", "Jira API", "Salesforce"][cite: 1],
        points: [
          "Engineered full-stack features with the PERN stack (React.js, Node.js, PostgreSQL)[cite: 1].",
          "Built dynamic form ingestion workflows leveraging Typeform API integration[cite: 1].",
          "Configured AWS Lambda for event-driven serverless background automation[cite: 1].",
          "Engineered end-to-end observability by combining Datadog APM, Error Tracking, Session Replay, and automated Jira ticket creation[cite: 1].",
          "Handled database schema definitions, query tuning, and client-level data reconciliation with Salesforce[cite: 1]."
        ],
        hasCaseStudy: true
      },
      {
        id: "rock-church-project",
        name: "RCP (Rock Church Project)",
        timeline: "Meijun LLC (Dec 2023 - Jun 2024)[cite: 1]",
        summary: "Church management web platform featuring dynamic administrative interfaces and data controls[cite: 1].",
        tech: ["PHP", "Laravel", "Livewire", "MySQL"][cite: 1],
        points: [
          "Implemented new functional modules and reactive frontend views using Laravel and Livewire[cite: 1].",
          "Executed UI enhancements, addressed system bug fixes, and maintained relational database schema on MySQL[cite: 1]."
        ],
        hasCaseStudy: false
      },
      {
        id: "make-it-memories",
        name: "MakeItMemories",
        timeline: "Makopa Inc (Nov 2023 - Dec 2023)[cite: 1]",
        summary: "Interactive online photo and media gallery application for users to upload and share digital memories[cite: 1].",
        tech: ["PHP", "Laravel", "MySQL", "CSS3", "JavaScript"][cite: 1],
        points: [
          "Engineered media upload, storage association, and gallery presentation flows[cite: 1].",
          "Built data structures in MySQL to support member albums, user interactions, and asset collections[cite: 1]."
        ],
        hasCaseStudy: false
      },
      {
        id: "salam-org",
        name: "Salam Organization System",
        timeline: "Makopa Inc (Sep 2023)[cite: 1]",
        summary: "Web platform designed for managing non-profit organizational activities, community events, and membership registrations[cite: 1].",
        tech: ["PHP", "Laravel", "MySQL", "REST APIs"][cite: 1],
        points: [
          "Built registration portals, activity trackers, and member management directories[cite: 1].",
          "Structured backend validation, access control, and database workflows in MySQL[cite: 1]."
        ],
        hasCaseStudy: false
      }
    ];

    this.architectureTiers = [
      {
        tier: "01. CLIENT FRONT",
        desc: "Interactive UI & Component State",
        techs: ["React.js", "Livewire / Blade", "HTML5 / CSS3 / ES6+"][cite: 1]
      },
      {
        tier: "02. API GATEWAY",
        desc: "Ingestion Pipelines & Webhooks",
        techs: ["REST APIs", "Typeform Webhook Hook", "Jira API Sync"][cite: 1]
      },
      {
        tier: "03. COMPUTE SERVICES",
        desc: "Serverless & Application Logic",
        techs: ["Node.js Services", "PHP Laravel", "AWS Lambda Handlers"][cite: 1]
      },
      {
        tier: "04. PERSISTENCE",
        desc: "Relational Queries & Alignments",
        techs: ["PostgreSQL", "MySQL", "Salesforce Alignments"][cite: 1]
      },
      {
        tier: "05. OBSERVABILITY",
        desc: "APM Telemetry & Diagnostics",
        techs: ["Datadog APM & Replay", "AWS CloudWatch", "Athena & QuickSight"][cite: 1]
      }
    ];

    this.education = [
      {
        degree: "Bachelor of Science in Computer Engineering[cite: 1]",
        school: "Systems Technology Institute College[cite: 1]",
        location: "Malolos, Bulacan[cite: 1]",
        period: "2019 - 2023[cite: 1]",
        honors: [
          "Cum Laude[cite: 1]",
          "Best Thesis Award[cite: 1]",
          "packetHACKS 2023 Hackathon Competition Finalist for Smart Utility at The Internet of Things Conference[cite: 1]"
        ]
      },
      {
        degree: "Bachelor of Industrial Technology (Mechatronics)[cite: 1]",
        school: "Bulacan State University[cite: 1]",
        location: "Malolos, Bulacan[cite: 1]",
        period: "2015 - 2019[cite: 1]",
        honors: []
      }
    ];

    this.references = [
      {
        name: "Aldrich Ralleigh C. Nueva[cite: 1]",
        role: "Senior Software Engineer[cite: 1]",
        company: "DXC Technology[cite: 1]",
        contact: "+63 956-537-4358[cite: 1]",
        email: "aldrich.ralleigh.nueva@gmail.com[cite: 1]"
      },
      {
        name: "Tsuyoshi Candelario[cite: 1]",
        role: "Software Engineer[cite: 1]",
        company: "Tyler Technology[cite: 1]",
        contact: "Upon Request[cite: 1]",
        email: "tsuyoshic2@gmail.com[cite: 1]"
      },
      {
        name: "Aaron Jaye Junatas[cite: 1]",
        role: "Software Engineer[cite: 1]",
        company: "Zywave Philippines[cite: 1]",
        contact: "+63 961-605-9806[cite: 1]",
        email: "aaron.junatas@zywave.com[cite: 1]"
      }
    ];

    this.terminalSequences = {
      telemetry: [
        "boot --runtime=node20 --env=production",
        "connecting to PostgreSQL (PERN stack)... connected.",
        "mounting AWS Lambda serverless triggers...",
        "initializing Datadog APM & Session Replay agent...",
        "system operational. listening on 0.0.0.0:443"
      ],
      lambda: [
        "aws:lambda:init handler=eventBridgeStream",
        "cold-start execution: 48ms overhead",
        "invoking Typeform API webhook dispatcher...",
        "payload dispatched to PostgreSQL RDS schema",
        "statusCode: 200 OK — memoryAllocated: 256MB"
      ],
      database: [
        "EXPLAIN ANALYZE SELECT * FROM users JOIN roles...",
        "Index Scan using idx_users_org_id on users",
        "Execution Time: 1.428 ms",
        "PostgreSQL vacuum & analyze completed.",
        "replication status: synced (lag: 0ms)"
      ]
    };
  }
}

// 2. Interactive Background Particle Canvas
class ParticleNetwork {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.animationId = null;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());
    
    // Only bind mouse tracker on non-touch devices to avoid layout jitter
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });
    }

    const count = Math.min(window.innerWidth > 768 ? 40 : 18, 45);
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8
      });
    }

    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const isDark = document.documentElement.classList.contains("dark");

    for (let i = 0; i < this.particles.length; i++) {
      const p1 = this.particles[i];
      p1.x += p1.vx;
      p1.y += p1.vy;

      if (p1.x < 0 || p1.x > this.width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > this.height) p1.vy *= -1;

      this.ctx.beginPath();
      this.ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = isDark ? "rgba(99, 102, 241, 0.45)" : "rgba(99, 102, 241, 0.3)";
      this.ctx.fill();

      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = isDark
            ? `rgba(99, 102, 241, ${0.16 * (1 - dist / 115)})`
            : `rgba(99, 102, 241, ${0.1 * (1 - dist / 115)})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }

      if (window.matchMedia("(pointer: fine)").matches) {
        const mdx = p1.x - this.mouse.x;
        const mdy = p1.y - this.mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 130) {
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = isDark
            ? `rgba(129, 140, 248, ${0.22 * (1 - mdist / 130)})`
            : `rgba(99, 102, 241, ${0.18 * (1 - mdist / 130)})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

// 3. UI Component View Renderer
class PortfolioView {
  constructor(model) {
    this.model = model;
    this.activeCliTab = "telemetry";
    this.selectedSkillCategory = "All";
    this.cliInterval = null;
    this.activeArchNode = 0;
  }

  renderAll() {
    this.renderHero();
    this.renderAbout();
    this.renderSkillFilters();
    this.renderSkills();
    this.renderExperience();
    this.renderProjects();
    this.renderArchitecture();
    this.renderEducation();
    this.renderReferences();
    this.renderContact();
    this.renderResumeModal();
    this.renderNavigation();
    this.initTerminal();
    this.init3DTilt();
    this.refreshIcons();
  }

  refreshIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  renderNavigation() {
    const navLinks = [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Architecture", href: "#architecture" },
      { name: "Education", href: "#education" },
      { name: "Contact", href: "#contact" }
    ];

    const desktopNav = document.getElementById("desktop-nav");
    const mobileNav = document.getElementById("mobile-menu");

    if (desktopNav) {
      desktopNav.innerHTML = navLinks.map(link => `
        <a href="${link.href}" class="nav-link px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800/60 transition-all duration-200 cursor-pointer relative group">
          <span>${link.name}</span>
          <span class="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"></span>
        </a>
      `).join("");
    }

    if (mobileNav) {
      mobileNav.innerHTML = navLinks.map(link => `
        <a href="${link.href}" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800 cursor-pointer">
          ${link.name}
        </a>
      `).join("") + `
        <a href="#resume" class="nav-link block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white mt-2 text-center cursor-pointer">
          Resume
        </a>
      `;
    }
  }

  renderHero() {
    const { personal } = this.model;
    document.getElementById("hero-name").textContent = personal.name;
    document.getElementById("hero-title").textContent = personal.title;
    document.getElementById("hero-headline").textContent = personal.headline;
    document.getElementById("hero-location").textContent = personal.location;
    document.getElementById("hero-email").textContent = personal.email;
    document.getElementById("hero-email-link").href = `mailto:${personal.email}`;
    document.getElementById("hero-linkedin-link").href = personal.linkedin;
    document.getElementById("download-resume-btn").href = encodeURI(personal.resumeFileName);
  }

  renderAbout() {
    const { personal } = this.model;
    const textContainer = document.getElementById("about-text");
    if (textContainer) {
      textContainer.innerHTML = personal.aboutParagraphs.map(p => `<p>${p}</p>`).join("");
    }

    const metricsContainer = document.getElementById("about-metrics");
    if (metricsContainer) {
      metricsContainer.innerHTML = personal.metrics.map(m => `
        <div class="interactive-card p-4 rounded-xl">
          <div class="text-indigo-600 dark:text-indigo-400 font-mono text-2xl font-bold mb-1">${m.value}</div>
          <div class="text-xs text-slate-500 dark:text-gray-400 uppercase tracking-wider font-semibold">${m.title}</div>
          <div class="text-xs text-slate-600 dark:text-gray-300 mt-2">${m.subtitle}</div>
        </div>
      `).join("");
    }
  }

  renderSkillFilters() {
    const container = document.getElementById("skills-filter-container");
    if (!container) return;
    const categories = ["All", ...this.model.skills.map(s => s.category)];

    container.innerHTML = categories.map(cat => `
      <button
        data-category="${cat}"
        class="skill-filter-btn px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
          this.selectedSkillCategory === cat
            ? "bg-indigo-600 text-white font-medium shadow-sm shadow-indigo-600/30 scale-105"
            : "text-slate-600 dark:text-gray-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/70 dark:hover:bg-gray-800"
        }"
      >
        ${cat}
      </button>
    `).join("");
  }

  renderSkills() {
    const container = document.getElementById("skills-grid");
    if (!container) return;

    const filtered = this.selectedSkillCategory === "All"
      ? this.model.skills
      : this.model.skills.filter(s => s.category === this.selectedSkillCategory);

    container.innerHTML = filtered.map(group => `
      <div class="interactive-card rounded-xl p-5 sm:p-6 group">
        <h4 class="text-sm font-mono font-semibold text-indigo-600 dark:text-indigo-300 mb-4 pb-2 border-b border-slate-200 dark:border-gray-800 flex items-center justify-between">
          <span>${group.category}</span>
          <span class="text-xs text-slate-400 dark:text-gray-400 font-normal">[${group.items.length}]</span>
        </h4>
        <div class="flex flex-wrap gap-2">
          ${group.items.map(item => `
            <span class="px-2.5 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-gray-800/70 border border-slate-300 dark:border-gray-700/60 text-slate-700 dark:text-gray-200 hover:border-indigo-400 hover:bg-indigo-600/20 hover:scale-105 hover:text-indigo-600 dark:hover:text-white transition-all duration-200 cursor-default">
              ${item}
            </span>
          `).join("")}
        </div>
      </div>
    `).join("");

    this.init3DTilt();
  }

  renderExperience() {
    const container = document.getElementById("experience-container");
    if (!container) return;

    container.innerHTML = this.model.experiences.map(exp => `
      <div class="relative pl-5 sm:pl-6 border-l-2 border-indigo-500/40 space-y-5 sm:space-y-6">
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-50 dark:border-[#06080e] shadow-md shadow-indigo-600/50"></div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
          <div>
            <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">${exp.role}</h4>
            <div class="text-indigo-600 dark:text-indigo-400 font-medium text-xs sm:text-sm">
              ${exp.company} &bull; <span class="text-slate-500 dark:text-gray-400">${exp.location}</span>
            </div>
          </div>
          <div class="font-mono text-xs text-slate-600 dark:text-gray-400 px-2.5 py-1 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-md self-start sm:self-auto shadow-xs">
            ${exp.period}
          </div>
        </div>

        <div class="space-y-4 pt-1">
          ${exp.subProjects.map(sub => `
            <div class="glass-panel p-4 sm:p-6 rounded-xl space-y-3 hover:border-indigo-500/40 hover:translate-x-1 transition-all duration-200">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-gray-800 pb-2">
                <h5 class="font-semibold text-indigo-700 dark:text-indigo-200 text-sm sm:text-base">${sub.title}</h5>${sub.timeline ? `<span class="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-gray-400 bg-slate-200/80 dark:bg-gray-800/60 px-2 py-0.5 rounded">${sub.timeline}</span>` : ""}
              </div>
              <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-gray-300">
                ${sub.highlights.map(h => `
                  <li class="flex items-start gap-2.5">
                    <span class="text-indigo-600 dark:text-indigo-400 mt-1 text-xs flex-shrink-0">&#9656;</span>
                    <span class="leading-relaxed">${h}</span>
                  </li>
                `).join("")}
              </ul>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  renderProjects() {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    container.innerHTML = this.model.projects.map(proj => `
      <div class="interactive-card rounded-2xl flex flex-col justify-between overflow-hidden group">
        <div class="p-5 sm:p-8 space-y-4">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[11px] sm:text-xs font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded truncate">
              ${proj.timeline}
            </span>
            ${proj.hasCaseStudy ? `
              <button id="open-case-study-btn" class="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 flex items-center gap-1 cursor-pointer transition-colors flex-shrink-0">
                <span>Case Study</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              </button>
            ` : ""}
          </div>

          <h4 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">
            ${proj.name}
          </h4>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">${proj.summary}</p>

          <div class="space-y-2 pt-2">
            <p class="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase">Key Implementation Points:</p>
            <ul class="text-xs text-slate-600 dark:text-gray-300 space-y-1.5">
              ${proj.points.map(pt => `
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 dark:text-indigo-400 flex-shrink-0">&#8226;</span>
                  <span>${pt}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>

        <div class="px-5 sm:px-8 py-3.5 sm:py-4 bg-slate-100 dark:bg-[#090d18] border-t border-slate-200 dark:border-gray-800/80">
          <div class="flex flex-wrap gap-1.5">
            ${proj.tech.map(t => `
              <span class="text-[10px] sm:text-[11px] font-mono bg-white dark:bg-gray-800/70 border border-slate-300 dark:border-gray-700/50 text-slate-700 dark:text-gray-300 px-2 py-0.5 rounded shadow-2xs">
                ${t}
              </span>
            `).join("")}
          </div>
        </div>
      </div>
    `).join("");

    this.init3DTilt();
  }

  renderArchitecture() {
    const container = document.getElementById("architecture-tiers-container");
    if (!container) return;

    container.innerHTML = this.model.architectureTiers.map((tierData, idx) => {
      const isActive = this.activeArchNode === idx;
      return `
        <div
          data-node="${idx}"
          class="arch-tier-card p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
            isActive
              ? "border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/30 shadow-lg shadow-indigo-500/15 scale-102"
              : "border-slate-200 dark:border-gray-800 bg-white dark:bg-[#0c1220] hover:border-slate-300 dark:hover:border-gray-700 opacity-80 hover:opacity-100"
          }"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-indigo-600 dark:text-indigo-400 font-bold">${tierData.tier}</span>
            <span class="w-2 h-2 rounded-full ${isActive ? "bg-emerald-500 animate-ping" : "bg-slate-400 dark:bg-gray-600"} flex-shrink-0"></span>
          </div>
          <div class="text-[11px] text-slate-500 dark:text-gray-400 mb-2 sm:mb-3">${tierData.desc}</div>
          <div class="space-y-1.5">
            ${tierData.techs.map(tech => `
              <div class="bg-slate-100 dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700/60 p-1.5 rounded text-slate-700 dark:text-gray-200">
                ${tech}
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");
  }

  renderEducation() {
    const container = document.getElementById("education-grid");
    if (!container) return;

    container.innerHTML = this.model.education.map(edu => `
      <div class="interactive-card rounded-2xl p-5 sm:p-8">
        <div class="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 mb-3">
          <div>
            <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">${edu.degree}</h4>
            <div class="text-indigo-600 dark:text-indigo-400 font-medium text-xs sm:text-sm">${edu.school}</div>
            <div class="text-xs text-slate-500 dark:text-gray-400">${edu.location}</div>
          </div>
          <span class="text-xs font-mono bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-slate-700 dark:text-gray-300 px-2.5 py-1 rounded self-start">
            ${edu.period}
          </span>
        </div>

        ${edu.honors.length > 0 ? `
          <div class="mt-4 pt-4 border-t border-slate-200 dark:border-gray-800/80 space-y-2">
            <div class="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-gray-400 font-semibold">Honors & Recognition:</div>
            <ul class="text-xs sm:text-sm text-slate-600 dark:text-gray-300 space-y-1.5">
              ${edu.honors.map(h => `
                <li class="flex items-start gap-2">
                  <i data-lucide="award" class="w-4 h-4 text-amber-500 dark:text-amber-400 flex-shrink-0 animate-pulse mt-0.5"></i>
                  <span>${h}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        ` : ""}
      </div>
    `).join("");

    this.init3DTilt();
  }

  renderReferences() {
    const container = document.getElementById("references-grid");
    if (!container) return;

    container.innerHTML = this.model.references.map(ref => `
      <div class="interactive-card p-4 rounded-xl text-xs space-y-1">
        <div class="font-semibold text-slate-900 dark:text-white text-sm">${ref.name}</div>
        <div class="text-indigo-600 dark:text-indigo-400 font-mono text-[11px]">${ref.role} &bull; ${ref.company}</div>
        <div class="text-slate-500 dark:text-gray-400">${ref.contact}</div>
        <div class="text-slate-500 dark:text-gray-400 truncate">${ref.email}</div>
      </div>
    `).join("");

    this.init3DTilt();
  }

  renderContact() {
    const { personal } = this.model;
    document.getElementById("contact-email").textContent = personal.email;
    document.getElementById("contact-phone").textContent = personal.phone;
    document.getElementById("contact-location").textContent = personal.location;
    document.getElementById("contact-linkedin").href = personal.linkedin;
    document.getElementById("contact-linkedin-display").textContent = personal.linkedinDisplay;
    document.getElementById("contact-form").action = `mailto:${personal.email}`;

    document.getElementById("footer-name").textContent = personal.name;
    document.getElementById("footer-title").textContent = personal.title;
    document.getElementById("footer-linkedin").href = personal.linkedin;
    document.getElementById("footer-email").href = `mailto:${personal.email}`;
  }

  renderResumeModal() {
    const { personal, skills, experiences, education, references } = this.model;
    document.getElementById("modal-resume-name").textContent = personal.name;
    document.getElementById("modal-doc-name").textContent = personal.name;
    document.getElementById("modal-doc-title").textContent = personal.title;
    document.getElementById("modal-doc-email").textContent = personal.email;
    document.getElementById("modal-doc-phone").textContent = personal.phone;
    document.getElementById("modal-doc-location").textContent = personal.location;
    document.getElementById("modal-resume-download").href = encodeURI(personal.resumeFileName);

    const skillsContainer = document.getElementById("modal-skills-grid");
    if (skillsContainer) {
      skillsContainer.innerHTML = skills.map(s => `
        <div class="p-3 sm:p-3.5 rounded-xl border border-slate-200 dark:border-gray-800/80 bg-white dark:bg-[#0e1424]/70 shadow-2xs">
          <span class="font-mono text-indigo-600 dark:text-indigo-300 font-semibold block mb-1">${s.category}</span>
          <span class="text-slate-600 dark:text-gray-300 leading-relaxed">${s.items.join(", ")}</span>
        </div>
      `).join("");
    }

    const expContainer = document.getElementById("modal-experience-container");
    if (expContainer) {
      expContainer.innerHTML = experiences.map(exp => `
        <div class="relative pl-4 sm:pl-5 border-l-2 border-indigo-500/40 space-y-3 sm:space-y-4">
          <div class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-slate-100 dark:border-[#090d18]"></div>
          
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">${exp.role}</span>
              <span class="text-slate-500 dark:text-gray-400 text-xs sm:ml-2">| ${exp.company}, ${exp.location}</span>
            </div>
            <span class="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-medium">${exp.period}</span>
          </div>

          <div class="space-y-3 sm:space-y-4">
            ${exp.subProjects.map(sub => `
              <div class="bg-white dark:bg-[#0e1424]/50 border border-slate-200 dark:border-gray-800/60 p-3 sm:p-4 rounded-xl space-y-2 shadow-2xs">
                <div class="flex items-center justify-between gap-2 border-b border-slate-200 dark:border-gray-800/60 pb-1.5">
                  <span class="text-xs font-mono font-semibold text-indigo-700 dark:text-indigo-300">${sub.title}</span>${sub.timeline ? `<span class="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-gray-500">${sub.timeline}</span>` : ""}
                </div>
                <ul class="text-xs text-slate-600 dark:text-gray-300 space-y-1.5">
                  ${sub.highlights.map(h => `
                    <li class="flex items-start gap-2">
                      <span class="text-indigo-600 dark:text-indigo-400 mt-0.5 leading-none flex-shrink-0">&#8226;</span>
                      <span class="leading-relaxed">${h}</span>
                    </li>
                  `).join("")}
                </ul>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("");
    }

    const eduContainer = document.getElementById("modal-education-container");
    if (eduContainer) {
      eduContainer.innerHTML = education.map(edu => `
        <div class="p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-gray-800/80 bg-white dark:bg-[#0e1424]/50 space-y-1.5 shadow-2xs">
          <div class="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">${edu.degree}</div>
          <div class="text-xs text-indigo-600 dark:text-indigo-400 font-mono">${edu.school} &bull; ${edu.location}</div>
          <div class="text-[11px] font-mono text-slate-500 dark:text-gray-500">${edu.period}</div>
          ${edu.honors.length > 0 ? `
            <div class="pt-2 border-t border-slate-200 dark:border-gray-800/60 space-y-1 mt-2">
              ${edu.honors.map(h => `
                <div class="text-xs text-amber-600 dark:text-amber-300/90 flex items-center gap-1.5">
                  <i data-lucide="award" class="w-3.5 h-3.5 flex-shrink-0"></i>
                  <span>${h}</span>
                </div>
              `).join("")}
            </div>
          ` : ""}
        </div>
      `).join("");
    }

    const refContainer = document.getElementById("modal-references-container");
    if (refContainer) {
      refContainer.innerHTML = references.map(r => `
        <div class="p-3 sm:p-3.5 rounded-xl border border-slate-200 dark:border-gray-800/80 bg-white dark:bg-[#0e1424]/50 space-y-1 text-xs shadow-2xs">
          <div class="font-semibold text-slate-900 dark:text-white">${r.name}</div>
          <div class="text-indigo-600 dark:text-indigo-400 text-[11px] font-mono">${r.role} &bull; ${r.company}</div>
          <div class="text-slate-500 dark:text-gray-400 text-[11px]">${r.contact}</div>
          <div class="text-slate-500 dark:text-gray-500 truncate text-[11px]">${r.email}</div>
        </div>
      `).join("");
    }
  }

  initTerminal() {
    const outputContainer = document.getElementById("terminal-output");
    if (!outputContainer) return;

    if (this.cliInterval) clearInterval(this.cliInterval);
    outputContainer.innerHTML = "";
    
    const lines = this.model.terminalSequences[this.activeCliTab];
    let idx = 0;

    this.cliInterval = setInterval(() => {
      if (idx < lines.length) {
        const div = document.createElement("div");
        div.className = "flex items-start gap-2 animate-in fade-in slide-in-from-left-2 duration-150";
        div.innerHTML = `
          <span class="text-indigo-400 select-none flex-shrink-0">&gt;</span>
          <span class="${idx === lines.length - 1 ? "text-emerald-400 font-semibold" : "text-gray-300"} break-all">${lines[idx]}</span>
        `;
        outputContainer.appendChild(div);
        idx++;
      } else {
        clearInterval(this.cliInterval);
      }
    }, 450);
  }

  init3DTilt() {
    // Only bind tilt on pointer-fine desktop environments to avoid mobile viewport jitter
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cards = document.querySelectorAll(".interactive-card");
    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        card.style.setProperty('--card-x', `${x}px`);
        card.style.setProperty('--card-y', `${y}px`);
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      });
    });
  }
}

// 4. Main Controller
class AppController {
  constructor() {
    this.model = new PortfolioModel();
    this.view = new PortfolioView(this.model);
    this.particles = null;

    this.init();
  }

  init() {
    this.view.renderAll();
    this.particles = new ParticleNetwork("mesh-canvas");

    this.bindEvents();
    this.initScrollReveal();
    this.initScrollProgress();
    this.initCursorGlow();
  }

  bindEvents() {
    // Theme Toggle
    const themeBtn = document.getElementById("theme-toggle-btn");
    const themeBtnMobile = document.getElementById("theme-toggle-mobile");
    const toggleHandler = () => {
      document.documentElement.classList.toggle("dark");
      this.view.refreshIcons();
    };
    if (themeBtn) themeBtn.addEventListener("click", toggleHandler);
    if (themeBtnMobile) themeBtnMobile.addEventListener("click", toggleHandler);

    // Mobile Navigation Drawer Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Smooth Scroll Navigation Links
    document.addEventListener("click", (e) => {
      const link = e.target.closest(".nav-link");
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute("href").replace("#", "");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const headerOffset = 70;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          window.history.pushState(null, "", `#${targetId}`);
        }
        if (mobileMenu) mobileMenu.classList.add("hidden");
      }
    });

    // Terminal Tabs Switcher
    const tabsContainer = document.getElementById("terminal-tabs");
    if (tabsContainer) {
      tabsContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".cli-tab");
        if (btn) {
          document.querySelectorAll(".cli-tab").forEach(t => {
            t.className = "cli-tab px-2 py-0.5 rounded transition-colors text-gray-400 hover:text-white";
          });
          btn.className = "cli-tab px-2 py-0.5 rounded transition-colors bg-indigo-600 text-white font-medium";
          this.view.activeCliTab = btn.getAttribute("data-tab");
          this.view.initTerminal();
        }
      });
    }

    // Skills Category Filter Buttons
    const filterContainer = document.getElementById("skills-filter-container");
    if (filterContainer) {
      filterContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".skill-filter-btn");
        if (btn) {
          this.view.selectedSkillCategory = btn.getAttribute("data-category");
          this.view.renderSkillFilters();
          this.view.renderSkills();
          this.view.refreshIcons();
        }
      });
    }

    // Architecture Tier Click Inspection
    const archContainer = document.getElementById("architecture-tiers-container");
    if (archContainer) {
      archContainer.addEventListener("click", (e) => {
        const card = e.target.closest(".arch-tier-card");
        if (card) {
          this.view.activeArchNode = parseInt(card.getAttribute("data-node"), 10);
          this.view.renderArchitecture();
        }
      });
    }

    // Modal Triggers: Case Study
    const openCaseStudy = () => {
      document.getElementById("case-study-modal").classList.remove("hidden");
      document.body.style.overflow = "hidden";
      this.view.refreshIcons();
    };
    const closeCaseStudy = () => {
      document.getElementById("case-study-modal").classList.add("hidden");
      document.body.style.overflow = "";
    };
    document.addEventListener("click", (e) => {
      if (e.target.closest("#open-case-study-btn")) openCaseStudy();
      if (e.target.closest("#close-case-study-btn") || e.target.closest("#close-case-study-bottom-btn") || e.target.classList.contains("modal-backdrop")) {
        closeCaseStudy();
      }
    });

    // Modal Triggers: Resume
    const openResume = () => {
      document.getElementById("resume-modal").classList.remove("hidden");
      document.body.style.overflow = "hidden";
      this.view.refreshIcons();
    };
    const closeResume = () => {
      document.getElementById("resume-modal").classList.add("hidden");
      document.body.style.overflow = "";
    };
    document.addEventListener("click", (e) => {
      if (e.target.closest("#open-resume-btn-hero") || e.target.closest("#open-resume-btn-section")) openResume();
      if (e.target.closest("#close-resume-modal-btn") || e.target.closest("#close-resume-bottom-btn") || (e.target.classList.contains("modal-backdrop") && !document.getElementById("resume-modal").classList.contains("hidden"))) {
        closeResume();
      }
    });
  }

  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal-item").forEach(el => observer.observe(el));
  }

  initScrollProgress() {
    const progressBar = document.getElementById("scroll-progress");
    window.addEventListener("scroll", () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.pageYOffset / totalScroll) * 100 : 0;
      if (progressBar) progressBar.style.width = `${progress}%`;
    });
  }

  initCursorGlow() {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const glow = document.getElementById("cursor-glow");
    window.addEventListener("mousemove", (e) => {
      const isDark = document.documentElement.classList.contains("dark");
      if (glow) {
        glow.style.background = isDark
          ? `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, rgba(99, 102, 241, 0.12), transparent 80%)`
          : `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, rgba(99, 102, 241, 0.08), transparent 80%)`;
      }
    });
  }
}

// Instantiate and Mount on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  window.app = new AppController();
});