"use client";
import React, { useState, useEffect } from 'react';
import { CiBellOn } from "react-icons/ci";

const LiveClass = ({ isVisible, onClose }) => {
    if (!isVisible) return null; 

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col items-center justify-center min-h-screen max-w-[90vw] m-auto bg-transparent">
                {/* Notification Banner */}
                <div className="flex rounded-2xl px-8 items-center justify-center bg-white shadow-xl text-[#E66DFF] py-2 font-bold">
                    <span className='text-3xl'><CiBellOn /></span>
                    <span>Class 7 Math is starting in 1 hour, 34 minutes.</span>
                </div>

                {/* Card */}
                <div className="flex flex-col items-center justify-center px-8 py-6 bg-white rounded-3xl shadow-md text-center mt-5">
                    <p className="text-lg font-bold mt-6 text-[#6669FE] w-full">
                        You can join the live class <br />
                        5 minutes before it starts. Please wait.
                    </p>
                    <button onClick={onClose}
                        className="mt-6 px-8 bg-[#6669FE] text-white py-2 rounded-full font-semibold hover:scale-105 transition duration-200">
                        Okay.
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LiveClass;
