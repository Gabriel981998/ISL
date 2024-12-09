import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 bg-blue-950 text-white pb-40'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://www.teacherhorizons.com/static/mediav2/schools/6555/images/847757_main.png'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://www.teacherhorizons.com/static/mediav2/schools/6555/images/847752_main.png'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://www.teacherhorizons.com/static/mediav2/schools/6555/images/847761_main.png'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://www.teacherhorizons.com/static/mediav2/schools/6555/images/847754_main.png'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-serif'>LEARNING AT ISL</h3>
        <p className='text-2xl py-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className='border rounded-full p-2  mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white p-2 rounded-full border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;