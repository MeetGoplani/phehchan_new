"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Adding the data array with the provided content
const data = [
  {
    title: "KICK OFF",
    year: "",
    content: (
      <div className="grid items-center h-full text-lg sm:text-xl">
        <p className="text-neutral-800 font-normal mb-8">
          Introduction and alignment to make sure you're okay with how much we
          cost
        </p>
      </div>
    ),
  },
  {
    title: "CONCEPT",
    year: "",
    content: (
      <div className="grid items-center h-full text-lg sm:text-xl">
        <p className="text-neutral-800  font-normal mb-8">
          Present the output of our many, many brainstorm sessions and hope you
          don't have major revision requests
        </p>
      </div>
    ),
  },
  {
    title: "DELIVERY & EXECUTION",
    year: "",
    content: (
      <div className="grid items-center h-full text-lg sm:text-xl">
        <p className="text-neutral-800  font-normal mb-4">
          Select one concept and refine into final delivery and then execute the
          same on multiple channels
        </p>
      </div>
    ),
  },
  {
    title: "REVIEW",
    year: "",
    content: (
      <div className="grid items-center h-full text-lg sm:text-xl">
        <p className="text-neutral-800  font-normal mb-4">
          Evaluate the execution and gather feedback for improvements
        </p>
      </div>
    ),
  },
  {
    title: "OPTIMIZE",
    year: "",
    content: (
      <div className="grid items-center h-full text-lg sm:text-xl">
        <p className="text-neutral-800  font-normal mb-4">
          Make adjustments based on feedback and performance metrics
        </p>
      </div>
    ),
  },
  {
    title: "SCALE",
    year: "",
    content: (
      <div className="grid items-center h-full text-lg sm:text-xl">
        <p className="text-neutral-800  font-normal mb-4">
          Expand successful strategies across additional channels and markets
        </p>
      </div>
    ),
  },
  {
    title: "REPORT",
    year: "",
    content: (
      <div className="grid items-center h-full text-lg sm:text-xl">
        <p className="text-neutral-800  font-normal mb-4">
          Compile comprehensive results and insights for future campaigns
        </p>
      </div>
    ),
  },
];

const TextFlow = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const textGroupsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [debugInfo, setDebugInfo] = useState({
    scrollY: 0,
    containerTop: 0,
    progress: 0,
    activeIndex: 0,
  });

  // Function to calculate progress based on scroll position
  const calculateProgress = () => {
    if (!containerRef.current) return 0;

    const containerRect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const totalScrollableHeight = containerRect.height - viewportHeight;
    const scrollProgress = Math.max(
      0,
      Math.min(1, -containerRect.top / totalScrollableHeight)
    );

    if (scrollProgress > 0.85) {
      return 1;
    }
    return scrollProgress / 0.85;
  };

  // Function to scroll to a specific section
  const scrollToSection = (index) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const totalScrollableHeight = containerRect.height - viewportHeight;
    const sectionSize = 1 / data.length;

    // Calculate the target progress for this section
    const targetProgress = index * sectionSize;

    // Calculate the scroll position needed to achieve this progress
    const scrollToPosition =
      containerRect.top +
      window.scrollY +
      targetProgress * 0.85 * totalScrollableHeight;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = Math.min(activeIndex + 1, data.length - 1);
      if (nextIndex !== activeIndex) {
        scrollToSection(nextIndex);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = Math.max(activeIndex - 1, 0);
      if (prevIndex !== activeIndex) {
        scrollToSection(prevIndex);
      }
    }
  };

  useEffect(() => {
    if (!pathRef.current || !svgRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const handleScroll = () => {
      const progress = calculateProgress();
      const sectionSize = 1 / data.length;
      const currentActiveIndex = Math.min(
        Math.floor(progress / sectionSize),
        data.length - 1
      );

      setActiveIndex(currentActiveIndex);
      path.style.strokeDashoffset = pathLength - pathLength * progress;

      textGroupsRef.current.forEach((textGroup, index) => {
        if (!textGroup) return;
        const itemProgress = index * sectionSize;

        if (progress >= itemProgress) {
          textGroup.style.opacity = 1;
          textGroup.style.transform = "translateY(0)";
        } else {
          textGroup.style.opacity = 0;
          textGroup.style.transform = "translateY(20px)";
        }
      });

      setDebugInfo({
        scrollY: window.scrollY,
        containerTop: containerRef.current?.getBoundingClientRect().top || 0,
        progress: progress,
        activeIndex: currentActiveIndex,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  // Define the fixed points for our straight path layout
  const getPointsAlongPath = () => {
    if (!pathRef.current) return Array(data.length).fill({ x: 0, y: 0 });
  
    // Define fixed points for the zigzag path layout with increased spacing
    const basePoints = [
      { x: 150, y: 150 },    // Step 1 (top left)
      { x: 550, y: 150 },    // Step 2 (top right) - increased x from 450 to 550
      { x: 550, y: 300 },    // Step 3 (middle right) - increased y from 250 to 300
      { x: 150, y: 300 },    // Step 4 (middle left) - increased y from 250 to 300
      { x: 150, y: 450 },    // Step 5 (middle left, lower) - increased y from 350 to 450
      { x: 550, y: 450 },    // Step 6 (middle right, lower) - increased y from 350 to 450
      { x: 550, y: 600 },    // Step 7 (bottom right) - increased y from 450 to 600
    ];
    
    // Only return as many points as we have data items
    return basePoints.slice(0, data.length);
  };

  const pathPoints = getPointsAlongPath();

  return (
    <div ref={containerRef} className="min-h-[400vh] relative bg-gray-50 py-16 pb-32">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <svg
              ref={svgRef}
              className="w-full h-[800px]" // Increased height from 600px to 800px
              viewBox="0 0 700 700" // Increased viewBox from 600x600 to 700x700
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Straight path following the pattern */}
              <path
                ref={pathRef}
                d={getPathDefinition()}
                stroke="#3b82f6"
                strokeWidth="5" // Increased from 4 to 5
                strokeLinecap="round"
                fill="none"
                filter="drop-shadow(0 0 3px rgba(59, 130, 246, 0.5))"
              />

              <path
                d={getPathDefinition()}
                stroke="#3b82f6"
                strokeWidth="2" // Increased from 1 to 2
                strokeOpacity="0.5"
                strokeLinecap="round"
                fill="none"
                filter="blur(8px)"
              />

              {pathPoints.map((point, index) => {
                // Determine text position based on point location
                let textAnchor = "middle";
                let textOffsetX = 0;
                let textOffsetY = -20;
                
                // Customize text position for each point in the zigzag pattern
                if (index % 2 === 0) {
                  // Points on the left side
                  textAnchor = "start";
                  textOffsetX = 0;
                } else {
                  // Points on the right side
                  textAnchor = "end";
                  textOffsetX = 0;
                }
                
                // Alternate between text above and below the points
                if (index === 0 || index === 1) {
                  textOffsetY = -20; // Text above for first row
                } else if (index === 2 || index === 3) {
                  textOffsetY = 30;  // Text below for second row
                } else if (index === 4 || index === 5) {
                  textOffsetY = -20; // Text above for third row
                } else {
                  textOffsetY = 30;  // Text below for fourth row
                }

                return (
                  <g
                    key={index}
                    ref={(el) => (textGroupsRef.current[index] = el)}
                    className="transition-all duration-500 ease-out"
                    style={{ opacity: 0, transform: "translateY(20px)" }}
                  >
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={12} // Increased from 10 to 12
                      fill={index <= activeIndex ? "#3b82f6" : "#93c5fd"}
                      filter="drop-shadow(0 0 2px rgba(59, 130, 246, 0.8))"
                    />
                    <text
                      x={point.x + textOffsetX}
                      y={point.y + textOffsetY}
                      className="text-lg font-bold"
                      fill="#1e3a8a"
                      textAnchor={textAnchor}
                      fontSize="16" // Added explicit font size
                    >
                      {data[index].title.toUpperCase()}
                    </text>
                    <text
                      x={point.x + textOffsetX}
                      y={point.y + textOffsetY + 16}
                      className="text-sm"
                      fill="#1e3a8a"
                      textAnchor={textAnchor}
                    >
                      {data[index].year}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="-mt-12 sm:hidden flex items-center justify-center gap-2">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "sm:h-8 max-sm:w-8 w-2 bg-blue-600"
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to ${data[index].title}`}
              />
            ))}
          </div>

          <div className="w-full md:w-1/3 p-6 border h-fit rounded-lg shadow md:mt-20">
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {data[activeIndex].title}
                </h3>
                <p className="text-sm text-blue-700 mb-4">
                  {data[activeIndex].year}
                </p>
                <div className="prose">{data[activeIndex].content}</div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFlow;

// Add this function to generate the path definition based on the number of steps
// Update the path definition function for the wider layout
function getPathDefinition() {
  const numSteps = data.length;
  
  if (numSteps <= 3) {
    return "M150 150 H550 V600";
  } else if (numSteps === 4) {
    return "M150 150 H550 V600 H150";
  } else if (numSteps === 5) {
    return "M150 150 H550 V300 H150 V450";
  } else if (numSteps === 6) {
    return "M150 150 H550 V300 H150 V450 H550";
  } else if (numSteps >= 7) {
    return "M150 150 H550 V300 H150 V450 H550 V600";
  }
}