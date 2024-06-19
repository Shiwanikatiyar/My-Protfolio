import React from 'react'
import pdf from '../pdf/shiwani resume.pdf'
import photo from '../assets/images/gif.gif'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'


const Home = () => {

  const typedRef = useRef(null)
  useEffect(() =>{

    const options = {
      strings: ["Welcome to My Profile.", 
        "My Name is Shiwani Katiyar.", 
        "I am Full Stack Web Developer (MERN)."],
      typeSpeed:50,
      backSpeed:25,
      loop: true,
      showCursor: false,
      cursorChar: '|', 
    }

    const typed = new Typed(typedRef.current,options)

    return () =>{
      typed.destroy();
    }

},[]);



  return (
   
    <>
    <div className="home container mx-auto p-4 sm:p-8 lg:p-20 flex flex-col lg:flex-row justify-around mt-10 lg:mt-20 items-center" id='home'>
      
      {/* Left section */}
      <div className="left border-solid border-lime-300 border-4 w-full lg:w-1/2 h-auto rounded-[12px] text-center mb-6 lg:mb-0 p-4 lg:p-8">
        <h1 ref={typedRef} className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Welcome to My Profile</h1>
        <h1 className="text-lg sm:text-xl lg:text-2xl mb-4">shiwanikatiyarknj@gmail.com</h1>
        <div className="mb-4">
          <a
            href={pdf}
            download='resume.pdf'
            className="border-solid border-2 border-lime-300 rounded-full text-lime-300 py-2 px-4 hover:bg-lime-300 hover:text-black"
          >
            Download Resume
          </a>
        </div>
      </div>
      
      {/* Right section */}
      <div className="right border-4 border-lime-300 w-3/4 lg:w-96 rounded-[12px]">
        <div>
          <img className="img rounded-[12px] w-full h-auto" src={photo} alt="Profile" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Home