"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
    technologies: ["React", "NextJS", "TailwindCSS"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "",
    imageUrl: "https://source.unsplash.com/random/800x600?ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    liveUrl: "https://example-taskapp.com",
    githubUrl: "",
    imageUrl: "https://source.unsplash.com/random/800x600?task-management",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that provides real-time weather information and forecasts.",
    technologies: ["React", "Redux", "OpenWeatherMap API", "Chart.js"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    imageUrl: "https://source.unsplash.com/random/800x600?weather",
  },
];

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

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Interactive hover animation
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <motion.div
      className="space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="section-heading">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <Card className="h-full flex flex-col overflow-hidden card-hover">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2 mt-auto">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    disabled={!project.githubUrl}
                    size="sm"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
