'use client';

import { RiArrowRightDownLine, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";
import React from 'react';
import "./globals.css";

const Page = () => {
  return (
    <div id="main" className="bg-gradient-to-r from-teal-50 to-blue-50 text-gray-800 font-sans">
      {/* Navigation Bar */}
      <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-blue-700 text-white shadow-lg z-10">
        <div className="flex justify-between items-center p-6">
          <h3 className="text-xl font-bold">Portfolio</h3>
          <nav className="space-x-6">
            <a href="#intro" className="hover:text-teal-300">Introduction</a>
            <a href="#about" className="hover:text-teal-300">About</a>
            <a href="#work" className="hover:text-teal-300">Skills</a>
            <a href="#contact" className="hover:text-teal-300">Contact</a>
          </nav>
        </div>
      </div>

      {/* Intro Section */}
      <div id="intro" className="flex flex-col items-center justify-center text-center py-12 px-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
  <h1 className="text-8xl font-bold mb-4 mt-2">
    Rahaima Shakeel <br />
    <span className="text-6xl m-2">Biomedical Engineer
       & 
       Developer </span>
  </h1>
  
  <div id="place" className=" mt-6 mb-6">
    <h3 className="text-4xl">{`(Sindh, Pakistan)`}</h3>
    <br />
  </div>

  <div id="about" className="py-12 px-6">
    <h2 className="text-4xl text-center text-slate-200 font-semibold mb-4">
     {`Empowering Healthcare with a Foundation in Biomedical Engineering and a Future in AI Innovation.`}
    </h2>
    <br />
    <br />
    <h4 className="flex items-center justify-center text-2xl">
      <RiArrowRightDownLine className="mr-2 animate-bounce" /> Scroll down
    </h4>
  </div>
</div>


      {/* Hero Image */}
      <div id="hero-image" className=" bg-gradient-to-r from-teal-600 to-blue-600 text-white relative flex justify-center mb-12 -mt-20 pt-12 pb-14 px-12 ">
        <img id="pic" src="IMG-20230517-WA0021.png" alt="Profile" className="rounded-full border-4 border-teal-500 shadow-lg transition-transform duration-300 hover:scale-110" />
      </div>

      {/* About Me Section */}
      <div id="about-part2" className="  bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center text-teal-600">
        <h3 className="text-4xl font-semibold -mt-14 mb-10">About Me</h3> {/* Updated heading position and size */}
        <p className="text-2xl text-slate-200 font-semibold">
        {`I’m Rahaima Shakeel, a Biomedical Engineer and Developer with a passion for merging healthcare and technology. With hands-on experience in both the biomedical field and front-end development.`}
        </p>
      </div>

      {/* What I Do Section */}
      <div id="work" className="  bg-gradient-to-r from-teal-600 to-blue-600 text-white py-12 px-6 ">
        <div id="work1" className="mb-8">
          <h3 className="text-center bg-gradient-to-r from-teal-600 to-blue-600 text-white text-4xl font-semibold text-teal-700 mb-4">What I Do</h3>
          <RiArrowRightDownLine className=" animate-bounce text-4xl mx-auto text-slate-200 mb-6" />
        </div>

        <div id="work2" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[{
            title: "1. Biomedical Engineering & Healthcare Innovation",
            description: "{`With a strong foundation in Biomedical Engineering, I have gained hands-on experience at Isra Hospital and NICVD Hospital in Hyderabad, where I worked with biomedical systems and healthcare technologies. My current placement with the PEC GIT Program at IBET, LUMHS, allows me to apply this knowledge practically and collaborate on impactful projects."
          }, {
            title: "2. Front-End Development & Digital Solutions",
            description: "Proficient in HTML, CSS, Tailwind CSS, Next.js, and TypeScript, I specialize in creating modern, responsive web designs that enhance user experience. These skills are an asset in integrating healthcare technology with digital solutions, enabling innovative approaches to healthcare accessibility and user engagement."
          }, {
            title: "3. Creative & Visual Design",
            description: "With expertise in Canva, I create visually engaging content for both professional and academic purposes. This skill allows me to convey complex information clearly and creatively, which is especially valuable in designing educational materials, branding elements, and assessments."
          }, {
            title: "4. AI & Future-Oriented Healthcare",
            description: "Currently pursuing a certification in Cloud Applied Generative AI Engineering, I am expanding my knowledge of AI to bring transformative solutions to healthcare. My focus is on integrating AI with biomedical innovations to drive progress in patient care and healthcare technologies."
          }].map(({ title, description }, index) => (
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" key={index}>
              <h4 className="text-xl text-teal-600 font-semibold">{title}</h4>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="  bg-gradient-to-r from-teal-600 to-blue-600 text-white py-12 px-6 ">
        <h3 className="text-4xl text-center text-slate-50 font-semibold mb-10">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {[ 
            "Biomedical Engineering", "Microsoft Office", "Creative Design", "Instructional & Lecturing Skills", 
            "Academic Assessment", "Project Management", "Strong Organizational Skills", "Web Development", 
            "HTML", "Next.js", "TypeScript & JavaScript", "CSS & Tailwind CSS", "Canva", 'Problem Solving', 'Team Collaboration', "Leadership Skills"
          ].map((skill, index) => (
            <div key={index} className="bg-white py-4 px-6 rounded-lg shadow-lg hover:bg-teal-100 transition-colors duration-300">
              <h3 className="text-lg text-teal-700 font-medium">{skill}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-12 px-6 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <h2 className="text-4xl text-center font-semibold mb-10">Contact Me</h2>
        <div className="text-center space-y-4">
          <p className="text-2xl">
            Email:{" "}
            <a href="mailto:rahaimasha2628@gmail.com" className="text-teal-300 hover:underline">
              rahaimasha2628@gmail.com
            </a>
          </p>
          <p className="text-2xl">
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/rahaima-shakeel-1a5b552b8/" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">
              LinkedIn
            </a>
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.linkedin.com/in/rahaima-shakeel-1a5b552b8/" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white text-3xl">
              <RiLinkedinBoxFill />
            </a>
            <a href="mailto:rahaimasha2628@gmail.com" className="text-teal-300 hover:text-white text-3xl">
              <RiMailLine />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
