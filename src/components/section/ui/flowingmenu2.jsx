"use client";
import { useScroll, useTransform, motion } from "framer-motion";

import Lenis from "lenis";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function flowingmenu2() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="h-[5vh]" />
      <div ref={container}>
        <Slide
          src="/imgphehchan.png"
          direction={"right"}
          
          left={"0%"}
          progress={scrollYProgress}
        />
        {/* <Slide
          src="/imgphehchan.png"
          direction={"right"}
          left={"-25%"} 
          progress={scrollYProgress}
        />
        <Slide
          src="/imgphehchan.png"
          direction={"left"}
          left={"-75%"}
          progress={scrollYProgress}
        /> */}
      </div>
      <div />
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [105 * direction, -105 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase2 src={props.src} />
      <Phrase2 src={props.src} />
      <Phrase2 src={props.src} />
      <Phrase2 src={props.src} />
      <Phrase2 src={props.src} />
      <Phrase2 src={props.src} />
      <Phrase2 src={props.src} />
      <Phrase2 src={props.src} />
      <Phrase2 src={props.src} />
    </motion.div>
  );
};

const Phrase2 = ({ src }) => {
  return (
    <div className={"px-3 flex gap-3 items-center"}>
      <p className="text-[4.25vw]">Law</p>
      <span className="relative h-[4.25vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
