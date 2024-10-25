import Image from 'next/image'
import React from 'react'

const details = [
  {name: "Gabrisa" , class : 7 , subjects : "math + science"},
]

const Navbar = () => {
  const student = details[0];

  return (
    <div>
      <div className='bg-[#6669FE] flex justify-between items-center p-4 sm:px-10' >
        <Image width={100} height={50} src="/images/logo.png" alt="logo" />
        <h1 className='font-bold text-xl sm:text-3xl'>Student Portal</h1>
        <div className='sm:flex flex-col text-end hidden ' >
          <p className='text-2xl font-bold'>Hello, {student.name}!</p>
          <p className='text-xs'>{`Class ${student.class} , ${student.subjects}`}</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
