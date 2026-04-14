import React from 'react'
import Video from './Video'

const HomeTop = () => {
  return (
    <div className='font-[font1] text-center text-white'>
      <div className='uppercase text-[10vw] justify-center flex items-center leading-[9.5vw]'>L'étincelle</div>

      <div className='uppercase text-[10vw] justify-center flex items-center leading-[9.5vw]'>qui 
      <div className= 'h-[10vw] w-[19vw] overflow-hidden rounded-full'><Video/> 
      </div> 
      génère</div>

      <div className='uppercase text-[10vw] justify-center flex items-center leading-[9.5vw]'>la créativité</div>
    </div>
  )
}

export default HomeTop
