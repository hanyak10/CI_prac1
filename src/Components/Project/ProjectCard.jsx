import React from 'react'

const ProjectCard = (props) => {
  return (
<>
    <div className='w-1/2 h-full relative group transition-all hover:rounded-[30px] overflow-hidden text-center'>
      <img src={props.image1} className='h-full w-full object-cover' alt="" />
      <div className="opacity-0 group-hover:opacity-100 transition-all absolute inset-0 bg-black/10 flex items-center justify-center">
        <h2 className='uppercase text-6xl font-[font2] text-white border-3 pt-2 px-6 rounded-full'>
          Voir le Project
        </h2>
      </div>
    </div>
    <div className='w-1/2 h-full relative group transition-all hover:rounded-[30px] overflow-hidden text-center'>
      <img src={props.image2} className='h-full w-full object-cover' alt="" />
      <div className="opacity-0 group-hover:opacity-100 transition-all absolute inset-0 bg-black/10 flex items-center justify-center">
        <h2 className='uppercase text-6xl font-[font2] text-white border-3 pt-2 px-6 rounded-full'>
          Voir le Project
        </h2>
      </div>
    </div>
 </>
  )
}

export default ProjectCard
