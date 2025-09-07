'use client'

import { motion } from 'framer-motion'
import {
    Gamepad2, Trophy, Target, Zap, Clock, Users,
    Star, Award, MousePointer, Sparkles, Heart,
    TrendingUp, Gift, CheckCircle, Volume2, VolumeX,
    RotateCcw, Maximize2
} from 'lucide-react'

export default function LabubuClickerGame() {
    const gameFeatures = [
        {
            icon: <MousePointer className="w-8 h-8" />,
            title: "Simple Click Gameplay",
            description: "Easy to learn, hard to master clicking mechanics that anyone can enjoy"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Progressive Upgrades",
            description: "Unlock powerful upgrades and multipliers to boost your clicking efficiency"
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Achievement System",
            description: "Complete challenges and earn achievements to prove your Labubu mastery"
        },
        {
            icon: <Gift className="w-8 h-8" />,
            title: "Collectible Characters",
            description: "Discover and collect different Labubu characters with unique abilities"
        }
    ]

    const gameStats = [
        { number: "10M+", label: "Clicks Generated" },
        { number: "50+", label: "Unique Upgrades" },
        { number: "25+", label: "Achievements" },
        { number: "100%", label: "Free to Play" }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section with Game */}
            <section className="relative px-4 sm:px-6 lg:px-8 gradient-bg py-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium mb-6">
                            <Gamepad2 className="w-4 h-4 mr-2" />
                            Free Online Game
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <span className="text-gradient">Labubu Clicker</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Embark on the most addictive clicking journey with your favorite Labubu characters.
                            Click, collect, upgrade, and become the ultimate Labubu master in this engaging idle game.
                        </p>

                        <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-12">
                            <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                <span>100% Free</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                <span>No Download Required</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                <span>Play Instantly</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Game Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="glass-effect rounded-2xl p-8 shadow-2xl">
                            <div className="space-y-4">
                                <div className="relative">
                                    <iframe
                                        title="Labubu Clicker"
                                        width="100%"
                                        height="600"
                                        src="https://game.azgame.io/labubu-clicker/"
                                        frameBorder="0"
                                        border="0"
                                        scrolling="no"
                                        allowFullScreen
                                        className="rounded-xl shadow-lg"
                                        id="labubu-game"
                                    />

                                    {/* Game Loading Overlay (optional) */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center opacity-0 pointer-events-none">
                                        <div className="text-center">
                                            <div className="loading-spinner mx-auto mb-4"></div>
                                            <p className="text-gray-600">Loading Labubu Clicker...</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Game Control Buttons */}
                                <div className="flex justify-center space-x-4">
                                    <button
                                        onClick={() => {
                                            const iframe = document.getElementById('labubu-game');
                                            if (iframe) {
                                                iframe.src = iframe.src;
                                            }
                                        }}
                                        className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-gray-50 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:scale-105"
                                        title="Reload Game"
                                    >
                                        <RotateCcw className="w-4 h-4 text-gray-600" />
                                        <span className="text-sm font-medium text-gray-700">Reload</span>
                                    </button>

                                    <button
                                        onClick={() => {
                                            const iframe = document.getElementById('labubu-game');
                                            if (iframe.requestFullscreen) {
                                                iframe.requestFullscreen();
                                            } else if (iframe.webkitRequestFullscreen) {
                                                iframe.webkitRequestFullscreen();
                                            } else if (iframe.msRequestFullscreen) {
                                                iframe.msRequestFullscreen();
                                            }
                                        }}
                                        className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-gray-50 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:scale-105"
                                        title="Fullscreen"
                                    >
                                        <Maximize2 className="w-4 h-4 text-gray-600" />
                                        <span className="text-sm font-medium text-gray-700">Fullscreen</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Game Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {gameStats.map((stat, index) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Game Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Why Play Labubu Clicker?
                        </motion.h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover what makes this the most engaging clicker game for Labubu fans
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {gameFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="seo-card text-center p-6 card-hover"
                            >
                                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-500">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
                <div className="max-w-7xl mx-auto">
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-16"
                    >
                        {/* Section Header */}
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Master the Art of Labubu Clicker
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Welcome to the ultimate <strong>Labubu clicker</strong> experience! This addictive idle clicker will have you clicking for hours as you build your Labubu empire and unlock incredible rewards.
                            </p>
                        </div>

                        {/* Main Game Description */}
                        <div className="seo-card animate-pulse-glow p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                                    <Target className="w-6 h-6 text-pink-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">What is Labubu Clicker?</h3>
                            </div>
                            <p className="text-gray-700 mb-4">
                                <strong>Labubu clicker</strong> is an engaging incremental game where every click brings you closer to becoming the ultimate Labubu collector. Start with simple clicks to earn your first Labubu characters, then watch as your collection grows exponentially through strategic upgrades and multipliers.
                            </p>
                            <p className="text-gray-700">
                                This <strong>labubu clicker game</strong> combines the satisfaction of immediate progress with long-term strategic planning. Whether you're actively clicking or letting the game run idle, you'll constantly progress toward new achievements and unlock adorable Labubu characters.
                            </p>
                        </div>

                        {/* Gameplay Features */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="seo-gradient-card p-6">
                                <div className="flex items-center gap-4 mb-3">
                                    <Zap className="w-8 h-8 text-purple-600" />
                                    <h4 className="text-xl font-semibold text-purple-800">Addictive Clicker Mechanics</h4>
                                </div>
                                <p className="text-gray-700">
                                    Experience the most satisfying clicking mechanics in any <strong>labubu clicker</strong> game. Each click is responsive and rewarding, with visual and audio feedback that makes every interaction feel meaningful. The game perfectly balances active clicking with idle progression.
                                </p>
                            </div>

                            <div className="seo-gradient-card p-6">
                                <div className="flex items-center gap-4 mb-3">
                                    <Clock className="w-8 h-8 text-blue-600" />
                                    <h4 className="text-xl font-semibold text-blue-800">Idle Game Progression</h4>
                                </div>
                                <p className="text-gray-700">
                                    Even when you're not actively playing, your <strong>labubu clicker game</strong> continues to generate progress. This idle mechanic ensures that you're always moving forward, making it perfect for both casual players and dedicated clicker enthusiasts.
                                </p>
                            </div>
                        </div>

                        {/* Strategy Guide */}
                        <div className="text-center mt-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Advanced <span className="text-gradient">Labubu Clicker</span> Strategies
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Master these proven strategies to maximize your progress and become a <strong>labubu clicker</strong> champion.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="seo-card p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Upgrade Optimization</h3>
                                </div>
                                <p className="text-gray-700">
                                    In this <strong>labubu clicker game</strong>, timing your upgrades is crucial. Focus on clicking power upgrades early, then transition to auto-clickers and multipliers. The key is finding the right balance between immediate gains and long-term exponential growth.
                                </p>
                            </div>

                            <div className="seo-card p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Award className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Achievement Hunting</h3>
                                </div>
                                <p className="text-gray-700">
                                    Achievements in <strong>labubu clicker</strong> aren't just for show - they provide powerful permanent bonuses. Prioritize achievements that offer percentage-based improvements to your clicking efficiency or idle generation rates for maximum impact.
                                </p>
                            </div>

                            <div className="seo-card p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Character Collection</h3>
                                </div>
                                <p className="text-gray-700">
                                    Each Labubu character you unlock in this <strong>labubu clicker game</strong> provides unique bonuses and abilities. Some boost clicking power, others improve idle generation, and rare characters offer special event bonuses that can dramatically accelerate your progress.
                                </p>
                            </div>
                        </div>

                        {/* Why Play Section */}
                        <div className="text-center mt-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Choose Our Labubu Clicker Game?
                            </h2>
                        </div>

                        <div className="seo-card p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Ultimate Labubu Gaming Experience</h3>
                                    <p className="text-gray-700 mb-4">
                                        Our <strong>labubu clicker</strong> stands out from other clicker games with its beautiful graphics, smooth gameplay, and deep progression systems. We've carefully balanced the game to provide both immediate satisfaction and long-term engagement.
                                    </p>
                                    <p className="text-gray-700">
                                        Whether you're a casual player looking for a relaxing game or a dedicated clicker enthusiast seeking the next challenge, this <strong>labubu clicker game</strong> delivers an experience that grows with you.
                                    </p>
                                </div>
                                <div className="bg-pink-50 border-l-4 border-pink-400 p-6 rounded-r-lg">
                                    <h4 className="font-bold text-gray-800 mb-3">Game Highlights:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                                            <span>Smooth, responsive clicking mechanics</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                                            <span>Hundreds of upgrades and achievements</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                                            <span>Adorable Labubu character collection</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                                            <span>Perfect balance of active and idle gameplay</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Final CTA */}
                        <div className="seo-card text-center decorative-wave overflow-hidden p-8 md:p-12 mt-20">
                            <div className="absolute top-4 right-4 animate-float">
                                <div className="w-16 h-16 bg-yellow-100/50 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-8 h-8 text-yellow-400" />
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Labubu Clicking Adventure?</h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Join thousands of players already enjoying the most addictive <strong>labubu clicker game</strong> available. Start clicking, start collecting, and discover why this is the ultimate clicker experience for Labubu fans worldwide.
                            </p>
                            <button
                                onClick={() => window.scrollTo(0, 0)}
                                className="btn-primary animate-pulse-glow"
                            >
                                Play Labubu Clicker Now
                            </button>
                        </div>
                    </motion.section>
                </div>
            </section>
        </div>
    )
}