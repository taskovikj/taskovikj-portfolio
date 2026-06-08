export interface Skill {
    title: string
    description: string
}

export interface Project {
    title: string
    description: string
    image: string
    techUsed: string[]
    repo?: string
    preview?: string
    highlight?: string
}

export interface Experience {
    role: string
    company: string
    period: string
    details: string[]
}

export interface Certification {
    title: string
    level: string
    link?: string
}

export interface Education {
    degree: string
    institution: string
    period: string
}

const skills: Skill[] = [
    {
        title: 'Backend Development',
        description: 'Django, FastAPI, Spring Boot, REST APIs, PostgreSQL, MySQL, SQLite, Elasticsearch',
    },
    {
        title: 'Data Science & Machine Learning',
        description: 'Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, DuckDB, Jupyter, PowerBI',
    },
    {
        title: 'Frontend Technologies',
        description: 'TypeScript, JavaScript, React, Next.js, Vue.js, Angular, Tailwind CSS, Bootstrap',
    },
    {
        title: 'DevOps & Automation',
        description: 'Docker, Docker Compose, Caddy, Linux, GitHub Actions, Selenium, ffmpeg, MCP tools',
    },
]

const featuredProjects: Project[] = [
    {
        title: 'Dockio',
        description:
            'Open-source self-hosted VPS deployment panel for Git, Docker image, and Docker Compose deployments. It includes GitHub App repository deploys, Caddy routing, managed databases, runtime logs, health checks, firewall helpers, deployment history, and audit logs.',
        image: '/projects/dockio.png',
        techUsed: ['Next.js', 'TypeScript', 'Docker', 'Caddy', 'Linux', 'GitHub App', 'Systemd'],
        repo: 'https://github.com/taskovikj/supavibe-panel',
        preview: 'https://dockio.dev',
        highlight: 'Open Source Platform',
    },
    {
        title: 'AutoTyp.ch',
        description:
            'Swiss vehicle type approval and Typenschein lookup product built around 220,000+ ASTRA records, technical vehicle data, multilingual guide pages, and canton-level tax-estimate workflows.',
        image: '/projects/autotyp.png',
        techUsed: ['Next.js', 'TypeScript', 'Swiss Open Data', 'SEO', 'Data Modeling'],
        preview: 'https://autotyp.ch',
        highlight: 'Swiss Data Product',
    },
    {
        title: 'Facebook Content Automation Dashboard',
        description:
            'Local-first dashboard for Facebook page profiles, topic queues, OpenAI-assisted scripts, TTS, transcription, subtitle generation, ffmpeg video rendering, scheduling, retryable Meta publishing queues, logs, and health checks.',
        image: '/projects/facebook_automation.png',
        techUsed: ['FastAPI', 'SQLite', 'APScheduler', 'OpenAI', 'Meta Graph API', 'ffmpeg'],
        repo: 'https://github.com/taskovikj/facebook-content-automation-dashboard',
        highlight: 'Automation System',
    },
]

const projects: Project[] = [
    ...featuredProjects,
    {
        title: 'SwissDataMCP',
        description:
            'Local MCP server for source-grounded Swiss open-data discovery, DuckDB analytics, dataset loading, charts, interactive reports, and citation packs for agent workflows.',
        image: '/projects/swissdatamcp.png',
        techUsed: ['Python', 'MCP', 'DuckDB', 'Pandas', 'Plotly', 'Matplotlib'],
        repo: 'https://github.com/taskovikj/swiss-open-data-mcp',
        highlight: 'Open Data Tooling',
    },
    {
        title: 'Public Health and Environmental Degradation',
        description:
            'Data science research project exploring relationships between environmental degradation and public health outcomes using global sources such as GDELT, WHO GHO, and OECD data.',
        image: '/projects/public_health.png',
        techUsed: ['Python', 'Pandas', 'Jupyter', 'Matplotlib', 'GDELT', 'WHO GHO', 'OECD API'],
        repo: 'https://github.com/taskovikj/public_health',
        highlight: 'Data Science',
    },
    {
        title: 'Django REST + Elasticsearch Blog Platform',
        description:
            'Feature-rich blog platform with REST API support, Elasticsearch search, authentication, custom front page, follow/unfollow, comments, email notifications, GitHub Actions, Docker, and Selenium tests.',
        image: '/projects/django_rest_es.png',
        techUsed: ['Django', 'DRF', 'Elasticsearch', 'Docker', 'PostgreSQL', 'GitHub Actions', 'Selenium'],
        repo: 'https://github.com/taskovikj/django_rest_es',
        highlight: 'Full-Stack Search App',
    },
    {
        title: 'Commerce App',
        description:
            'Auction-style web application where users can browse, search, filter, bid on items, manage watchlists, and explore categories through a dynamic frontend experience.',
        image: '/projects/commerce.png',
        techUsed: ['Django', 'Vue.js', 'Bootstrap', 'Axios', 'MySQL'],
        repo: 'https://github.com/taskovikj/commerce',
        highlight: 'Full-Stack Web App',
    },
    {
        title: 'Storage Management App',
        description:
            'Inventory and storage management system with multi-location tracking, analytics, and role-aware access patterns for warehouse and small-business operations.',
        image: '/projects/lager.png',
        techUsed: ['Django', 'Bootstrap', 'Axios', 'MySQL'],
        highlight: 'Operations Tool',
    },
    {
        title: 'NewsClustering App',
        description:
            'News aggregation and clustering platform that scrapes articles from multiple sources, maps them into custom categories, and supports archive-style browsing.',
        image: '/projects/mnm.png',
        techUsed: ['Django', 'Bootstrap', 'PostgreSQL', 'Pandas'],
        highlight: 'Data-Backed Publishing',
    },
    {
        title: 'Motomak.ch',
        description:
            'Swiss motorcycle rental and sales platform with Sanity CMS, dynamic listings, filtering, inquiry forms with photo uploads, email notifications, structured metadata, sitemap/robots, and production SEO.',
        image: '/projects/motomak.png',
        techUsed: ['Next.js', 'Sanity CMS', 'TypeScript', 'Vercel', 'Cloudflare', 'SEO', 'Resend'],
        repo: 'https://github.com/taskovikj/motomak',
        preview: 'https://motomak.ch',
        highlight: 'Production Web App',
    },
]

export const userData = {
    name: 'Branislav Taskovikj',
    title: 'Full-Stack Software Engineer | Backend, Data Workflows & Automation',
    email: 'branislav.taskovikj@gmail.com',
    phone: '+41 76 583 14 10',
    domain: 'taskovikj.io',
    social: {
        instagram: 'instagram.com/taskovikj',
        linkedin: 'linkedin.com/in/branislav-taskovikj-1a1377243',
        github: 'github.com/taskovikj',
    },
    aboutHomePage: {
        summary:
            'I build practical full-stack systems across backend engineering, data workflows, automation, and production websites. My work combines Python/Django/FastAPI, TypeScript/Next.js, Docker, SQL databases, and data tooling to turn real-world ideas into reliable software.',
        skills,
    },
    featuredProjects,
    projects,
    profileImage: '/profile_picture.jpg',
    about: {
        summary:
            'I have worked on software systems that need to be reliable, searchable, and easy to operate. My recent projects include self-hosted deployment tooling, Swiss data products, content automation systems, production websites, and data science analysis. I enjoy building tools that connect clean backend architecture with useful interfaces.',
        skills,
    },
    workExperience: [
        {
            role: 'Freelance Software Engineer',
            company: 'Self-Employed',
            period: 'Nov 2023 - Present',
            details: [
                'Build custom web applications, automation dashboards, and data products using Python, Django/FastAPI, Docker, SQL databases, and TypeScript frontends.',
                'Recent work includes Swiss data products, motorcycle marketplace features, Facebook content automation, and open-source deployment tooling.',
            ],
        },
        {
            role: 'Software Engineer Intern',
            company: 'Marketing Platform by LINK Mobility - Kumanovo, North Macedonia',
            period: 'Jul 2023 - Oct 2023',
            details: [
                'Contributed to backend service development with Django, PostgreSQL, and Elasticsearch.',
                'Implemented automated unit and integration tests and supported clean architecture practices.',
            ],
        },
    ] as Experience[],
    certifications: [
        {
            title: 'Python for Big Data Processing',
            level: 'Certificate',
            link: '/certificates/6467724370TB.pdf',
        },
        {
            title: 'Deep Learning with TensorFlow and PyTorch',
            level: 'Certificate',
            link: '/certificates/4724193460TB.pdf',
        },
        {
            title: 'High-Performance Computing in Distributed Systems (MPI)',
            level: 'Certificate',
            link: '/certificates/4347401120TB.pdf',
        },
        {
            title: 'Introduction to High-Performance Big Data Processing',
            level: 'Certificate',
            link: '/certificates/1646894024TB.pdf',
        },
        {
            title: 'HPC in Assistive Technologies',
            level: 'Certificate',
            link: '/certificates/8564917775TB.pdf',
        },
        {
            title: 'Map/Reduce (Hadoop, Spark, Flink)',
            level: 'Certificate',
            link: '/certificates/2574379464TB.pdf',
        },
    ] as Certification[],
    education: [
        {
            degree: 'B.Sc. in Computer Science & Computer Engineering - Software Engineering and Information Systems',
            institution: 'Faculty of Computer Science and Engineering, Skopje',
            period: '2020 - 2025',
        },
    ] as Education[],
    personalInterests:
        'In my free time, I enjoy experimenting with machine learning models, exploring data science tools, reading about backend optimization techniques, gaming from time to time, watching basketball, and following eSports tournaments.',
}
