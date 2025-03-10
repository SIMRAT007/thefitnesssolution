import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../../mockData/data";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink for smooth scrolling

const ResponsiveMenu = ({ open, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // Handle click outside to close modal
  const handleOutsideClick = (e) => {
    if (e.target.id === "menu-overlay") {
      onClose();
    }
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          id="menu-overlay"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full z-20 bg-black bg-opacity-50 flex justify-center items-start"
          onClick={handleOutsideClick} // Close on outside click
        >
          <div
            className="text-xl font-semibold uppercase bg-[#D1A609] text-white py-10 m-3 rounded-3xl w-10/12 max-w-md shadow-lg mt-20"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <ul className="flex flex-col justify-center items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="hover:text-[#585858] cursor-pointer">
                  {item.link.startsWith('#') ? (
                    <ScrollLink
                      to={item.link.substring(1)}
                      smooth={true}
                      duration={500}
                      onClick={onClose}
                      className="inline-block py-1 px-3 hover:text-[#585858] font-semibold cursor-pointer"
                    >
                      {item.title}
                    </ScrollLink>
                  ) : (
                    <a
                      href={item.link}
                      onClick={onClose}
                      className="inline-block py-1 px-3 hover:text-[#585858] font-semibold"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
              <li className="px-5 py-3 rounded-3xl border-2 border-white duration-200 hover:bg-white hover:text-[#D1A609] font-semibold cursor-pointer">
                <ScrollLink to="contact" smooth={true} duration={500} onClick={onClose}>
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;