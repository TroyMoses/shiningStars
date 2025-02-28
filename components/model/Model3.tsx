import React, { Children } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import gate from "../../public/images/shi/gra.jpeg";
import nurses1 from "../../public/images/shin/tt.jpg";
import burundi from "../../public/images/shi/pipp.jpeg";
import palm_girls1 from "../../public/images/shin/s.jpg";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { BiX } from 'react-icons/bi';


const Model3 = ({is3visible, onClose, children}) => {
      if (!is3visible) return null;
const handleclose = (e)=>{
      
      if( e.target.id === 'wrapper ') onClose();
      document.querySelector('.active')?.classList.remove('active');
      
}

const main = ()=>{
      let schools = document.querySelector('schools');
      document.getElementById('main').classList.add('current');
      document.getElementById('payments').classList.remove('current');
      document.getElementById('fees').classList.add('hidden');
      document.getElementById('courses').classList.remove('hidden');
      document.getElementById('contact').classList.remove('current');
      document.getElementById('why_bugema-data').classList.add('hidden');
      document.getElementById('get-in-touch').classList.add('hidden');
      document.getElementById('fees-more').classList.add('hidden');
      document.getElementById('courses-more').classList.remove('hidden');
      document.getElementById('touch-more').classList.add('hidden');
      document.getElementById('why-bugema-more').classList.add('hidden');
      document.getElementById('attachment-get-in-toch').classList.add('hidden');
      document.getElementById('attachment-courses').classList.remove('hidden');
      document.getElementById('attachment-fees').classList.add('hidden');
      document.getElementById('attachment-why-bugema').classList.add('hidden');
      document.getElementById('why_bugema').classList.remove('current');
      
}
const payments=()=>{
      document.getElementById('main').classList.remove('current');
      document.getElementById('payments').classList.add('current');
      document.getElementById('fees').classList.remove('hidden');
      document.getElementById('courses').classList.add('hidden');
      document.getElementById('contact').classList.remove('current');
      document.getElementById('why_bugema-data').classList.add('hidden');
      document.getElementById('get-in-touch').classList.add('hidden');
      document.getElementById('fees-more').classList.remove('hidden');
      document.getElementById('courses-more').classList.add('hidden');
      document.getElementById('touch-more').classList.add('hidden');
      document.getElementById('why-bugema-more').classList.add('hidden');
      document.getElementById('attachment-get-in-toch').classList.add('hidden');
      document.getElementById('attachment-courses').classList.add('hidden');
      document.getElementById('attachment-fees').classList.remove('hidden');
      document.getElementById('attachment-why-bugema').classList.add('hidden');
      document.getElementById('why_bugema').classList.remove('current');
      
}
const touch = ()=>{
      document.getElementById('main').classList.remove('current');
      document.getElementById('payments').classList.remove('current');
      document.getElementById('courses').classList.add('hidden');
      document.getElementById('fees').classList.add('hidden');
      document.getElementById('contact').classList.add('current');
      document.getElementById('why_bugema-data').classList.add('hidden');
      document.getElementById('get-in-touch').classList.remove('hidden');
      document.getElementById('touch-more').classList.remove('hidden');
      document.getElementById('courses-more').classList.add('hidden');
      document.getElementById('fees-more').classList.add('hidden');
      document.getElementById('why-bugema-more').classList.add('hidden');
      document.getElementById('attachment-get-in-toch').classList.remove('hidden');
      document.getElementById('attachment-courses').classList.add('hidden');
      document.getElementById('attachment-fees').classList.add('hidden');
      document.getElementById('attachment-why-bugema').classList.add('hidden');
      document.getElementById('why_bugema').classList.remove('current');
}
const why_bugema = () =>{
      document.getElementById('main').classList.remove('current');
      document.getElementById('payments').classList.remove('current');
      document.getElementById('why_bugema').classList.add('current');+
      document.getElementById('contact').classList.remove('current');
      document.getElementById('courses').classList.add('hidden');
      document.getElementById('fees').classList.add('hidden');
      document.getElementById('get-in-touch').classList.add('hidden');
      document.getElementById('why_bugema-data').classList.remove('hidden');
      document.getElementById('touch-more').classList.add('hidden');
      document.getElementById('courses-more').classList.add('hidden');
      document.getElementById('fees-more').classList.add('hidden');
      document.getElementById('why-bugema-more').classList.remove('hidden');
      document.getElementById('attachment-get-in-toch').classList.add('hidden');
      document.getElementById('attachment-courses').classList.add('hidden');
      document.getElementById('attachment-fees').classList.add('hidden');
      document.getElementById('attachment-why-bugema').classList.remove('hidden');

}
  return (
      <>
        
        <div className=" fade-in fixed z-40 inset-0 backdrop-blur-sm flex ml-[5%] mt-[9%] w-[90%] h-[70%]  rounded-lg overflow-auto overflow-x-hidden bg-white" id="wrapper" onMouseLeave={onClose}  >                  
                        <div className='flex ml-10 justify-center items-center'>
                        <div className='flex '>
                              <button 
                                    style={{
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    backgroundColor: 'black',
                                    borderColor:'black',
                                    color: 'white',
                                    fontSize: '20px',
                                    textAlign: 'center',
                                    lineHeight: '30px',
                                    position: 'absolute',
                                    right: '70px',
                                    top: '20px',
                                    }}
                                    onClick={onClose}>
                                    <span className="text-white text-xl"><BiX className='text-3xl'/></span>
                              </button>

                        </div>
                  
                     
                  <div id="programs">

                        <div className="vertical-line ml-24 my-24 fade-in "  style={{marginLeft:'115px',marginTop:'25%'}}> 
                              <Link href={"/events"}>
                                    <div className="mr-2 my-5 slider slide--fast">
                                          
                                          <h1 onClick={onClose} style={{color:'gray',fontSize: '35px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold main ' > <span id='Main' className='animated href=""'> Events</span></h1> 
                                    </div>
                              </Link>
                              <Link href={"/news"}>
                                    <div className="mr-2 my-5  slider slide--slow ">
                                          <h1 onClick={onClose} style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' ><span id='Kampala' className='animated'>News</span></h1> 
                                    </div>
                              </Link>
                              <Link href={"/gallary"}>
                                    <div className="mr-2 my-5  slider slide--slower">
                                          <h1 onClick={onClose} style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold '>  <span id='Mbale' className='animated'> Gallery</span></h1> 
                                    </div>
                              </Link>
                              

                              {/*###===============================================================================
                               A T T A C H M E N T   P I C T U R E S    U N D E R    T H E   F I R S T   C O L U M N 
                               ==================================================================================###*/}
                              <div id='attachment-get-in-toch' className="slant-div-right bg-black text-white grid-rows-2 hidden"style={{marginTop:'20%',width:'111%',height:'60%'}}>
                                    <div className='fade-in'>
                                          
                                    <Image src={burundi} alt='img' width={550} height={650} className="fade-in-slow transform -skew-x-12 '"/>
                                    </div>
                                    
                              </div> 
                              <div id='attachment-fees' className="slant-div-right bg-black text-white grid-rows-2 hidden"style={{marginTop:'20%',width:'111%',height:'40%'}}>
                                    <div className='fade-in'>
                                          
                                    <Image src={palm_girls1} alt='img' width={550} height={450} className="fade-in-slow transform -skew-x-12 '"/>
                                    </div>
                                    
                              </div> 

                              <div id='attachment-courses' className="slant-div-right bg-black text-white grid-rows-2"style={{marginTop:'20%',width:'111%',height:'40%'}}>
                                    <div className='fade-in'>
                                    <Image src={burundi} alt='img' width={550} height={450} className="fade-in-slow transform -skew-x-12 '"/>
                                    </div>
                                    
                              </div> 

                              <div id='attachment-why-bugema' className="slant-div-right bg-black text-white grid-rows-2 hidden"style={{marginTop:'20%',width:'111%',height:'40%'}}>
                                    <div className='fade-in'>
                                    <Image src={nurses1} alt='img' width={550} height={450} className="fade-in-slow transform -skew-x-12 '"/>
                                    </div>
                                    
                              </div> 
                        
                        </div>
                  
                  </div>
                  <div className=" ml-12 my-24 fade-in " id='courses' style={{marginTop:'19%'}}> 

                         <h1  style={{marginRight:'5px'}} className='text-black text-center' >Shining Stars Nursery And Primary. <br/>Stay up-to-date with the latest news and events <br/> find your perfect fit ... </h1> 
                        
                  </div>


                  <div className=' ml-20 vertical-line  transform -skew-x-12 'style={{marginTop:'12%'}}>
                  </div>

                  {/* SCIENCE AND TECHNOLOGY COURSES */}
                  <div className='ml-10  my-24 transform '  id='IT'>
                       
                        {/* ###============= C A M P U S E S   M O R E =================### */}
                        <div className='' id='courses-more'>
                              <div className=' ml-24 fade-in-slow '>
                                          <Image src={gate} alt='img' width={350} height={450} className="-ml-5 my-10 "/>
                              </div>
                              
                              <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='new-arr change-on-hover2 text-black'> Study  <FaArrowRight className='new-arr'/></h1>
                                    
                              <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='new-arr change-on-hover2 text-black'> Study  <FaArrowRight className='new-arr'/></h1>      

                        </div>
                          
                  </div>
                  
            </div>
            </div>
      </>
      
  );
};

export default Model3;