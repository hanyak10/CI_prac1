import React from 'react'
import firtsvideo from '/media/Firts.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover rounded-s overflow-hidden' autoPlay loop muted src={firtsvideo}/>
    </div>
  )
}

export default Video
