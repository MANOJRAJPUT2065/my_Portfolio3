import React from 'react'
import Portfolio1 from '../works/portfolio1.jpeg'
import Portfolio2 from '../works/portfolio2.jpeg'
import Portfolio3 from '../works/portfolio3.jpeg'
import Portfolio4 from '../works/portfolio4.jpeg'
import Portfolio5 from '../works/portfolio5.jpeg'


function Works() {
  return (
    <div>
        
        <section className='items-center text-center' id="works">
            <h2 className=' items- text-wrap text-black text-xl border w-[170px] bg-slate-500 rounded-sm ml-[50%]'>My PortFolio</h2>
           <p>
           <span className='italic' >I m a B.tech,second year CSE student at SIDDAGANGA INSTITUTE OF TECHNOLOGY,TUMKUR.</span>
         with core knowledge of cs fundamentals like:OS,OOPS in C++
         <br />
         <span className='font-semibold'>WebSkills:</span> HTML,CSS,Tailwind,JS,React JS,postman,Mongoose
           </p>
         
         {/* Working Images */}

         <div className='flex flex-col items-center rounded-xl gap-3'>
  <img
    src={Portfolio1}
    alt="Portfolio 1"
    className='w-[940px] h-auto object-contain rounded-xl'
  />
  <img
    src={Portfolio2}
    alt="Portfolio 2"
    className='w-[940px] h-auto object-contain rounded-xl'
  />
  <img
    src={Portfolio3}
    alt="Portfolio 3"
    className='w-[940px] h-auto object-contain rounded-xl'
  />
  <img
    src={Portfolio4}
    alt="Portfolio 4"
    className='w-[940px] h-auto object-contain rounded-xl'
  />
  <img
    src={Portfolio5}
    alt="Portfolio 5"
    className='w-[940px] h-auto object-contain rounded-xl'
  />
</div>

         <br />

<button className=' w-[100px] h-[50px] text-xl  bg-blue-500 hover:bg-green-400 rounded-xl  text-white border-none '>
    See More
</button>

        </section>

    </div>
  )
}

export default Works