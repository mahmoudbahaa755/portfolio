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
    id: 6,
    title: "To Do List",
    technologies: ["html", "css", "react", "firebase", "responsive"],
    image: "/images/toDoList.png",
    liveUrl: "https://to-do-list-react-nu-coral.vercel.app/",
    githubUrl: "https://github.com/mahmoudbahaa755/to-do-list--React-",
  },

  {
    id: 2,
    title: "Portfolio",
    technologies: ["html", "css", "responsive", "next", "react"],
    image: "/images/portofilo.png",
    liveUrl: "https://github.com/mahmoudbahaa755/portifolio",
    githubUrl: "https://portifolio-ten-tawny.vercel.app/",
  },
  {
    id: 8,
    title: "Restaurant Menu",
    technologies: ["html", "css", "react", "firebase", "responsive"],
    image: "/images/Restaurant.png",
    liveUrl:
      "https://restaurant-react-lip8hvqbn-mahmoud-bahaas-projects.vercel.app/",
    githubUrl: "https://github.com/mahmoudbahaa755/Restaurant-react",
  },

  {
    id: 3,
    title: "Italino Restaurant",
    technologies: ["html", "css", "js", "responsive"],
    image: "/images/restrount.png",
    liveUrl:
      "https://restaurant-web-site-pg2k6qy0e-mahmoud-bahaas-projects.vercel.app/",
    githubUrl: "https://github.com/mahmoudbahaa755/restaurant-web-site",
  },
  {
    id: 9,
    title: "Form Page",
    technologies: ["html", "css", "react", "mui", "responsive"],
    image: "/images/formPage.png",
    liveUrl: "https://form-three-snowy.vercel.app/",
    githubUrl: "https://github.com/mahmoudbahaa755/Form",
  },
  {
    id: 4,
    title: "Shopping List",
    technologies: ["html", "css", "react", "responsive"],
    image: "/images/shopinglist.png",
    liveUrl:
      "https://react-shopping-list-9kn0j19qk-mahmoud-bahaas-projects.vercel.app/",
    githubUrl: "https://github.com/mahmoudbahaa755/react-shopping-list",
  },
  {
    id: 1,
    title: "Loan Template",
    technologies: ["html", "css", "responsive"],
    image: "/images/loanTemplate.png",
    liveUrl: "https:/mahmoudbahaa12.github.io/Loan-Template/",
    githubUrl: "https://github.com/mahmoudbahaa12/Loan-Template",
  },
  {
    id: 5,
    title: "Minx Template",
    technologies: ["html", "css", "bootstrap", "responsive"],
    image: "/images/minx.png",
    liveUrl: "https://template-3-eight.vercel.app/",
    githubUrl: "https://github.com/mahmoudbahaa755/Minx-Template",
  },

  {
    id: 7,
    title: "Web Scrapping",
    technologies: ["python", "html"],
    image: "/images/wuzzef.png",
    liveUrl: "https://github.com/mahmoudbahaa755/web-scrapping-wuzzef-",
    githubUrl: "https://github.com/mahmoudbahaa755/web-scrapping-wuzzef-",
  },
];

export const skills = {
  html: "./icons/html.png",
  css: "./icons/css.png",
  js: "./icons/js.png",
  react: "./icons/react.png",
  next: "/icons/nextjs.svg",
  responsive: "./icons/responsive.png",
  firebase: "./icons/firebase.svg",
  bootstrap: "./icons/bootstrap.svg",
  python: "./icons/python.png",
  mui: "./icons/material-ui.svg",
};
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
                src={project.image || ""}
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
