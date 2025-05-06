"use client"
import { motion } from "framer-motion";
import { stagger } from "framer-motion/dom";

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const animation = {
  initial: { y: "100%" },
  enter: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      // ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  }),
};

export const navVarients = {
  initial: { opacity: 0, y: "-100%" },
  vissible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1 },
  },
};

export const heroVarients = {
  initial: { y: "100%", opacity: 0 },
  vissible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1 },
  },
};

export const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const variant = {
  hidden: {
    height: "100%",
  },
  visible: {
    height: "0%",
    transition: {
      duration: 2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const imageVariants = {
  hidden: {
    scale: 1.4,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
      // ease: [0.83, 0, 0.17, 1],
    },
  },
};

const RevealCover = ({ bgColor }) => {
  return (
    <motion.div
      className="reveal_cover absolute h-full w-full z-10 bg-bg-color transform-origin-top top-0"
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4, delay: 0.4 }}
      style={{ backgroundColor: bgColor }}
    ></motion.div>
  );
};

export default RevealCover;

export const ImageDiv = ({ children }) => {
  return (
    <motion.div
      className=""
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
