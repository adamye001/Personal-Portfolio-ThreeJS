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
    nextjs,
    lepao,
    hypeeyes,
    yf,
    sakura,
    foodOrder,
    threejs,
    UoM,
    portfolio,
    js,
    carhub,
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
        title: "Feedbacks",
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
        title: "Frontend Developer",
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
        name: "nextjs",
        icon: nextjs,
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
            "Acquired technical skills through research, coursework and practical assignments",
            "Completed 2 web application projects from scratch with an average score above 80%",
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
            "Streamlined the process of acquiring fashion goods in the Discord group, organizing and conducting  about 100 online live-streamed tutorials for group members",
            "Designed and published webhook content using Discord scripts, enhancing the group's functionality and user experience",
            "Planned and maintained Discord monitors on specific websites, ensuring up-to-date information and delivering timely notifications to group members",
            "Achieved the highest response rate among all staff members by handling 244+ member tickets in 3 months",
        ],
    },
    {
        titles: ["Technology Support", "Marketing Representative"],
        company_name: "Sakura Proxy",
        icon: sakura,
        iconBg: "#FFF9FD",
        date: "Jul 2021 - Nov 2022",
        points: [
            "Researched and resolved technical issues using company resources and guidance from colleagues",
            "Provided suitable solutions or explanations to customers with varying knowledge backgrounds",
            "Developed marketing strategies based on research of the target market, customer demographics, and behaviours",
            "Presented marketing strategies to stakeholders for feedback and approval, making revisions as necessary",
            "Ensured customer issues were resolved satisfactorily and sought feedback to improve the overall experience",
        ],
    },
    {
        titles: ["Business Manager"],
        company_name: "YF Studio",
        icon: yf,
        iconBg: "#ffffff",
        date: "Jan 2019 - Nov 2022",
        points: [
            "Provided fashion goods acquisition services to business partners, negotiating pricing and terms based on the type and volume of items requested and delivering high-quality service with outstanding results",
            "Created content strategies aligned with brand goals and engaged with followers to grow reach and credibility, resulting in monthly net profits of 30% and cash flow of $10K - $20K",
            "Utilized automated software tools on cloud-based platforms to optimize purchasing processes, ensuring efficient procurement of goods at retail prices from global websites",
            "Implemented web proxies controlled by software scripts to optimize web browsing and enhance overall productivity",
            "Leveraged multiple social media platforms, including YouTube, Discord, and Twitter, to increase brand awareness, engage with followers, and learn from other industry service providers",
        ],
    },
    {
        titles: ["Developer", "Product Manager", "Sales Representative"],
        company_name: "Shanghai Lepao Tea Co",
        icon: lepao,
        iconBg: "#ffffff",
        date: "Jan 2023 - Present",
        points: [
            "Planned and developed a cloud-based data platform and mobile application for IoT products, collaborating with embedded systems engineers and product managers",
            "Pitched 2 sales projects per month for business-to-business sales, including managing the company's customer relationships and interactions",
            "Established strong rapport with clients through effective communication, understanding needs and tailoring solutions to specific requirements",
            "Introduced agile methodology, requirement engineering, and development practices to maintain collaboration and continuously improve document repositories, task tracking, and order fulfilment",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Adam is an outstanding young person, with both independent study abilities and spirit of teamwork and cooperation.",
        name: "Mingye Li",
        designation: "Project Supervisor",
        company: "University of Melbourne",
        image: "https://0.academia-photos.com/122572851/30723492/60312330/s200_mingye.li.jpg",
    },
    {
        testimonial:
            "Adam is smart, curious, energetic, and entrepreneurial. He is willing to exert himself when pursuing his passion, and he has impressive people skills.",
        name: "Dr Wei Zhang",
        designation: "Professor",
        company: "University of Massachusetts Boston",
        image: "https://www.umb.edu/editor_uploads/images/faculty_profile_photos/zhang_cm_management_mar11_hb_bio.jpg",
    },
    {
        testimonial:
            "I was deeply impressed with his management and communication skills. He worked hard to keep our team process on track and led us throughout the semester.",
        name: "ChunYu Shih",
        designation: "Bachelor of Science Student",
        company: "University of Melbourne",
        image: "https://media.licdn.com/dms/image/C5603AQEGQ-3KOedboA/profile-displayphoto-shrink_200_200/0/1555512482699?e=1691625600&v=beta&t=Rj-DMkPrOex8bO3JmNwxYjBYha1udcePHETAUL3ftGQ",
    },
];

const projects = [
    {
        name: "Personal Portfolio",
        description:
            "This is my personal portfolio project, showcasing my projects and skills. It is built using various technologies including Three.js, Tailwind CSS, Framer Motion, and React JS.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link:
            "https://github.com/adamye001/Personal-Portfolio-ThreeJS",
    },
    {
        name: "Food Ordering App",
        description:
            "This is a food ordering app. Leveraging the power of React and integrating seamlessly with Firebase, this project redefines the way you order food. Discover menus, customize your cart, and place orders effortlessly.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
        ],
        image: foodOrder,
        source_code_link:
            "https://github.com/adamye001/Section-17-Project-Food-Order-App",
    },
    {
        name: "JavaScript DS and Algo",
        description:
            "This repository contains my notes on data structures, LeetCode problems, and their corresponding solutions. It serves as a resource for learning and practicing JavaScript algorithms and data structures.",
        tags: [
            {
                name: "javaScript",
                color: "blue-text-gradient",
            },
            {
                name: "dataStructures",
                color: "green-text-gradient",
            },
            {
                name: "algorithms",
                color: "pink-text-gradient",
            },
        ],
        image: js,
        source_code_link:
            "https://github.com/adamye001/JavaScript-Data-Stuctures-and-Algorithms",
    },
    {
        name: "Car Hub",
        description:
            "CarHub is a web application that simplifies the process of finding, booking, and renting a car. Whether you need a vehicle for a short trip or an extended rental, CarHub offers a seamless experience to make your car rental process effortless.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
        ],
        image: carhub,
        source_code_link: "https://github.com/adamye001/CarHub",
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
