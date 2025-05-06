import React from "react";

const ThreePartSection2 = ({
  verticalHeading,
  text,
  imageSrc,
  imageAlt = "Section image",
  reverseOnMobile = false,
  reverse = false, // New prop to control section order
}) => {
  return (
    <section className="w-full relative">
      <div
        className={`w-full flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } ${reverseOnMobile ? "flex-col-reverse" : "flex-col"}`}
      >
        {/* Left part - 20% width with vertical heading */}
        <div className="md:w-1/5 p-4 relative flex items-center justify-center bg-rose-200">
          <h2 className="transform md:-rotate-90 text-4xl font-bold tracking-wider uppercase absolute">
            {verticalHeading}
          </h2>
        </div>

        {/* Separator between sections - position changes based on reverse prop */}
        <div
          className={`hidden md:block w-px bg-black absolute h-full ${
            reverse ? "right-1/5" : "left-1/5"
          } top-0`}
        ></div>

        {/* Middle part - 40% width with text */}
        <div className="md:w-2/5 p-4 flex items-center bg-violet-200">
          <div className="prose max-w-none">
            {typeof text === "string" ? <p>{text}</p> : text}
          </div>
        </div>

        {/* Separator between sections - position changes based on reverse prop */}
        <div
          className={`hidden md:block w-px bg-black absolute h-full ${
            reverse ? "right-3/5" : "left-3/5"
          } top-0`}
        ></div>

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

export default ThreePartSection2;
