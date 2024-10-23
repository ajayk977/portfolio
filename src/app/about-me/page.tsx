// app/about/page.js

'use client'; // Ensure this is a Client Component

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Image from 'next/image'; // Import Image from Next.js if you use images later

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white mt-16">
        <h1 className="text-4xl mb-6 animate-fade-in">About Me</h1>
        
        <div className="max-w-3xl text-center mb-8 animate-fade-in">
          <p className="text-lg mb-4">
            Hi! I&apos;m a passionate web developer with a love for creating dynamic and interactive web applications. I specialize in front-end development and have a keen eye for design.
          </p>
          <p className="text-lg">
            My goal is to build seamless user experiences while continuously learning new technologies and improving my skills.
          </p>
        </div>

        <h2 className="text-3xl mb-4 animate-fade-in">Skills</h2>
        <div className="flex justify-center space-x-8 mb-10">
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-5xl text-orange-500 mb-2 animate-bounce" />
            <span>HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-5xl text-blue-500 mb-2 animate-bounce" />
            <span>CSS3</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJs className="text-5xl text-yellow-500 mb-2 animate-bounce" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-5xl text-blue-400 mb-2 animate-bounce" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-5xl text-green-500 mb-2 animate-bounce" />
            <span>Node.js</span>
          </div>
        </div>

        <h2 className="text-3xl mb-4 animate-fade-in">Experience</h2>
        <div className="max-w-3xl text-left mb-10 animate-fade-in">
          <ul className="list-disc list-inside">
            <li>Web Developer at Company A (2021 - Present)</li>
            <li>Intern at Company B (2020 - 2021)</li>
            <li>Freelancer - Various Projects (2019 - 2020)</li>
          </ul>
        </div>

        <footer className="text-center mt-8">
          <p>© 2024 Ajay Kumar. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default About;
