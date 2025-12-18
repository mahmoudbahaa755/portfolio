"use client";

import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/utils/config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const educations = [
  {
    degree: "DEBI Scholarship in Data Science and Cloud",
    institution: "Tech University",
    year: "2013 - 2024",
    description: "Specialized in Cloud Computing and Data Science",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Tanta University",
    year: "2019 - 2023",
    description: "Focus on Software Development and Web Programming",
  },
  {
    degree: "ITI web development (150 hours)",
    institution: "CodeCamp Academy",
    year: "2020",
    description: "Intensive 4-week program on modern frontend technologies",
  },
];

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  skills?: string[];
  icon: any;
  index: number;
}

const TimelineItem = ({
  icon: Icon,
  title,
  subtitle,
  period,
  description,
  skills,
  index,
}: TimelineItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const icon = iconRef.current;
    const content = contentRef.current;

    if (!container || !icon || !content) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      container,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
      .fromTo(
        icon,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      )
      .fromTo(
        content,
        { opacity: 0, x: index % 2 === 0 ? 30 : -30 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, [index]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8 opacity-0"
    >
      {/* Content - Swaps order based on index */}
      <div
        className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:order-1" : "md:text-left md:order-3"
          }`}
      >
        <div ref={contentRef} className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
          <div className={`flex flex-col gap-1 mt-1 text-muted-foreground ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">{subtitle}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{period}</span>
            </div>
          </div>

          <p className="text-muted-foreground mt-3 leading-relaxed">{description}</p>

          {skills && skills.length > 0 && (
            <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
              {skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="secondary"
                  className="text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Icon - Always in middle on desktop */}
      <div ref={iconRef} className="relative z-10 md:order-2">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] dark:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
        </div>
      </div>

      {/* Spacer for the other side to balance flex */}
      <div
        className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? "md:order-3" : "md:order-1"
          }`}
      />
    </div>
  );
};

const TimelineSection = ({ title, description, items, icon: SectionIcon }: { title: string, description: string, items: any[], icon: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <div className="space-y-10 relative overflow-hidden">
      <div className="space-y-3 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <SectionIcon className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto md:mx-0">
          {description}
        </p>
      </div>

      <div ref={containerRef} className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block">
          <div ref={lineRef} className="w-full bg-primary origin-top" />
        </div>

        {items.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <div className="space-y-24 py-12 max-w-6xl mx-auto px-4">
      <TimelineSection
        title="Professional Experience"
        description="Roles and achievements throughout my career journey"
        icon={Briefcase}
        items={experiences.map(exp => ({
          title: exp.title,
          subtitle: exp.company,
          period: exp.period,
          description: exp.description,
          skills: exp.skills,
          icon: Briefcase
        }))}
      />

      <TimelineSection
        title="Education"
        description="Academic qualifications and professional certifications"
        icon={GraduationCap}
        items={educations.map(edu => ({
          title: edu.degree,
          subtitle: edu.institution,
          period: edu.year,
          description: edu.description,
          skills: [],
          icon: GraduationCap
        }))}
      />
    </div>
  );
}
