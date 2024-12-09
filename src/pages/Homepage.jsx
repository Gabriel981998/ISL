import React, { useState, useEffect } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import ReactPlayer from 'react-player'


import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Videohome from "../components/images/univeristy.mp4"
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import Hero3 from "../components/Hero3";
import Trust from "../components/Trust";
import Stade from "../components/Stade";
import Carousel from "react-bootstrap/Carousel";

import Comment from "./Comment";


import Newest from "./Newest";
import Hero2 from "./Hero2";
import Testimonials from "../components/Testimonials/Testimonials";
import Getintouch from "./Getintouch";
import Plan from "../components/Plan";
import Rooms from "../components/Rooms";
import ImageSlider from "./ImageSlider";





const Homepage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
            title,
            url,
            bannervideo,
            slugtwo,
            slug,
            body,
            publishedAt,
            mainImage{
            asset -> {
            _id,
            url
            },
            alt,
            },
            "name":author ->name,

            }| order(publishedAt desc)`
      )
      .then((data) => {
        setStories(data.slice(0, 6));
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className=" relative ">
      <div className="inset-2 ">
        <div class="sticky top-0  ">
          {!stories ? (
            <h2>Loading...</h2>
          ) : (
            <>
              {stories[0] && (
           
                  <section className="w-full    ">
                      <div className='w-full h-screen'>
     {<video src={Videohome} poster='' className=' object-cover' muted  autoPlay loop playsInline ></video>}

      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
         
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            International School of Lubumbashi
          </h1>
         
         
        </div>
      </div>
    </div>
                  </section>
             
              )}
            </>
          )}
      
        </div>


      
       
        <div class="sticky top-1  bg-white ">
       
        <Hero3/>
    <Plan/>
  
     
         
     <div className="flex justify-between bg-white">
    
        <div className="bg-transparent  pr-6  "> 


</div>



     </div>
       
     
         
     
          <section className="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  bg-black pb-20">
         
            {stories.map((story) => (
              
              <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
                
            
                <article className=" ">
                  <div>
                  <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="">
      {story.mainImage && (
        


<img
  src={story.mainImage.asset.url}
  alt={story.mainImage.alt}
  loading="lazy"
  className="w-full  h-96 transition ease-in-out delay-100   hover:-translate-y-1 hover:scale-90 duration-150 ..."
/>
)}
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[90%] flex-col items-center justify-center px-9 transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-1xl font-bold text-white  "> {format(new Date(story.publishedAt), "dd MMMM yyyy")}</h1>

       

        {
                      <p className="leading-relaxed font-serif  text-white font ">
                        {`${story.body[0].children[0].text.substring(
                          0,
                          200
                        )}`}
                      </p>
                    }
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lositur adipisiccilis dolore adipisci placeat.</p>
        <button class="rounded-lg  py-2 px-3.5 font-com text-sm capitalize text-white shadow  border ">LEARN MORE</button>
      </div>
    </div>


                  </div>
                
           
                </article>



                





                
              </Link>
              
            ))}

           
           



          </section>
         
       
          

       

   
         
      
      
        
      

  
       
        </div>

        


       






       
      </div>



      
      <div class=" ">
       
      
       
     
  
     
      
  
      

       

    
    

       <div className="bg-black text-white">
       
       
         


     
     

        
       </div>
     </div>
      









 

<Getintouch/>

    </div>
  );
};

export default Homepage;
