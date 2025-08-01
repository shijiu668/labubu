'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function StackingCards({ features }) {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    return (
        <section ref={containerRef} className="relative">
            {features.map((feature, index) => {
                const start = index / features.length
                const end = (index + 1) / features.length

                return (
                    <Card
                        key={feature.id}
                        feature={feature}
                        progress={scrollYProgress}
                        range={[start, end]}
                        index={index}
                        total={features.length}
                    />
                )
            })}
        </section>
    )
}

function Card({ feature, progress, range, index, total }) {
    const scale = useTransform(progress, range, [1, 0.95])
    const opacity = useTransform(progress, range, [1, 1])
    const y = useTransform(progress, range, [0, -50])

    return (
        <motion.div
            style={{ scale, opacity, y }}
            className="stacking-card h-screen flex items-center justify-center"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6`}>
                            {feature.icon}
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                {feature.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                                {feature.description}
                            </p>
                        </div>

                        <Link
                            href={feature.link}
                            className="btn-primary inline-flex items-center"
                        >
                            Try for Free
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>

                        {/* Feature Benefits */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="space-y-2">
                                <div className="text-2xl font-bold text-pink-500">Fast</div>
                                <div className="text-sm text-gray-600">Generate in seconds</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-2xl font-bold text-purple-500">Quality</div>
                                <div className="text-sm text-gray-600">Professional results</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-2xl font-bold text-blue-500">Easy</div>
                                <div className="text-sm text-gray-600">No skills required</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-2xl font-bold text-green-500">Free</div>
                                <div className="text-sm text-gray-600">Start creating now</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className={`bg-gradient-to-br ${feature.gradient} opacity-20 rounded-2xl aspect-[4/3] animate-pulse`}></div>
                                <div className={`bg-gradient-to-br ${feature.gradient} opacity-30 rounded-2xl aspect-square`}></div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className={`bg-gradient-to-br ${feature.gradient} opacity-25 rounded-2xl aspect-square`}></div>
                                <div className={`bg-gradient-to-br ${feature.gradient} opacity-35 rounded-2xl aspect-[4/3] animate-pulse`} style={{ animationDelay: '1s' }}></div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-200 rounded-full opacity-30"
                        />

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-40"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}