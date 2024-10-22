"use client"; // Ensure this is a Client Component

import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Navbar from "@/components/Navbar";

function Page() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center relative">
        {/* Overlay background */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-6 py-12">
          {/* Left Section: Image Container */}
          <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-center mb-6 lg:mb-0">
            <div className="relative group w-64 h-48 overflow-hidden rounded-lg shadow-lg">
              <img
                src="/profile.jpg" // Replace with your image URL
                alt="Your Image"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-lg border-4 border-blue-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Right Section: About Me Container */}
          <div className="w-full sm:w-1/2 lg:w-2/3 text-white text-center sm:text-left px-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
              About Me
            </h1>
            <p className="text-xl font-light mb-4 leading-relaxed">
              Hello! I'm Ajay Kumar, a passionate developer who loves coding and
              building innovative solutions. I specialize in web development,
              particularly with React.js, and I enjoy exploring new
              technologies. My goal is to continually grow and contribute to
              impactful projects.
            </p>
            <p className="text-lg mt-4">
              If you're looking to collaborate or just want to chat about tech,
              feel free to reach out!
            </p>

            {/* CV Download Button */}
            <div className="mt-6">
              <a
                href="/cv.pdf" // Ensure your cv.pdf is placed in the public folder
                download
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105"
              >
                My CV
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex justify-center lg:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/ajay-kumar-27b46a261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/ajayk977"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transform hover:scale-105 transition-all duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://x.com/ajaysharma977?t=K7y7Ybb2Ijh0GzAnlZfvHA&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transform hover:scale-105 transition-all duration-300"
              >
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-center text-white py-6">
        <p>© 2024 Ajay Kumar. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Page;
