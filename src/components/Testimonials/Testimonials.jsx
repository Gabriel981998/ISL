import React, { useRef } from 'react'
import "./Testimonials.css"
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";






const Testimonials = () => {
    const slider=useRef();
    let tx=0;
    const slideForward=()=>{
        if(tx >-50){
            tx -=20;

        }
        slider.current.style.transform =`translateX(${tx}%)`;

    }
    const slideBackward=()=>{
        if(tx <0){
            tx +=20;

        }
        slider.current.style.transform =`translateX(${tx}%)`;

    }
  return (
    <div className=''>
        <div className='testimonials' >
<div className='back-btn' onClick={slideBackward} >
<IoArrowBackCircle/>
</div>
<div className='next-btn ' onClick={slideForward}>
<IoArrowForwardCircle/>


</div>
<div className='slider'>
    <ul ref={slider}>

        <li>
            <div className='slide'>
                <div className='user-info'>
                <p>1</p>
                <div>
                <h3>William jackson</h3>
                <span>Edusity,USA</span>
                
            </div>

                </div>
                <p className=''>Lorem ipadipisicing elit maiores, reiciendis aliquid facilis labore accusantium vel, iure dicta cum sapiente quia quas eos dolorum dolore quaerat obcaecati sit at.</p>

            </div>
            
          
        </li>
        <li>
            <div className='slide'>
                <div className='user-info'>
                <p>1</p>
                <div>
                <h3>Daniella Rose</h3>
                <span>Edusity,USA</span>
                
            </div>

                </div>

                <p>Lorem ipadipisicing elit maiores, reiciendis aliquid facilis labore accusantium vel, iure dicta cum sapiente quia quas eos dolorum dolore quaerat obcaecati sit at.</p>
            </div>
           
          
        </li>
        <li>
            <div className='slide'>
                <div className='user-info'>
                <p>1</p>
                <div>
                <h3>Droom Michel</h3>
                <span>Edusity,USA</span>
                
            </div>

                </div>

                <p>Lorem ipadipisicing elit maiores, reiciendis aliquid facilis labore accusantium vel, iure dicta cum sapiente quia quas eos dolorum dolore quaerat obcaecati sit at.</p>
          
            </div>
           
        </li>
        <li>
            <div className='slide'>
                <div className='user-info'>
                <p>1</p>
                <div>
                <h3>Robert krutch</h3>
                <span>Edusity,USA</span>
                
            </div>

                </div>

                <p>Lorem ipadipisicing elit maiores, reiciendis aliquid facilis labore accusantium vel, iure dicta cum sapiente quia quas eos dolorum dolore quaerat obcaecati sit at.</p>
            </div>
           
          
        </li>
        <li>
            <div className='slide'>
                <div className='user-info'>
                <p>1</p>
                <div>
                <h3>Jeff Hardy</h3>
                <span>Edusity,USA</span>
                
            </div>

                </div>

                <p>Lorem ipadipisicing elit maiores, reiciendis aliquid facilis labore accusantium vel, iure dicta cum sapiente quia quas eos dolorum dolore quaerat obcaecati sit at.</p>
            </div>

          
        </li>
    </ul>

</div>

        </div>
      
    </div>
  )
}

export default Testimonials
