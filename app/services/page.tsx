"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Bot, Code, LineChart, Terminal, Sparkles, Clock, Shield } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ServiceCard from '@/components/services/ServiceCard'
import BenefitCard from '@/components/services/BenefitCard'
import CallToAction from '@/components/services/CallToAction'

// gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        title: "Automation & Web Scraping Scripts",
        description: "Streamline your workflows with custom automation solutions and efficient data extraction scripts.",
        icon: Terminal,
        features: [
            "Custom automation workflows",
            "Data extraction",
            "Task scheduling and monitoring",
            "Integration with existing systems"
        ],
        technologies: ["Python", "Node.js", "BeautifulSoup", "Selenium"],
        timeline: "2-4 weeks",
        pricing: "Custom quote based on requirements"
    },
    {
        title: "Custom Website Development",
        description: "Create stunning, responsive websites tailored to your unique needs and brand identity.",
        icon: Code,
        features: [
            "Responsive design",
            "Performance optimization",
            "SEO best practices",
            "Modern tech stack"
        ],
        technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
        timeline: "4-8 weeks",
        pricing: "Starting from $5,000"
    },
    {
        title: "Interactive Dashboards",
        description: "Transform your data into actionable insights with beautiful, real-time dashboards.",
        icon: LineChart,
        features: [
            "Real-time data visualization",
            "Custom metrics and KPIs",
            "Interactive filters",
            "Cross-platform compatibility"
        ],
        technologies: ["TypeScript", "React", "NodeJS", "NextJS"],
        timeline: "3-6 weeks",
        pricing: "Starting from $4,000"
    },
    {
        title: "AI Model Development",
        description: "Harness the power of artificial intelligence with custom ML models and solutions.",
        icon: Bot,
        features: [
            "Custom model training",
            "Natural language processing",
            "Computer vision solutions",
            "AI integration services"
        ],
        technologies: ["TensorFlow", "Python", "OpenAI API", "LLM", "Hugging Face"],
        timeline: "6-12 weeks",
        pricing: "Custom quote based on complexity"
    }
]

const benefits = [
    {
        icon: Sparkles,
        title: "Quality Assurance",
        description: "Rigorous testing and quality checks throughout development"
    },
    {
        icon: Clock,
        title: "Timely Delivery",
        description: "Deliver in time"
    },
    {
        icon: Shield,
        title: "Support & Maintenance",
        description: "Ongoing support and updates after project completion"
    }
]

export default function Services() {
    const [activeCard, setActiveCard] = useState<number | null>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         cardsRef.current.forEach((card, index) => {
    //             if (card) {
    //                 gsap.fromTo(card,
    //                     {
    //                         y: 100,
    //                         opacity: 0,
    //                         rotateX: -15
    //                     },
    //                     {
    //                         y: 0,
    //                         opacity: 1,
    //                         rotateX: 0,
    //                         duration: 1,
    //                         ease: "power3.out",
    //                         scrollTrigger: {
    //                             trigger: card,
    //                             start: "top bottom-=100",
    //                             end: "bottom top",
    //                             toggleActions: "play none none reverse"
    //                         }
    //                     }
    //                 )

    //                 card.addEventListener('mousemove', (e) => {
    //                     if (activeCard === index) {
    //                         const rect = card.getBoundingClientRect()
    //                         const x = e.clientX - rect.left
    //                         const y = e.clientY - rect.top
    //                         const centerX = rect.width / 2
    //                         const centerY = rect.height / 2
    //                         const rotateX = (y - centerY) / 20
    //                         const rotateY = (centerX - x) / 20

    //                         gsap.to(card, {
    //                             rotateX,
    //                             rotateY,
    //                             scale: 1.05,
    //                             boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    //                             duration: 0.5
    //                         })
    //                     }
    //                 })

    //                 card.addEventListener('mouseleave', () => {
    //                     gsap.to(card, {
    //                         rotateX: 0,
    //                         rotateY: 0,
    //                         scale: 1,
    //                         boxShadow: "none",
    //                         duration: 0.5
    //                     })
    //                 })
    //             }
    //         })

    //         gsap.from(".benefit-item", {
    //             opacity: 0,
    //             y: 50,
    //             stagger: 0.2,
    //             duration: 0.8,
    //             scrollTrigger: {
    //                 trigger: ".benefits-section",
    //                 start: "top center+=100",
    //                 toggleActions: "play none none reverse"
    //             }
    //         })
    //     })

    //     return () => ctx.revert()
    // }, [activeCard])

    return (
        <div
            ref={containerRef}
            className="space-y-12 md:space-y-16 px-4 md:px-0"
        >
            <div className="text-center space-y-4">
                <h1 className="section-heading text-2xl md:text-3xl">My Services</h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                    Transforming ideas into reality through code and creativity
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        ref={el => cardsRef.current[index] = el}
                        service={service}
                        isActive={activeCard === index}
                        onMouseEnter={() => setActiveCard(index)}
                        onMouseLeave={() => setActiveCard(null)}
                    />
                ))}
            </div>

            <section className="benefits-section space-y-6 md:space-y-8">
                <h2 className="text-xl md:text-2xl font-bold text-center">Why Choose My Services?</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} benefit={benefit} />
                    ))}
                </div>
            </section>
            <CallToAction />
        </div>
    )
}