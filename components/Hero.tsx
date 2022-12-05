import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className="flex flex-col items-center justify-center tracking-wider">
            <h1 className='pb-4 text-3xl font-bold font-kaushan'>
                RamadanYosi
            </h1>
            <h3 className='pb-4 text-2xl font-bold font-kaushan'>
                I'm a Software Engineer
            </h3>
            <div className="p-2">
                <button className='p-2 w-[180px] text-xl font-kaushan'>
                    Explore More
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero