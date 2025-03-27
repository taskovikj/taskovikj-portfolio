// types.ts
export interface Skill {
    title: string;
    description: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    techUsed: string[];
    repo: string;
    highlight?: string;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    details: string[];
}

export interface Certification {
    title: string;
    level: string;
    link?: string;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
}


export const userData = {
    name: "Branislav Taskovikj",
    title: "Software engineering student & Data Science Enthusiast",
    email: "branislav.taskovikj@gmail.com",
    phone: "+389 XX XXX XXX",
    domain: "taskovikj.io",
    social: {
        instagram: "instagram.com/taskovikj",
        twitter: "twitter.com/yourprofile",
        linkedin: "linkedin.com/in/yourprofile",
        github: "github.com/taskovikj",
    },
    aboutHomePage: {
        summary:
            "I'm a final-year Software Engineering and Information Systems student with just one exam left to complete my degree. I work as a full stack developer with a strong focus on backend technologies like Django, Spring Boot, SQL, and Docker. Recently, I've developed a deep interest in Data Science and have worked with several ML and DNN models using PyTorch, pandas, and other Python tools.",
        skills: [
            {
                title: "Backend Development",
                description: "Django, Spring Boot, SQL, Docker, Elasticsearch",
            },
            {
                title: "Data Science & Machine Learning",
                description: "PyTorch, Pandas, Scikit-learn, TensorFlow,PowerBI, NumPy",
            },
            {
                title: "Programming Languages",
                description: "Python, Java, C, C++, Java Script",
            },
            {
                title: "Frontend Technologies",
                description: "Angular, React, Vue.js",
            },
        ] as Skill[],
    },
    featuredProjects: [
        {
            "title": "Public Health and Environmental Degradation",
            "description": "A data-driven research project that explores the correlation between environmental degradation and public health outcomes, using global data sources to evaluate the effectiveness of current environmental health policies.",
            "image": "/projects/public_health.png",
            "techUsed": ["Python", "Pandas", "Jupyter", "Matplotlib", "GDELT", "WHO GHO", "OECD API"],
            "repo": "https://github.com/taskovikj/environment-health-analysis",
            "highlight": "Featured Project",
        },
        {
            "title": "Storage Management App",
            "description": "A robust storage management application designed for businesses of all sizes. It features comprehensive inventory tracking, multi-location support, real-time analytics, and granular user access control, streamlining warehouse operations and optimizing space utilization.",
            "image": "/projects/lager.png",
            "techUsed": ["Django", "Bootstrap", "Axios", "MySQL"],
            "repo": "https://github.com/yourusername/storage-manager",
            "highlight": "Featured Project"
        },
        {
            "title": "NewsClustering App",
            "description": "Aggregator website that scrapes articles from multiple sources, mapping them into custom categories. It features a comprehensive PDF and video archive, alongside a bespoke blog page.",
            "image": "/projects/mnm.png",
            "techUsed": ["Django", "Bootstrap", "Postgres","Pandas"],
            "repo": "https://github.com/Taskovikj",
            "highlight": "Featured Project"
        },

    ] as Project[],
    projects: [
        {
            "title": "Public Health and Environmental Degradation",
            "description": "A data-driven research project that explores the correlation between environmental degradation and public health outcomes, using global data sources to evaluate the effectiveness of current environmental health policies.",
            "image": "/projects/public_health.png",
            "techUsed": ["Python", "Pandas", "Jupyter", "Matplotlib", "GDELT", "WHO GHO", "OECD API"],
            "repo": "https://github.com/taskovikj/environment-health-analysis",
            "highlight": "Featured Project",
        },
        {
            "title": "Commerce App",
            "description": "An auction-based web application where users can browse, search, filter, and bid on listed items, featuring watchlists, categories, and dynamic frontend interaction.",
            "image": "/projects/commerce.png",
            "techUsed": ["Django", "Vue.js", "Bootstrap", "Axios", "MySQL"],
            "repo": "https://github.com/taskovikj/commerce",
            "highlight": "Featured Project"
        },
        {
            "title": "Storage Management App",
            "description": "A robust storage management application designed for businesses of all sizes. It features comprehensive inventory tracking, multi-location support, real-time analytics, and granular user access control, streamlining warehouse operations and optimizing space utilization.",
            "image": "/projects/lager.png",
            "techUsed": ["Django", "Bootstrap", "Axios", "MySQL"],
            "repo": "https://github.com/taskovikj/",
            "highlight": "Featured Project"
        },
        {
            "title": "NewsClustering App",
            "description": "Aggregator website that scrapes articles from multiple sources, mapping them into custom categories. It features a comprehensive PDF and video archive, alongside a bespoke blog page.",
            "image": "/projects/mnm.png",
            "techUsed": ["Django", "Bootstrap", "Axios", "MySQL"],
            "repo": "https://github.com/yourusername/newcluster",
            "highlight": "Featured Project"
        },
    ] as Project[],
    profileImage: "/ja.jpg",
    about: {
        summary:
            "I’m a final-year student in Software Engineering and Information Systems, focused on full stack development with more experience on the backend side. I’ve worked on building and improving software systems that are reliable and easy to scale. Lately, I’ve become very interested in data science and machine learning, and I’ve been involved in projects that use data to solve real problems. I enjoy learning new things, solving challenges, and building useful software.",
        skills: [
            {
                title: "Backend Development",
                description: "Django, Spring Boot, SQL, Docker, Elasticsearch",
            },
            {
                title: "Data Science & Machine Learning",
                description: "PyTorch, Pandas, Scikit-learn, TensorFlow,PowerBI, NumPy",
            },
            {
                title: "Programming Languages",
                description: "Python, Java, C, C++, Java Script",
            },
            {
                title: "Frontend Technologies",
                description: "Angular, React, Vue.js",
            },
        ] as Skill[],
    },
    workExperience: [
        {
            role: "Software Engineer Intern",
            company: "Marketing Platform by Link Mobility",
            period: "Jul 2023 – Oct 2023",
            details: [
                "Developed and tested web applications using Python, Django, Postgres, Elasticsearch, Docker, Selenium, HTML, CSS, JavaScript, and machine learning.",

                "Ensured code quality via automated testing and best practices.",
            ],
        },
        {
            role: "Freelance Software Engineer",
            company: "Self-Employed",
            period: "Nov 2023 – Present",
            details: [
                "Building custom solutions for clients using Python, Django, Docker, Postgres, and other modern technologies.",
                "Web development for small businesses.",

            ],
        },

    ] as Experience[],
    certifications: [
        {
            title: "Python for Big Data Processing",
            level: "Certificate",
            link: "/certificates/6467724370TB.pdf",
        },
        {
            title: "Deep Learning with TensorFlow and PyTorch",
            level: "Certificate",
            link: "/certificates/4724193460TB.pdf",
        },
        {
            title: "High-Performance Computing in Distributed Systems (MPI)",
            level: "Certificate",
            link: "/certificates/4347401120TB.pdf",
        },
        {
            title: "Introduction to High-Performance Big Data Processing",
            level: "Certificate",
            link: "/certificates/1646894024TB.pdf",
        },
        {
            title: "HPC in Assistive Technologies",
            level: "Certificate",
            link: "/certificates/8564917775TB.pdf",
        },
        {
            title: "Map/Reduce (Hadoop, Spark, Flink)",
            level: "Certificate",
            link: "/certificates/2574379464TB.pdf",
        },
    ] as Certification[],
    education: [
        {
            degree: "Bachelor of Science in Software Engineering and Information Systems",
            institution: "Facility of computer science and engineering-Skopje",
            period: "2020 - Present",
        },
    ] as Education[],
    personalInterests:
        "In my free time, I enjoy experimenting with machine learning models, exploring data science tools, reading about backend optimization techniques, and contributing to open-source projects. I also like gaming from time to time, watching basketball, and following eSports tournaments.",
};