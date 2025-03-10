import React from "react";
import { NavbarMenu } from "../../mockData/data";
import Logo from "../../assets/logo.png";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-8"
        >
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase text-white">
            <img src={Logo} alt="Logo" className="h-20 w-20" />
            {/* <p>The Fitness</p>
            <p style={{ color: '#D1A609' }}>Solution</p> */}
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    {item.link.startsWith('#') ? (
                      <ScrollLink
                        to={item.link.substring(1)}
                        smooth={true}
                        duration={500}
                        className="inline-block py-1 px-3 hover:text-[#D1A609] font-semibold cursor-pointer"
                      >
                        {item.title}
                      </ScrollLink>
                    ) : (
                      <a
                        href={item.link}
                        className="inline-block py-1 px-3 hover:text-[#D1A609] font-semibold"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons section */}
          <div className="flex items-center gap-4">
            {/* <a href="tel:7786327833" className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 bg-[#98cd05] text-white max-sm:ml-5">
              <FaPhone />
            </a> */}
            <ScrollLink to="contact" smooth={true} duration={500}>
              <button className="hover:bg-[#D1A609] text-[#D1A609] font-semibold hover:text-white rounded-md border-2 border-[#D1A609] px-6 py-2 duration-200 hidden md:block cursor-pointer">
                Contact Us
              </button>
            </ScrollLink>
          </div>
          {/* Mobile hamburger Menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl text-white" />
          </div>
        </motion.div>
      </nav>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;