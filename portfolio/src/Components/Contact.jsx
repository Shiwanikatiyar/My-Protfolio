import React, { useState } from 'react';
import git from '../../public/assets/images/github.png'
import link from '../../public/assets/images/link.png'
import mail from '../../public/assets/images/mail.png'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);

    // Show alert when form is submitted
    alert('Massage Sent!');

    // Optionally, clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

return (
  <div className="container mx-auto p-4 sm:p-8 lg:p-16" id='contact'>
    <div className='text-center py-8'>
      <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">CONTACT ME</h2>
    </div>
    
    <div className="contact max-w-lg mx-auto border-2 border-lime-300 p-4 sm:p-8 lg:p-10 rounded-lg bg-gray-800">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Enter Your Name'
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter Your Email'
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder='Enter Your Message'
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-gray-800 transition-transform transform hover:scale-105 text-white px-4 py-2 rounded bg-slate-600 hover:bg-slate-400">
          Submit
        </button>
      </form>
    </div>
    
    <div className='flex flex-col sm:flex-row justify-center items-center m-8 gap-4'>
      <img className='w-10 h-10 rounded-lg transition-transform transform hover:scale-105' src={mail} alt="" />
      <p className='text-base sm:text-xl font-bold transition-transform transform hover:scale-105'>shiwanikatiyarknj@gmail.com</p>
    </div>
    
    <div className='flex justify-center m-8 gap-4'>
      <div>
        <a href="https://github.com/Shiwanikatiyar/" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 rounded-lg transition-transform transform hover:scale-105' src={git} alt="" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/shiwanikatiyar/" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 rounded-lg transition-transform transform hover:scale-105' src={link} alt="" />
        </a>
      </div>
    </div>
    </div>
  );
};
export default Contact;
