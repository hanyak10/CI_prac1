import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 py-2 text-white'>

     <Link className='hover:text-[#d3fd50] hover:border-[#d3fd50] border-4 lg:text-[6vw] leading-[6vw]  border-white uppercase rounded-full px-10 pt-2 ' to='/projects'>Projects</Link>

     <Link className='border-4  hover:text-[#d3fd50] hover:border-[#d3fd50] lg:text-[6vw] leading-[6vw]  border-white uppercase rounded-full  px-10  pt-2' to='/agence'>Agence</Link>
    </div>
  )
}

export default HomeBottom
