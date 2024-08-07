"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-0">

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left sm:place-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-3xl lg:leading-normal font-bold">
          <span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Aenal Patani",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "Full Stack web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-normal">
          A passionate web developer a experience as full stack web developer as intern in creating dynamic and user-friendly websites,specialize in front-end development, combining a keen eye for design with technical expertise to deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4">

            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-auto rounded-full mb-4 sm:mb-0 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white text-center"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1Lu-_QxWDzdL53K08J4cg9Ifu8OhY4Sc4/view?usp=drive_link"
              className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white text-center">              
                Download CV
              
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center lg:mt-6"
        >
                    <div className=" w-[200px] h-[200px]  sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] relative rounded-full ">
                    {/* <div className="bg-[#181818] w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[300px] lg:h-[300px] relative rounded-full flex items-center justify-center"> */}

          {/* <div className=" bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative rounded-full"> */}
            <Image
              src="/images/hero.jpg"
              alt="hero image"
              className="transform transition duration-700 sm:mt-8 ease-out hover:scale-105 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]  lg:w-[500px] lg:h-[500px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-40"

              // className="  transform transition duration-700 ease-out hover:scale-105 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] absolute   -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
