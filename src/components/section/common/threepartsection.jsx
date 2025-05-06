import React from 'react';

const ThreePartSection = ({ 
  verticalHeading, 
  text, 
  imageSrc, 
  imageAlt = "Section image",
  reverseOnMobile = false,
  reverse = false // New prop to control section order
}) => {
  // Define a zigzag path similar to the one in HalfImageHalfText
  const zigzagPath = "M0,0 L5,10 L0,20 L5,30 L0,40 L5,50 L0,60 L5,70 L0,80 L5,90 L0,100";
  
  return (
    <section className="w-full relative">
      <div className={`w-full flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${reverseOnMobile ? 'flex-col-reverse' : 'flex-col'}`}>
        {/* Left part - 20% width with vertical heading */}
        <div className="md:w-1/5 p-4 relative flex items-center justify-center bg-yellow-200">
          <h2 className="transform md:-rotate-90 text-4xl font-bold tracking-wider uppercase absolute">
            {verticalHeading}
          </h2>
        </div>
        
        {/* Separator between sections - replaced with zigzag SVG */}
        <div className={`hidden md:block absolute h-full ${reverse ? 'right-1/5' : 'left-1/5'} top-0 z-10`}>
          <svg 
            height="100%" 
            width="10" 
            viewBox="0 0 10 100" 
            preserveAspectRatio="none"
          >
            <path 
              d={zigzagPath} 
              fill="none" 
              stroke="#000000" 
              strokeWidth="6"
            />
          </svg>
        </div>
        
        {/* Middle part - 40% width with text */}
        <div className="md:w-2/5 p-4 flex items-center bg-orange-200">
          <div className="prose max-w-none">
            {typeof text === 'string' ? <p>{text}</p> : text}
          </div>
        </div>
        
        {/* Separator between sections - replaced with zigzag SVG */}
        <div className={`hidden md:block absolute h-full ${reverse ? 'right-3/5' : 'left-3/5'} top-0 z-10`}>
          <svg 
            height="100%" 
            width="10" 
            viewBox="0 0 10 100" 
            preserveAspectRatio="none"
          >
            <path 
              d={zigzagPath} 
              fill="none" 
              stroke="#000000" 
              strokeWidth="6"
            />
          </svg>
        </div>
        
        {/* Right part - 40% width with image */}
        <div className="md:w-2/5 p-0 h-full">
          <div className="h-full w-full">
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreePartSection;