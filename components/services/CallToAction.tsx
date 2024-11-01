"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-6"
        >
            <p className="text-xl font-medium text-primary">
                Let&apos;s explore what else we can create together!
            </p>
            <div className="space-x-4">
                <Button asChild size="lg">
                    <a href="/contact">Start a Project</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <a href="/projects">View Past Work</a>
                </Button>
            </div>
        </motion.div>
    )
}