import React from 'react';
import { faqData } from '../../mockData/data';
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

export default function Faq() {
  return (
    <div className="bg-black py-10 sm:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-0">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-8">
               <motion.p
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=" text-white"
          >
            <h3 className="text-3xl font-semibold text-white">{faq.question}</h3>
          </motion.p>
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=" text-white"
          >
              <p className="text-2xl mt-3 text-gray-600">{faq.answer}</p>
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}