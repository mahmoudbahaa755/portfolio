"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { LockIcon } from "lucide-react";

type Props = {
  project: any;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card className="h-full flex flex-col overflow-hidden card-hover transition-all">
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
        <Image
          src={project.image || ""}
          alt={project.title}
          width={800}
          height={800}
          className="w-full h-full object-fit"
        />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {(project.technologies ?? []).map((tech: string, techIndex: number) => (
            <Badge key={techIndex} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">Live Link</span>
            </a>
          </Button>
          {project.githubUrl ? (
            <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">GitHub</span>
              </a>
            </Button>
          ) : (
            <Button variant="outline" size="sm" disabled className="w-full sm:w-auto cursor-not-allowed">
              <LockIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">Private</span>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
