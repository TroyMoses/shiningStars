import React, { Children } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import imagenew from "../../public/images/shin/teac.jpg";
import image from "../../public/images/shin/stud.jpg";
import nurses1 from "../../public/images/shin/stud.jpg";
import burundi from "../../public/images/shin/tt.jpg";
import bucosa from "../../public/images/shin/stuc.jpg";
import palm_girls from "../../public/images/shin/stu.jpg";
import palm_girls1 from "../../public/images/shin/st.jpg";
import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";
import { BiX } from 'react-icons/bi';


const Model = ({isvisible, onClose, children}) => {
      if (!isvisible) return null;
const handleclose = (e)=>{
      
      if( e.target.id === 'wrapper ') onClose();
      document.querySelector('.active')?.classList.remove('active');
      
}
const handleButtonClick = (callback) => {
      callback();
      onClose();
    };

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
                              <div className="mr-2 my-5 slider slide--fast">
                                    
                                    <h1  style={{color:'gray',fontSize: '35px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold main '   onClick={main}> <span id='main' className='current animated href=""'>Academic Center</span></h1> 
                              </div>
                              <div className="mr-2 my-5  slider slide--slow ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' onClick={payments}><span id='payments' className='animated'>Fees and Payments</span></h1> 
                              </div>
                              <div className="mr-2 my-5  slider slide--slower">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold 'onClick={why_bugema} >  <span id='why_bugema' className='animated'> Why Shining Stars </span></h1> 
                              </div>
                              <div className="mr-2 my-5 slider slide--slowest ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' onClick={touch}> <span className='animated' id='contact'> Staff </span></h1> 
                              </div>
                              <div id='attachment-get-in-toch' className="slant-div-right bg-black text-white grid-rows-2 hidden"style={{marginTop:'20%',width:'111%',height:'40%'}}>
                                    <div className='fade-in'>
                                          
                                    <Image src={burundi} alt='img' width={550} height={450} className="fade-in-slow transform -skew-x-12 '"/>
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
                  <div className=" ml-12 my-24 fade-in " id='courses' style={{marginTop:'9%'}}> 
                        <ul>
                              <li>
                              <div className="mr-2 my-5 slider slide--slow ">
                                    <Link href={"/subjects"} >
                                          <h1 onClick={onClose} style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Subjects </h1> 
                                    </Link> 
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 slider slide--slow ">
                                    
                                    <Link href={"/curricular-activities"} >
                                          <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Co Curricular Activities</h1> 
                                    </Link> 
                              </div>
                              </li>
                              
                        </ul>
                        
                  </div>

                              {/*###=============== FEES AND PAYMENTS ================###*/}

                  <div className=" fade-in ml-24 my-24 hidden " style={{marginTop:'12%'}} id='fees'> 
                        <ul className='ml-10 my-20'>
                              <li>
                              <div className="mr-2 my-5 ">
                              
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Fees Structure </h1> 
                              
                              </div>
                              </li>
                              
                              <li>
                              <Link href={"/scholarships"}>
                                    <div className="mr-2 my-5  ">
                                          <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Scholarships</h1> 
                                          
                                    </div>
                              </Link>
                              </li>
                              <li>
                              <Link href={"/payment-code"}>
                                    <div className="mr-2 my-5  ">
                                          <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Pupils pay code</h1> 
                                          
                                    </div>
                              </Link>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Trip Fees</h1>
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Others</h1> 
                                    
                              </div>
                              </li>
                        </ul>
                        
                  </div>
                  {/*###============== W  H  Y    shining ==============###*/}
                  <div className=" fade-in ml-24 my-24 hidden " style={{marginTop:'12%'}} id='why_bugema-data'> 
                        <ul className='ml-10 my-20'>
                              <li>
                              <Link href={"/studentlife"}>
                                    <div className="mr-2 my-5 ">
                                    
                                    <h1 onClick={onClose} style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Sports </h1> 
                                    
                                    </div>
                              </Link>
                              </li>
                              
                              <li>
                              <Link href={"/accommodation"}>
                                    <div className="mr-2 my-5">
                                          <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Accommodation</h1> 
                                    </div>
                              </Link>
                              </li>
                              <li>
                              <Link href={"/religion"}>
                                    <div className="mr-2 my-5  ">
                                          <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Religion </h1> 
                                    </div>
                              </Link>
                              </li>
                              
                              <li>
                              <Link href={"/health"}>
                                    <div className="mr-2 my-5 ">
                                          <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools  text-black font-bold'> Health</h1>
                                         
                                    </div>
                              </Link>
                              </li>
                              
                              <li>
                                    <Link href={"/feeding"}>
                                          <div className="mr-2 my-5  ">
                                                <h1 onClick={onClose}  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Feeding</h1> 
                                                
                                          </div>
                                    </Link>
                              </li>
  
                        </ul>
                  </div>

                  {/*###============== G  E  T    I N    T  O  U  C  H ==============###*/}
                  <div className=" fade-in ml-24 my-24 hidden " style={{marginTop:'6%'}} id='get-in-touch'> 
                        <ul className='ml-10 my-20'>
                              <li>
                                    <Link href={"/administrators"}>
                                          <div className="mr-2 my-5 ">
                                    
                                                <h1 onClick={onClose} style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Administrators  </h1> 
                                    
                                          </div>
                                    </Link>
                              
                              </li>
                              
                              <li>
                                    <Link href={"/teaching"}>
                                    <div className="mr-2 my-5  ">
                                    <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Teaching</h1> 
                                    </div>
                                    </Link>
                              
                              </li>
                              <li>
                              <Link href={"/non-teaching"} >
                                    <div className="mr-2 my-5  ">
                                          <h1 onClick={onClose}  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Non-Teaching </h1> 
                                    </div>
                              </Link>
                             
                              </li>
                              <li>
                                    <Link href={"/studentleader"} >
                                          <div className="mr-2 my-5  ">
                                                <h1 onClick={onClose}  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Pupils Leadership</h1>
                                                
                                          </div>
                                    </Link>
                              </li>

                        </ul>
                        
                  </div>

                  <div className=' ml-20 vertical-line  transform -skew-x-12 'style={{marginTop:'12%'}}>
                  </div>

                  {/* SCIENCE AND TECHNOLOGY COURSES */}
                  <div className='ml-10  my-24 transform -skew-x-12'  id='IT'>

                              {/* ###============= C O U R S E S    M O R E =================### */}
                        <div className='' id='courses-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={image} alt='img' width={350} height={450} className="-ml-5 my-10 slider slide--fast"/>
                              </div>
                              <Link href={"/whyshin"}>
                                    <div className="ml-19 transform -skew-x-11 text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                          <div className='columns-1 bg-black slider-right slide--slow change-on-hover '>
                                          <h1 onClick={onClose}  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> Why Study at Shining Stars  <FaArrowRight className='arrow1'/></h1>
                                          </div>
                                    </div> 
                              </Link>
                              <Link href={"/whyshin"}>
                                    <div className="ml-12 my-1 transform -skew-x-11 text-white grid-rows-2 " >
                                          <div className='columns-1 bg-black change-on-hover'>
                                          <h1 onClick={onClose}  style={{fontSize: '19px',cursor:"pointer",height:"80px"}} className='arrow2'> Why Study at Shining Stars <FaArrowRight className='arrow2'/></h1>
                                          </div>
                                    </div>  
                              </Link>
                              <Link href={"/whyshin"}>
                                    <div className="ml-24 transform -skew-x-11 text-white grid-rows-2 " style={{borderRadius:'9px'}} >
                                          <div className='columns-1 bg-black slider slide--slow change-on-hover'>
                                          <h1 onClick={onClose}  style={{fontSize: '19px',cursor:"pointer",height:"90px"}} className='arrow3'> Why Study at Shining Stars <FaArrowRight className='arrow3'/></h1>
                                          </div>
                                    </div>
                              </Link>
                        </div>

                        {/* ###=============F E E S       M O R E =================### */}
                        <div className=' hidden fade-in' id='fees-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={imagenew} alt='img' width={350} height={450} className="-ml-5 my-10 slider slide--fast"/>
                              </div>
                              <div className="ml-19 transform -skew-x-11 text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                    <div className='columns-1 bg-black slider-right slide--slow change-on-hover '>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> How to Pay  <FaArrowRight className='arrow1'/></h1>
                                    </div>
                              </div> 
                              
                              <div className="ml-12 my-1 transform -skew-x-11 text-white grid-rows-2 " >
                                    <div className='columns-1 bg-black change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"80px"}} className='arrow2'> Fees Structure <FaArrowRight className='arrow2'/></h1>
                                    </div>
                              </div>  
                             
                        </div>

                        {/* ###============= W  H  Y    B U G E M A      M O R E =================### */}
                        <div className='hidden' id='why-bugema-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={bucosa} alt='img' width={350} height={450} className="-ml-5 my-10 slider slide--fast"/>
                              </div>
                              <Link href={"/whyshin"}>
                                    <div className="ml-19 transform -skew-x-11 text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                          <div className='columns-1 bg-black slider-right slide--slow change-on-hover '>
                                          <h1 onClick={onClose} style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> Why Study at Shining Stars Vvumba <FaArrowRight className='arrow1'/></h1>
                                          </div>
                                    </div> 
                              </Link>
                              <Link href={"/whyshin"}>
                                    <div className="ml-12 my-1 transform -skew-x-11 text-white grid-rows-2 " >
                                          <div className='columns-1 bg-black change-on-hover'>
                                          <h1 onClick={onClose} style={{fontSize: '19px',cursor:"pointer",height:"80px"}} className='arrow2'> Why Study at Shining Stars Vvumba <FaArrowRight className='arrow2'/></h1>
                                          </div>
                                    </div> 
                              </Link> 
                              <Link href={"/whyshin"}>
                                    <div className="ml-24 transform -skew-x-11 text-white grid-rows-2 " style={{borderRadius:'9px'}} >
                                          <div className='columns-1 bg-black slider slide--slow change-on-hover'>
                                          <h1 onClick={onClose} style={{fontSize: '19px',cursor:"pointer",height:"90px"}} className='arrow3'> Why Study at Shining Stars Vvumba <FaArrowRight className='arrow3'/></h1>
                                          </div>
                                    </div>
                              </Link>
                        </div>

                        {/* ###=============G E T   IN  T O U C H       M O R E =================### */}
                        <div className=' hidden fade-in' id='touch-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={palm_girls} alt='img' width={350} height={450} className="ml-19 -mr-10 my-10 slider slide--fast"/>
                              </div>
                              <div className="ml-19 -mr-5 transform -skew-x-11 text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                    <div className='columns-1 bg-black slider-right slide--slow change-on-hover '>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> How to Apply  <FaArrowRight className='arrow1'/></h1>
                                    </div>
                              </div> 
                              
                              <div className="ml-12 -mr-4 my-1 transform -skew-x-11 text-white grid-rows-2 " >
                                    <div className='columns-1 bg-black change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"80px"}} className='arrow2'> Vist Us <FaArrowRight className='arrow2'/></h1>
                                    </div>
                              </div>  
                              <div className="ml-24 -mr-3 transform -skew-x-11 text-white grid-rows-2 " style={{borderRadius:'9px',}} >
                                    <div className='columns-1 bg-black slider slide--slow change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"90px"}} className='arrow3'> Talk to Us <FaArrowRight className='arrow3'/></h1>
                                    </div>
                              </div>
                              
                        </div>                         
                  </div>               
            </div>
            </div>
      </>    
  );
};

export default Model;