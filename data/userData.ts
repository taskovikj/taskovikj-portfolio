// data/siteInfo.ts
export interface Project {
    title: string;
    description: string;
    image: string;
    techUsed: string[];
    repo: string;
    highlight?: string; // Marked as optional
}
export interface Skill {
    title: string;
    description: string;
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
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
}

export const userData = {
    name: "Branislav Taskovikj ",
    title: " & Cloud Solutions Architect",
    email: "branislav.taskovikj@gmail.com",
    phone: "+1 (123) -7890",
    domain:"taskovikj.io",
    social: {
        instagram: "instagram.com/taskovikj",
        twitter: "twitter.com/bjorn",
        linkedin: "linkedin.com/in/bjorn",
        github: "github.com/taskovikj",
    },
    aboutHomePage: {
        summary:
            "I'm a seasoned data scientist and cloud architect with a strong background in building machine learning pipelines, architecting scalable cloud solutions, and delivering insights through data-driven analytics. I specialize in AWS, Python, and MLOps.",
        skills: [
            {
                title: "AI & Machine Learning",
                description: "TensorFlow, PyTorch, building end-to-end ML pipelines",
            },
            {
                title: "Cloud Architecture & MLOps",
                description: "AWS (EC2, S3, Lambda, SageMaker), Docker, Kubernetes, CI/CD pipelines",
            },
            {
                title: "Programming",
                description: "Python, TypeScript, Go, and more",
            },
            {
                title: "Data Science",
                description: "Statistical analysis, data visualization, feature engineering",
            },
        ],
    },
    featuredProjects: [
        {
            title: "Stardex - Explore GitHub Stars Intelligently",
            description:
                "Explore GitHub Stars in real-time with AI-driven classification and analytics.",
            image: "/stardex.png",
            techUsed: ["React", "Next.js", "AI", "AWS"],
            repo: "https://github.com/bjorn/stardex",
            highlight: "Featured Project", // Now exists as optional
        },
        {
            title: "PolyAgent Research Intelligence",
            description:
                "A modular, multi-agent AI research and report-generation platform, providing insights into advanced ML models.",
            image: "/polyagent.png",
            techUsed: ["Python", "PyTorch", "Docker", "Kubernetes"],
            repo: "https://github.com/bjorn/polyagent",
            highlight: "Featured Project",
        },
        {
            title: "AIScout",
            description:
                "Real-time AI/ML platform analyzing performance metrics and data to guide sports scouting decisions.",
            image: "/aiscout.png",
            techUsed: ["AI", "Machine Learning", "Node.js"],
            repo: "https://github.com/bjorn/aiscout",
            // No highlight provided here, and that's okay
        },
    ],
    projects: [
        {
            title: "Project One",
            description: "This is a description for Project One.",
            image: "/project1.png",
            techUsed: ["React", "Next.js", "Tailwind"],
            repo: "https://github.com/bjorn/project-one",
        },
        {
            title: "Project Two",
            description: "This is a description for Project Two.",
            image: "/project2.png",
            techUsed: ["Python", "Flask", "PostgreSQL"],
            repo: "https://github.com/bjorn/project-two",
        },
        // You can add more projects as needed.
    ],
    profileImage: "/ja.jpg", // Ensure this image exists in your public folder.
    about: {
        summary:
            "I'm a seasoned data scientist and cloud architect with a strong background in building machine learning pipelines, architecting scalable cloud solutions, and delivering insights through data-driven analytics. I specialize in AWS, Python, and MLOps.",
        skills: [
            {
                title: "AI & Machine Learning",
                description: "TensorFlow, PyTorch, building end-to-end ML pipelines",
            },
            {
                title: "Cloud Architecture & MLOps",
                description:
                    "AWS (EC2, S3, Lambda, SageMaker), Docker, Kubernetes, CI/CD pipelines",
            },
            {
                title: "Programming",
                description: "Python, TypeScript, Go, and more",
            },
            {
                title: "Data Science",
                description: "Statistical analysis, data visualization, feature engineering",
            },
        ] as Skill[],
    },
    workExperience: [
        {
            role: "Senior Data Scientist",
            company: "ABC Tech",
            period: "Jan 2021 - Present",
            details: [
                "Built and deployed end-to-end ML models for real-time analytics on AWS.",
                "Led a team of 5 data scientists, implementing best practices for MLOps.",
                "Developed automated CI/CD pipelines for model deployment.",
            ],
        },
        {
            role: "Cloud Solutions Architect",
            company: "XYZ Cloud Services",
            period: "Jun 2018 - Dec 2020",
            details: [
                "Designed scalable architectures on AWS, reducing infrastructure costs by 30%.",
                "Migrated legacy systems to containerized microservices on Kubernetes.",
                "Implemented DevOps pipelines for faster and more reliable releases.",
            ],
        },
    ] as Experience[],
    certifications: [
        { title: "AWS Certified Solutions Architect", level: "Associate" },
        { title: "AWS Certified Developer", level: "Associate" },
        { title: "AWS Certified SysOps Admin", level: "Associate" },
        { title: "AWS Certified SysOps Admin", level: "Associate" },
    ] as Certification[],
    education: [
        {
            degree: "Master of Science in Computer Science",
            institution: "University of Example",
            period: "2014 - 2016",
        },
        {
            degree: "Bachelor of Science in Information Systems",
            institution: "Example State University",
            period: "2010 - 2014",
        },
    ] as Education[],
    personalInterests:
        "In my spare time, I enjoy hiking, reading tech blogs, exploring new machine learning frameworks, and contributing to open-source projects. I’m also an avid traveler, always on the lookout for new cultures and cuisines to experience.",
}
