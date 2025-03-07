import React, { useState, useEffect } from "react";
import smallBg from "../../assets/Gymbgsmall.png";
import bigBg from "../../assets/Gymbgbig.png";

const HeroSection = () => {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth > 400) {
        setBgImage(bigBg);
      } else {
        setBgImage(smallBg);
      }
    };

    updateBackground(); // Initial check
    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white bg-black bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${bgImage})` }}>
      {/* <h1 className="text-5xl font-bold text-neonGreen text-center">
        Sculpt Your Body, Elevate Your Spirit
      </h1> */}
      {/* <button className="mt-6 bg-neonGreen text-black px-6 py-3 rounded">Join Now</button> */}
    </div>
  );
};

export default HeroSection;
