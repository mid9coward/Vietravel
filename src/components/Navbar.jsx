import React, { useState, useEffect } from "react"; // Import React and hooks for state and lifecycle management.
import navLogo from "../assets/navLogo.svg"; // Import the navigation logo.
import { Link } from "react-router-dom"; // Import Link for internal navigation.
import NavLinks from "./NavLinks"; // Import the NavLinks component for rendering navigation links.
import { leftLinks } from "../data"; // Import the data for left navigation links.
import { rightLinks } from "../data"; // Import the data for right navigation links.

const Navbar = () => {
  // State to track if the navbar is sticky.
  const [stickyNavbar, setStickyNavbar] = useState(false);
  // State to track if the mobile menu is open.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect to add/remove the scroll listener.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add a scroll listener on mount.
    return () => window.removeEventListener("scroll", handleScroll); // Clean up the listener on unmount.
  }, [stickyNavbar]); // Depend on stickyNavbar to ensure the listener works correctly.

  // Function to toggle stickyNavbar based on scroll position.
  const handleScroll = () => {
    setStickyNavbar(window.scrollY > 600); // Make navbar sticky if scrolled more than 600px.
  };

  return (
    <>
      {/* Navbar container with conditional styling for sticky behavior */}
      <nav
        className={`text-center z-50 w-full absolute ${
          stickyNavbar
            ? "font-expletus animate-fade-in-down sticky top-0 bg-gray-50 shadow-sm"
            : ""
        }`}
      >
        <div
          className={`section-center flex items-center justify-between lg:justify-center lg:space-x-32 sticky text-center z-50 w-full ${
            stickyNavbar ? "py-4" : ""
          }`}
        >
          {/* Left navigation links */}
          <ul className="nav-links-container">
            <NavLinks links={leftLinks} setIsMenuOpen={setIsMenuOpen} />
          </ul>

          {/* Center logo with a link to the home page */}
          <Link
            to="/"
            aria-label="Reverie Travel" // Accessibility: Screen readers.
            title="Reverie Travel" // Tooltip on hover.
            className="inline-flex items-center"
          >
            <img src={navLogo} className="w-8 h8" alt="company logo" />
            <span className="company-name sm:text-2xl">Reverie Travel</span>
          </Link>

          {/* Right navigation links */}
          <ul className="nav-links-container">
            <NavLinks links={rightLinks} setIsMenuOpen={setIsMenuOpen} />
          </ul>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu" // Accessibility: Screen readers.
              title="Open Menu" // Tooltip on hover.
              className="p-2 -mr-1 transition duration-200 rounded hover:scale-125"
              onClick={() => setIsMenuOpen(true)} // Open the mobile menu.
            >
              {/* Hamburger menu icon */}
              <svg className="w-5 text-black sm:w-8w" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>

            {/* Mobile menu content */}
            {isMenuOpen && (
              <div className="animate-fade-in-down absolute top-0 left-0 w-full text-black bg-green-50 text-left p-5 border rounded shadow-sm">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between mb-4">
                  {/* Logo inside the mobile menu */}
                  <div>
                    <Link
                      to="/"
                      aria-label="Reverie Travel"
                      title="Reverie Travel"
                      className="inline-flex items-center"
                      onClick={() => setIsMenuOpen(false)} // Close menu when clicked.
                    >
                      <img
                        src={navLogo}
                        className="w-8 h8"
                        alt="company logo"
                      />
                      <span className="company-name">Reverie Travel</span>
                    </Link>
                  </div>

                  {/* Close menu button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)} // Close menu.
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Navigation links in the mobile menu */}
                <nav>
                  <ul className="space-y-4">
                    <NavLinks links={leftLinks} setIsMenuOpen={setIsMenuOpen} />
                    <NavLinks
                      links={rightLinks}
                      setIsMenuOpen={setIsMenuOpen}
                    />
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; // Export the Navbar component for use in other parts of the app.
