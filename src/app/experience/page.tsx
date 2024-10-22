// app/experience/page.js
const experienceData = [
  {
    position: "Frontend Developer",
    company: "Omninos Technologies Int. Pvt. Ltd",
    duration: "Jan 2023 - Present",
    description: "Developing user-friendly web applications using React and Tailwind CSS.",
    link: "https://company-a.com",
  },
  {
    position: "Backend Developer",
    company: "Omninos Technologies Int. Pvt. Ltd",
    duration: "Jan 2022 - Dec 2023",
    description: "Worked on RESTful APIs and database management using Node.js and MongoDB.",
    link: "www.omninos.in",
  },
  {
    position: "Intern",
    company: "CS Soft",
    duration: "June 2021 - Dec 2021",
    description: "Assisted in developing web applications and gaining experience in Agile methodologies.",
    link: "www.omninos.in",
  },
  // Add more experiences as needed
];

import Navbar from "@/components/Navbar";

const Experience = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 mt-16">
      <h1 className="text-4xl mb-6 animate-fade-in">My Experience</h1>
      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }} // Staggered animation
          >
            <a href={experience.link} target="_blank" rel="noopener noreferrer">
              <h2 className="text-xl font-bold">{experience.position}</h2>
              <p className="text-gray-400">{experience.company}</p>
              <p className="text-sm text-gray-500">{experience.duration}</p>
              <p className="mt-2">{experience.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Experience;
