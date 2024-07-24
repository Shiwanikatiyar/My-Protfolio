import React from 'react'
import project from './Data/project.json'

const Projects = () => {
  return (
    <>
      <div className="container mx-auto p-4 sm:p-8 lg:p-16" id='project'>
        <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-center py-4 sm:py-8'>MY PROJECTS</h1>

        <div className="project p-4 sm:p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.map((data) => (
            <div
              className='card transition-transform hover:scale-105 flex flex-col items-center rounded-[12px] border-4 border-lime-300 bg-gray-800'
              key={data.id}
            >
              <div className="img-card p-4" >
                <img className='img w-60 h-60 border-lime-300 border-2 rounded-[10px]' src={`/assets/${data.imageSrc}`} alt="" />
              </div>

              <div className='items-center m-4'>
                <h3 className='heading text-xl sm:text-2xl lg:text-3xl font-bold text-center text-white'>{data.title}</h3>
                <p className='text-white text-sm sm:text-base lg:text-lg text-center'>{data.description}</p>
                <div className="btn mt-4 flex justify-center space-x-4">
                  <a href={data.demo} target="_blank" className='p-2 bg-blue-600 text-white rounded-[8px]' >LIVE</a>
                  <a href={data.source} target="_blank" className='p-2 bg-yellow-600 text-black rounded-[8px]' >GITHUB</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects