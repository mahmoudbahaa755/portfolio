"use client";

import { useParams } from "next/navigation";
import { projects } from "@/utils/config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, Calendar, Users, Building2, Code2, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter(
      (p) =>
        p.id !== project.id &&
        p.technologies.some((t) => project.primaryTech.includes(t))
    )
    .slice(0, 3);

  return (
    <motion.div
      className="space-y-12 py-8 px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Back Button */}
      <motion.div variants={itemVariants}>
        <Button asChild variant="outline" size="sm">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {/* Image */}
        <motion.div variants={itemVariants} className="relative">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Info */}
        <motion.div variants={containerVariants} className="space-y-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.summary}</p>
          </motion.div>

          {/* Meta Info */}
          <motion.div variants={itemVariants} className="space-y-3">
            {project.customer && (
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Customer: {project.customer}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Year: {project.year}</span>
              </div>
            )}
            {project.roles.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <Users className="h-5 w-5 text-primary" />
                <div className="flex gap-2 flex-wrap">
                  {project.roles.map((role, idx) => (
                    <Badge key={idx} variant="secondary">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {project.primaryTech && (
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Primary Tech: {project.primaryTech}</span>
              </div>
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap pt-4">
            {project.liveUrl && (
              <Button asChild size="lg" className="gap-2">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  View Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View Source Code
                </a>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Technologies Section */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              Technologies Used
            </CardTitle>
            <CardDescription>
              Built with modern technologies and best practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="default" className="text-sm py-2 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Project Overview - Dynamic Content */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">What Was Built</h3>
              <p className="text-muted-foreground">
                <strong>{project.title}</strong> is a{" "}
                <strong>{project.primaryTech}</strong> project built for{" "}
                <strong>{project.customer || "amazing clients"}</strong> in{" "}
                <strong>{project.year}</strong>. This application was created with expertise in{" "}
                {project.technologies.join(", ")} and demonstrates professional development
                practices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Key Highlights</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Built with {project.primaryTech} for optimal performance</li>
                {project.roles.length > 0 && <li>Roles: {project.roles.join(", ")}</li>}
                <li>
                  Leverages {project.technologies.slice(0, 2).join(" and ")} technologies
                </li>
                <li>Professional, scalable architecture</li>
                <li>
                  {project.githubUrl ? "Open source" : "Production-ready"} project
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Related Projects</CardTitle>
              <CardDescription>
                Other projects using similar technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedProjects.map((relatedProject) => (
                  <motion.div
                    key={relatedProject.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer"
                  >
                    <Link href={`/projects/${relatedProject.id}`}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <div className="relative w-full h-[200px]">
                          <Image
                            src={relatedProject.image}
                            alt={relatedProject.title}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">{relatedProject.title}</CardTitle>
                          <CardDescription className="line-clamp-2">
                            {relatedProject.summary}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-8 text-center space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold">Interested in Working Together?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects and opportunities. Let&apos;s create
          something amazing together!
        </p>
        <div className="flex gap-4 justify-center flex-wrap pt-4">
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">Browse More Projects</Link>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
