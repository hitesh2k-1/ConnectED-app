import Image from "next/image";
import React from "react";

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

const Column3 = () => {
  return (
    <div className='w-full'>
        <h1 className='text-black text-2xl my-4 font-bold'>Access Class Recordings</h1>
    <div className=" m-auto p-4 shadow-xl rounded-xl">
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
            <p className="text-black text-sm">Filter By:</p>
        </div>
        <div className="space-x-2" > 
        <select className="border p-1 rounded-md shadow-md text-sm bg-[#4749B30D] cursor-pointer text-gray-500">
          <option>This week</option>
          <option>Last week</option>
        </select>
        <select className="border p-1 rounded-md text-gray-500 bg-[#4749B30D] cursor-pointer text-sm shadow-md">
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
            className="flex items-center w-full justify-between p-2 border-b"
          >
            <div className="w-full">
            <p className="text-sm text-[#4749B3]">{recording.subject}</p>
              <h3 className="text-lg font-bold w-11/12 text-black">{recording.title}</h3>
              <p className="text-xs mt-4 text-gray-700">{recording.date}</p>
            </div>
            <div className="relative hover:bg-pink-500">
              <Image width={100} height={64} className="opacity-90" src="/images/video.png" alt="" />
              <Image width={24} height={24} className="absolute top-3 left-7" src="/images/play.png" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Column3;
