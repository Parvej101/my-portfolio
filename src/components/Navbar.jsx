const Navbar = () => {
    // Function to handle smooth scrolling
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  
    return (
      <div className="navbar fixed left-0 top-0 lg:px-26  mx-auto bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-md z-10">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-black rounded-box mt-3 w-52 p-2 shadow">
              <li><button onClick={() => handleScroll("home")}>Home</button></li>
              <li><button onClick={() => handleScroll("about")}>About</button></li>
              <li><button onClick={() => handleScroll("skills")}>Skills</button></li>
              <li><button onClick={() => handleScroll("projects")}>Projects</button></li>
              <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
            </ul>
          </div>
          {/* Logo */}
          <a className="btn btn-ghost text-2xl font-bold">MH</a>
        </div>
  
        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4 space-x-4">
            <li><button onClick={() => handleScroll("home")} className="hover:text-yellow-300">Home</button></li>
            <li><button onClick={() => handleScroll("about")} className="hover:text-yellow-300">About</button></li>
            <li><button onClick={() => handleScroll("skills")} className="hover:text-yellow-300">Skills</button></li>
            <li><button onClick={() => handleScroll("projects")} className="hover:text-yellow-300">Projects</button></li>
            <li><button onClick={() => handleScroll("contact")} className="hover:text-yellow-300">Contact</button></li>
          </ul>
        </div>
  
        {/* Resume Download Button */}
        <div className="navbar-end">
          <a href="https://docs.google.com/document/d/e/2PACX-1vT2HZLgQzhyhgF8FUt3XrBSEQwDhN6LRGeXptyFSWWABhRJ-5lkUeKS-XzDkHlN2OOKjZYsFjxvQOv9/pub" download target="#" className="btn bg-yellow-400 text-black hover:bg-yellow-300 transform transition-transform duration-200 hover:scale-105">Resume</a>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  