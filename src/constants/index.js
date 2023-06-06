import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    lepao,
    hypeeyes,
    yf,
    sakura,
    carrent,
    jobit,
    tripguide,
    threejs,
    UoM,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "qualification",
        title: "Qualification",
    },
    {
        id: "feedbacks",
        title: "Feedbacks"
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const qualifications = [
    {
        title: "Bachelor of Science",
        institution: "The University of Melbourne",
        major: "Computing and Software Systems",
        icon: UoM,
        iconBg: "#003D86",
        date: "Jul 2019 - Nov 2022",
        points: [
            "Studied computing and software system topics, including artificial intelligence and software engineering",
            "Engaged in extracurricular activities, demonstrating passion and dedication to the technology field",
            "Acquired technical skills through research, coursework and practical assignments",
            "Completed 2 web application projects from scratch, with average score above 80%",
        ],
    },
];

const experiences = [
    {
        titles: ["Discord Group Administrator"],
        company_name: "HypeEyes",
        icon: hypeeyes,
        iconBg: "#231F20",
        date: "Aug 2021 - Sep 2022",
        points: [
            "Promoted from a basic support role to a moderator to an administrator within the HypeEyes Discord group",
            "Streamlined the process of acquiring fashion goods in the Discord group, applying critical thinking, and regularly conducting online live-streamed tutorials for the group members",
            "Collaborated with other Discord groups, including automation software or internet proxy groups",
            "Designed and showcased skills in published webhook content by using an Discord script",
            "Planned and maintained Discord monitors on certain websites, ensuring smooth operation",
            "Promoted the Discord group on various online social media platforms, including reaching out to members",
            "Achieved the highest response rate among all staff members by handling 244+ member tickets in 3 months",
        ],
    },
    {
        titles: ["Business Manager"],
        company_name: "YF Studio",
        icon: yf,
        iconBg: "#ffffff",
        date: "Jan 2019 - Nov 2022",
        points: [
            "Started a reselling business and founded a fashion studio by identifying a niche market and target audience, developing a business plan, registering the company, and setting up the workspace for the fashion business",
            "Established brand identity and online presence through social media, website, and e-commerce platforms",
            "Installed automated software tools on cloud-based platforms or bare metal servers to purchase goods at retail prices from global websites, ensuring optimal software performance, scalability, and security",
            "Deployed web proxies on cloud-based platforms, controlled by software scripts, to optimise web browsing, purchasing processes and overall productivity",
            "Optimised the pricing strategy to maximise profits while remaining competitive in the secondary market",
            "Utilised multiple social media platforms, including YouTube, Discord, and Twitter, to enhance personal influence in the fashion industry, increase brand awareness and learn from other service providers",
            "Provided fashion goods acquisition services to business partners, negotiating pricing and terms based on the type and volume of items requested and delivering high-quality service with outstanding results",
            "Developed content strategies aligned with brand goals and engaged with followers to grow reach and credibility, resulting in monthly net profits of 30% and cash flow of $10K - $20K",
        ],
    },
    {
        titles: ["Technology Support", "Marketing Representative"],
        company_name: "Sakura Proxy",
        icon: sakura,
        iconBg: "#FFF9FD",
        date: "Jul 2021 - Nov 2022",
        points: [
            "Clarified customer queries or concerns by carefully listening and asking relevant questions",
            "Utilised company resources and sought guidance from colleagues to research and resolve technical issues",
            "Offered customers solutions or explanations using suitable language for different knowledge backgrounds",
            "Developed marketing strategies by researching the target market, customer demographics and behaviours",
            "Analysed previous marketing campaign data to identify prosperous areas and areas requiring improvement",
            "Generated innovative ideas for new marketing campaigns or initiatives based on research and analysis",
            "Presented the marketing strategy to stakeholders for feedback and approval, making revisions as necessary",
            "Investigated with customers to ensure issues were resolved satisfactorily and sought feedback to improve overall experience",
        ],
    },
    {
        titles: ["Developer", "Product Manager", "Sales Representative"],
        company_name: "Shanghai Lepao Tea Co",
        icon: lepao,
        iconBg: "#ffffff",
        date: "Jan 2023 - Present",
        points: [
            "Planned and developed the cloud-based data platform and mobile application for IoT products, collaborating with embedded systems engineers and product managers",
            "Pitched 2 sales projects per month for business-to-business sales, including managing the company's customer relationships and interactions",
            "Established strong rapport with clients through effective communication, including connecting with clients to understand needs and pain points and tailoring a solution for specific requirements",
            "Introduced agile methodology, requirement engineering, and development to maintain collaboration and continuously improve document repositories, task tracking, and order fulfilment",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    qualifications,
};
