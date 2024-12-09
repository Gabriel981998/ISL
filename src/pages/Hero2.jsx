import React, { useEffect, useState } from 'react'
import { client } from '../lib/client'
import { Link } from 'react-router-dom'
import Newest from './Newest'





 
 const Hero2 = () => {
  const [heroimage,setHeroimage]=useState([])

  useEffect(()=>{
    client.fetch(
        `*[_type == "heroimage"]{
        title,
        slug,
        firstimage,
        body,
        publishedAt,
       firstimage{
        asset -> {
        _id,
        url
        },
        alt,
        },
  
        secondimage{
        asset -> {
        _id,
        url
        },
        alt,
        },
        "name":author ->name,
  
        }| order(publishedAt desc)`
    ).then((data)=>{setHeroimage(data)
      console.log(data)
    
    }).catch(console.error);
  
  },[])
   return (
     <div className='  '>
      
            <section className=" h-screen mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 ">
            {heroimage.map((hero)=>(
      
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
      
        <div className="mb-6 w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className=" text-6xl mb-4 text font-bold sm:text-6xl md:mb-8 md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="">
            We sell only the most excluse and high quality products for you.
            We are the best so come and hi
          </p>

           


        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 ">
     
        </div>
      </div>
                ))}

               
               
    </section>
    <Newest/>
 
     </div>
   )
 }
 
 export default Hero2
 















 


