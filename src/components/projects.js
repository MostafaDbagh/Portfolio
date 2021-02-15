import React from 'react';
import '../style/style.css'
import {Parentimg,Span,Para,Anchor} from '../style/project'
import project from '../image/dubaiproj.png'
const Projects = () => {
    return ( 
        <>

    <h3 className="sec-start">
        My Projects
    </h3>
    <div style={{width:'90%',margin:'32px auto',height:"400px"}} className='proj-parent' >
      <Parentimg >
          <img src={project} alt="first-app" width='100%' height='100%'/>
          <Para top='45%'>First App in Dubai</Para>
          <Para top='55%'>Yamazaki Bakery</Para>
          <Anchor href="#" target='blank'>Show website</Anchor>
      </Parentimg>

      
         </div>
     
     </>
     );
}
 
export default Projects;