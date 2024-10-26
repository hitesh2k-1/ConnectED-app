"use client";
import { RxCross2 } from "react-icons/rx";
import { CiPlay1 } from "react-icons/ci";
import { RiForward15Line } from "react-icons/ri";
import { RiReplay15Fill } from "react-icons/ri";
import { CiVolumeMute } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";

import React, { useState, useEffect } from 'react';

const Recordings = ({ isVisible, onClose }) => {
    // if (!isVisible) return null; 
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50">
                <div className='relative flex flex-col items-center  bg-[#4749B3] rounded-3xl w-[90vw] h-[90vh]' >
                    <h1 className="mt-4" >Class 7 Science</h1>
                    <h2 className=' text-sm sm:text-xl font-semibold mb-2'>Fundamentals of Organic Chemistry</h2>
                    <div onClick={onClose} className='absolute text-2xl cursor-pointer top-4 sm:top-6 right-4 sm:right-6' ><RxCross2 /></div>
                    <div className="w-full h-full overflow-hidden " >  <img className="object-fill w-full h-full rounded-b-3xl" src="/images/videocall.png" alt="" />
                    </div>
                    <div className="absolute  bottom-0  border-t-2 w-[95%]  bg-transparent z-50" >
                        <div className="absolute top-[-30px] right-3 sm:right-6">35:28 / 1:20:21</div>
                        <div className="flex justify-between m-6" >
                            <div className="flex gap-3 text-lg sm:text-2xl cursor-pointer" >
                                <CiPlay1 />
                                <RiReplay15Fill />
                                <RiForward15Line />
                            </div>
                            <div className="flex gap-4 text-lg sm:text-2xl cursor-pointer" >
                                <CiVolumeMute />
                                <MdOutlineZoomOutMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recordings
