"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
    service: {
        title: string;
        description: string;
        icon: LucideIcon;
        features: string[];
        technologies: string[];
        timeline: string;
        pricing: string;
    };
    ref: (element: HTMLDivElement) => void;
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function ServiceCard({
    service,
    ref,
    isActive,
    onMouseEnter,
    onMouseLeave
}: ServiceCardProps) {
    const { title, description, icon: Icon, features, technologies, timeline, pricing } = service;

    return (
        <Card
            ref={ref}
            className={`relative overflow-hidden transition-all duration-300 card-hover ${isActive ? 'z-10' : 'z-0'
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16" />
            <CardHeader>
                <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
                <CardDescription className="text-sm sm:text-base">
                    {description}
                </CardDescription>

                <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-sm sm:text-base">Key Features:</h4>
                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-2">
                    <h4 className="font-semibold text-sm sm:text-base">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs sm:text-sm">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}