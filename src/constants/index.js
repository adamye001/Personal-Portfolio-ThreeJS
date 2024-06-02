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
	dotnet,
	blazor,
	nextjs,
	lepao,
	hypeeyes,
	yf,
	lp,
	sakura,
	foodOrder,
	threejs,
	UoM,
	portfolio,
	js,
	carhub,
	airbnb,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'qualification',
		title: 'Qualification',
	},
	{
		id: 'feedbacks',
		title: 'Feedbacks',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: '.NET',
		icon: web,
	},
	{
		title: 'React.js',
		icon: mobile,
	},
	{
		title: 'Node.js',
		icon: backend,
	},
	{
		title: 'SQL',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'DOTNET',
		icon: dotnet
	},
	{
		name: 'Blazor',
		icon: blazor,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'nextjs',
		icon: nextjs,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'git',
		icon: git,
	},
];

const experiences = [
	{
		titles: ['Full Stack Software Developer'],
		company_name: 'LeasePLUS Team Pty Ltd',
		icon: lp,
		iconBg: '#ffffff',
		date: 'Aug 2023 - Present',
		points: [
			'Developed a new internal system, consolidating two critical business systems into one platform, supporting a large customer base and handling complex business logic',
			'Revamped and streamlined the frontend of two websites, collaborating with UI Designers and Marketing, typically completing and deploying tasks within one to two days',
			'Reviewed and refactored the existing system, proactively implementing new features that helped win new contracts and increase the company\'s business scale',
			'Generated business reports, designed stored procedures, and configured automated processes, enabling management to make informed decisions and automate business processes, reducing labour costs',
			'Designed Kanban boards and workflows, improving workflow management, tracking ticket progress during peak periods, and ensuring business requirements were fulfilled, resulting in increased task throughput',
			'Established and optimised Build and Release Pipelines, improving version control and environment consistency, and reducing manual deployment efforts'
		],
	},
	{
		titles: ['Software Developer'],
		company_name: 'Shanghai Lepao Tea Co',
		icon: lepao,
		iconBg: '#ffffff',
		date: 'Nov 2022 - Jun 2023',
		points: [
			'Developed the Event Data System using Node.js to build APIs collecting data from numerous devices and PHP for web-based data visualisation, improving data processing efficiency',
			'Converted business requirements into technical specifications and developed the mobile app frontend, reducing development time and enhancing user experience through direct stakeholder communication',
			"Managed company accounts on different cloud platforms, ensuring correct configuration and smooth operation of services, and negotiated with providers to reduce costs",
			'Introduced Agile methodology to the development team, ensuring project progress, improving team collaboration, and maintaining comprehensive project documentation, resulting in an increase in on-time project delivery',
		],
	},
];

const qualifications = [
	{
		title: 'Bachelor of Science',
		institution: 'The University of Melbourne',
		icon: UoM,
		iconBg: '#003D86',
		date: 'Jul 2019 - Nov 2022',
		points: [
			'Major in Computing and Software Systems',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'Adam is an outstanding young person, with both independent study abilities and spirit of teamwork and cooperation.',
		name: 'Mingye Li',
		designation: 'Project Supervisor',
		company: 'University of Melbourne',
		image:
			'https://0.academia-photos.com/122572851/30723492/60312330/s200_mingye.li.jpg',
	},
	{
		testimonial:
			'Adam is smart, curious, energetic, and entrepreneurial. He is willing to exert himself when pursuing his passion, and he has impressive people skills.',
		name: 'Dr Wei Zhang',
		designation: 'Professor',
		company: 'University of Massachusetts Boston',
		image:
			'https://www.umb.edu/editor_uploads/images/faculty_profile_photos/zhang_cm_management_mar11_hb_bio.jpg',
	},
	{
		testimonial:
			'I was deeply impressed with his management and communication skills. He worked hard to keep our team process on track and led us throughout the semester.',
		name: 'ChunYu Shih',
		designation: 'Bachelor of Science Student',
		company: 'University of Melbourne',
		image:
			'https://media.licdn.com/dms/image/D5635AQH6vl0jc3oQRA/profile-framedphoto-shrink_400_400/0/1692710312084?e=1717938000&v=beta&t=MDhbSA8IDpK1xdOUWJZjiYi89FIkaAZQxGH-3g_oOYQ',
	},
];

const projects = [
	{
		name: 'Personal Portfolio',
		description:
			'This is my personal portfolio project, showcasing my projects and skills. It is built using various technologies including Three.js, Tailwind CSS, Framer Motion, and React JS.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'threeJS',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: portfolio,
		source_code_link: 'https://github.com/adamye001/Personal-Portfolio-ThreeJS',
	},
	{
		name: 'Car Hub',
		description:
			'CarHub is a web application that simplifies the process of finding, booking, and renting a car. Whether you need a vehicle for a short trip or an extended rental, CarHub offers a seamless experience to make your car rental process effortless.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'nextJS',
				color: 'green-text-gradient',
			},
			{
				name: 'typeScript',
				color: 'pink-text-gradient',
			},
		],
		image: carhub,
		source_code_link: 'https://github.com/adamye001/CarHub',
	},
	{
		name: 'Airbnb Clone',
		description:
			'This is a full-stack application that cloned Airbnb and utilizes Next.js 13, React, Tailwind, Prisma, MongoDB, and NextAuth.',
		tags: [
			{
				name: 'typeScript',
				color: 'pink-text-gradient',
			},
			{
				name: 'nextJS',
				color: 'black-text-gradient',
			},
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'MongoDB',
				color: 'green-text-gradient',
			},
			{
				name: 'zustand',
				color: 'text-blue-500',
			},
			{
				name: 'nextAuth',
				color: 'text-purple-500',
			},
		],
		image: airbnb,
		source_code_link: 'https://github.com/adamye001/Airbnb-Clone',
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
