import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { client } from "../lib/client";


import { useLayoutEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import ReactPlayer from 'react-player/youtube'
import {PortableText} from "@portabletext/react"
import Blog from './Blog';
const Blogpost = () => {
  const [blogpost,setBlogpost]=useState([]);
  const [stories,setStories]=useState([])
  const {slug}=useParams()

  
  useEffect(()=>{
    client.fetch(
        `*[slug.current == "${slug}"]{
        title,
        slugtwo,
        slug,
       secondmainImage{
        asset -> {
        _id,
        url
        },
        alt,
        },
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
    ).then((data)=>{setBlogpost(data[0])
      console.log(data)
    }).catch(console.error);

},[slug]);
/*
useEffect(()=>{
  document.title=`Reading | ${blogpost.title}`
},[slug])*/
  return <>


{blogpost && <section className='relative'>

  <div className='sticky top-0 '>
  {blogpost.mainImage && <img src={blogpost.mainImage.asset.url} alt={blogpost.mainImage.alt} className='object-cover   h-svh w-svw '/>} 
  </div>


     

{/*stiky*/}



<div className='sticky top-1' >
<p className='bg-gradient-to-t from-whiteto-transparent flex justify-end '>
   <div className='  text-2xl   mt-6  mr-5 mb-4 rounded shadow text-black shadow-xltracking-wide hover:opacity-75 transition-all duration-200 '>

   </div>

      </p>
<div className='bg-white text-black '> 

<h1 className='  text-4xl mb-4 xl:text-6xl font pt-4 ml-10 mr-10'>{blogpost.title}</h1>
<div className='ml-10 mr-10  '>

<PortableText value={blogpost.body} content={blogpost.body}/>

</div>

<div className='  mr-10 ml-10 '>
{blogpost.secondmainImage&& <img src={blogpost.secondmainImage.asset.url} alt={blogpost.secondmainImage.alt} className=' object-cover pb-5  w-full h-full'/>} 
<div className='flex justify-center w-full h-svh' >
<ReactPlayer url={blogpost.slugtwo}  type="video/mp4"></ReactPlayer> 




</div>
{/*<video src={blogpost.slugtwo} className='h-full w-full object-cover' muted  loop playsInline controls poster=''></video> */}

<div className='flex justify-end'>

<Link to="/blog">
      <button className="bg-black font      font-com text-sm capitalize  shadow-black/60  border   rounded    ml-5 mt-2 mb-2 py-2 px-8 mr-5 shadow text-white shadow-xltracking-wide hover:opacity-75 transition-all duration-200 ">Voir plus</button>
      </Link>

</div>




</div>



<div className='flex justify-end'>
     <Link to="/">
      <button className="     bg-neutral-900 font-com text-sm capitalize  shadow-black/60  border   rounded    ml-5 mt-2 mb-10 py-2 px-8 mr-16  shadow text-white shadow-xltracking-wide hover:opacity-75 transition-all duration-200 ">Retour</button>
      </Link>
     </div>
    
</div>




</div>







  
   
     </section>
     
     
     }
     </>
}

export default Blogpost