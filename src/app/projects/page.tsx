// app/projects/page.js

import Navbar from "@/components/Navbar";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "An intuitive e-commerce platform featuring user authentication, product browsing, and a secure checkout process. Built with React and Node.js, it offers an admin panel for inventory management and integrates payment gateways for a seamless shopping experience.",
    image: "/eco.png",
    link: "https://github.com/ajayk977/majorProject.git"
  },
  {
    title: "AI-Powered Random Message Generator",
    description: "A dynamic web application that generates random messages using AI algorithms. Users can receive inspiring quotes, jokes, or motivational messages with a single click, providing an engaging and interactive experience.",
    image: "/ai.jpg",
    link: "https://github.com/ajayk977/chai-code-javascript.git"
  },
  {
    title: "YouTube Clone Backend",
    description: "The backend code for a YouTube clone, designed to handle video uploads, user authentication, and comment management. Built with Node.js and Express, this project emphasizes RESTful API design and database interactions for a complete video-sharing experience.",
    image: "/youtube.png",
    link: "https://github.com/ajayk977/chai-code-javascript.git"
  }
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h1 className="text-4xl mb-6 animate-fade-in">My Projects</h1>
        <div className="overflow-x-auto flex space-x-6 pb-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }} // Fixed template literal
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
