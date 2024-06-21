import React from 'react'
import skills from './Data/skills.json'
import tools from './Data/tools.json'

const Skills = () => {
  return (
    <>
      <div className="container mx-auto p-4 sm:p-8 lg:p-16" id='skills'>
        <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-center py-4 sm:py-8'>TECH SKILLS</h1>

        <div className="skills flex justify-center flex-wrap gap-4">
          {skills.map((data) => (
            <div
              className='items flex flex-col transition-transform hover:scale-105 items-center m-4 p-4 rounded-[12px] border-4 border-lime-300 bg-black w-full sm:w-1/2 lg:w-1/3'
              key={data.id}
            >
              <img className='img w-20 h-20 mb-4' src={data.imageSrc} alt="" />
              {console.log(data.imageSrc)}
              <h3 className='heading text-xl sm:text-2xl lg:text-3xl font-bold text-center text-white'>{data.title}</h3>
            </div>
          ))}
        </div>

        <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-center py-4 sm:py-8 mt-16'>TECH TOOLS</h1>

        <div className="skills flex justify-center flex-wrap gap-4">
          {tools.map((data) => (
            <div
              className='items flex flex-col transition-transform hover:scale-105 items-center m-4 p-4 rounded-[12px] border-4 border-lime-300 bg-black w-full sm:w-1/2 lg:w-1/3'
              key={data.id}
            >
              <img className='img w-20 h-20 mb-4' src={data.imageSrc} alt="" />
              <h3 className='heading text-xl sm:text-2xl lg:text-3xl font-bold text-center text-white'>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills