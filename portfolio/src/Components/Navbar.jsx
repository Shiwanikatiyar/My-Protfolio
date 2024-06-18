import React from 'react'
import logo from './Data/logo.json'
import pdf from '../pdf/shiwani resume.pdf'

const Navbar = () => {
    return (
        
        <>
        {/* Container for the navbar, fixed to the top, with responsive padding */}
        <div className="top-0 w-full mx-auto px-4 sm:px-6 lg:px-10 items-center flex justify-between bg-gray-700 font-bold text-base fixed">
            
            {/* Left section for the logo */}
            <div className="left font-bold">
                <div className="img">
                    {/* Responsive image size */}
                    <img className="h-8 sm:h-10 lg:h-12 nav_item" src={`/assets/${logo.imgSrc}`} alt="Logo" />
                </div>
            </div>
            
            {/* Right section for the navigation links, responsive spacing */}
            <div className="right flex space-x-2 sm:space-x-4 lg:space-x-10 font-bold text-base">
                <a href="#home" className="nav_item">HOME</a>
                <a href="#about" className="nav_item">ABOUT</a>
                <a href="#skills" className="nav_item">SKILLS</a>
                <a href="#project" className="nav_item">PROJECT</a>
                <a href="#contact" className="nav_item">CONTACT</a>
                <a href={pdf} target="_blank" className="nav_item">RESUME</a>
            </div>
        </div>
    </>
    )
}

export default Navbar