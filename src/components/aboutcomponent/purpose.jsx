import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText)

const Purpose = () => {
    // const lefttopRef = useRef();

    useEffect(() => {
        const head = new SplitText('.heading', { type: 'lines', linesClass: 'split-parent' })
        gsap.fromTo(head.lines, {
            y: '100%',
        }, {
            y: '0%',
            duration: 1,
            scrollTrigger: {
                trigger: '.heading',
                start: 'top bottom '
            }
        })




        gsap.utils.toArray('.right').forEach((item) => {
            const Text = new SplitText(item.querySelectorAll('.text'), { type: 'lines', linesClass: 'split-parent' })
            gsap.fromTo(Text.lines, {
                y: '-100%',

            }, {
                y: '0%',
                duration: .5,
                stagger: 0.01,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom'
                }
            })
        })
        gsap.utils.toArray('.bottom').forEach((item)=>{
            const head = item.querySelectorAll('h2')
            const text = item.querySelectorAll('h3')
            const line = item.querySelectorAll('hr')
            gsap.fromTo(head,{
                y:'-100%'
            },{
                y:'0%',
                duration:1,
                scrollTrigger:{
                    trigger: item,
                    start: 'top bottom',
                }
            })
            gsap.fromTo(text,{
                y:'-100%'
            },{
                y:'0%',
                
                duration:1,
                scrollTrigger:{
                    trigger: item,
                    start: 'top bottom',
                }
            })
            gsap.fromTo(line,{
                x:'-100%'
            },{
                x:'0%',
                
                duration:1,
                stagger:0.05,
                scrollTrigger:{
                    trigger: item,
                    start: 'top bottom',
                }
            })
        })
        gsap.fromTo('.bottom-text',{
            y:'-100%'
        },{
            y:'0%',
            duration: 2,
            scrollTrigger:{
                trigger:'.bottom-text',
                start: 'top bottom'
            }
        })
    }, [])



    return (
        <>
            <section className='h-[100vh] bg-[#FBF0DA] py-20 px-20'>
                <div className="about-purpose">
                    <div className="left row-start-1  col-start-1 col-end-3 row-end-2 flex flex-col gap-[60vh]">
                        <h2 className='scroll heading text-6xl'>
                            BUILDING WITH PURPOSE
                        </h2>
                        <span className='scroll bottom-text overflow-hidden'>EST-2022</span>
                    </div>
                    <div className="middle col-start-4 col-end-8    ">
                        <img src="/imgabout/2nd.png" className='h-[800px] w-[900px]' alt="" />
                    </div>
                    <div className="right col-start-9 col-end-11  row-start-1">
                        <div className="top flex flex-col gap-5">
                            <h3 className='font-bold'>OUR ORIGIN </h3>
                            <p className='leading-[1.3] side text' >Saisei (再生) was founded with a <br />
                                singular vision: to redefine <br />
                                architecture by harmonizing <br />
                                cutting-edge innovation with the <br />
                                principles of sustainability and <br />
                                tradition. Rooted in Tokyo, our story <br />
                                is one of rebirth—a commitment to <br />
                                building spaces that honor the <br />
                                environment while pushing the <br />
                                boundaries of what’s possible in <br />
                                modern design</p>
                        </div>
                        <div className="middle mt-8">
                            <p className='side text '>
                                Inspired by Japan’s blend of <br />
                                cultural heritage and <br />
                                forward-thinking technology, our <br />
                                founding architect sought to <br />
                                challenge conventional practices. <br />
                                Saisei creates living spaces that <br />
                                breathe, adapt, and <br />
                                regenerate—offering both <br />
                                functionality and a lasting positive <br />
                                impact on urban landscapes.
                            </p>
                        </div>
                        <div className="bottom  aeonikmed mt-5">
                            <h2 className='font-bold'>OUR PHILOSOPHY</h2>
                            <div className='flex flex-col gap-2 overflow-hidden  mt-2'>

                                <h3 className=''>Regeneration</h3>
                                <hr />
                                <h3>Innovation</h3>
                                <hr />
                                <h3  >Sustainability</h3>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <hr />
        </>
    )
}

export default Purpose