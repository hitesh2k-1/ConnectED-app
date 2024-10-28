"use client"
import Image from 'next/image';
import React from 'react';
import { TiVideoOutline } from "react-icons/ti";
import LiveClass from './liveclass';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/navigation';

const Column1 = () => {

    const settings = {
        dots: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [isLiveClassVisible, setLiveClassVisible] = useState(false);

    // Function to show the live class
    const openLiveClass = () => {
        setLiveClassVisible(true); // Show the live class
    };

    // Function to close the live class
    const closeLiveClass = () => {
        setLiveClassVisible(false); // Hide the live class
    };
    const announcements = [
        { src: "/images/sun.png", info: "On account of Independence Day, August 15th will be a holiday." },
        { src: "/images/board.png", info: "Reminder to finish your assignments and submit them by Monday." }
    ];

    const router = useRouter();

    const handleClick = () => {
        router.push('/noliveclass');
    };

    const schedule = [
        { icon: <TiVideoOutline />, data: "Class 7, Science | Live Class ", time: "Tuesday, 5:00 - 5:50 PM", date: "Yesterday" },
        { icon: <TiVideoOutline />, data: "Class 7, Science | Live Class ", time: "Tuesday, 6:30 - 7:15 PM", date: "Today" },
        { icon: <TiVideoOutline />, data: "Class 7, Science | Live Class ", time: "Tuesday, 5:00 - 5:50 PM", date: "Tomorrow" },
        { icon: <TiVideoOutline />, data: "Class 7, Science | Live Class ", time: "Tuesday, 5:00 - 5:50 PM", date: "23rd Sept. 2024" },
    ];

    return (
        <div className='w-[90vw]'>
            {/* Announcement section */}
            <div className="w-full hidden sm:block">
                <div className="text-start">
                    <h1 className="font-bold text-2xl text-black my-4">Announcements</h1>
                    <div className="shadow-xl rounded-2xl bg-white my-2 p-2">
                        {announcements.map((announcement, index) => (
                            <div
                                key={index}
                                className="flex gap-4 items-center text-[#4749B3] p-2 bg-[#F8F8F8] m-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:shadow-xl duration-300 hover:scale-105"
                            >
                                <Image height={24} width={24} src={announcement.src} alt="Announcement icon" />
                                <p className="text-xs sm:text-sm">{announcement.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Announcement section for small screens */}
            <div className="w-full sm:hidden">
                <div className="text-start">
                    <h1 className="font-bold text-2xl text-black my-4">Announcements</h1>
                    <div className=" rounded-xl bg-white my-4 p-2">
                    <Slider {...settings}>
                        {announcements.map((announcement, index) => (
                            <div
                                key={index} className='w-full' >
                                <div
                                className="flex gap-4 items-center text-[#4749B3] p-3 bg-[#F8F8F8] m-1 rounded-xl ">
                                <Image height={24} width={24} src={announcement.src} alt="Announcement icon" />
                                <p className="text-xs sm:text-sm">{announcement.info}</p>
                            </div>
                            </div>
                        ))}
                        </Slider>
                    </div>
                </div>
            </div>
          
                {/* Quick links section for mobile */ }
    <div className="lg:hidden">
        <div className="text-start">
            <h1 className="font-bold text-2xl text-black my-4">Quick Links</h1>
            <div onClick={handleClick} className='flex items-center font-bold gap-6 my-2 bg-[#E66DFF] hover:scale-105 duration-300 p-2 rounded-lg'>
                <Image height={36} width={36} src="/images/id.png" alt="" />
                <h2>Join Live Class</h2>
            </div>
            <div className='flex items-center font-bold gap-6 my-2 bg-[#4749B3] p-2 rounded-lg hover:scale-105 duration-300'>
                <Image height={36} width={36} src="/images/book.png" alt="" />
                <h2>Canvas LMS</h2>
            </div>
            <div className='flex items-center font-bold gap-6 my-2 bg-[#6669FE] p-2 rounded-lg hover:scale-105 duration-300'>
                <Image height={36} width={36} src="/images/whatsapp.png" alt="" />
                <h2>Contact Teacher</h2>
            </div>
        </div>
    </div>

    {/* Class Schedule Section */ }
    <div className="w-full">
        <div className="text-start">
            <h1 className="font-bold text-2xl text-black mt-8 my-4 md:my-4">Your Class Schedule</h1>
            <div className='shadow-xl rounded-2xl bg-white my-2 p-2 sm:p-4'>
                {schedule.map((scheduleItem, index) => (
                    <div
                        onClick={openLiveClass}
                        key={index}
                        className='flex justify-between text-[#4749B3] items-center cursor-pointer py-3 sm:p-1 px-4 my-3 sm:my-2 bg-[#F2F2FF] md:bg-none rounded-lg hover:bg-[#E66DFF] hover:text-white hover:shadow-xl duration-300 hover:scale-105'
                    >
                        <div className="flex gap-4 items-center sm:m-2">
                            <div className='text-2xl'>{scheduleItem.icon}</div>
                            <div>
                                <p className='text-xs sm:text-sm hover:text-white'>{scheduleItem.data}</p>
                                <p className='sm:text-base text-sm font-bold'>{scheduleItem.time}</p>
                            </div>
                        </div>
                        <div className='text-xs'>
                            <p>{scheduleItem.date}</p>
                        </div>
                    </div>
                ))}
            </div>
            <LiveClass isVisible={isLiveClassVisible} onClose={closeLiveClass} />
        </div>
    </div>
            </div >
            );
};

export default Column1;
