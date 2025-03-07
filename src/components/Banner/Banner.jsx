import React from "react";

const Banner = ({ bannerimg }) => {
  return (
    <div
      className="h-44 md:h-96 bg-center mx-4 md:mx-20 bg-no-repeat"
      style={{ backgroundImage: `url(${bannerimg})`, backgroundSize: 'contain' }}
    />
  );
};

export default Banner;