// import React, { useEffect, useState } from 'react';
// import gsap from 'gsap';

// const PageLoader = ({ onComplete }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time and hide loader
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     },2000); // 2 seconds loading time

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (!isLoading) {
//       // Animate loader out
//       gsap.to('.loader-container', {
//         opacity: 0,
//         // duration: 0.1,
//         ease: 'power2.out',
//         onComplete: () => {
//           // Remove loader from DOM after animation
//           const loader = document.querySelector('.loader-container');
//           if (loader) {
//             loader.style.display = 'none';
//           }
//           // Notify parent that loading is complete
//           if (onComplete) {
//             onComplete();
//           }
//         }
//       });
//     }
//   }, [isLoading, onComplete]);

//   useEffect(() => {
//     // Animate loader elements on mount
//     gsap.fromTo('.loader-logo',
//       { scale: 0, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
//     );

//     // gsap.fromTo('.loader-text',
//     //   { y: 30, opacity: 0 },
//     //   { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
//     // );

//     gsap.fromTo('.loader-progress',
//       { width: '100%' }, 
//       { width: '0%', duration: 1.5, delay: 0.5, ease: 'power2.out' }
//     );

//     // left and right box 
//     gsap.set('.left', { x: '0%' })
//     gsap.set('.right', { x: '0%' })

//     gsap.fromTo('.left', { x: '0%' }, { x: '-100%', ease: 'power1', duration: 1, delay: 1 })

//     gsap.fromTo('.right', { x: '0%' }, { x: '100%', ease: 'power1', duration: 1, delay: 1 })
//   }, []);

//   if (!isLoading) return null;

//   return (
//     <>
//       <div className="loader-container fixed inset-0 z-[9999]  flex flex-col items-center justify-center ">
//         {/* Logo */}
//         {/* <div className="loader-logo mb-8">
//           <svg
//             width="150"
//             height="80"
//             viewBox="0 0 300 200"
//             fill="#1E1005"
//             stroke="#1E1005"
//             strokeWidth="2"
//             className="opacity-100"
//           >
//             <path d="M 284.045 267.921 C 279.542 268.136 278.089 269.716 275.983 272.015 C 270.246 267.993 265.525 264.186 260.223 256.788 C 256.01 251.042 252.597 244.722 250.709 237.898 L 250.128 237.898 C 250.128 249.031 250.273 260.092 250.636 271.225 C 250.709 272.589 251.072 278.694 251.072 279.772 C 251.072 282.286 248.53 283.219 247.585 283.219 C 245.552 283.219 245.552 281.926 245.552 281.424 C 245.552 280.418 246.06 275.965 246.06 275.103 C 246.351 268.783 246.278 266.125 246.496 242.064 C 244.172 246.517 240.468 253.771 231.68 262.39 C 225.869 268.136 220.277 271.44 216.791 273.451 L 216.5 272.877 C 228.702 262.534 238.943 249.677 244.099 237.898 L 228.266 237.898 C 225.724 237.898 221.657 238.186 218.897 238.688 L 217.227 235.6 C 222.674 236.031 227.903 236.174 229.283 236.174 L 246.496 236.174 C 246.496 228.489 245.77 222.815 245.625 221.738 C 245.479 220.66 245.261 220.014 244.39 217.5 L 252.016 219.368 C 252.67 219.511 252.815 219.87 252.815 220.229 C 252.815 221.163 252.452 221.379 250.273 222.672 C 250.127 224.826 250.2 234.235 250.128 236.174 L 270.754 236.174 L 273.659 232.727 C 273.877 232.44 274.458 231.865 274.821 231.865 C 275.257 231.865 275.765 232.368 276.201 232.727 L 279.832 236.031 C 280.268 236.39 280.559 236.749 280.559 237.108 C 280.559 237.755 279.905 237.898 279.469 237.898 L 251.58 237.898 C 253.178 241.561 259.424 253.556 270.1 260.738 C 270.899 261.313 278.38 266.341 284.045 267.346 L 284.045 267.921 Z" />
//           </svg>
//         </div> */}
       
//         <div className='flex '>
//            {/* left side  */}
//           <div className="left  h-[100vh] w-[50vw] bg-red-900">
//             <div className="loader-progress w-64 h-1 bg-[#ffffff]  ">
//               <div className="h-full bg-[#1E1005] rounded-full"></div>
//             </div>
//           </div>

//           {/* rightside */}
//           <div className="right  h-[100vh] w-[50vw] bg-blue-900">
//             <div className="loader-progress w-64 h-0.5 bg-[#ffffff] rounded-full ">
//               <div className="h-full bg-[#1E1005] rounded-full"></div>
//             </div>
//           </div>
//         </div>

//         {/* Loading Text */}
//         {/* <div className="loader-text text-center mb-8 ">
//           <h2 className="text-2xl font-medium text-[#1E1005] mb-2 scroll">SAISEI</h2>
//           <p className="text-sm text-[#1E1005]/70 aeonikmed">TRADITION</p>
//         </div> */}

//         {/* Progress Bar */}






//         {/* Loading Dots */}
//         {/* <div className="flex space-x-2 mt-6 ">
//           <div className="w-2 h-2 bg-[#1E1005] rounded-full animate-pulse"></div>
//           <div className="w-2 h-2 bg-[#1E1005] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//           <div className="w-2 h-2 bg-[#1E1005] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default PageLoader;