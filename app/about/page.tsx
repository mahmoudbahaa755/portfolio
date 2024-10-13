"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold">About Me</h1>
      <Card>
        <CardHeader className="flex flex-col items-center">
          <Avatar className="h-32 w-32">
            <AvatarImage src="https://source.unsplash.com/random/200x200?face" alt="Profile picture" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4">John Doe</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6">
            Passionate Frontend Developer with 5+ years of experience in creating responsive and user-friendly web applications.
          </p>
          <div className="space-y-4">
            <section>
              <h3 className="font-semibold mb-2">My Journey</h3>
              <p>
                I started my journey in web development during college, where I discovered my passion for creating beautiful and functional user interfaces. Since then, I've worked on various projects, from small business websites to large-scale enterprise applications.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">My Approach</h3>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest frontend technologies. My goal is to create web experiences that are not only visually appealing but also performant and accessible to all users.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">Beyond Coding</h3>
              <p>
                When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes in the kitchen, or contributing to open-source projects. I'm always eager to learn and grow, both personally and professionally.
              </p>
            </section>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}