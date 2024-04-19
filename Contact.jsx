import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Amazon from '../contact/amazon.png';
import Cisco from '../contact/cisco.jpeg';
import Microsoft from '../contact/microsoft.png';
import Oracle from '../contact/oracle.png';

function Contact() {
  return (
    <div className='min-h-[calc(100vh-4rem)] max-w-[calc(60rem)]
    mt-0 m-auto flex flex-col'>
      <section id='clients'>
        {/* Clients */}
        <div className='mb-8'>
          <h2 className='text-center text-2xl font-semibold'>My Clients</h2>
          <p className='text-center mb-4'>
            I'm finding the opportunity to work with a diverse group of companies.
          </p>

          {/* Client Images */}
          <div className='grid grid-cols-2 gap-4 items-center'>
            {/* First row */}
            <img src={Cisco} alt="Cisco" className='w-[50%] h-auto object-contain rounded-xl shadow-lg' />
            <img src={Amazon} alt="Amazon" className='w-[50%] h-auto object-contain rounded-xl shadow-lg' />
            {/* Second row */}
            <img src={Microsoft} alt="Microsoft" className='w/[50%] h-auto object-contain rounded-xl shadow-lg' />
            <img src={Oracle} alt="Oracle" className='w/[50%] h-auto object-contain rounded-xl shadow-lg' />
          </div>

        </div>

        {/* Contact */}
        <div>
          <h2 className='text-center text-2xl font-semibold'>Contact Me</h2>
          <p className='text-center mb-4'>
            Please fill out the form below to discuss any work opportunities.
          </p>
          
          <form className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
    <input type="text" placeholder="Your Name" className="mb-4 p-3 w-1/2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" /><br />
    <input type="email" placeholder="Your Email" className="mb-4 p-3 w-1/2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" /><br />
    <textarea placeholder="Your Message" class="mb-4 p-3 w-1/2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" rows="4"></textarea><br />
    <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
        Submit
    </button>
</form>

              
          {/* Social Media Links */}
          <div className='flex justify-center gap-4 mt-8'>
            <a href="https://www.instagram.com/manojrajput2065/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='text-3xl text-pink-600' />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100056180495791" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='text-3xl text-blue-600' />
            </a>
            <a href="https://www.linkedin.com/in/manoj-singh-rajput-64a964264/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='text-3xl text-blue-500' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
