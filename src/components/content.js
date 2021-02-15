import React from 'react';
import '../style/contentstyle.css'
import '../style/style.css'
const Content = () => {
    return (  
        <>


<div className="about-para">

     <div className="aboutme-para">
        
    <h4 style={{fontSize:'32px',margin:"25px 0 32px",fontFamily:'Titillium Web,sans-serif'}}>Meet Your Engineer !</h4>
        
    <p style={{lineHeight:'22px',fontFamily:'open Sans',}}>
            I'm Mostafa Dbagh  a full-stack web developer based Dubai,Uae
     I am working remotely  on projects for clients all over the world .
            </p>
            
    <p style={{lineHeight:'22px',fontFamily:'open Sans',marginTop:'4px',}}>
    So are you looking for a professional, communicative & punctual software engineer with 
    extensive full-stack web development skills for your next project?
    If you have an application you are interested in developing with web technology, I’d love to work with you on it.
I’m a full-stack developer which means I can bring your project from concept to completion.
    </p>
    <p style={{lineHeight:'22px',fontFamily:'open Sans',marginTop:'4px',}}>
    I primarily use React for front-end development and Nodejs with Express framework, but picking up a new framework or language isn't a problem. 
    I have extensive programming experience and I'm comfortable developing on the frontend or backend as well as setting up or managing infrastructure.
    </p>
<p style={{lineHeight:'22px',fontFamily:'open Sans',marginTop:'4px',width:'80%'}}>
Have a project you'd like to discuss? <br/>
Let's chat <a >mostafadbagh52@gmail.com</a>
</p>

    
            
        

    </div> 
    
               
            <div className='tech' style={{display:'flex',flexDirection:'column'}}>
                 <div className="more-info">
                    <h3 style={{marginTop:'20px'}}>
                    Front-End Technicques
                    </h3>
                   
                   <ul>
                       <li className='one'>Html5</li>
                       <li className='two'>Css3</li>
                       <li className='three'>Js</li>
                       <li className='four'>Bootstrap </li>
                       <li className='five'>Sass--jes--git--github </li>
                     
                   </ul> 
                </div>

               
                 <div className="more-info">
                    <h3>
                    Back-End Technicques
                    </h3>
               
                   <ul>
                       <li className='eight'>Nodejs</li>
                       <li className='nine'>Express</li>
                       <li className='ten'>MongoDb</li>
                       <li className='eleven'>Another backend Technicques </li>
                   </ul>
                </div> 
                </div>
                 </div> 
              

                

        </>
    );
}
 
export default Content;