"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { technologies } from "@/utils/config";
import { motion } from "framer-motion";
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaDocker,
  FaDog,
  FaGitAlt,
  FaJava,
  FaReact,
  FaSass
} from "react-icons/fa";
import {
  SiAntdesign,
  SiCplusplus,
  SiJavascript,
  SiJenkins,
  SiMui,
  SiNextdotjs,
  SiPython,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from "react-icons/si";


const getIcon = (name: any) => {
  const icons = {
    React: <FaReact />,
    Angular: <FaAngular />,
    NextJS: <SiNextdotjs />,
    "Tailwind CSS": <SiTailwindcss />,
    Bootstrap: <FaBootstrap />,
    Sass: <FaSass />,
    MUI: <SiMui />,
    AntDesign: <SiAntdesign />,
    "Styled Components": <SiStyledcomponents />,
    Redux: <SiRedux />,
    Husky: <FaDog />,
    JavaScript: <SiJavascript />,
    TypeScript: <SiTypescript />,
    Python: <SiPython />,
    Java: <FaJava />,
    "C++": <SiCplusplus />,
    Git: <FaGitAlt />,
    Docker: <FaDocker />,
    Jenkins: <SiJenkins />,
    AWS: <FaAws />,
    Vercel: <SiVercel />,
  };
  return icons[name as keyof typeof icons] || null;
};

export default function Technologies() {
  return (
    <div className="space-y-8 px-4 md:px-0">
      <h1 className="text-2xl md:text-3xl font-bold">
        Technologies & Programming Languages
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="transition-all"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">{tech.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <Badge
                      key={itemIndex}
                      variant="secondary"
                      className="flex items-center gap-1 text-xs sm:text-sm"
                    >
                      <span className="text-base">{getIcon(item)}</span>
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
