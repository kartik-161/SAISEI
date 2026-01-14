import React from 'react';

const FancyButton = ({ 
  defaultText = "ABOUT US", 
  hoverText = "ABOUT US", 
  className = "",
  ...props 
}) => {
  return (
    <button 
      className={`
        group relative overflow-hidden
        bg-black text-white
        px-8 py-4 h-20 w-25 
        font-medium text-base rounded-full
        border-none cursor-pointer
        ${className}
      `}
      {...props}
    >
      {/* Brown background that slides up and out on hover */}
      <div className="
        absolute inset-0 bg-[#9c7443]
        group-hover:-translate-y-full
        transition-transform duration-700 ease-out
        z-10
      " />
      
      {/* Text container */}
      <div className="relative z-20 flex items-center justify-center h-full">
        {/* Default text */}
        <span className="
          absolute
          group-hover:opacity-0 group-hover:-translate-y-5
          transition-all duration-700 ease-out
        ">
          {defaultText}
        </span>
        
        {/* Hover text */}
        <span className="
          absolute opacity-0 translate-y-5
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-700 ease-out
        ">
          {hoverText}
        </span>
      </div>
    </button>
  );
};

export default FancyButton;