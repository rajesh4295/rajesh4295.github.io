import { IProfile } from "@models";

export const profileData: IProfile = {
    personal: {
        name: "Rajesh Kumar",
        dob: "4 February 1995",
        experience: 7,
        title: "Full Stack Developer",
        passport: "Available",
        languages: ["English", "Hindi"],
        interests: ["Entrepreneurship", "Reading books", "Technology", "Gaming"]
    },
    contact: {
        email: "rajesh4295@gmail.com",
        phone: [7507984854, 9511694035],
        skype: "rajesh4295",
    },
    skills: {
        professional: [
            { name: "Javascript", type: "frontend", level: "advanced" },
            { name: "Typescript", type: "frontend", level: "advanced" },
            { name: "RxJS", type: "frontend", level: "advanced" },
            { name: "Angular", type: "frontend", level: "advanced" },
            { name: "NodeJS", type: "backend", level: "advanced" },
            { name: "ExpressJS", type: "backend", level: "advanced" },
            { name: "REST", type: "backend", level: "advanced" },
            { name: "HTML5", type: "frontend", level: "advanced" },
            { name: "CSS3/SASS/LESS", type: "frontend", level: "advanced" },
            { name: "ReactJS", type: "frontend", level: "competent" },
            { name: "NextJS", type: "frontend", level: "competent" },
            { name: "GraphQL", type: "backend", level: "competent" },
            { name: "MongoDB", type: "database", level: "competent" },
            { name: "PostgreSQL", type: "database", level: "competent" },
            { name: "Golang", type: "backend", level: "moderate" },
            { name: "Docker", type: "backend", level: "moderate" },
            { name: "GRPC", type: "backend", level: "learning" },
            { name: "Web 3.0", type: "frontend", level: "learning" },
            { name: "Kubernetes", type: "backend", level: "learning" }
        ],
        personal: [
            {name: "Problem Solving"},
            {name: "Quick Learning"},
            {name: "Effective Planning"},
            {name: "Effective Communication"},
            {name: "Team Work"},
            {name: "Flexibility"},
            {name: "Adaptibility"}
        ]
    },
    education: [
        {
            degree: "Bachelor of Science",
            specialization: "Information Technology",
            college: "Pillai College of Arts, Commerce and Science",
            grade: "86.66%",
            startYear: 2012,
            endYear: 2015,
            board: "Mumbai University", 
            place: "Navi Mumbai, MH"
        },
        {
            degree: "Higher Secondary Education",
            specialization: "PCM, Computer Science",
            college: "Kendriya Vidyalaya",
            grade: "79.20%",
            startYear: 2011,
            endYear: 2012,
            board: "CBSE", 
            place: "Mumbai, MH"
        },
        {
            degree: "Senior Secondary Education",
            specialization: "Science",
            college: "Kendriya Vidyalaya",
            grade: "87.40%",
            startYear: 2009,
            endYear: 2010,
            board: "CBSE", 
            place: "Mumbai, MH"
        }
    ],
    summary: [
        "7 years of professional working experience in the IT industry.",
        "Have strong working experience on frontend technologies (Javascript, Typescript, Angular, React, HTML5, CSS3, SASS).",
        "Have strong working experience on backend technologies (NodeJS, ExpressJS, GraphQL, Golang).",
        "Have working experience on databases (MongoDB, PostgreSQL).",
        "Experience in writing industry-standard optimized, maintainable, and scalable codebases.",
        "Developed REST APIs in NodeJS and Golang.",
        "Architecting and developing microservices running in production.",
        "Developed user interfaces and web features based on UX specifications.",
        "Containerizing microservices and make them deployment-ready.",
        "Write unit test cases to achieve code coverage.",
        "Code versioning on GitHub, GitLab.",
        "Team code reviews.",
        "Have strong experience in sync and async (callbacks, promises, observables) programming.",
        "Good knowledge of API authentication using JWT, SSO, OAuth.",
        "Experience in working in Agile methodologies.",
        "Experience in project management tools (Rally, JIRA).",
        "Leading and mentoring teammates.",
        "Experience in taking L1 technical interviews for resources hiring."
    ],
    jobHistory: [
        {
            companyName: "TIBCO",
            role: "Senior Engineer",
            project: [
                {
                    name: "TIBCO Cloud Integration",
                    startYear: 2020,
                    startMonth: "January",
                    description: "TCI is an award-winning cloud application, providing industry-standard integration solutions worldwide.",
                    responsibilities: [
                        "Developed user interfaces and web features from scratch based on UX specifications.",
                        "Developed APIs to fetch data from the backend systems and integration with UI.",
                        "Co-ordinated with Architects, DevOps, and QA engineers.",
                        "Writing unit test cases to achieve code coverage.",
                        "Fixing defects."
                    ],
                    tools: ["Angular", "PrimeNg", "NodeJS", "ExpressJS", "Docker", "Github", "JIRA"]
                }
            ]
        },
        {
            companyName: "L&T Infotech",
            role: "Senior Software Engineer",
            project: [
                {
                    name: "Travelers",
                    startYear: 2018,
                    startMonth: "September",
                    endYear: 2019,
                    endMonth: "December",
                    description: "It's an Insurance project where LTI is developing capabilities to manage insurance functions like creating new/renewal policies (Strategic Work Intake), real-time quote system (RTQ),",
                    responsibilities: [
                        "Developed microservices & REST APIs to run E-Submission.",
                        "capability for insurance brokers like Aon, Marsh (Work Intake).",
                        "Migration of codebase from legacy to latest technologies.",
                        "Writing unit test cases to achieve code coverage.",
                        "Fixing defects."
                    ],
                    tools: ["Javascript", "NodeJS", "ExpressJS", "Kafka", "MongoDB", "Gitlab", "Rally"]
                },
                {
                    name: "EXXON Mobile",
                    startYear: 2016,
                    startMonth: "July",
                    endYear: 2018,
                    endMonth: "August",
                    description: "It is an automation pipeline for image processing (OCR), data extraction, and storage, and data validation.",
                    responsibilities: [
                        "Developed GUIs for the human interaction part (HITL) i.e. QC ",
                        "Verification and Image Annotation with Python APIs.",
                        "Migration of codebase from legacy to latest technologies.",
                    ],
                    tools: ["Javascript", "Angular", "HTML5", "CSS3", "Github"]
                }
            ]
        },
        {
            companyName: "Infosys",
            role: "Systems Engineer",
            project: [
                {
                    name: "Collab60",
                    startYear: 2016,
                    startMonth: "December",
                    endYear: 2018,
                    endMonth: "July",
                    description: "It is an internal employee portal having 60+ apps built with various MVC frameworks and technologies.",
                    responsibilities: [
                        "Developed blog and news portal where admins posted company news, events, and announcements."
                    ],
                    tools: ["Typescript", "ReactJS", "HTML5", "CSS3", "Bootstrap"]
                },
                {
                    name: "RICOH EUROPE PLC",
                    startYear: 2015,
                    startMonth: "December",
                    endYear: 2016,
                    endMonth: "November",
                    description: "It's a support and maintenance project where Infosys is handling the complete VMware Infrastructure and servers.",
                    responsibilities: [
                        "Developed a dashboard for alert monitoring and incidents notifications with Service Now APIs.",
                    ],
                    tools: ["Angular", "HTML5", "CSS3", "Bootstrap", "Github"]
                }
            ]
        },
    ],
    projects: [
        {
            name: "News Application",
            description: "Developed news app (Newsbite) using Ionic4 and Angular5, deployed in the play store. Server written in Node JS and deployed on “Zeit Now” hosting.",
            tools: ["Ionic", "Angular", "NodeJS"]
        },
        {
            name: "Social media video downloader application",
            description: "Developed social media video downloader app with React Native and Redux.",
            tools: ["React Native", "Redux"]
        },
        {
            name: "E-Commerce cart and wishlist",
            description: "Developed shopping cart and wishlist feature with ReactJS.",
            tools: ["ReactJS"]
        },
        {
            name: "Data store",
            description: "Developed key-value in-memory store with Go.",
            tools: ["Golang"]
        },
        {
            name: "Authentication API",
            description: "Developed username/password authentication APIs with Go.",
            tools: ["Golang"]
        },
        {
            name: "Website traffic generator",
            description: "Developed web traffic generation bot with NodeJS and Selenium.",
            tools: ["NodeJS", "Selenium"]
        }
    ],
    social: {
        github: "https://github.com/rajesh4295",
        linkedin: "https://www.linkedin.com/in/rajesh-kumar-04/"
    },
    acheivements: [
        "'MICROSOFT CERTIFIED PROFESSIONAL' (MCP): Exam: 70-480, 84.50%.",
        "'GOOGLE CERTIFIED' in Digital Marketing",
        "'INFOSYS SPOT AWARD' for Outstanding Performance and Valuable Contribution.",
        "13 'CERTIFICATE OF MERIT' for being Topper  in individual subjects in college.",
        "Gold Medalist in Basketball and Table Tennis in Inter School Sports Events."
    ]
};
