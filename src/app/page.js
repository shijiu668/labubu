'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight, Sparkles, Zap, Image as ImageIcon, Scissors, User,
  Monitor, Smartphone, Wand, ShieldCheck, Heart, Layers, Paintbrush
} from 'lucide-react';
import StackingCards from '../components/StackingCards';

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
                  <span>Free to Try Now</span>
                </div>
                <div>⭐ Unleash Your Inner Artist</div>
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
          {/* === START of Visually Enhanced SEO Content Section === */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-16" // 增加了分区之间的垂直间距
          >
            {/* Section Header */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Ultimate Labubu Maker for Your Creative Vision
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Welcome to the definitive platform where your imagination meets artificial intelligence. Our powerful labubu ai generator is engineered to turn your concepts into stunning visual realities, from a simple labubu image to a complex, detailed scene.
              </p>
            </div>

            {/* --- Wallpaper Section --- */}
            {/* This layout uses a full-width featured card and two smaller cards below to add vertical length */}
            <div className="space-y-8">
              {/* Featured Card: Main Wallpaper */}
              <div className="seo-card animate-pulse-glow p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Wand className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Craft the Perfect Labubu Wallpaper</h3>
                </div>
                <p className="text-gray-700">
                  This is where your journey begins. Use our advanced tools to create the perfect labubu wallpaper that expresses your unique style. We provide the options, you provide the vision.
                </p>
              </div>

              {/* Sub-cards for wallpaper types */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="seo-gradient-card p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Monitor className="w-8 h-8 text-purple-600" />
                    <h4 className="text-xl font-semibold text-purple-800">Stunning Labubu Wallpaper 4K</h4>
                  </div>
                  <p className="text-gray-700">
                    Elevate your screens with unparalleled clarity. Our labubu ai generator produces breathtaking labubu wallpaper 4k resolutions, ensuring every detail is crisp and vibrant. Perfect for high-end monitors and retina displays where quality matters most. Create your dream labubu wallpaper today.
                  </p>
                </div>
                <div className="seo-gradient-card p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Smartphone className="w-8 h-8 text-blue-600" />
                    <h4 className="text-xl font-semibold text-blue-800">Personalized Labubu Wallpaper iPhone</h4>
                  </div>
                  <p className="text-gray-700">
                    Your phone is your most personal device, and it deserves a unique background. Generate a custom labubu wallpaper iphone with perfect 9:16 aspect ratios. Our tool ensures your creation looks flawless on any mobile screen, providing a truly personalized touch.
                  </p>
                </div>
              </div>
            </div>

            {/* --- Image & Photo Section --- */}
            <div className="text-center mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Generate High-Quality Labubu Images & Photos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Go beyond wallpapers. Our labubu maker is a comprehensive tool for creating all types of high-fidelity labubu photos and graphics for your projects.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Main Feature Card on the Left */}
              <div className="lg:col-span-3 seo-icon-card p-8 h-full flex flex-col">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Layers className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Professional Labubu Figure Image PNG Transparent Background</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Need a clean graphic for your project? Our most powerful feature allows you to generate a labubu figure image png transparent background. The AI intelligently isolates the character, providing a professional-grade cutout perfect for graphic design, stickers, or layering onto other images.
                  </p>
                  <p className="text-gray-700">
                    This is essential for creators who need a versatile labubu image. Stop struggling with manual background removal and let our labubu ai generator do the work for you. Get a perfect labubu figure image png transparent background every time.
                  </p>
                </div>
              </div>
              {/* Two Stacked Cards on the Right */}
              <div className="lg:col-span-2 space-y-8">
                <div className="glass-effect p-6 rounded-2xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <ImageIcon className="w-7 h-7 text-gray-800" />
                    <h3 className="text-xl font-bold text-gray-900">Creating Flawless Labubu Images</h3>
                  </div>
                  <p className="text-gray-700">
                    Generate truly unique labubu images from a simple text description. Whether you need a character in a specific pose, a new outfit, or an imaginative scene, our labubu maker can create it. Every labubu image is rendered with attention to detail and artistic flair.
                  </p>
                </div>
                <div className="seo-card p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Heart className="w-7 h-7 text-rose-500" />
                    <h3 className="text-xl font-bold text-gray-900">Lifelike Labubu Photos with AI</h3>
                  </div>
                  <p className="text-gray-700">
                    Explore the potential of AI to generate photorealistic labubu photos. Place Labubu in real-world scenes, create dynamic lighting, and produce a stunning labubu picture that looks like it was captured by a professional photographer. Our platform is the key to unlocking next-level labubu photos.
                  </p>
                </div>
              </div>
            </div>


            {/* --- Background Section --- */}
            <div className="text-center mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Customize Your <span className="text-gradient">Labubu Background</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The background sets the mood. With our tools, you have complete control over creating the perfect labubu background wallpaper that tells a story.
              </p>
            </div>
            {/* This section uses a list-based style for more visual variety */}
            <div className="seo-card p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Your Ideal Labubu Background</h3>
                  <p className="text-gray-700">
                    Don't settle for pre-made scenes. With our labubu maker, you can design a custom labubu background from scratch. Describe a magical forest, a futuristic cityscape, or a cozy cafe, and watch the AI create a rich and detailed environment for your character.
                  </p>
                </div>
                <div className="bg-pink-50 border-l-4 border-pink-400 p-6 rounded-r-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-pink-500 flex-shrink-0" /><span>Create a seamless labubu background wallpaper.</span></li>
                    <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-pink-500 flex-shrink-0" /><span>AI-powered blending for natural results.</span></li>
                    <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-pink-500 flex-shrink-0" /><span>Generate beautiful and immersive labubu picture compositions.</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final CTA Card */}
            <div className="seo-card text-center mt-20 decorative-wave overflow-hidden p-8 md:p-12 relative">
              <div className="absolute top-4 right-4 animate-float">
                <div className="w-16 h-16 bg-yellow-100/50 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Creating with the Best Labubu Maker</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of fans who use our labubu ai generator to create incredible labubu images. From a custom labubu wallpaper iphone design to a high-resolution labubu wallpaper 4k for your desktop, our platform has you covered. Your next masterpiece is just a description away.
              </p>
              <a href="/labubu-wallpaper" className="btn-primary animate-pulse-glow">
                Create Your First Wallpaper
              </a>
            </div>

          </motion.section>
          {/* === END of Visually Enhanced SEO Content Section === */}
        </div>
      </section>
    </div>
  )
}