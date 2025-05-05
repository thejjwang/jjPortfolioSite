import project1 from "../assets/projects/project-1.webp";
import stocksgameScreenshot from "../assets/projects/stocksgameScreenshot.webp";
import smittenkissWebsite from "../assets/projects/smittenkissWebsite.webp";
import websiteScreenshot from "../assets/projects/websiteScreenshot.webp";

export const HERO_CONTENT = `I am a passionate Full-Stack Developer with a focus on building robust and scalable web applications. With experience in React, JavaScript, and the MongoDB, Express.js, React, Node.js (MERN) stack, I specialize in creating seamless front-end and back-end solutions. I am dedicated to continuously expanding my expertise in AI technologies and cloud solutions. My goal is to leverage my skills to build innovative applications that solve real-world problems and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March 2025 - Present",
    role: "Full Stack Developer",
    company: "Eqty Lyfe",
    website: "https://eqtylyfe.com/",
    description: `● Designed and implemented web-based solutions to simplify client onboarding and investment workflows
    ● Replaced legacy systems (e.g., Zoho) with custom-built tools to reduce friction and improve user experience
    ● Integrated digital document workflows using alternatives to DocuSign for seamless e-signature collection
    ● Collaborated with the team to streamline processes across investor dashboards and internal tools
    ● Worked in a fast-paced startup environment, contributing to both technical execution and product strategy Employ Agile methodologies and utilize Jira software to manage and track project progress
    `,
    technologies: ["Javascript", "Jira", "NextJS", "React", "Supabase", "AWS", "Figma"],
  },
  {
    year: "May 2024 - Present",
    role: "Developer/Project Manager",
    company: "ANTEMATTR",
    website: "https://antemattr.com/platform/home",
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
    website: 'http://meritronics.com/',
    description: `● Developed and implemented user-friendly quality data forms and reports, streamlining data collection and analysis processes
    ● Designed and delivered a visually intuitive Quality Metrics TV Dashboard, providing real-time insights and enhancing decision-making capabilities
    ● Created a responsive Daily Production Schedule Web App, optimizing resource allocation and increasing operational efficiency`,
    technologies: ["Azure", "MS Office Suite, MISys, QuickBooks"],
  }
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: websiteScreenshot,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "Node.js", "Vercel"],
    link: "https://jj-portfolio-site.vercel.app/"
  },
  {
    title: "Fake Stocks/Crash Game",
    image: stocksgameScreenshot,
    description:
      "FakeStocksGame is a real-time betting simulation where users wager on fake stocks that rise over time — until they crash. Inspired by crash games and stock market visuals, the app features animated charts, dynamic stock tickers, and persistent user profiles with balances via Supabase.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link: "fake-stocks-game.vercel.app"
  },
  {
    title: "Custom Website for Client",
    image: smittenkissWebsite,
    description: 
      "A website for booking creative planning, production, & design.",
    technologies: ["React", "GoDaddy"],
    link: "https://smittenkiss.com/home"
  },
  {
    title: "Hotel Booking App",
    image: project1,
    description:
      "A fully functional hotel booking app. It allows users to browse hotel listings, make reservations, and manage bookings.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Vite", "JavaScript", "TailwindCSS"],
    link: "#"
  },
];

export const CONTACT = {
  address: "Saratoga CA",
  phoneNo: "+1 408 507 2445 ",
  email: "jonathanjacobwang@gmail.com",
};
