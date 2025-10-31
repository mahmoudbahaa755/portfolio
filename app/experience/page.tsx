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
    year: "2016",
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

export default function Experience() {
  const experienceRef = useRef<any>([]);
  const educationRef = useRef<any>([]);

  useEffect(() => {
    const animateCards = (cards: any) => {
      cards.forEach((card: any, index: number) => {
        gsap.fromTo(
          card,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
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
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.03,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            duration: 0.3,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, boxShadow: "none", duration: 0.3 });
        });
      });
    };

    animateCards(experienceRef.current);
    animateCards(educationRef.current);
  }, []);

  return (
    <motion.div
      className="space-y-12 md:space-y-16 px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section>
        <h1 className="section-heading flex items-center text-2xl md:text-3xl flex-wrap">
          <Briefcase className="mr-2 h-6 w-6 md:h-8 md:w-8" />
          Professional Experience
        </h1>
        <div className="space-y-6 md:space-y-8">
          {experiences?.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              ref={(el) => {
                if (el) experienceRef.current[index] = el;
              }}
            >
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm sm:text-base">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp?.skills?.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="section-heading flex items-center text-2xl md:text-3xl flex-wrap">
          <GraduationCap className="mr-2 h-6 w-6 md:h-8 md:w-8" />
          Education
        </h1>
        <div className="space-y-6 md:space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              ref={(el) => {
                if (el) educationRef.current[index] = el;
              }}
            >
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-sm">
                    {edu.institution} | {edu.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm sm:text-base">{edu.description}</p>
                  {/* {edu?.achievements && (
                    <div className="space-y-2">
                      <h4 className="font-semibold">Achievements:</h4>
                      <ul className="list-disc list-inside">
                        {edu?.achievements.map(
                          (achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )} */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
