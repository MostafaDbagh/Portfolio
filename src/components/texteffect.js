import React, { useRef } from 'react';
const Texteffect = ({datawait,datawords}) => {
   
   const txtRef = useRef(); 
    
    const TypeWriter = function(txtElement,words,wait=3000){
        this.txtElement =txtElement;
        this.words =words;
        this.wait = wait;
        this.txt =  '';
        this.wordIndex = 0;
        this.type();
        this.isDeleting = false;
    }
    ///////////
    TypeWriter.prototype.type = function(){
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current]
        if(this.isDeleting){
            this.txt = fullTxt.substring(0,this.txt.length-1); 
        }else{ 
           this.txt = fullTxt.substring(0,this.txt.length+1); 
          
        }
        txtRef.current.value ={this.txt};
        let typeSpeed = 300;
        if(this.isDeleting){
            typeSpeed /= 2;
        }
        if(this.txt===fullTxt){
            typeSpeed =this.wait;
            this.isDeleting =true;
        }else if(this.txt===''){
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed=500;
        }
         setTimeout(()=> this.type(),typeSpeed)
    }
    document.addEventListener('DOMContentLoaded',init)
    
    function init(){
  
 
     new TypeWriter(txtRef,datawords,datawait)
    
    }
    return ( 
        <>
  <span ref={txtRef}  datawait={datawait} datawords={datawords}></span>
        </>
     );
}
 
export default Texteffect;