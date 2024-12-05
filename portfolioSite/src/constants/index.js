import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate Full-Stack Developer with a focus on building robust and scalable web applications. With experience in React, JavaScript, and the MongoDB, Express.js, React, Node.js (MERN) stack, I specialize in creating seamless front-end and back-end solutions. I am dedicated to continuously expanding my expertise in AI technologies and cloud solutions. My goal is to leverage my skills to build innovative applications that solve real-world problems and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Developer/Project Manager",
    company: "ANTEMATTR",
    description: `● Developed tools and automated workflows for agents using Flowise and n8n, enhancing efficiency and functionality.
    ● Designed and implemented custom functions to support advanced agent operations.
    ● Collaborated with team members to integrate new tools into existing systems seamlessly.
    ● Produce mockups for components and pages using Figma to guide through the development process
    ● Employ Agile methodologies and utilize Jira software to manage and track project progress
    `,
    technologies: ["Javascript", "Jira", "n8n", "Flowise", "Framer", "AWS", "Figma"],
  },
  {
    year: "April 2023",
    role: "Full/MERN Stack Developer",
    company: "Innovation Labs",
    description: `● Developed a full stack task manager app with full CRUD operations and user authentication using the MERN stack
    ● Built an intuitive Single Page Application in React using components, hooks, and context API, React Router for the front end
    ● Created RESTful APIs using Node.js and Express.js for full back end CRUD operations
    ● Integrated MongoDB database and Mongoose ORM to store task documents. Set up models and schemas for easy data management`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Node.js", "mySQL"],
  },
  {
    year: "May 2022 - August 2022",
    role: "Intern",
    company: "Meritronics",
    description: `● Developed and implemented user-friendly quality data forms and reports, streamlining data collection and analysis processes
    ● Designed and delivered a visually intuitive Quality Metrics TV Dashboard, providing real-time insights and enhancing decision-making capabilities
    ● Created a responsive Daily Production Schedule Web App, optimizing resource allocation and increasing operational efficiency`,
    technologies: ["Azure", "MS Office Suite, MISys, QuickBooks"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Saratoga CA",
  phoneNo: "+1 408 507 2445 ",
  email: "jonathanjacobwang@gmail.com",
};
