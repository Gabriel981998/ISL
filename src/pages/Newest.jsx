import React from 'react'
import {motion} from "framer-motion"

const Newest = () => {
  return (<div className=' '>
<div className=' w-full bg-gradient-to-b from-transparent from-70% to to-white text-gray-500 lg:py-6'>
      
      <div className='flex overflow-hidden whitespace-nowrap'>
        {
          [...Array(2)].map((_,i)=>(
            <motion.h1 initial={{x:"0"}}
            animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} key={i} className='py-2 text-6xl font-bold leading-none tracking-tighter lg:text-8xl'>
              <h1> International Shool of Lubumbashi</h1>
            </motion.h1>
          ))
        }

      </div>

      
    </div>
  </div>
    
  )
}

export default Newest
