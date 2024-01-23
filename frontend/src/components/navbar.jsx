import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  

  return (
    <div className="bg-primary text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <Link to="/" className="text-xl font-semibold">
          Scrapify
        </Link>
      </div>
      <div className="md:hidden">
        <Link to="/login" className="text-white  px-4 py-2 rounded-full hover:bg-opacity-80">
          Login
        </Link>
        <Link to="/signup" className="text-white  px-4 py-2 rounded-full hover:bg-opacity-80">
          Signup
        </Link>
      </div>
    </div>
  </div>
  );
}

export default Navbar;