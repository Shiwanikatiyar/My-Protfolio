import React from 'react'
import my from '../assets/images/pro.jpg'

const About = () => {
  return (
    <>
      <div className="container mx-auto p-4 sm:p-8 lg:p-16" id='about'>

        <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-center py-4 sm:py-8'>ABOUT ME</h1>
        <div className="about flex flex-col lg:flex-row justify-around mt-10 lg:mt-20 items-center space-y-10 lg:space-y-0 lg:space-x-10">

          <div className="left transition-transform hover:scale-105">
            <div>
              <img className='border-4 border-lime-300 w-40 sm:w-60 lg:w-80 rounded-full' src={`/assets/${my.imgSrc}`} alt="my" />
            </div>
          </div>

          <div className="right transition-transform hover:scale-105 border-4 border-lime-300 w-full lg:w-3/5 h-auto lg:h-72 text-center p-4 sm:p-6 lg:p-8 rounded-[12px]">
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold py-2'>About Me</h2>
            <p className='text-sm sm:text-md lg:text-lg'>
              Hello! I'm Shiwani Katiyar from Kannauj, Uttar Pradesh.
              I graduated in 2020 and am currently learning Full Stack Web Development
              at Masai School, Bangalore. I am passionate about building web applications,
              especially in the e-commerce domain. My training has equipped me with front-end and
              back-end skills, preparing me to tackle complex tech challenges.
              I'm eager to work on real-world projects and contribute to innovative teams.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About