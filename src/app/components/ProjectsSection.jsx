"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Online-Resume-builder",
    description: "I developed an online resume builder, a dynamic web application designed to streamline the resume creation process for users. Utilizing modern web technologies, the application provides a user-friendly interface for inputting personal and professional information, which is then formatted into a polished, professional resume. Key features include customizable templates, real-time previews, and easy export options in multiple formats. The project emphasizes responsive design to ensure compatibility across various devices and incorporates secure data handling to protect user information. This resume builder simplifies the job application process, empowering users to present their qualifications effectively and professionally.",
    image: "/images/project1.png",
    tag: ["Click here"],
    gitUrl: "https://github.com/aenalpatani/Online-Resume-Builder.git",
    previewUrl: "https://online-resume-builder-lyart.vercel.app/",
  },
  {
    id: 2,
    title: "Organic product Ecommerce website",
    description: "I developed as a part of summer internship project in a team an e-commerce website for organic cosmetic products  using Next.js, Medusa, and Tailwind CSS, designed to provide an exceptional shopping experience while promoting natural and sustainable beauty. The site features a modern, responsive design powered by Tailwind CSS, ensuring seamless usability across all devices. The Next.js framework enables a highly performant and SEO-friendly frontend, while Medusa offers a robust and scalable backend for efficient product management, order processing, and customer account handling. Key features include intuitive navigation, advanced search and filter options, secure and streamlined checkout processes, and easy content management. This project combines cutting-edge technologies to deliver a sophisticated, user-centric platform that highlights the brand's commitment to quality and sustainability.",
    image: "/images/project2.jpg",
    tag: ["Click here"],
    gitUrl: "https://github.com/special-char/she-develops-summer-internship-24.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Online Quiz App",
    description:"I developed an online quiz application using HTML, CSS, and JavaScript, designed to provide a user-friendly and engaging platform for technical assessments. The app features a clean and modern interface with a welcoming screen that invites users to select a subject from options including HTML, CSS, JavaScript, and Accessibility. Each subject is represented by an intuitive icon and a sleek, responsive button, enhancing the user experience.",
    image: "/images/project3.jpg",
    tag: ["Click here"],
    gitUrl: "https://github.com/aenalpatani/online-quiz-app.git",
    previewUrl: "https://online-quiz-app-khaki.vercel.app/",
  },
  {
    id: 4,
    title: "Time track task dashboard",
    description: "I designed a visually engaging time tracking dashboard using HTML and CSS, featuring a dark theme with vibrant, color-coded cards to represent various activity categories. Each card displays the total hours spent on an activity for the current week and compares it to the previous week's hours. The user-friendly interface includes a profile section with options to view daily, weekly, and monthly reports, allowing users to effortlessly monitor and optimize their time management.",
    image: "/images/project4.jpg",
    tag: ["Click here"],
    gitUrl: "https://github.com/aenalpatani/Time-tracking-dashboard.git",
    previewUrl: "https://time-tracking-dashboard-blond-mu.vercel.app/",
  },
  {
    id: 5,
    title: "Profile Card Component",
    description: "I created a profile card component using HTML, CSS, and Flexbox, designed to display essential user information in a compact and visually appealing format. The card features a rounded profile picture at the top, followed by the user's name, age, and location. Below this information, key statistics such as the number of followers, likes, and photos are displayed, each with a distinct value and label.",
    image: "/images/project5.jpg",
    tag: ["Click here"],
    gitUrl: "https://github.com/aenalpatani/Profile-card-compnent.git",
    previewUrl: "https://profile-card-compnent.vercel.app/",
  },
  {
    id: 6,
    title: "FAQ",
    description: "I designed a Frequently Asked Questions (FAQ) section using HTML and CSS, tailored for an organic cosmetics website. The layout features a clean and elegant design, ensuring that users can easily navigate and find answers to their common questions.",
    image: "/images/project6.png",
    tag: ["Click here"],
    gitUrl: "https://github.com/special-char/she-develops-summer-internship-24.git",
    previewUrl: "http://localhost:8000/in/FAQ",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Click here");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Click here "
          isSelected={tag === "Click here"}
        /> */}

      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 line-clamp-2">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
