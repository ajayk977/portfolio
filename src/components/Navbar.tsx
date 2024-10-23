import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
         <header>
        <nav className="bg-gray-800 h-16 flex justify-between items-center fixed w-full z-50 top-0 transition-all ease-in-out duration-300 px-6 shadow-lg">
          <Link href="/">
          <p className="p-4 text-white text-lg font-extrabold hover:text-blue-400 cursor-pointer transition-all duration-300">
            Ajay Kumar
          </p>
          </Link>
          <div className="flex space-x-8 text-white pr-20">
            {['About Me', 'Projects', 'Experience', 'Contact'].map((text) => (
              <Link key={text} href={`/${text.toLowerCase().replace(' ', '-')}`}>
                <p className="text-lg font-bold transition-all duration-300 hover:text-blue-400 transform hover:scale-105 cursor-pointer">
                  {text}
                </p>
              </Link>
            ))}
          </div>
        </nav> 
       </header>
    </div>
  );
}

export default Navbar;