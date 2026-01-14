import gsap from 'gsap'
import React, { useEffect } from 'react'
import { teamList } from '../../../constants'


const Team = () => {
    // const parentRef = useRef();
    useEffect(() => {
        gsap.utils.toArray('.wrap').forEach((item) => {
            const Team = item.querySelectorAll('.img')
            const Line = item.querySelectorAll('.line')
            const Text = item.querySelectorAll(".text")

            gsap.fromTo(Team, {
                x:'-100%',
            }, {
                x:'0%',
                duration: 2,
                stagger:0.7,
                scrollTrigger:{
                    trigger:item,
                    start:'top bottom'
                }
            })
            gsap.fromTo(Line, {
                x: '-90%'
            }, {
                x: '0%',
                duration: 3,
                stagger: 0.04,
                scrollTrigger:{
                    trigger:item,
                    start:'top bottom',
                }
            })
            gsap.fromTo(Text,{
                y:'-50%'
            },{
                y:'0%',
                duration: 1,
                stagger: 0.5,
                scrollTrigger:{
                    trigger:item,
                    start: 'top bottom',

                }
            })
        })





    }, []);
    return (
        <>
            <section className=' h-[280vh]'>
                <div className="about-team px-10 py-30 flex flex-col ">
                    <div className="left col-start-1 col-end-2 row-start-0  ">
                        <h2 className='scroll text-6xl'>OUR TEAM </h2>
                    </div>
                    <div className="middle about-team-right col-start-4 col-end-11  ">
                        {teamList.map(({ pName, pDesignation, pImg }) => (
                            <div className=" wrap mt-10 overflow-hidden">
                                <img src={pImg} className='img' alt="Team Member" />
                                <div className="about-text   overflow-hidden  py-2">
                                    <h2 className='uppercase scroll text  text-3xl '>{pName}</h2>
                                    <span className='uppercase text-[#aaa091] text  text-xs'>{pDesignation} </span>
                                </div>
                                 <hr className='line w-[595px] mt-5' />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <hr className='line' />
        </>
    )
}

export default Team