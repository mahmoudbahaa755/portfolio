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

const technologies = [
  {
    category: "Frontend Frameworks",
    items: ["React", "Angular", "NextJS"],
  },
  {
    category: "CSS Frameworks",
    items: [
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
      "MUI",
      "AntDesign",
      "Styled Components",
    ],
  },
  {
    category: "State Management",
    items: ["Redux", "Redux Toolkit", "Context API"],
  },
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "Jenkins", "AWS", "Husky", "Vercel"],
  },
];

export default function Technologies() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Technologies & Programming Languages
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{tech.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
