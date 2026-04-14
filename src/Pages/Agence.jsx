import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import localImageSource from '/media/Carl_480x640.jpg';


gsap.registerPlugin(ScrollTrigger)
const Agence = () => {

  const imageDevRef = useRef(null)
  const imageRef = useRef(null)
  const imageUrls = [
    '/media/Carl_480x640.jpg',
    '/media/Carl_480x640.jpg',
    '/media/CAMILLE_480X640_2.jpg',
    '/media/ChantalG_480x640.jpg',
    '/media/HugoJoseph_480x640.jpg',
    '/media/joel_480X640_3.jpg',
    '/media/Lawrence_480x640.jpg',
    '/media/MEGGIE_480X640_2.jpg',
    '/media/MEL_480X640.jpg',
    '/media/Michele_480X640.jpg',
    '/media/SophieA_480x640.jpg',
    '/media/Olivier_480x640.jpg'

  ]

  //1:54:20

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.to(imageDevRef.current, {
      scrollTrigger: {
        trigger: imageDevRef.current,
        start: 'top 0%',
        end: 'top -160%',
        scrub: 1,
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageUrls.length)
          } else {
            imageIndex = imageUrls.length - 1
          }

          imageRef.current.src = imageUrls[imageIndex]
        }
      }
    })
  })


  return (
    <div className='selection:bg-[#d3fd50] py-1'>
      <div className=' section1'>

        <div ref={imageDevRef} className='overflow-hidden h-[40vh] w-[30vh] rounded-3xl absolute top-40  left-[30vw]'>
          <img ref={imageRef} className='h-full w-full' src={localImageSource} alt="" />
        </div>

        <div className='relative font-[font2]'>
          <div className='mt-[50vh]  '>
            <h1 className='text-[20vw] text-center leading-[18vw] uppercase'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='pl-[50%] mt-20'>
            <p className='text-5xl  '>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>




      </div>

      <div className='h-screen section2'>

      </div>
    </div>
  )
}

export default Agence
