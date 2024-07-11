"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: " Technical Skills",
    id: "Technical Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>PHP</li>
        <li>TailwindCSS</li>
        <li>Shadcn</li>
        <li>PostgreSQL</li>
        <li>NEXTjs</li>
      </ul>
    ),
  },
  {
    title: " Additional Skills",
    id:"Additional Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Communication</li>
        <li>Leadership</li>
        <li>Teamwork</li>
        <li>Time Management</li>
        <li>Public Relation</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bacholer Of Engineering LDRP ITR INSITITUTE GANDHINAGAR 2022P URSUING</li>
        <li>Diploma In Computer Engineering Government Polytechnic Ahemdabad 2022
          <li>10th GHSEB Saint Xaviers High School GANDHINAGAR 2019</li>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certified Full Stack Developer Intern -The Special Character Company</li>
        <li>NPTEL-Database Management System Course certified</li>
        <li>GUVI-Python course Certified</li>
        <li> Certified for participating and qualifying CIT test at internship studio</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Technical Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" id="about">

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-10 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image src="/images/about.jpg" width={400} height={400} alt="img" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with  Node.js,Nextjs, PostgreSQL,Php
            Tailwindcss,Shadcn, HTML, CSS, and Github. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-1">
            <TabButton
              selectTab={() => handleTabChange("Technical Skills")}
              active={tab === "Technical Skills"}
            >
              {" "}
               Technical Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Additional Skills")}
              active={tab === "Additional Skills"}
            >
              {" "}
              Additional Skills{" "}
            </TabButton> 


            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
