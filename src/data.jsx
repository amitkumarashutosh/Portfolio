import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaJava, FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

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
    text: "Intermediate  proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Node",
    icon: <FaNode className="h-16 w-16 text-emerald-500" />,
    text: "Familiar with Node.js, building scalable server-side applications. Enthusiastic about creating RESTful APIs and real-time applications.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Intermediate knowledge of Java, proficient in object-oriented programming principles and developing efficient algorithms. ",
  },
  {
    id: nanoid(),
    title: "Sql",
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: "Knowledgeable in SQL, designing and managing relational databases. Skilled in writing basic to intermediate queries and ensuring data integrity.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://amit-blog-app.vercel.app/",
    github: "https://github.com/amitkumarashutosh/Blog-App",
    title: "Blog App",
    text: "Full-stack personal blog application using the MERN stack. The primary goal of this project was to learn and implement various features of modern web development.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://estate-app-one.vercel.app/",
    github: "https://github.com/amitkumarashutosh/Estate-App/",
    title: "Estate App",
    text: "Developed a real estate website using MERN stack where users can find properties and list their own properties for rent or sale.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://github.com/amitkumarashutosh/Nodejs/tree/main/05-Ecommerce%20API",
    github:
      "https://github.com/amitkumarashutosh/Nodejs/tree/main/05-Ecommerce%20API",
    title: "Ecommerce API",
    text: "Created a robust E-commerce API using the MERN stack to manage products, orders, and user authentication. The project focuses on implementing modern web development practices.",
  },
];
