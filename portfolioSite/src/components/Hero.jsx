import React from 'react'
import profilePic from '../assets/sampleProfile.webp'

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
                <img src={profilePic} alt='JJ Wang' className='border border-stone-900 rounded-3xl'/>
            </div>
        </div>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start mt-10'>
                <h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>JJ Wang</h2>
                <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</span>
                <p className='my-2'></p>
            </div>
        </div>
    </div>
  )
}

export default Hero