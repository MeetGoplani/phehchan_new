"use client"

import React from "react"
import { useMeasure } from "@uidotdev/usehooks"
import { cva } from "class-variance-authority"
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react"

import { cn } from "@/lib/utils"

const processCardVariants = cva("flex border backdrop-blur-lg", {
  variants: {
    variant: {
      indigo:
        "flex border text-white border-white backdrop-blur-lg bg-black",
      light: "shadow",
    },
    size: {
      sm: "min-w-[25%] max-w-[25%]",
      md: "min-w-[50%] max-w-[50%]",
      lg: "min-w-[75%] max-w-[75%]",
      xl: "min-w-full max-w-full",
    },
  },
  defaultVariants: {
    variant: "indigo",
    size: "md",
  },
})

const ContainerScrollContext = React.createContext(undefined)

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    )
  }
  return context
}

export const ContainerScroll = ({
  children,
  className,
  ...props
}) => {
  const scrollRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  })
  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-[120vh]", className)}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  )
}

export const ContainerSticky = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("sticky left-0 top-0 w-full overflow-hidden", className)}
      {...props}
    />
  )
)
ContainerSticky.displayName = "ContainerSticky"

export const ProcessCardTitle = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props} />
  )
)
ProcessCardTitle.displayName = "ProcessCardTitle"

export const ProcessCardBody = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-8 p-6", className)}
      {...props}
    />
  )
)
ProcessCardBody.displayName = "ProcessCardBody"

export const ProcessCard = ({
  className,
  style,
  variant,
  size,
  itemsLength,
  index,
  ...props
}) => {
  const { scrollYProgress } = useContainerScrollContext()
  const start = index / itemsLength
  const end = start + 1 / itemsLength
  const { innerWidth } = window
  const [ref, { width }] = useMeasure()

  const x = useTransform(
    scrollYProgress,
    [start, end],
    [innerWidth, -((width ?? 0) * index) + 64 * index]
  )
  return (
    <motion.div
      ref={ref}
      style={{
        x: index > 0 ? x : 0,
        ...style,
      }}
      className={cn(processCardVariants({ variant, size }), className)}
      {...props}
    />
  )
}
ProcessCard.displayName = "ProcessCard"

// Default process phases data
const DEFAULT_PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Research and Analysis",
    description:
      "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
  },
  {
    id: "process-2",
    title: "Wireframing and Prototyping",
    description:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual indigoprints allow us to test and refine the user experience before diving into design.",
  },
  {
    id: "process-3",
    title: "Design Creation",
    description:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
  },
  {
    id: "process-4",
    title: "Development and Testing",
    description:
      "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
  },
]

// Main component to export
const Services = ({ 
  processPhases = DEFAULT_PROCESS_PHASES,
  title = "Planning your project",
  titleSecondLine = "development journey",
  description = "We blend creative design with cutting‑edge frontend development to build stunning, high‑performance websites that elevate your brand and captivate your audience."
}) => {
  return (
    <section id="services">
      <ContainerScroll
        className="container px-6 py-12 h-[100vh]"
        style={{
          background: "white",
        }}
      >
        {/* Make the header sticky at the top */}
        <div className="sticky top-0 pt-4 pb-8 bg-white z-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
              {title}
              <br /> {titleSecondLine}
            </h2>
            <p className="max-w-[52ch] text-sm text-black">
              {Array.isArray(description) 
                ? description.map((desc, i) => (
                    <React.Fragment key={i}>
                      {desc}
                      {i < description.length - 1 && <br />}
                    </React.Fragment>
                  ))
                : description}
            </p>
          </div>
        </div>

        {/* Position the process cards directly under the header with more space */}
        <ContainerSticky className="top-[220px] flex flex-nowrap">
          {processPhases.map((phase, index) => (
            <ProcessCard
              key={phase.id}
              itemsLength={processPhases.length}
              index={index}
              className="min-w-[70%] max-w-[70%]"
            >
              <ProcessCardTitle className="border border-white">
                <div className="rounded-full size-8 bg-white text-black text-sm flex justify-center items-center">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </ProcessCardTitle>
              <ProcessCardBody className="flex flex-col gap-10">
                <h3 className="text-3xl font-semibold leading-tight text-white">
                  {phase.title}
                </h3>
                <p className="opacity-90 text-white">
                  {Array.isArray(phase.description) 
                    ? phase.description.map((desc, i) => (
                        <React.Fragment key={i}>
                          {desc}
                          {i < phase.description.length - 1 && <br />}
                        </React.Fragment>
                      ))
                    : phase.description}
                </p>
              </ProcessCardBody>
            </ProcessCard>
          ))}
        </ContainerSticky>
      </ContainerScroll>
    </section>
  )
}

export default Services