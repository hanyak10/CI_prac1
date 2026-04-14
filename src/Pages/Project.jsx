import React from 'react'
// import pic1 from '../../src/assets/images/Thumbnail.png'
// import pic2 from '../../src/assets/images/PJC.jpg'
// import pic3 from '../../src/assets/images/k72.jpg'
// import pic4 from '../../src/assets/images/OKA.jpg'
// import pic5 from '../../src/assets/images/opto.jpg'
// import pic6 from '../../src/assets/images/CF.jpg'
// import pic7 from '../../src/assets/images/shelton.jpg'
// import pic8 from '../../src/assets/images/BEST.jpg'
// import pic9 from '../../src/assets/images/thumbnailimage9.jpg'
// import pic10 from '../../src/assets/images/thumbnailimage10.jpg'
// import pic11 from '../../src/assets/images/chalaxeur11.jpg'
// import pic12 from '../../src/assets/images/thumbnail12.jpg'
// import pic13 from '../../src/assets/images/100temps13.jpg'
// import pic14 from '../../src/assets/images/crisis14.jpg'
// import pic15 from '../../src/assets/images/thumbnailimage15.jpg'
// import pic16 from '../../src/assets/images/PME16.jpg'
// import pic17 from '../../src/assets/images/fruite17.jpg'
import pic1 from '../assets/images/Thumbnail.png'
import pic2 from '../assets/images/PJC.jpg'
import pic3 from '../assets/images/k72.jpg'
import pic4 from '../assets/images/OKA.jpg'
import pic5 from '../assets/images/opto.jpg'
import pic6 from '../assets/images/CF.jpg'
import pic7 from '../assets/images/shelton.jpg'
import pic8 from '../assets/images/Best.jpg'
import pic9 from '../assets/images/thumbnailimage9.jpg'
import pic10 from '../assets/images/thumbnailimage10.jpg'
import pic11 from '../assets/images/chalaxeur11.jpg'
import pic12 from '../assets/images/thumbnail12.jpg'
import pic13 from '../assets/images/100temps13.jpg'
import pic14 from '../assets/images/crisis14.jpg'
import pic15 from '../assets/images/thumbnailimage15.jpg'
import pic16 from '../assets/images/PME16.jpg'
import pic17 from '../assets/images/Fruite17.jpg'
import ProjectCard from '../Components/Project/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Project = () => {

  const projects = [
    {
      image1: pic1,
      image2: pic2
    }, {
      image1: pic3,
      image2: pic4
    }, {
      image1: pic5,
      image2: pic6
    }, {
      image1: pic7,
      image2: pic8
    }, {
      image1: pic9,
      image2: pic10
    }, {
      image1: pic11,
      image2: pic12
    }, {
      image1: pic13,
      image2: pic14
    }, {
      image1: pic15,
      image2: pic16
    },
     {
      image1: pic17
    }
  ]

  gsap.registerPlugin(ScrollTrigger)

useGSAP(() => {

  gsap.from(".hero", {
    height:'64px',
    stagger: {
      amount: 0.3
    },
    scrollTrigger: {
      trigger: ".lol",
      start: "top 100%",
      end: "top -150%",
      scrub: true
    }
  })
})

gsap.to(".nav svg path", {
  fill: "black"
})
  
  
  return (
    <div className='p-4 mb-[100vh]'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] text-[13vw] uppercase'>Projects</h2>
      </div>
      <div className='-mt-20 lol'>
        {projects.map(function(elem, idx){
          return(
            <div key={idx} className='w-full h-[575px] gap-4 mb-4 flex hero'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Project
