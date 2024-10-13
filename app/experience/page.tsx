"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    description: "Led the frontend development team in creating responsive and accessible web applications using React and Next.js.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions Co.",
    period: "2018 - 2020",
    description: "Developed and maintained client websites, focusing on performance optimization and cross-browser compatibility.",
    skills: ["JavaScript", "Vue.js", "SASS", "Webpack"]
  },
  {
    title: "Junior Web Developer",
    company: "Digital Creations Ltd.",
    period: "2016 - 2018",
    description: "Assisted in building responsive websites and implemented UI/UX designs using modern frontend technologies.",
    skills: ["HTML5", "CSS3", "jQuery", "Bootstrap"]
  }
]

const educations = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Tech University",
    year: "2016",
    description: "Specialized in Web Technologies and User Interface Design",
    achievements: ["Thesis on Progressive Web Apps", "Dean's List"]
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "State College of Technology",
    year: "2014",
    description: "Focus on Software Development and Web Programming",
    achievements: ["Graduated with Honors", "Web Development Club President"]
  },
  {
    degree: "Frontend Development Bootcamp",
    institution: "CodeCamp Academy",
    year: "2015",
    description: "Intensive 12-week program on modern frontend technologies",
    achievements: ["Best Final Project Award"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function Experience() {
  const experienceRef = useRef([]);
  const educationRef = useRef([]);

  useEffect(() => {
    const animateCards = (cards) => {
      cards.forEach((card, index) => {
        gsap.fromTo(card,
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
              toggleActions: "play none none reverse"
            }
          }
        );

        // Interactive hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, boxShadow: "none", duration: 0.3 });
        });
      });
    };

    animateCards(experienceRef.current);
    animateCards(educationRef.current);
  }, []);

  return (
    <motion.div 
      className="space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section>
        <h1 className="section-heading flex items-center">
          <Briefcase className="mr-2" />
          Professional Experience
        </h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              ref={el => experienceRef.current[index] = el}
            >
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>{exp.company} | {exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="section-heading flex items-center">
          <GraduationCap className="mr-2" />
          Education
        </h1>
        <div className="space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              ref={el => educationRef.current[index] = el}
            >
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription>{edu.institution} | {edu.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{edu.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Achievements:</h4>
                    <ul className="list-disc list-inside">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}