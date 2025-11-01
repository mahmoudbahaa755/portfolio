"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/utils/config";

gsap.registerPlugin(ScrollTrigger);



const educations = [
  {
    degree: "DEBI Scholarship in Data Science and Cloud",
    institution: "Tech University",
    year: "2013 - 2024",
    description: "Specialized in Cloud Computing and Data Science",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Tanta University",
    year: "2019 - 2023",
    description: "Focus on Software Development and Web Programming",
  },
  {
    degree: "ITI web development (150 hours)",
    institution: "CodeCamp Academy",
    year: "2020",
    description: "Intensive 4-week program on modern frontend technologies",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Experience() {
  const experienceRef = useRef<any>([]);
  const educationRef = useRef<any>([]);

  useEffect(() => {
    const animateCards = (cards: any) => {
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=50",
              toggleActions: "play none none none",
            },
          }
        );

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.02,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            duration: 0.2,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", duration: 0.2 });
        });
      });
    };

    animateCards(experienceRef.current);
    animateCards(educationRef.current);
  }, []);

  return (
    <motion.div
      className="space-y-16 px-4 md:px-0 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Professional Experience Section */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            Professional Experience
          </h1>
          <p className="text-muted-foreground">
            My journey through various roles and companies
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {experiences?.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              ref={(el) => {
                if (el) experienceRef.current[index] = el;
              }}
            >
              <Card className="transition-all duration-200 hover:shadow-md border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  {exp?.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Education
          </h1>
          <p className="text-muted-foreground">
            Academic qualifications and certifications
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              ref={(el) => {
                if (el) educationRef.current[index] = el;
              }}
            >
              <Card className="transition-all duration-200 hover:shadow-md border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {edu.institution} • {edu.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
