"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Recordings from "./Recordings";

const Column3 = () => {
    const [isRecordingsVisible, setRecordingsVisible] = useState(false);

    // Function to show the recordings modal
    const openRecordings = () => {
        setRecordingsVisible(true); // Show the recordings modal
    };

    // Function to close the recordings modal
    const closeRecordings = () => {
        setRecordingsVisible(false); // Hide the recordings modal
    };

    const [isHydrated, setIsHydrated] = useState(false);

    // Ensure this only runs on the client to prevent SSR mismatch
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const classRecordings = [
        {
            title: "Algebraic Equations",
            subject: "Class 7 Math",
            date: "24th October, 2024",
        },
        {
            title: "Inert Gases",
            subject: "Class 7 Math",
            date: "24th October, 2024",
        },
        {
            title: "Fundamentals of Organic Chemistry",
            subject: "Class 7 Science",
            date: "24th October, 2024",
        },
        {
            title: "Trigonometry 101",
            subject: "Class 7 Math",
            date: "24th October, 2024",
        },
    ];

    if (!isHydrated) {
        return null;
    }

    return (
        <div className='w-full'>
            <h1 className='text-black text-2xl md:my-4 font-bold'>Access Class Recordings</h1>
            <div className="m-auto py-4 md:py-8 px-4 shadow-xl rounded-xl">
                <div className="relative mt-2 w-full">
                    <div className="absolute top-2 left-3">
                        <img height={22} width={22} src="/images/search.png" alt="" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for class recordings"
                        className="w-full p-2 bg-[#4749B30D] px-10 text-black outline-none rounded-md"
                    />
                </div>

                <div className="flex justify-between items-center my-4">
                    <div>
                        <p className="text-black text-xs sm:text-sm">Filter By:</p>
                    </div>
                    <div className="space-x-2">
                        <select className="border p-1 rounded-md shadow-md text-xs sm:text-sm bg-[#4749B30D] cursor-pointer text-gray-500">
                            <option>This week</option>
                            <option>Last week</option>
                        </select>
                        <select className="border p-1 rounded-md text-gray-500 bg-[#4749B30D] cursor-pointer text-xs sm:text-sm shadow-md">
                            <option>All subjects</option>
                            <option>Math</option>
                            <option>Science</option>
                        </select>
                    </div>
                </div>

                <div>
                    {classRecordings.map((recording, index) => (
                        <div
                            key={index}
                            onClick={openRecordings} // Opens the modal on click
                            className="flex items-center w-full justify-between p-2 border-b text-black hover:shadow-xl duration-300 hover:scale-105 rounded-xl hover:text-[#4749B3] cursor-pointer">
                            <div className="w-full">
                                <p className="text-sm text-[#4749B3]">{recording.subject}</p>
                                <h3 className="text-lg font-bold w-11/12 ">{recording.title}</h3>
                                <p className="text-xs mt-4 text-gray-700">{recording.date}</p>
                            </div>
                            <div className="relative group">
                                {/* Background Image */}
                                <Image width={100} height={64} className="opacity-90" src="/images/video.png" alt="" />

                                {/* Play Icon - Hidden on Hover */}
                                <div className="absolute top-3 left-6 sm:left-7 group-hover:hidden">
                                    <Image width={24} height={24} src="/images/play.png" alt="Play icon" />
                                </div>

                                {/* "Play Now" Text - Shown on Hover */}
                                <div className="absolute top-4 left-3 sm:left-4 text-xs text-white hidden group-hover:block">
                                    Play Now
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Modal component for recordings */}
                {isRecordingsVisible && <Recordings isVisible={isRecordingsVisible} onClose={closeRecordings} />}
            </div>
        </div>
    );
};

export default Column3;
