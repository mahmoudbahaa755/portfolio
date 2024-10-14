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
      className="space-y-8"
    >
      <motion.h1 variants={itemVariants} className="text-3xl font-bold">
        About Me
      </motion.h1>
      <Card>
        <CardHeader className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Avatar className="h-32 w-32">
              {/* <AvatarImage src="@/public/fromal.jpg" alt="Profile picture" /> */}
              <div className="w-32 h-32">
                <Image
                  width={150}
                  height={150}
                  src="/fromal.jpg"
                  alt="Profile picture"
                />
              </div>
            </Avatar>
            {/* <AvatarFallback>MB</AvatarFallback> */}
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardTitle className="mt-4">Mahmoud Bahaa</CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.p variants={itemVariants} className="text-center mb-6">
            Passionate Frontend Developer with 2+ years of experience in
            creating responsive and user-friendly web applications.
          </motion.p>
          <motion.div variants={containerVariants} className="space-y-4">
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
                <h3 className="font-semibold mb-2">{section.title}</h3>
                <p>{section.content}</p>
              </motion.section>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
