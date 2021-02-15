import React from 'react';
import contactback  from '../image/desk.jpg'
import '../style/style.css'
const Contact = () => {
    return ( 
        
        <div style={{background:`url(${contactback})`,width:'100%',height:'340px',backgroundPosition:"center right",margin:"50px 0 0"}}>
            <div style={{width:"100%",height:'100%',background:'rgba(0,0,0,0.7)',position:'relative'}}>
                <div style={{width:"100%",height:"16px"}}></div>
                <h2 style={{textAlign:'center',margin:"32px auto",color:'#dee2e7',fontSize:'34px',letterSpacing:'2px'}}>  Contact</h2>
                <ul className='contactlist' >
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-github"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
                      <div className='contactdiv'>
            <h3 style={{marginBottom:"20px",fontSize:"26px",letterSpacing:'1px', fontWeight:'bold'}}>Call To Action</h3>
<p style={{marginBottom:"8px",fontSize:'18px',fontWeight:'bold'}}> <i className="fa fa-phone" style={{marginRight:'8px',fontSize:'18px'}}></i>+971 58-605-7772</p>

<p style={{marginBottom:"8px",fontWeight:'bold',fontSize:'18px'}}> <i className="fa fa-map-marker before" style={{marginRight:'8px',fontSize:"18px"}}></i>Dubai,UAE</p>

<p style={{marginBottom:'4px',fontWeight:'bold',fontSize:'18px'}}><i className="fa fa-envelope" style={{marginRight:'8px',fontSize:'18px'}}></i>mostafadbagh52@gmai.com</p>
</div>
            </div>
            </div>
            
 


     );
}
 
export default Contact;