
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      panels.forEach((panel, i) => {
        const isLast = i === panels.length - 1;

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: isLast ? "top top" : "+=100%", // last: end immediately at top
          pin: isLast ? false : true,         // last: do NOT pin
          pinSpacing: isLast ? true : false,  // overlap only for pinned ones
          anticipatePin: 1
        });
      });

      // Optional visual polish: dim/scale the previous panel only when a next panel starts pinning
      panels.forEach((panel, i) => {
        if (i === 0 || i === panels.length - 1) return; // skip first and skip effect at last arrival
        gsap.fromTo(
          panels[i - 1],
          { scale: 1, filter: "brightness(1)" },
          {
            scale: 0.92,
            filter: "brightness(0.7)",
            ease: "none",
            scrollTrigger: {
              trigger: panel,   // when this panel reaches top and pins
              start: "top top",
              end: "+=30%",
              scrub: true
            }
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="w-full">
      {/* Panel 1 */}
      <div className="panel relative h-screen">
        <img src="/imghome/12th.png" alt="Shizuka Gardens" className="w-full h-full object-cover brightness-35" />
        <div className="absolute bottom-12 left-10 z-[2]">
          <h1 className="uppercase text-[#fbf0da] text-9xl scroll">Shizuka <br /> Gardens</h1>
        </div>
        <span className="absolute top-1/4 left-3/4 z-[2] text-[#fbf0da] text-3xl scroll">1 &nbsp;/ &nbsp;3</span>
      </div>

      {/* Panel 2 */}
      <div className="panel relative h-screen">
        <img src="/imghome/11th.png" alt="Kawa Lofts" className="w-full h-full object-cover brightness-35" />
        <div className="absolute bottom-12 left-10 z-[2]">
          <h1 className="uppercase text-[#fbf0da] text-9xl scroll">kawa <br /> lofts</h1>
        </div>
        <span className="absolute top-1/4 left-3/4 z-[2] text-[#fbf0da] text-3xl scroll">2 &nbsp;/ &nbsp;3</span>
      </div>

      {/* Panel 3 (last: no pin) */}
      <div className="panel relative h-screen">
        <img src="/imghome/10th.png" alt="Kinsei Pavilion" className="w-full h-full object-cover brightness-35" />
        <div className="absolute bottom-12 left-10 z-[2]">
          {/* <img src="/img/19th.png" alt="top-image" className="h-[10vh] w-[10vw]" />  */}
          <h1 className="uppercase text-[#fbf0da] text-9xl mt-4 scroll">kinsei <br /> pavilion</h1>
        </div>
        <span className="absolute top-1/4 left-3/4 z-[2] text-[#fbf0da] text-3xl scroll">3 &nbsp;/ &nbsp;3</span>
      </div>
    </section>
  );
};

export default Carousel;