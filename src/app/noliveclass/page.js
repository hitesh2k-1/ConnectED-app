import Image from 'next/image'
import React from 'react'

const NoLiveClass = () => {
    return (
        <div className='min-h-screen bg-white flex justify-center items-center'>

            <div className=' flex flex-col mx-5 lg:w-[30vw] justify-center text-center  rounded-2xl p-10 bg-[#6F6F6F]'>
                <Image className='m-auto my-2' height={32} width={32} src="/images/id.png" alt="book" />
                <h2 className='text-2xl font-bold'>No Live Class</h2>
                <p className='w-3/4 my-2 text-sm m-auto'>You have no live classes scheduled for today.</p>
            </div>
        </div>
    )
}

export default NoLiveClass
