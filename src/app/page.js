'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Image as ImageIcon, Scissors, User } from 'lucide-react'
import StackingCards from '../components/StackingCards'

export default function HomePage() {
  const features = [
    {
      id: 'labubu-wallpaper',
      title: 'Labubu Wallpaper',
      description: 'Create stunning Labubu-themed wallpapers for your devices with AI-powered customization.',
      icon: <ImageIcon className="w-8 h-8" />,
      link: '/labubu-wallpaper',
      gradient: 'from-pink-400 to-rose-400',
      images: [ // +++ 添加这个属性 +++
        '/images/gallery/labubu-wallpaper-1.jpg',
        '/images/gallery/labubu-wallpaper-2.jpg',
        '/images/gallery/labubu-wallpaper-3.jpg',
        '/images/gallery/labubu-wallpaper-4.jpg'
      ]
    },
    {
      id: 'labubu-travels',
      title: 'Labubu Travels',
      description: 'Generate amazing travel scenes featuring your favorite Labubu characters in exotic locations.',
      icon: <Sparkles className="w-8 h-8" />,
      link: '/labubu-travels',
      gradient: 'from-purple-400 to-pink-400',
      images: [ // +++ 添加这个属性 +++
        '/images/gallery/labubu-travel-1.jpg',
        '/images/gallery/labubu-travel-2.jpg',
        '/images/gallery/labubu-travel-3.jpg',
        '/images/gallery/labubu-travel-4.jpg'
      ]
    },
    {
      id: 'remove-background',
      title: 'Remove Background',
      description: 'Effortlessly remove backgrounds from your Labubu images with precision AI technology.',
      icon: <Scissors className="w-8 h-8" />,
      link: '/remove-background',
      gradient: 'from-blue-400 to-purple-400',
      images: [ // +++ 添加这个属性 +++
        '/images/gallery/labubu-remove-bg-1.jpg',
        '/images/gallery/labubu-remove-bg-2.jpg',
        '/images/gallery/labubu-remove-bg-3.jpg', // 使用其他图片作为补充
        '/images/gallery/labubu-remove-bg-4.jpg'
      ]
    },
    {
      id: 'pose-swap',
      title: 'Pose Swap',
      description: 'Transform Labubu poses and expressions to create unique and personalized artwork.',
      icon: <User className="w-8 h-8" />,
      link: '/pose-swap',
      gradient: 'from-green-400 to-blue-400',
      images: [ // +++ 添加这个属性 +++
        '/images/gallery/labubu-pose-swap-1.jpg',
        '/images/gallery/labubu-pose-swap-2.jpg',
        '/images/gallery/labubu-pose-swap-3.jpg', // 使用其他图片作为补充
        '/images/gallery/labubu-pose-swap-4.jpg'
      ]
    }
  ]

  const galleryImages = [
    { src: '/images/gallery/labubu-travel-1.jpg', alt: 'Labubu traveling in a fantasy forest' },
    { src: '/images/gallery/labubu-wallpaper-1.jpg', alt: 'A cute Labubu-themed wallpaper' },
    { src: '/images/gallery/labubu-pose-swap-1.jpg', alt: 'Labubu with a swapped, cheerful pose' },
    { src: '/images/gallery/labubu-remove-bg-1.jpg', alt: 'Labubu with background removed' },
    { src: '/images/gallery/labubu-travel-2.jpg', alt: 'Labubu on a sunny beach' },
    { src: '/images/gallery/labubu-wallpaper-2.jpg', alt: 'A dark-themed, cool Labubu wallpaper' },
    { src: '/images/gallery/labubu-pose-swap-2.jpg', alt: 'A dancing Labubu pose' },
    { src: '/images/gallery/labubu-remove-bg-2.jpg', alt: 'A clean-cut Labubu image' },
    { src: '/images/gallery/labubu-travel-3.jpg', alt: 'Labubu in a futuristic city' },
    { src: '/images/gallery/labubu-wallpaper-3.jpg', alt: 'A minimalist Labubu wallpaper design' },
    { src: '/images/gallery/labubu-travel-4.jpg', alt: 'Labubu exploring ancient ruins' },
    { src: '/images/gallery/labubu-wallpaper-4.jpg', alt: 'A vibrant, colorful Labubu wallpaper' },
    { src: '/images/gallery/1.jpg', alt: 'A vibrant, colorful Labubu wallpaper' },
    { src: '/images/gallery/2.jpg', alt: 'A vibrant, colorful Labubu wallpaper' },
    { src: '/images/gallery/3.jpg', alt: 'A vibrant, colorful Labubu wallpaper' },
    { src: '/images/gallery/4.jpg', alt: 'A vibrant, colorful Labubu wallpaper' }
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  AI-Powered Creative Platform
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">AI-powered</span>
                  <br />
                  <span className="text-gray-900">Labubu creative</span>
                  <br />
                  <span className="text-gray-900">platform</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                  Transform your imagination into stunning Labubu artwork with our cutting-edge AI technology.
                  Create wallpapers, travel scenes, remove backgrounds, and swap poses effortlessly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/labubu-wallpaper" className="btn-primary inline-flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="btn-secondary">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 bg-pink-200 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-200 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-blue-200 rounded-full border-2 border-white"></div>
                  </div>
                  <span>10,000+ Happy Users</span>
                </div>
                <div>⭐ 4.9/5 Rating</div>
              </div>
            </motion.div>

            {/* Right Content - Showcase */}
            {/* Right Content - Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {/* +++ 左上角已被替换为真实图片 +++ */}
                  <Image
                    src="/images/gallery/5.jpg"
                    alt="Labubu Wallpaper Showcase"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-xl object-cover aspect-square animate-float"
                  />

                  {/* 左下角的占位符 (保持不变) */}
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 aspect-[4/3] flex items-center justify-center">
                    <div className="text-4xl">✨</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  {/* 右上角的占位符 (保持不变) */}
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 aspect-[4/3] flex items-center justify-center">
                    <div className="text-4xl">🌟</div>
                  </div>

                  {/* +++ 右下角已被替换为真实图片 +++ */}
                  <Image
                    src="/images/gallery/6.jpg"
                    alt="Labubu Travel Showcase"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-xl object-cover aspect-square animate-float"
                    style={{ animationDelay: '1s' }}
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-30 animate-bounce"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Stacking Cards */}
      <StackingCards features={features} />

      {/* Showcase Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Featured Creations
            </motion.h2>
            <p className="text-lg text-gray-600">
              Discover amazing artwork created by our community
            </p>
          </div>

          {/* --- 从这里开始，用下面的代码完全替换掉您原来的 div --- */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative block overflow-hidden rounded-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover card-hover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-4">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* --- 替换结束 --- */}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="max-w-7xl mx-auto">
          <div className="seo-section">
            {/* Main SEO Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Why Choose Labubu-Maker?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the ultimate AI-powered Labubu creative platform that transforms your imagination into stunning digital artwork
              </p>
            </motion.div>

            {/* SEO Content Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="seo-card seo-icon-card"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced AI Technology</h3>
                  <p className="text-gray-600 mb-4">
                    Our labubu-maker platform utilizes cutting-edge artificial intelligence algorithms to generate
                    high-quality, creative artwork. The AI-powered Labubu creative platform ensures every creation
                    meets professional standards while maintaining the adorable essence of Labubu characters.
                  </p>
                  <p className="text-gray-600">
                    Experience seamless image generation with our state-of-the-art machine learning models that
                    understand Labubu aesthetics and style preferences.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="seo-gradient-card"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Multiple Creative Tools</h3>
                <p className="text-gray-600 mb-4">
                  The Labubu-Maker platform offers four distinct creative tools designed for different artistic needs.
                  From wallpaper generation to travel scene creation, our comprehensive suite covers all aspects of
                  Labubu artwork production.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>• Wallpaper Creator:</strong> Generate stunning backgrounds</p>
                  <p className="text-gray-600"><strong>• Travel Scene Generator:</strong> Create adventure artwork</p>
                  <p className="text-gray-600"><strong>• Background Remover:</strong> Professional editing tools</p>
                  <p className="text-gray-600"><strong>• Pose Transformer:</strong> Dynamic character positioning</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="seo-card decorative-wave"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">User-Friendly Interface</h3>
                <p className="text-gray-600 mb-4">
                  Our AI-powered Labubu creative platform features an intuitive design that makes artwork creation
                  accessible to everyone. Whether you're a professional artist or a Labubu enthusiast, our platform
                  provides the tools you need.
                </p>
                <p className="text-gray-600">
                  Simple drag-and-drop functionality, real-time preview, and one-click generation make the creative
                  process enjoyable and efficient.
                </p>
              </motion.div>
            </div>

            {/* Additional SEO Content */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900">How Labubu-Maker Works</h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Step 1: Upload Your Image</h3>
                  <p className="text-gray-600">
                    Begin your creative journey by uploading any image to our labubu-maker platform. Our AI system
                    accepts various image formats and automatically optimizes them for processing. The intelligent
                    image recognition ensures compatibility with all Labubu-themed transformations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Step 2: Describe Your Vision</h3>
                  <p className="text-gray-600">
                    Use natural language to describe how you want to transform your image. Our AI-powered Labubu
                    creative platform understands complex descriptions and artistic preferences, allowing for
                    precise control over the final output.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Step 3: Generate and Download</h3>
                  <p className="text-gray-600">
                    Click generate and watch as our advanced algorithms create your personalized Labubu artwork.
                    The process typically takes seconds, and you can download your creation in high resolution
                    immediately after generation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900">Benefits of AI-Powered Creation</h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Professional Quality Results</h3>
                  <p className="text-gray-600">
                    Every image generated through our labubu-maker platform meets professional standards. The AI
                    technology ensures consistent quality, proper proportions, and artistic coherence in every creation.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Time-Efficient Workflow</h3>
                  <p className="text-gray-600">
                    Traditional artwork creation can take hours or days. Our AI-powered Labubu creative platform
                    reduces this time to seconds while maintaining artistic integrity and creative freedom.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Unlimited Creative Possibilities</h3>
                  <p className="text-gray-600">
                    With our advanced AI technology, there are no limits to your creativity. Experiment with different
                    styles, combine multiple concepts, and explore artistic directions that would be difficult to
                    achieve through traditional methods.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Final SEO Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="seo-card text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Creating with Labubu-Maker Today</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
                Join thousands of creators who have discovered the power of our AI-powered Labubu creative platform.
                Whether you're creating wallpapers, travel scenes, removing backgrounds, or transforming poses,
                labubu-maker provides the tools and technology you need to bring your imagination to life.
                Experience the future of digital art creation with our comprehensive, user-friendly platform
                designed specifically for Labubu enthusiasts and professional creators alike.
              </p>
              <Link href="/labubu-wallpaper" className="btn-primary inline-flex items-center">
                Start Creating Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}