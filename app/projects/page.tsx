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
import { ChevronDown, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { LockIcon } from "lucide-react";
import { projects } from "@/utils/config";
import ProjectCard from "@/components/projects/ProjectCard";
import FilterBar from "@/components/projects/FilterBar";

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
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const cardsRef = useRef<any>([]);

  // gather unique technologies from projects (filter out undefined)
  const allTechs = Array.from(
    new Set(
      projects
        .flatMap((p) => p.technologies ?? [])
        .filter((t): t is string => typeof t === "string" && t.length > 0)
    )
  ).sort((a, b) => a.localeCompare(b));

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  // Filter projects based on the input and selected technologies
  const filteredProjects = projects.filter((project) => {
    const matchesText =
      project.title.toLowerCase().includes(filter.toLowerCase()) ||
      (project.technologies ?? []).some(
        (tech) => typeof tech === "string" && tech.toLowerCase().includes(filter.toLowerCase())
      );

    const matchesTech =
      selectedTechs.length === 0 ||
      (project.technologies ?? []).some((t) => typeof t === "string" && selectedTechs.includes(t));

    return matchesText && matchesTech;
  });

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
      // Only apply hover animations on non-touch / larger screens
      const applyHover = () => {
        if (window.matchMedia && window.matchMedia("(min-width: 640px)").matches) {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
          });
        }
      };

      applyHover();
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

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        allTechs={allTechs}
        selectedTechs={selectedTechs}
        toggleTech={toggleTech}
        clearTechs={() => setSelectedTechs([])}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      <p className="text-center text-xs sm:text-sm font-bold text-gray-500 italic px-4">
        <span className="text-red-700">Note: </span>I have also developed
        dashboards, but due to confidentiality, I cannot share them publicly.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No projects match your filters.</p>
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              ref={(el) => {
                if (el) cardsRef.current[index] = el as HTMLDivElement;
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}
