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
            className={`relative overflow-hidden transition-all duration-300 ${isActive ? 'z-10' : 'z-0'
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <CardHeader>
                <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <CardDescription className="text-base">
                    {description}
                </CardDescription>

                <div className="space-y-4">
                    <h4 className="font-semibold">Key Features:</h4>
                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-2">
                    <h4 className="font-semibold">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* <div className="flex justify-between items-center pt-4 border-t"> */}
                {/* <div className="text-sm"> */}
                {/* <span className="font-semibold">Timeline:</span> {timeline} */}
                {/* </div> */}
                {/* <div className="text-sm"> */}
                {/* <span className="font-semibold">Pricing:</span> {pricing} */}
                {/* </div> */}
                {/* </div> */}
            </CardContent>
        </Card>
    )
}