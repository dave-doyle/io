import React from 'react';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li><a onClick={() => scrollToSection('About')}>About</a></li>
        <li><a onClick={() => scrollToSection('Projects')}>Projects</a></li>
        <li><a onClick={() => scrollToSection('Contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
