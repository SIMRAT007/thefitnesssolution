import React from 'react';
import { trainersData } from '../../mockData/data';
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Trainers = () => {
  return (
    <section className="pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-0">
          <div className="max-w-[500px] lg:w-1/2">
            <motion.h2
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="font-manrope text-6xl text-[#F9DE7A] leading-[4rem] mb-2 text-center lg:text-left"
            >
              Your Fitness Goals,
            </motion.h2>
            <motion.h2
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="font-manrope text-6xl text-[#A07F07] leading-[4rem] mb-7 text-center lg:text-left"
            >
              Their Expertise
            </motion.h2>
            <motion.p
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-lg text-gray-500 mb-16 text-center lg:text-left"
            >
              Our Team Of Certified Trainers Brings Unparalleled Expertise To Help You Achieve Your Fitness Goals.
            </motion.p>
          </div>
          <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
              {trainersData.map((trainer, index) => (
                <motion.div
                  key={index}
                  variants={SlideUp(0.3)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center p-4"
                  style={{ background: 'linear-gradient(to bottom, #6F5805, black)' }}
                >
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-44 h-56 rounded-2xl object-cover filter grayscale"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-white text-center">{trainer.name}</h3>
                  <p className="text-sm text-gray-500 text-center">{trainer.role}</p>
                  <p className="text-sm text-gray-500 text-center">{trainer.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;