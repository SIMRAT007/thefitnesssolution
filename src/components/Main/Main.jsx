import React, { useState } from "react";
import Hero from "../Hero/Hero";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [error, setError] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = (e) => {
    if (e.target.id === "modal-background" || e.target.textContent === "Cancel") {
      setIsModalOpen(false);
      setHeight("");
      setWeight("");
      setBmi(null);
      setBmiCategory("");
      setError("");
    }
  };

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    if (heightInMeters > 0 && weight > 0) {
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      setError("");
      determineBmiCategory(bmiValue);
    } else {
      setError("Please enter valid height and weight");
      setBmi(null);
      setBmiCategory("");
    }
  };

  const determineBmiCategory = (bmiValue) => {
    switch (true) {
      case (bmiValue < 18.5):
        setBmiCategory("You are Underweight ");
        break;
      case (bmiValue >= 18.5 && bmiValue <= 24.9):
        setBmiCategory("Healthy weight");
        break;
      case (bmiValue >= 25 && bmiValue <= 29.9):
        setBmiCategory("Overweight");
        break;
      case (bmiValue >= 30 && bmiValue <= 34.9):
        setBmiCategory("Class 1 obesity");
        break;
      case (bmiValue >= 35 && bmiValue <= 39.9):
        setBmiCategory("Class 2 obesity");
        break;
      case (bmiValue >= 40):
        setBmiCategory("Class 3 obesity");
        break;
      default:
        setBmiCategory("No category found");
        break;
    }
  };

  return (
    <div className="relative">
      <Hero />
      <div className="md:hidden absolute text-xs bg-[#D1A609] text-white text-center py-1 px-1 top-5 flex justify-center items-center m-auto rounded-full shadow-lg left-1/2 transform -translate-x-1/2 ">
        <div className="text-[#D1A609] font-bold bg-white p-1 rounded-full shadow-lg mr-1 text-xs">
          Your's Health
        </div>
        Our Priority 
      </div>

       {/* Floating Avatar Group on Right Side */}
       <div className="absolute bottom-40 left-40  flex flex-col items-center space-y-2 max-md:hidden">
        <div className="flex items-center space-x-[-10px]">
          <img
            src="https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-gray-500 shadow-lg"
          />
          <div className="w-12 h-12 rounded-full bg-[#D1A609] flex items-center justify-center text-white text-lg font-bold shadow-lg">
            <span>👤</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#F9DE7A] flex items-center justify-center text-black text-lg font-bold shadow-lg">
            EF
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-gray-700 text-lg font-bold shadow-lg">
            +2
          </div>
        </div>

        {/* 12k+ Happy Spirits Text */}
        <p className="text-gray-700 text-sm font-semibold text-white px-2 py-1 rounded-full shadow-md">
          12k+ Happy Spirits 🎉
        </p>
      </div>
      

      {/* Right side  */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 space-y-6 mt-20 hidden sm:block">
      <div className="text-center text-xl font-bold text-gray-600 space-y-1">
          {"JOIN TODAY".split("").map((char, index) => (
            <div key={index} className="hover:text-[#D1A609] cursor-pointer hover:scale-110 duration-200">{char}</div>
          ))}&#8594;
        </div>
      </div>
       {/* Left side  */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 space-y-6 mt-20 hidden sm:block">
        <div className="bg-[#D1A609] p-4 rounded-full shadow-lg hover:bg-[#F7D149] cursor-pointer hover:scale-110 duration-200">
          <FaInstagram className="text-xl text-gray-800" />
        </div>
        <div className="bg-[#D1A609] p-4 rounded-full shadow-lg hover:bg-[#F7D149] cursor-pointer hover:scale-110 duration-200">
          <FaFacebook className="text-xl text-gray-800" />
        </div>
        <div className="bg-[#D1A609] p-4 rounded-full shadow-lg hover:bg-[#F7D149] cursor-pointer hover:scale-110 duration-200">
          <FaTwitter className="text-xl text-gray-800" />
        </div>
      </div>

     {/* Modal Trigger Button */}
     <button
        onClick={toggleModal}
        className="absolute bottom-40 right-40 bg-[#D1A609] text-gray-800 p-3 rounded-full shadow-lg hover:bg-[#F7D149] cursor-pointer hover:scale-110 duration-200 cursor-pointer font-bold max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:w-1/2 max-md:bottom-14" 
      >
        Calculate Your BMI
      </button>
      {/* Modal */}
      {isModalOpen && (
        <div
          id="modal-background"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end sm:items-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-6 rounded-t-lg sm:rounded-lg shadow-lg w-full sm:w-1/3">
            <h2 className="text-xl font-bold mb-4">Calculate Your BMI</h2>
            <input
              type="text"
              placeholder="Height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            {error && <div className="mb-5 text-red-500">{error}</div>}
            {bmi && (
              <div className="w-full mb-5">
                <div>Your Calculated BMI: {bmi}</div>
                <div className=" font-bold">{bmiCategory}</div>
              </div>
            )}
            <div className="flex justify-between">
              <button
                onClick={calculateBmi}
                className="w-full bg-[#D1A609] text-white p-2 rounded hover:bg-[#6F5805] duration-200"
              >
                Submit
              </button>
              <button
                onClick={toggleModal}
                className="w-full bg-gray-300 text-black p-2 rounded hover:bg-gray-400 duration-200 ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;