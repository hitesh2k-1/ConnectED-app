import Image from 'next/image';
import React from 'react';

const announcements = [
    { src: "/images/sun.png", info: "On account of Independence Day, August 15th will be a holiday." },
    { src: "/images/board.png", info: "Reminder to finish your assignments and submit them by Monday." }
];
const schedule = [
    { src: "/images/camera.svg", data: "Class 7, Science | Live Class ", time: "Tuesday, 5:00 - 5:50 PM", date: "Yesterday" },
    { src: "/images/camera.svg", data: "Class 7, Science | Live Class ", time: "Tuesday, 6:30 - 7:15 PM", date: "Today" },
    { src: "/images/camera.svg", data: "Class 7, Science | Live Class ", time: "Tuesday, 5:00 - 5:50 PM", date: "Tomorrow" },
    { src: "/images/camera.svg", data: "Class 7, Science | Live Class ", time: "Tuesday, 5:00 - 5:50 PM", date: "23rd Sept. 2024" },
];

const Column1 = () => {
    return (
        <div className='w-[90vw]  ' >
            {/* Announcement section */}
            <div className="w-full">
                <div className="text-start">
                    <h1 className="font-bold text-2xl text-black my-4">Announcements</h1>
                    <div className='shadow-xl rounded-2xl bg-white my-2 p-4' >
                        {announcements.map((announcement, index) => (
                            <div
                                key={index}
                                className="flex gap-4 items-center text-[#4749B3] p-2 bg-[#F8F8F8] m-2 rounded-lg cursor-pointer hover:bg-gray-200  "
                            >
                                <Image height={24} width={24} src={announcement.src} alt="Announcement icon" />
                                <p className='text-xs sm:text-sm' >{announcement.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick links section for mobile */}
            <div className=" lg:hidden ">
                <div className="text-start">
                    <h1 className="font-bold text-2xl text-black  my-4">Ouick Links</h1>
                            <div className='flex items-center font-bold gap-6 my-2 bg-[#E66DFF] p-2 rounded-lg'>
                                <Image height={36} width={36} src="/images/id.png" alt="" />
                                <h2>Join Live Class</h2>
                            </div>
                            <div className='flex items-center font-bold gap-6 my-2 bg-[#4749B3] p-2 rounded-lg'>
                                <Image height={36} width={36} src="/images/book.png" alt="" />
                                <h2>Canvas LMS</h2>
                            </div>
                            <div className='flex items-center font-bold gap-6 my-2 bg-[#6669FE] p-2 rounded-lg'>
                                <Image height={36} width={36} src="/images/whatsapp.png" alt="" />
                                <h2>Conatct Teacher</h2>
                            </div>
                    </div>
            </div>

            {/* Class Schedule Section */}

            <div className=" w-full">
                <div className="text-start ">
                    <h1 className="font-bold text-2xl text-black my-6">Your Class Schedule</h1>
                    <div className='shadow-xl rounded-2xl bg-white my-2 sm:p-4 p-2' >
                        {schedule.map((schedule, index) => (
                            <div className='flex justify-between text-[#4749B3] items-center cursor-pointer py-2 px-4 my-2 bg-[#F2F2FF] md:bg-none rounded-lg hover:bg-[#E66DFF] hover:text-white  '>
                                <div
                                    key={index}
                                    className="flex gap-4 items-center sm:m-2 ">
                                    <Image height={32} width={32} src={schedule.src} alt="camera icon" />
                                    <div>
                                        <p className='text-xs sm:text-sm hover:text-white' >{schedule.data}</p>
                                        <p className='sm:text-base text-sm font-bold ' >{schedule.time}</p>
                                    </div>
                                </div>
                                <div className='text-xs'>
                                    <p>{schedule.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Column1;
