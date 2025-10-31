"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 px-4 md:px-0"
    >
      <motion.h1 variants={itemVariants} className="text-2xl md:text-3xl font-bold">
        About Me
      </motion.h1>
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex flex-col items-center pt-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
                <Image
                  width={150}
                  height={150}
                  src="/fromal.jpg"
                  alt="Profile picture"
                  className="object-cover w-full h-full"
                />
              </div>
            </Avatar>
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardTitle className="mt-4 text-xl sm:text-2xl">Mahmoud Bahaa</CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent className="px-6 sm:px-8 pb-8">
          <motion.p variants={itemVariants} className="text-center mb-6 text-sm sm:text-base">
            Passionate Frontend Developer with 2+ years of experience in
            creating responsive and user-friendly web applications.
          </motion.p>
          <motion.div variants={containerVariants} className="space-y-6">
            {[
              {
                title: "My Journey",
                content:
                  "I started my coding journey 3 years ago, diving deep into web development. From my first 'Hello World' to building complex applications, every step has been a learning experience.",
              },
              {
                title: "My Approach",
                content:
                  "I believe in clean, maintainable code and user-centric design. My approach combines cutting-edge technologies with tried-and-true development practices to create efficient and scalable solutions.",
              },
            ].map((section, index) => (
              <motion.section key={index} variants={itemVariants}>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">{section.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{section.content}</p>
              </motion.section>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
