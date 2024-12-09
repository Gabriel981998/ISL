import React from 'react'
import image from "../components/images/Logo ISL Final-02.png"
import { IoIosArrowForward } from "react-icons/io";

const Getintouch = () => {
  return (
    <div className='flex justify-center items-center bg-gray-50'>
      <div className='grid grid-cols-4  text-black  gap-4 p-20 font-serif md:grid-flow-row'>
        {/*image*/}
        <div className='flex items-center'>

            <h1 className='text-3xl'>Get in touch</h1>

        </div>
        {/*Info*/}
        <div>
            <h1 className='pb-4 font-bold '>REQUEST A COPY OF OUR SCHOOL PROSPECTUS</h1>
            <p className='pb-4 text-gray-700'>Detailed info ,brochures and other froms can be mailed to you upon request.</p>
          <div className='flex items-center'>
          <p className='text-red-800 '>Request A Prospectus</p>
          <IoIosArrowForward  className='text-red-800'/>
          </div>
        </div>
        <div>
            <h1 className='pb-4 font-bold '>BECOME A STUDENT AT THE ISL SCHOOL</h1>
            <p className='pb-4 text-gray-700'>Please contact our Admission Office on 24399000000 who will be happy to arrange this for you</p>
        
            <div className='flex items-center'>
            <p className='text-red-800'>Apply For Admission</p>
          <IoIosArrowForward  className='text-red-800'/>
          </div>
        </div>
        <div>
            <h1 className='pb-10 font-bold '>OPEN MORNING BLOCKS</h1>
            <p className='pb-11 text-gray-700'>We keep you updated of what's happening insid and outside of The ISL</p>
            

            <div className='flex items-center'>
            <p className='text-red-800'>Calendar Of Events</p>
          <IoIosArrowForward  className='text-red-800'/>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Getintouch
