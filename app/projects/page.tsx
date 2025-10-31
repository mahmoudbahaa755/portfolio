"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { LockIcon } from "lucide-react";
import { projects } from "@/utils/config";

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

export default function Projects() {
  const [filter, setFilter] = useState("");
  const cardsRef = useRef<any>([]);

  // Filter projects based on the input
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(filter.toLowerCase()) ||
      project?.technologies?.some((tech) =>
        tech?.toLowerCase().includes(filter.toLowerCase())
      )
  );

  useEffect(() => {
    cardsRef.current.forEach((card: any) => {
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
      className="space-y-8 md:space-y-12 px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="section-heading text-2xl md:text-3xl">My Projects</h1>

      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Filter projects by title or technology..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:max-w-md mx-auto"
        />
        <p className="text-center text-xs sm:text-sm font-bold text-gray-500 italic px-4">
          <span className="text-red-700">Note: </span>I have also developed
          dashboards, but due to confidentiality, I cannot share them publicly.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            ref={(el) => {
              if (el) cardsRef.current[index] = el as HTMLDivElement;
            }}
          >
            <Card className="h-full flex flex-col overflow-hidden card-hover transition-all">
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
                <Image
                  src={project.image || ""}
                  alt={project.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">Live Link</span>
                    </a>
                  </Button>
                  {project.githubUrl ? (
                    <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">GitHub</span>
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" disabled className="w-full sm:w-auto cursor-not-allowed">
                      <LockIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">Private</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
