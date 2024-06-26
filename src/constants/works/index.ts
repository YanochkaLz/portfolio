import { IWork } from '@/models/IWork';

import work1 from '@/assets/images/works/1.png';
import work2 from '@/assets/images/works/2.png';
import work3 from '@/assets/images/works/3.png';
import work4 from '@/assets/images/works/4.png';
import work5 from '@/assets/images/works/5.png';
import work6 from '@/assets/images/works/6.png';
import work7 from '@/assets/images/works/7.png';
import work8 from '@/assets/images/works/8.png';
import work9 from '@/assets/images/works/9.png';
import work10 from '@/assets/images/works/10.png';
import work11 from '@/assets/images/works/11.png';
import work12 from '@/assets/images/works/12.png';

export const works: IWork[] = [
	{
		title: 'IT-brains',
		description:
			'This is an exciting website created for those who dream of exploring new opportunities in the IT field and becoming proficient Full-stack developers. With its beauty and functionality, it captures attention and inspires individuals to reach new heights in their career growth.',
		urlGitHub: 'https://github.com/YanochkaLz/itbrains',
		url: 'https://yanochkalz.github.io/itbrains/',
		image: work1,
		technologies: ['HTML', 'CSS', 'JavaScript'],
		features: ['Utilization of meta tags for search engine optimization (SEO)'],
		company: '',
	},
	{
		title: 'SNIFF (team project)',
		description:
			'The Sniff project is designed to provide a convenient and efficient way for pet owners to connect with lost or found pets.',
		urlGitHub: 'https://github.com/Sniff-project/frontend',
		image: work2,
		technologies: [
			'React',
			'React Bootstrap',
			'React Router',
			'React Hook Form',
			'Mui',
			'SCSS',
			'ESLint & Prettier',
			'React Redux',
			'Unit Resting',
			'Leaflet',
			'Jest',
		],
		features: [
			'Familiarized with RACI matrix, Communication plan, Vision & Scope Document, Soft Skills, Scrum, Jira',
		],
		company: 'Sigma Software',
	},
	{
		title: 'Sportfit',
		description: "The Sportfit is a full-stack online men's clothing store.",
		urlGitHub: 'https://github.com/YanochkaLz/Sportfit',
		image: work3,
		technologies: [
			'React',
			'Mobx',
			'SCSS',
			'Bootstrap',
			'REST API',
			'Node JS',
			'Express',
			'CRUD',
			'Postgres',
		],
		features: [
			'Admin panel, shopping cart, item rating, filtering and searching for items, pagination, responsive design, jwt-token generation, error checks',
		],
		company: '',
	},
	{
		title: 'QuickDirection (team project)',
		description:
			'The web application to interaction between students and administration. The project solves problems when ordering certificates, writing applications and communicating with the administration.',
		urlGitHub: 'https://github.com/getinfokhpi/getinfo',
		image: work4,
		technologies: [
			'React',
			'Next JS',
			'Prisma',
			'NextAuth JS',
			'Typescript',
			'React Hook Form',
			'Yup',
			'SCSS',
			'Mantine',
			'Redux Toolkit',
			'TanStack Query',
			'Docker',
			'Postgres',
			'ESLint & Prettier',
		],
		features: ['Pages for administrators, students, teachers', 'Chat system'],
		company: 'Akvelon',
	},
	{
		title: 'IP Address Tracker',
		description:
			'Application to search any IP address or domain and see key information and location.',
		urlGitHub: 'https://github.com/YanochkaLz/ip-address-tracker',
		url: 'https://yanochkalz.github.io/ip-address-tracker/',
		image: work5,
		technologies: [
			'React',
			'TypeScript',
			'JavaScript',
			'SCSS',
			'Redux Toolkit',
			'Leaflet',
			'Mui',
			'Formik',
			'Yup',
		],
		features: [
			'To get the IP Address locations, I used the IP Geolocation API by IPify',
			'To generate the map, I used LeafletJS',
		],
		company: '',
	},
	{
		title: 'Age Calculator',
		description:
			'The small application where the user, by entering the date of birth, calculates the age (years, months, days).',
		urlGitHub: 'https://github.com/YanochkaLz/age-calculator',
		url: 'https://yanochkalz.github.io/age-calculator/',
		image: work6,
		technologies: ['React'],
		features: ['Date validation'],
		company: '',
	},
	{
		title: 'Clubweb',
		description: 'Layout adaptive site Clubweb.',
		urlGitHub: 'https://github.com/YanochkaLz/Clubweb_SiteLayout',
		url: 'https://yanochkalz.github.io/Clubweb_SiteLayout/',
		image: work7,
		technologies: ['HTML', 'CSS'],
		features: ['Responsive/Cross-Browser Design'],
		company: '',
	},
	{
		title: 'Portfolio layout',
		description: 'The simple website layout with some effects.',
		urlGitHub: 'https://github.com/YanochkaLz/SimpleLayoutSite',
		url: 'https://yanochkalz.github.io/SimpleLayoutSite/',
		image: work8,
		technologies: ['HTML', 'CSS', 'JavaScript'],
		features: ['Effects', 'Responsive/Cross-Browser Design'],
		company: '',
	},
	{
		title: 'Draw By Heart',
		description:
			'This is a drawing application, it contains the ability to move the mouse to draw lines, change the color of the lines, change the width by scrolling, erase and clear the canvas, as well as trigger an animation of the drawing process.',
		urlGitHub: 'https://github.com/YanochkaLz/DrawByHeart_App',
		url: 'https://yanochkalz.github.io/DrawByHeart_App/',
		image: work9,
		technologies: ['HTML', 'CSS', 'Javascript', 'Canvas'],
		features: ['Animation of drawing process'],
		company: '',
	},
	{
		title: 'Avatar',
		description:
			'This is a beautiful site with a parallax effect when scrolling, which is able to immerse the viewer in the amazing atmosphere of the world of Avatar. I was very inspired by the movies "Avatar 1" and "Avatar 2", so I decided to make this art project.',
		urlGitHub: 'https://github.com/YanochkaLz/Avatar_SwiperSite',
		url: 'https://yanochkalz.github.io/Avatar_SwiperSite/',
		image: work10,
		technologies: ['HTML', 'CSS', 'Javascript', 'Swiper JS', 'Particles JS', 'Photoshop'],
		features: ['Parallax effect', 'Particles effect'],
		company: '',
	},
	{
		title: 'Pacman',
		description:
			'Pac-Man is a classic arcade game. The goal of the game is to guide Pacman through the maze, eating all the dots and avoiding colorful ghosts in the process. The gameplay becomes increasingly difficult as you progress through the levels. The ghosts become faster and more aggressive, so it becomes harder for Pacman to avoid them.',
		urlGitHub: 'https://github.com/YanochkaLz/pacman',
		url: 'https://yanochkalz.github.io/pacman/',
		image: work11,
		technologies: ['React', 'SCSS', 'Redux Toolkit'],
		features: ['Levels', 'Behavior of ghosts'],
		company: '',
	},
	{
		title: 'Step Form',
		description:
			'This is a project with a step-by-step subscription sequence. It is possible to go through each step, being able to go back to the previous ones to make changes to their choices. At the last step will appear the information about your choice and confirm your order.',
		urlGitHub: 'https://github.com/YanochkaLz/step-form',
		url: 'https://step-form-8h3nskv9m-yanochkalzs-projects.vercel.app',
		image: work12,
		technologies: ['Next JS', 'Typescript', 'Redux', 'Mantine', 'SCSS'],
		features: ['Convenient navigation'],
		company: '',
	},
];
