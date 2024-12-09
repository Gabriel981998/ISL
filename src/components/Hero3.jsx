import React from "react";
import HeroImage from "./images/tpmtogeder.jpg";
import { SlideUp } from "../utility/animation";
import { motion } from "framer-motion";
import ReactPlayer from 'react-player'
import Videowhyisl from "../components/images/WhatsApp Video 2024-12-04 at 09.58.02_25e84884.mp4"
import { Link } from "react-router-dom";
const Hero3 = () => {
  return (
    <section className=" banner1">
       <div className='max-w-[900px] m-auto px-4 py-12 grid grid-cols-4'>
        <Link to="/trust" ><p className="text-lg font-bold text-gray-700">About us</p></Link>
        <Link to="/trust" ><p className="text-lg font-bold text-gray-700">Academics</p></Link>
        <Link to="/trust" ><p className="text-lg font-bold text-gray-700">Admissions</p></Link>
        <Link to="/trust" ><p className="text-lg font-bold text-gray-700">More</p></Link>
       
       
    

      
    </div>
      <hr/>
      <div className=" h-full bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2  ">
        {/* Text section */}
        <div className="flex flex-col justify-center xl:pr-40  m-20">
          <div className="mt-24    md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
         
            <motion.p
              variants={SlideUp(0.4)}
              whileInView={"animate"}
              initial="initial"
              className="font-sans text-black mt-4 "
            >
              <h1 className="text-black text-6xl font-bold pb-10  font">WHY ISL?</h1>
              A set of solutions designed to help quickly identify coronavirus
              symptoms and get reliable information regarding .
              A global community close to home for students in Preschool through Grade 12 
ISB is Boston's leader in international education, rooted in French-English bilingual learning and the International Baccalaureate program. Our integrated curriculum balances age-appropriate academic challenge with individual choice, opening a world of opportunities to ISB graduates.
            </motion.p>
      
          </div>
        </div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center"
        >
     <video src={Videowhyisl} poster='' className=' object-cover' muted   controls ></video>
        </motion.div>

      </div>


    </section>
  );
};

export default Hero3;