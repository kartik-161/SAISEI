import React, { useEffect, useRef ,useState  } from "react";
import gsap from "gsap";


const ContactForm = () => {

  const rootRef = useRef();
  useEffect(() => {
    gsap.fromTo('.lines',{x: '-100%'} , {x: '0%' , duration: 2 , stagger: 0.05 , ease: 'power4'})
    const labels = rootRef.current.querySelectorAll('label');
    gsap.fromTo(labels,{  y: '-70%'  } , { y: '0%' ,duration: 1 , ease: 'power1.inOut' ,  })
    const btn = document.querySelector('button')
    
    gsap.fromTo(btn,{  opacity:0  } , { opacity: 1 ,duration: 1 , ease: 'power1.inOut' ,  })

  }, [])
  


 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div className="h-[80vh] flex items-center justify-center   "  >
      <form
        onSubmit={handleSubmit}
        className="w-full  space-y-10"
        ref={rootRef}
      >

        {/* Name */}
        <div   className = 'split-parent'>
          <label className="block text-gray-700 mb-3 pb-2 side uppercase font-bold ">Name</label>
          <input
            type="text"
            name="name"
            placeholder=" Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2   focus:outline-none "
            required
          />
          <hr className="lines" />
        </div>

        {/* Email */}
        <div   className = 'split-parent'>
          <label className="block text-gray-700 mb-3 pb-2 side uppercase font-bold ">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2   focus:outline-none"
            required
          />
          <hr className="lines" />
        </div>

        {/* Company */}
        <div  className = 'split-parent'>
          <label className="block text-gray-700 mb-3 pb-2 side uppercase font-bold">Company</label>
          <input
            type="text"
            name="company"
            placeholder="Your company name"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2   focus:outline-none "
          />
          <hr className="lines" />
        </div>

        {/* Project Type */}
        <div  className = 'split-parent'>
          <label className="block text-gray-700 mb-3 pb-2 side uppercase font-bold">Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-2   focus:outline-none"
            required
          >
            <option value="">Select one..</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App">Mobile App</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="SEO & Marketing">SEO & Marketing</option>
            <option value="Other">Other</option>
          </select>
          <hr className="lines" />
        </div>

        {/* Message */}
        <div  className = 'split-parent'>
          <label className="block text-gray-700 side uppercase font-bold">Message</label>
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            rows="2"
            className="w-full px-4 py-2   focus:outline-none min-h-10"
          ></textarea>
          <hr className="lines" />
        </div>
        <div>
          <div className="btn  ">
            <button className='scroll h-10 w-45 bg-[#9c7443] uppercase rounded-full items-center py-2 border-none text-white '>submit message</button>
          </div>
        </div>


      </form>
    </div>
  );
};

export default ContactForm;
