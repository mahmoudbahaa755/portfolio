"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

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

export default function Education() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Education</h1>
      {educations.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
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
  )
}