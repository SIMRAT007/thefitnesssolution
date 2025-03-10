import React from "react";

const Banner = ({ bannerimg }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="h-44 md:h-[500px] w-full md:w-[1000px] bg-center mx-4 bg-no-repeat bg-white"
        style={{ 
          backgroundImage: `url(${bannerimg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          borderRadius: '10px' 
        }}
      />
    </div>
  );
};

export default Banner;