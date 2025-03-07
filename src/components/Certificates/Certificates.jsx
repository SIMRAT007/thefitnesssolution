import { certificateImages } from '../../mockData/data';
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

export default function Certificates() {
  return (
    <div className="py-4 sm:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {certificateImages.map((image, index) => (
            <motion.img
              key={index}
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              alt={image.alt}
              src={image.src}
              width={image.width}
              height={image.height}
              className={`col-span-2 max-h-12 w-full object-contain lg:col-span-1 ${index >= certificateImages.length - 1 ? 'max-md:col-span-4' : ''}`}
              style={{ filter: 'invert(1) brightness(2)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}