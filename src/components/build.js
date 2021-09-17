import React from 'react';
import {useEffect} from 'react'

import '../style/style.css'
import Aos from 'aos';
import "aos/dist/aos.css";
const Build = () => {
    const parastyle= {
     fontSize:'24px',
     margin:"20px 0 0 "
    }
    const descstyle ={
        margin:"20px 0 0 ",
        fontSize:"18px"
    }
    useEffect(()=>{
        Aos.init({duration:2000})
        Aos.refresh()
       
     
    
       
    },[])
    return ( 
        <>
        <h2 className="sec-start">What I Can Do</h2>

        <div className="p-build" >

            <div className="s-build">
             <span>
             <i className="fal fa-palette icon"></i>
             </span>
            
<div className="line"></div>        
<h3>WEB-DESIGN</h3>
<p className="text" style={parastyle}>Responsive and Fast</p>


<p style={descstyle}>Our approach to website design is to create a website 
    that strengthens your company’s brand while ensuring ease 
    of use and simplicity for your audience.
    </p>

  
            </div>
            <div className="s-build">
                <span>
              
                </span>
         
            <div className="line"></div>
            <p className="text"></p>
<h3>WEB-Development</h3>
<p style={parastyle}>Mern-Stack</p>
<p style={descstyle}>  Application that use 
              Mongo Db & express
              & React & Node</p>
            </div>
            <div className="s-build">
                <span>
               
                </span>
            
            <div className="line"></div>
   <h3>CODING</h3>
   <p className="text" style={parastyle}>Programming Languages</p>
   <p style={descstyle}>
   familiar with C#  and i have made some projects& 
       good knowledge with javascript and their libraries 
   </p>
   
            </div>

        </div>
        </>
      
     );
}
 
export default Build;