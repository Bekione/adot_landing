"use client"
import React from 'react'
import { BackgroundBeamsWithCollision } from "@/components/ui/BeamBackground";
import { FlipWords } from './ui/FlipWords';
import { FollowerPointerCard } from './ui/Pointer';
const Hero = () => {
    const services = ["creative websites", "custom software", "tailored services"]
  return (
    <div className='hero-section cursor-custom hero-bg row-span-full col-span-full w-full h-screen flex flex-col'>
      <BackgroundBeamsWithCollision>
        <FollowerPointerCard children={undefined}/>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Your one stop solution for <FlipWords words={services} />
        {/* <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Software.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Software.</span>
          </div>
        </div> */}
      </h2>

      <div className="flex space-x-4 mt-5">
  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#503c3c] bg-[linear-gradient(110deg,#503c3c,45%,#704d4d,55%,#503c3c)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#503c3c] focus:ring-offset-2 focus:ring-offset-slate-50">
    Explore our Services
  </button>

  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#d5cea3] bg-[linear-gradient(110deg,#d5cea3,45%,#e2dcc1,55%,#d5cea3)] bg-[length:200%_100%] px-6 font-medium text-[#503c3c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d5cea3] focus:ring-offset-2 focus:ring-offset-slate-50">
    Contact Us
  </button>
</div>

        
  
      
      </BackgroundBeamsWithCollision>
    </div>
  )
}

export default Hero
