import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Banner2 = () => {
  return (
    <div className="container my-14 mt-40">
      <div className="bg-[#98cd05] p-20 md:py-24 flex justify-center items-center rounded-full">
        {/* brand info */}
        <div className="flex flex-col justify-center text-center space-y-8 lg:px-44">
          <motion.h1
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-3xl lg:text-6xl font-bold uppercase"
          >
            Connect Engage Transform
          </motion.h1>
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=" text-white"
          >
            We will make sure you get the right and the best quality service
            for your workout
          </motion.p>
          <motion.div
            variants={SlideUp(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <button className="primary-btn bg-black text-white">Contact Us For More Info</button>
            {/* <button className="border-2 border-primary text-primary font-bold px-5 rounded-lg">
              Stay In Touch
            </button> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
