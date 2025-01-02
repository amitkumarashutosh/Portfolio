import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaJava, FaNode } from "react-icons/fa";
import {
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Intermediate proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Node",
    icon: <FaNode className="h-16 w-16 text-emerald-500" />,
    text: "Familiar with Node.js, building scalable server-side applications. Enthusiastic about creating RESTful APIs and real-time applications.",
  },
  {
    id: nanoid(),
    title: "Tailwind",
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in Tailwind CSS, creating clean, responsive designs with a utility-first approach to streamline development.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Intermediate knowledge of Java, proficient in object-oriented programming principles and developing efficient algorithms.",
  },

  {
    id: nanoid(),
    title: "Typescript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in TypeScript, ensuring robust and maintainable code through static typing and advanced development practices.",
  },
  {
    id: nanoid(),
    title: "Sql",
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: "Knowledgeable in SQL, designing and managing relational databases. Skilled in writing basic to intermediate queries and ensuring data integrity.",
  },

  {
    id: nanoid(),
    title: "Mongodb",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in MongoDB, designing scalable NoSQL databases and writing efficient queries for data manipulation.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://learnify-wjw3.onrender.com/",
    github: "https://github.com/amitkumarashutosh/Learnify",
    title: "Learnify",
    text: "A full-stack personal course application enabling users to browse, purchase, and manage courses with a user-friendly interface and secure payment options.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://blog-app-yn3p.onrender.com/",
    github: "https://github.com/amitkumarashutosh/Blogger",
    title: "Blogger",
    text: "A full-stack blog application designed for creating, editing, and sharing blogs, with a focus on responsive design and modern features.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://estate-app-one.vercel.app/",
    github: "https://github.com/amitkumarashutosh/Estate-App/",
    title: "Estate App",
    text: "A real estate platform allowing users to explore and list properties for sale or rent, featuring advanced filtering and search functionalities.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/1310781/pexels-photo-1310781.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "",
    github: "https://github.com/amitkumarashutosh/Uber-Clone",
    title: "Uber Clone",
    text: "A dynamic Uber-inspired application featuring user authentication, ride booking, and location-based services with real-time updates.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "",
    github:
      "https://github.com/amitkumarashutosh/Nodejs/tree/main/05-Ecommerce%20API",
    title: "Ecommerce API",
    text: "A scalable API for e-commerce platforms, handling user authentication, product management, and secure order processing effectively.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "",
    github: "https://github.com/amitkumarashutosh/Youtube-API",
    title: "Youtube API",
    text: "An API integration project enabling users to search, retrieve, and manage YouTube video data with seamless performance and modern features.",
  },
];
