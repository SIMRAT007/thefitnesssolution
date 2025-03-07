import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    const day = currentTime.toLocaleDateString("en-US", { weekday: "long" });
    const date = currentTime.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
    const time = currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <div className="bg-black py-0 sm:py-0">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg lg:rounded-l-[2rem]" style={{ background: 'linear-gradient(to bottom, #424735, black)' }}></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center text-white">
                                    About Us – The Fitness Solution
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
                                    Welcome to The Fitness Solution, your ultimate destination for health, strength, and transformation! We are more than just a gym—we are a community dedicated to helping you achieve your fitness goals with expert guidance, top-notch equipment, and a motivating environment.
                                    At The Fitness Solution, we believe that fitness is not just about lifting weights or running on a treadmill; it’s a lifestyle.
                                    Our state-of-the-art facility is equipped with the latest fitness technology, offering a variety of workout options including strength training, cardio, functional fitness, and group classes. We also provide nutritional support and wellness programs to ensure a holistic approach to your health journey.
                                    Join us today and take the first step towards a healthier, stronger, and more confident you. Your fitness journey starts here! <br /><br />
                                    🏋️‍♂️ Train Hard. Stay Strong. Live Fit. 💪 <br/><br/></p>
                            </div>
                        </div>



                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem]" style={{ background: 'linear-gradient(to bottom, #424735, black)' }}></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center text-white">Timings</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
                                    MONDAY - FRIDAY: 6:00 AM - 10:00 PM <br />
                                    SATURDAY: 8:00 AM - 8:00 PM <br />
                                    SUNDAY: 9:00 AM - 6:00 PM
                                </p>
                            </div>
                            <div className="flex items-center justify-center border-t-2 border-black px-0 py-0 text-gray-800 text-sm font-semibold mt-5 h-full text-white">
                                {/* First Box: Two Texts One Below the Other */}
                                <div className="border border-black px-6 py-4 flex flex-col items-start justify-center w-full min-h-full ">
                                    <p className="text-base">{day}</p>
                                    <p className="text-sm text-white">{date}</p>
                                </div>

                                {/* Second Box: Centered Text */}
                                <div className="border border-black px-6 py-4 flex items-center justify-center w-full min-h-full ">
                                    <p className="text-base">{time}</p>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg" style={{ background: 'linear-gradient(to bottom, #424735, black)' }}></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center text-white">Contacts</p>
                                <div className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    <div className="flex flex-col items-start space-y-4 max-lg:items-center">
                                        {/* Email */}
                                        <div className="flex items-center space-x-2 mt-8 max-md:mt-0">
                                            <FaEnvelope className="text-gray-600 text-lg" />
                                            <p className="text-base">solutionthefitness@gmail.com</p>
                                        </div>

                                        {/* Phone */}
                                        <div className="flex items-center space-x-2">
                                            <FaPhone className="text-gray-600 text-lg" />
                                            <p className="text-base">+91 90414-80932, 98724-13090</p>
                                        </div>

                                        {/* Address */}
                                        <div className="flex items-center space-x-2 pb-4">
                                            <FaMapMarkerAlt className="text-gray-600 text-lg" />
                                            <p className="text-base">Mohanpur, Daheru, G.T. Road Khanna, Punjab - 141412</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" style={{ background: 'linear-gradient(to bottom, #424735, black)' }}></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center text-white">
                                    What We Offer at The Fitness Solution 💪🔥
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
                                    ✅ State-of-the-Art Gym Equipment 🏋️‍♂️ – Top-quality machines & free weights for all fitness levels.<br />

                                    ✅ Personal Training 💼🏃‍♂️ – Certified trainers to help you reach your goals with customized plans.<br />

                                    ✅ Group Fitness Classes 🏋️‍♀️🎶 – Fun & energetic sessions including HIIT, Zumba, Yoga, and more! <br />

                                    ✅ Cardio Zone ❤️🏃 – High-performance treadmills, cycling, rowing, and elliptical machines. <br />

                                    ✅ Strength Training 💪🏆 – Build muscle & endurance with expert guidance. <br />

                                    ✅ Nutritional Guidance 🥗🍎 – Personalized diet plans to complement your fitness journey. <br />

                                    ✅ Locker & Shower Facilities 🚿🔑 – Clean, secure, and convenient amenities for your comfort. <br />

                                    Join The Fitness Solution today and take the first step towards a healthier YOU! 🚀🔥    <br /><br />                            </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}