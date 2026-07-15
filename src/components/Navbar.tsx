function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-extrabold tracking-wide text-blue-600">
          AV
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700">

          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>

          <a href="#experience" className="hover:text-blue-600">
            Experience
          </a>

          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;