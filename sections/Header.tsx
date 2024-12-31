"use client";

import React, { MouseEvent, useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveSection(window.location.hash || "");
    }
  }, []);

  // HANDLE SCROLL ON CLICK
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    setActiveSection(id);

    const section = document.querySelector(id);
    if (section) {
      // Smoothly scroll to the section
      section.scrollIntoView({ behavior: "smooth" });

      // Update the URL hash without reloading the page
      history.pushState(null, "", id);
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className={`nav-item${
            activeSection === "#home" ? " active-section" : ""
          }`}
          onClick={(e) => handleScroll(e, "#home")}
        >
          Home
        </a>

        <a
          href="#projects"
          className={`nav-item${
            activeSection === "#projects" ? " active-section" : ""
          }`}
          onClick={(e) => handleScroll(e, "#projects")}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item${
            activeSection === "#about" ? " active-section" : ""
          }`}
          onClick={(e) => handleScroll(e, "#about")}
        >
          About
        </a>

        <a
          href="#contact"
          className={`nav-item${
            activeSection === "#contact" ? " active-section" : ""
          }`}
          onClick={(e) => handleScroll(e, "#contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
