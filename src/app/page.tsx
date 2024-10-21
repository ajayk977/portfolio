import Link from "next/link";

function Page() {
  return (
    <>
      {/* Navbar Section */}
      <div className="bg-slate-800 h-16 flex justify-between items-center fixed w-full z-50 top-0 transition-all ease-in-out duration-300 px-6 shadow-lg">
        <p className="p-20 text-white text-lg font-extrabold hover:text-blue-400 cursor-pointer transition-all duration-300">
          Ajay Kumar
        </p>
        
        {/* Right section: Navigation Links */}
        <nav className="flex space-x-8 text-white pr-20">
          <Link href="/about">
            <p className="text-lg font-bold transition-all duration-300 hover:text-blue-400 transform hover:scale-105 cursor-pointer">
              About Me
            </p>
          </Link>
          <Link href="/projects">
            <p className="text-lg font-bold transition-all duration-300 hover:text-blue-400 transform hover:scale-105 cursor-pointer">
              Projects
            </p>
          </Link>
          <Link href="/experience">
            <p className="text-lg font-bold transition-all duration-300 hover:text-blue-400 transform hover:scale-105 cursor-pointer">
              Experience
            </p>
          </Link>
          <Link href="/contact">
            <p className="text-lg font-bold transition-all duration-300 hover:text-blue-400 transform hover:scale-105 cursor-pointer">
              Contact
            </p>
          </Link>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 min-h-screen flex items-center justify-center relative">
        {/* Overlay background */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-6 py-12">
          {/* Left Section: Image Container */}
          <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-center mb-6 lg:mb-0">
            <img
              src="https://via.placeholder.com/300" // Replace with your image URL
              alt="Your Image"
              className="w-48 h-48 rounded-full border-4 border-white shadow-2xl transform hover:scale-110 transition-all duration-500 ease-in-out"
            />
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
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
              >
                Download CV
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex justify-center lg:justify-start space-x-8">
              <a
                href="https://www.linkedin.com/in/ajay-kumar-27b46a261/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/linkedin.svg" // LinkedIn icon
                  alt="LinkedIn"
                  className="w-10 h-10 text-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                />
              </a>
              <a
                href="https://github.com/ajayk977"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg" // GitHub icon
                  alt="GitHub"
                  className="w-10 h-10 text-white hover:text-gray-800 transform hover:scale-105 transition-all duration-300"
                />
              </a>
              <a
                href="https://x.com/ajaysharma977?t=K7y7Ybb2Ijh0GzAnlZfvHA&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/twitter.svg" // Twitter icon
                  alt="Twitter"
                  className="w-10 h-10 text-white hover:text-blue-400 transform hover:scale-105 transition-all duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-center text-white py-6">
        <p>© 2024 Ajay Kumar. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Page;
