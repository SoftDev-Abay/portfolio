import project_template from "../img/project_template.png";
import nikeURl from "../img/nike.png";
import storeURl from "../img/store.png";
import coursesURl from "../img/cources.png";
import portfolioURl from "../img/portfolio.png";
export const projects = [
  {
    name: "Nike.app",
    imgUrl: nikeURl,
    tech: "Vue.js - TailwindCSS - HTML - Javascript",
    smallText:
      "A landing page for a Nike shoes store. Looking great on all devices from small to large.",
    bigText: `My Nike Shoes Landing Page project beautifully integrates Tailwind CSS and Vue.js, harnessing the power of these technologies to create a visually captivating experience. In addition, I've incorporated Framer Motion for subtle yet engaging animations.
      
      This project is a testament to my web development skills and passion for creating appealing web experiences. It features a dynamic hero section, real customer reviews, and exclusive Nike footwear, all meticulously designed for seamless user engagement. 
      
      Visitors can also enjoy an exclusive special offer, enhancing their exploration of Nike's iconic products.`,
    github: "https://github.com/SoftDev-Abay/nike.git",
    live: "https://nike-steel.vercel.app/",
  },
  {
    name: "Shop.app",
    imgUrl: storeURl,
    tech: "Next.js - CSS - Firebase - SanityCMS",
    smallText:
      "A real-time e-commerce app for customers to browse and choose and buy products.",
    bigText: `My recent project is an online store crafted using Next.js, SCSS, Firebase, and Sanity CMS. This venture represents my dedication to learning web development. 

    Behind the scenes, the project boasts an efficient product management system. This facilitates effortless updates, new product additions, and real-time adjustments to product details.
    
    Empowers customers to manage their personal information seamlessly. This personalized touch enhances the user experience.
    
    Integrates a swift search system, ensuring users can quickly locate desired products.`,
    github: "https://github.com/SoftDev-Abay/ri_ecommerce.git",
    live: "https://ri-ecommerce.vercel.app/",
  },
  {
    name: "Courses.app",
    imgUrl: coursesURl,
    tech: "PHP - SQL - HTMl - MySQL",
    smallText:
      "A website used for educational purposes, providing space to store lessons and assignments for students.",
    bigText: `My project is a comprehensive courses website created with PHP, CSS, HTML, SQL, and MySQL. It offers seamless user access through a fully functional authorization and registration system, allowing students to easily register, log in, and access course materials. 
    Instructors benefit from efficient lesson and assignment management. 
    
    Notably, the website serves as a repository for lesson files and assignments, enhancing the learning experience. With its streamlined admin panel, administrators can effortlessly add, remove, and manage lessons and assignments, ensuring the platform remains dynamic and up-to-date. 
    
    This project reflects my commitment to creating accessible, user-friendly, and dynamic educational solutions.`,
    github: "https://translate.google.com/?hl=ru",
    live: "http://abay.infinityfreeapp.com/Educational_Portal/authorization.php",
  },
  {
    name: "Portfolio.app",
    imgUrl: portfolioURl,
    tech: "React - TailwindCSS - Javascript - HTML",
    smallText:
      "Online portfolio of my web development career showcasing my best skills and character.",
    bigText: `Crafted with Tailwind CSS, React, and Framer Motion, this project serves as a platform to showcase my diverse range of skills, from responsive design using Tailwind CSS to intricate animations and transitions implemented through Framer Motion. 

    The website's user-friendly navigation allows visitors to seamlessly explore my various projects, gaining insights into my proficiency with different technologies and my ability to create engaging user interfaces. 
    
    Whether you're interested in dynamic landing pages, e-commerce websites, or online courses platforms, my portfolio website provides a comprehensive overview of my capabilities as a web developer.`,
    github: "https://github.com/SoftDev-Abay/portfolio.git",
    live: "https://abay-portfolio.vercel.app/",
  },
];

export const experience = [
  {
    compamyName: "Frelance",
    position: "Web Developer",
    location: "Online",
    date: "2021 - Present",
    text: "As a freelance web developer, I delivered various projects, from dynamic landing pages to e-commerce sites, with responsive design and engaging animations.",
    tech: [
      "Next",
      "React",
      "TailwindCSS",
      "HTML",
      "Javascript",
      "Firebase",
      "GitHub",
    ],
  },
  {
    compamyName: "ТОО Documentolog",
    position: "Frontend Developer",
    location: "Astana",
    date: "2022 - 2023",
    text: "I enhanced user interfaces and introduced new features, resulting in a better user experience. Focused on optimizing design and streamlining internal processes, ultimately contributing to improved efficiency and user satisfaction.",
    tech: ["Javascript", "React", "CSS", "HTML", "GitHub", "Git"],
  },
  {
    compamyName: "Your company here",
    position: "Full Stack Developer",
    location: "Anywhere",
    date: "Anytime - Present",
    text: "I will bring my expertise in front-end development to your company, where I'll work diligently to create visually appealing and user-friendly interfaces.",
    tech: ["Javascript", "Next", "React", "SCSS", "HTML", "I", "CAN", "LEARN"],
  },
];