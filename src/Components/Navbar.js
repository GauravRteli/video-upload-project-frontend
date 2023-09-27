import React from 'react';
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center space-x-8">
        <Link
          to="/"
          className="text-white hover:text-indigo-500 transition duration-300 relative after:-translate-x-1 after:absolute after:w-full after:h-0.5 after:bg-indigo-500 after:bottom-0 after:left-0"
        >
          Home
        </Link>
        <Link
          to="/videos"
          className="text-white hover:text-indigo-500 transition duration-300 relative after:-translate-x-1 after:absolute after:w-full after:h-0.5 after:bg-indigo-500 after:bottom-0 after:left-0"
        >
          Videos
        </Link>
        <Link
          to="/upload"
          className="text-white hover:text-indigo-500 transition duration-300 relative after:-translate-x-1 after:absolute after:w-full after:h-0.5 after:bg-indigo-500 after:bottom-0 after:left-0"
        >
          Upload Videos
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
