"use client"

import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

const skills = [
  { name: "HTML5/CSS3", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "GraphQL", level: 65 },
  { name: "UI/UX Design", level: 60 },
]

export default function Skills() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="w-full" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}