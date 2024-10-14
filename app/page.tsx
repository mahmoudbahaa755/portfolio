"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    const handleMouseMove = (e) => {
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
      className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-4rem)] py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        ref={textRef}
        className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          variants={itemVariants}
        >
          Mahmoud Bahaa
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl mb-4"
          variants={itemVariants}
        >
          Frontend Developer & UI/UX Enthusiast
        </motion.h2>
        <motion.p className="text-xl mb-8 max-w-2xl" variants={itemVariants}>
          Crafting beautiful and functional web experiences with a passion for
          clean code and user-centric design.
        </motion.p>
        <motion.div className="mb-8" variants={itemVariants}>
          <p className="font-semibold">Specialized in:</p>
          <p>React • Next.js • TypeScript • Tailwind CSS</p>
        </motion.div>
        <motion.div className="space-x-4" variants={itemVariants}>
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
      <motion.div
        ref={imageRef}
        className="md:w-1/2 flex justify-center"
        variants={itemVariants}
      >
        <Image
          src="https://source.unsplash.com/random/600x600?developer"
          alt="Mahmoud Bahaa"
          width={400}
          height={400}
          className="rounded-full shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}
