import React, { useContext, useRef } from 'react'
import Thumbnail1 from '/media/Thumbnail1.png'
import Thumbnail2 from '../../assets/images/Thumbnail2.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { NavbarContext } from '../../Context/NavContext'

gsap.registerPlugin(useGSAP)

const FullScreenNavabar = () => {

    const fullScreenNavLinks = useRef(null)
    const FullScreenNav = useRef(null)
    const { navOpen, setNavOpen } = useContext(NavbarContext)


    function gsapAnimation(){
        const tl = gsap.timeline()
        tl.to('.fullscreennav',{
            display: 'block'
        })
        tl.to('.stairing', {
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })

        tl.to('.link', {
            rotateX: 0,
            opacity: 1,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink',{
            opacity:1
        })
    }

    function gsapAnimationReverse(){
        const tl = gsap.timeline()
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })

        tl.to('.link', {
            rotateX: 90,
            opacity: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink',{
            opacity:0
        })
        tl.to('.fullscreennav',{
            display: 'none',
        })
    }

    useGSAP(function (){
        if(navOpen){
            gsapAnimation()
        }
        else{
            gsapAnimationReverse()
        }

    },[navOpen])

    return (
        <div ref={FullScreenNav} id='fullscreennav' className='text-white fullscreennav z-50 hidden h-screen w-full absolute overflow-hidden'>

            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullScreenNavLinks} className='relative'>
                <div className='p-5 flex navlink w-full justify-between items-start'>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="203" height="64" viewBox="0 0 103 44" className=''>
                            <path fill="white" fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                    <div onClick={()=>{
                        setNavOpen(false)
                    }}
                     className='h-20 w-20 relative cursor-pointer'>
                        <div className='h-28 w-1 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        <div className='h-28 w-1 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                    </div>
                </div>
                <div className='py-20'>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>
                            PROJECTS
                        </h1>
                        <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                            <div className='moveX flex items-center gap-10'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img
                                    src={Thumbnail1}
                                    alt="thumbnail"
                                    className="h-20 shrink-0 w-64 rounded-full"
                                />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img src={Thumbnail2} alt="thumbnai2" className='h-20 shrink-0 w-72 rounded-full' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img
                                    src={Thumbnail1}
                                    alt="thumbnail"
                                    className="h-20 shrink-0 w-80 rounded-full"
                                />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img src={Thumbnail2} alt="thumbnai2" className='h-20 shrink-0 w-80 rounded-full' />
                            </div>
                        </div>

                    </div>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>
                            agence
                        </h1>
                        <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                            <div className='moveX flex items-center gap-10'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img
                                    src={Thumbnail1}
                                    alt="thumbnail"
                                    className="h-20 shrink-0 w-64 rounded-full"
                                />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img src={Thumbnail2} alt="thumbnai2" className='h-20 shrink-0 w-72 rounded-full' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img
                                    src={Thumbnail1}
                                    alt="thumbnail"
                                    className="h-20 shrink-0 w-80 rounded-full"
                                />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img src={Thumbnail2} alt="thumbnai2" className='h-20 shrink-0 w-80 rounded-full' />
                            </div>
                        </div>

                    </div>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>
                            contact
                        </h1>
                        <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                            <div className='moveX flex items-center gap-10'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img
                                    src={Thumbnail1}
                                    alt="thumbnail"
                                    className="h-20 shrink-0 w-64 rounded-full"
                                />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img src={Thumbnail2} alt="thumbnai2" className='h-20 shrink-0 w-72 rounded-full' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img
                                    src={Thumbnail1}
                                    alt="thumbnail"
                                    className="h-20 shrink-0 w-80 rounded-full"
                                />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img src={Thumbnail2} alt="thumbnai2" className='h-20 shrink-0 w-80 rounded-full' />
                            </div>
                        </div>

                    </div>
                    <div className='link origin-top relative border-y-1 border-white'>
                        <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>
                            blogue
                        </h1>
                        <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                            <div className='moveX flex items-center gap-10'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img
                                    src={Thumbnail1}
                                    alt="thumbnail"
                                    className="h-20 shrink-0 w-64 rounded-full"
                                />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img src={Thumbnail2} alt="thumbnai2" className='h-20 shrink-0 w-72 rounded-full' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img
                                    src={Thumbnail1}
                                    alt="thumbnail"
                                    className="h-20 shrink-0 w-80 rounded-full"
                                />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>POUR TOUT Voir</h2>
                                <img src={Thumbnail2} alt="thumbnai2" className='h-20 shrink-0 w-80 rounded-full' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FullScreenNavabar