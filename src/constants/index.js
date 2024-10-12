import project1 from "../assets/projects/Royal_Gems.png";
import project2 from "../assets/projects/fin_buddy.png";
import project3 from "../assets/projects/Blog_by_JR.png";
import project4 from "../assets/projects/logowith_bg.png";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "Intro", href: "#intro" },
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = `I am an ambitious undergraduate software engineer with one year of hands-on experience gained through freelancing and developing minor projects, including websites and web applications. As a full-stack developer, I work primarily with technologies such as Python, HTML, CSS, Tailwind CSS, JavaScript, React, Java, and C#. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am an enthusiastic and adaptable full-stack developer with a strong commitment to creating seamless and intuitive web applications. Over the past year, I've gained practical experience through freelancing and various projects, developing expertise in Python, HTML, CSS, Tailwind CSS, JavaScript, React, Java, and C#. My journey into web development started with a keen interest in understanding technology, and it has evolved into a fulfilling career where I embrace continuous learning and new challenges. I excel in team environments and enjoy dissecting complex issues to craft effective, high-quality solutions. Beyond coding, I love exploring emerging technologies and expanding my skill set.`;

export const EDUCATION = [
  {
    year: "2024 - Present",
    degree: "BEng (Hons) in Software Engineering (TOP UP)",
    institution: "London Metropolitan University",
    description: `Currently pursuing a degree in Software Engineering, focusing on full-stack web development and AI technologies. Gained hands-on experience through various projects and coursework, including a ChatBot using Machine Learning, Application Development, and an AI driven detector.`,
    courses: ["Artificial Intelligence", "Application Development", "Advanced Software Engineering", "Final Project"],
  },
  {
    year: "2022 - 2024",
    degree: "Higher National Diploma in Computing Software Engineering",
    institution: "ESOFT METRO Campus",
    description: `Completed a high school diploma with a focus on basics and theories of Programming, laying the foundation for a career in software engineering. Participated in coding clubs and competitions, which sparked an interest in web development and programming.`,
    courses: ["Programming", "Database Development", "Web Development", "Data Structures and Algorithms", "UI/UX"],
  },
  {
    year: "2017 - 2018",
    degree: "Diploma in ICT",
    institution: "IDM International Campus",
    description: `Completed a diploma in Information and Communication Technology, which provided a strong foundation in computer science principles, networking, and basic programming. This program ignited my passion for software development.`,
    courses: ["Networking Fundamentals", "Introduction to Programming", "Database Concepts", "Office 365"],
  },
];

export const PROJECTS = [
  {
    title: "Royal Gems",
    image: project1,
    description:
      "A professional business website for Royal Gems, featuring an overview of their services, a gallery showcasing premium gems and fine jewelry, and a contact page.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "FinBuddy (Chat-Bot)",
    image: project2,
    description:
      "An AI-driven banking assistant that enhances customer support by providing personalized, accurate responses to banking queries, while continuously improving through machine learning and NLP.",
    technologies: ["Python", "ML", "NLP" ,"HTML", "CSS"],
  },
  {
    title: ".Blog (Blogging Platform)",
    image: project3,
    description:
      "A platform for creating and publishing blog posts, with features like blog editing, uploading images and deleting blogs.",
    technologies: ["Python", "Flask", "HTML", "CSS"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing skills, education, projects, and contact information.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    id: 2,
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    id: 4,
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const CONTACT = {
  address: "73, Richmond Hill road Galle, Sri Lanka",
  phoneNo: "+94 76 493 5825",
  email: "inaamjr@gmail.com",
};
