"use client"
import { SlBookOpen } from "react-icons/sl";
import { PiIdentificationCard } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Column2 = () => {
    const router = useRouter();

    const handleClick = () => {
        // Replace '/live-class' with the route you want to navigate to
        router.push('/noliveclass');
    };
    return (
        <div className='hidden lg:block'>
            <h1 className='text-black text-2xl my-4 font-bold'>Quick Links</h1>
            <div className='flex flex-col gap-4'>
                <div className=' flex flex-col w-[25vw] justify-center text-center  rounded-2xl p-5 bg-[#4749B3] shadow-2xl cursor-pointer hover:bg-white hover:text-[#4749B3] hover:scale-105 duration-300'>
                    <div className='m-auto my-2 text-3xl' >< SlBookOpen /></div>
                    <h2 className='text-2xl font-bold'>Canvas LMS</h2>
                    <p className='w-3/4 my-2 text-sm m-auto'>Click here to access your LMS portal for assignments, class recordings and notes.</p>
                </div>
                <div onClick={handleClick} className=' flex flex-col w-[25vw] justify-center text-center  rounded-2xl p-5 bg-[#E66DFF] shadow-2xl cursor-pointer hover:bg-white hover:text-[#E66DFF] hover:scale-105 duration-300'>
                <div className='m-auto my-2 text-4xl' ><PiIdentificationCard /></div>
                <h2 className='text-2xl font-bold'>Join Live Class</h2>
                    <p className='w-3/4 my-2 text-sm m-auto'>Class 7 Math is starting in 1 hour, 35 minutes.</p>
                </div>
                <div className=' flex flex-col w-[25vw] justify-center text-center  rounded-2xl p-5 bg-[#6669FE] shadow-2xl cursor-pointer hover:bg-white hover:text-[#6669FE] hover:scale-105 duration-300'>
                <div className='m-auto my-2 text-3xl' >< FaWhatsapp /></div>
                <h2 className='text-2xl font-bold'>Contact Teacher</h2>
                    <p className='w-3/4 my-2 text-sm m-auto'>Click here to contact your teacher for any doubts or concerns.</p>
                </div>
            </div>
        </div>
    )
}

export default Column2
