import React from 'react';
import '../style/style.css'
import {Parentimg,Para,Anchor} from '../style/project'
import project from '../image/dubaiproj.png'
import project2 from '../image/seconde-porj.png'
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
          <Anchor href="https://novasweetcafe.herokuapp.com/" target='blank'>Show website</Anchor>
      </Parentimg>

      <Parentimg >
          <img src={project2} alt="second-app" width='100%' height='100%'/>
          <Para top='45%'>Seconde Web-Page </Para>
          <Para top='55%'>XD To WebPage</Para>
          <Anchor href="https://novasweetcafe.herokuapp.com/" target='blank'>Show website</Anchor>
      </Parentimg>

      
         </div>
     
     </>
     );
}
 
export default Projects;