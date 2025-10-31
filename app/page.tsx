"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StickManWithCard from "@/components/StickManWithCard/StickManWithCard";

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Home() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const text = textRef.current;

    gsap.fromTo(
      image,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      text,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Interactive animation on mouse move
    const handleMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(image, {
        x: xPos,
        y: yPos,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-4rem)] py-8 md:py-12 px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        ref={textRef}
        className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text"
          variants={itemVariants}
        >
          Mahmoud Bahaa
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 text-muted-foreground"
          variants={itemVariants}
        >
          Software Engineer
        </motion.h2>
        <motion.p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0" variants={itemVariants}>
          Crafting beautiful and functional web experiences with a passion for
          clean code and user-centric design.
        </motion.p>
        <motion.div className="mb-6 md:mb-8" variants={itemVariants}>
          <p className="font-semibold mb-2 text-sm sm:text-base">Specialized in:</p>
          <p className="text-sm sm:text-base">React • Next.js • TypeScript • Tailwind CSS</p>
        </motion.div>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" variants={itemVariants}>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
      <motion.div
        ref={imageRef}
        className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
        variants={itemVariants}
      >
        <div className="w-full max-w-md">
          <StickManWithCard />
        </div>
      </motion.div>
    </motion.div>
  );
}
