import Image from 'next/image'
import React from 'react'

const Column2 = () => {
  return (
      <div className='hidden lg:block'>
        <h1 className='text-black text-2xl my-4 font-bold'>Quick Links</h1>
        <div className='flex flex-col gap-4'>
            <div className=' flex flex-col w-[25vw] justify-center text-center  rounded-2xl p-5 bg-[#4749B3]'>
                <Image className='m-auto my-2' height={32} width={32} src="/images/book.png" alt="book" />
                <h2 className='text-2xl font-bold'>Canvas LMS</h2>
                <p className='w-3/4 my-2 text-sm m-auto'>Click here to access your LMS portal for assignments, class recordings and notes.</p>
            </div>
            <div className=' flex flex-col w-[25vw] justify-center text-center  rounded-2xl p-5 bg-[#E66DFF]'>
                <Image className='m-auto my-2' height={32} width={32} src="/images/id.png" alt="book" />
                <h2 className='text-2xl font-bold'>Join Live Class</h2>
                <p className='w-3/4 my-2 text-sm m-auto'>Class 7 Math is starting in 1 hour, 35 minutes.</p>
            </div>
            <div className=' flex flex-col w-[25vw] justify-center text-center  rounded-2xl p-5 bg-[#6669FE]'>
                <Image className='m-auto my-2' height={32} width={32} src="/images/whatsapp.png" alt="book" />
                <h2 className='text-2xl font-bold'>Contact Teacher</h2>
                <p className='w-3/4 my-2 text-sm m-auto'>Click here to contact your teacher for any doubts or concerns.</p>
            </div>
        </div>
      </div>
  )
}

export default Column2
