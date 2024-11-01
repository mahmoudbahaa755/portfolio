"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from 'lucide-react'

interface BenefitCardProps {
    benefit: {
        icon: LucideIcon;
        title: string;
        description: string;
    };
}

export default function BenefitCard({ benefit }: BenefitCardProps) {
    const { icon: Icon, title, description } = benefit;

    return (
        <Card className="benefit-item">
            <CardHeader>
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}