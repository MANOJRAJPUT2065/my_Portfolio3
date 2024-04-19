import React from 'react'
import IntroImg from '../assets/introimg.jpg'
import { Link } from 'react-scroll'
function Intro() {
  return (
    <div id="intro" className='flex '>
      <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <section
      className='h-[calc(100vh-4rem)] w-[100vw] max-w-[75rem] m-auto relative z-[-1] 
      t-[-4rem]
      '
      >


{/* Intro contect */}
        <div
        className= 'flex flex-col h-[100vh]  w-[100vh] p-[3em] font-semibold '
        >
           <span className=" font-semibold text-3xl">Hello,</span>
          <h1 className="text-4xl font-bold text-gray-800">
            I'm <span className="text-purple-500">Manoj</span>
            <br />
            Web-Developer
          </h1>
          <p className="text-gray-600">
            I am a skilled and passionate web designer with experience in creating responsive and user-friendly websites.
          </p>
              <Link>
                 <br />
                 <button class="bg-green-500 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded shadow transition duration-200 ease-in-out transform hover:scale-105">
    Hire Me
</button>
     
</Link>
        </div>

        {/* image */}

    <img src={IntroImg} 
    className='h-[100vh]  object-cover absolute z-[-1] right-0 top-[4rem] rounded-3xl opacity-90'

    />

     </section>   
    </div>
  )
}
export default Intro