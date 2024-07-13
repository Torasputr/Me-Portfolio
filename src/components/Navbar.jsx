import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-secondary text-white flex justify-center gap-28 text-2xl py-5">
        <a href="" className="hover:text-primary transition-all duration-300">
          Home
        </a>
        <a href="" className="hover:text-primary transition-all duration-300">
          About Me
        </a>
        <a href="" className="hover:text-primary transition-all duration-300">
          Projects
        </a>
        <a href="" className="hover:text-primary transition-all duration-300">
          Services
        </a>
      </div>
    </>
  );
}

export default Navbar;
