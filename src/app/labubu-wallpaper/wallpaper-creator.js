'use client'

import { useState } from 'react';
import { motion } from 'framer-motion'
import { ImageIcon, Smartphone, Monitor, Tablet, Heart, Image, Star, Layers, Palette, HelpCircle, Wind, CheckCircle } from 'lucide-react'
import ImageUpload from '../../components/ImageUpload'

export default function WallpaperCreator() {
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Labubu Wallpaper Creator</h1>
            <p className="text-lg text-gray-600 mt-2">
              Transform your images into stunning Labubu-themed wallpapers for any device
            </p>
          </div>
        </div>

        {/* Device Preview */}
        <div className="flex items-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Smartphone className="w-4 h-4" />
            <span>Mobile Ready</span>
          </div>
          <div className="flex items-center space-x-2">
            <Tablet className="w-4 h-4" />
            <span>Tablet Optimized</span>
          </div>
          <div className="flex items-center space-x-2">
            <Monitor className="w-4 h-4" />
            <span>Desktop Perfect</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Panel - Upload and Controls */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ImageUpload onImageGenerated={setGeneratedImageUrl} />
        </motion.div>

        {/* Right Panel - NEW Generated Result Display */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-lg font-semibold text-gray-900">Generated Result</h3>
          <div className="image-display h-full">
            {generatedImageUrl ? (
              <img
                src={generatedImageUrl}
                alt="Generated Wallpaper"
                className="generated-image animate-fade-in-scale"
              />
            ) : (
              <div className="text-center text-gray-500 p-8">
                <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p>Your generated wallpaper will appear here.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* MOVED Wallpaper Preview Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-6 mt-16"
      >
        <h3 className="text-lg font-semibold text-gray-900">Wallpaper Preview</h3>

        {/* Device Mockups */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-16 h-28 bg-gray-200 rounded-lg border-4 border-gray-300 mx-auto mb-2 relative overflow-hidden">
              <div className="absolute inset-1 bg-gradient-to-br from-pink-100 to-purple-100 rounded-sm flex items-center justify-center">
                <div className="text-xs">📱</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">Mobile</div>
          </div>
          <div className="text-center">
            <div className="w-20 h-28 bg-gray-200 rounded-lg border-4 border-gray-300 mx-auto mb-2 relative overflow-hidden">
              <div className="absolute inset-1 bg-gradient-to-br from-purple-100 to-blue-100 rounded-sm flex items-center justify-center">
                <div className="text-xs">📱</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">Tablet</div>
          </div>
          <div className="text-center">
            <div className="w-24 h-16 bg-gray-200 rounded-lg border-4 border-gray-300 mx-auto mb-2 relative overflow-hidden">
              <div className="absolute inset-1 bg-gradient-to-br from-blue-100 to-green-100 rounded-sm flex items-center justify-center">
                <div className="text-xs">🖥️</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">Desktop</div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h4 className="font-medium text-blue-900 mb-2">💡 Pro Tips</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Use high-resolution images for best results</li>
            <li>• Consider device orientation when choosing aspect ratios</li>
            <li>• Mention specific colors or themes in your description</li>
            <li>• Try different Labubu poses and expressions</li>
          </ul>
        </div>
      </motion.div>

      {/* SEO Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-20 space-y-16"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Deep Dive into Crafting Your Perfect <span className="text-gradient">Labubu Wallpaper</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to your personal workshop for creating the ultimate <span className="font-semibold">wallpaper labubu</span> fans dream of. This guide will walk you through mastering every detail, from device-specific optimization to exploring artistic themes, ensuring every creation is a masterpiece.
          </p>
        </div>
        <div className="space-y-12">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="seo-card p-6 aspect-w-9 aspect-h-16 flex flex-col justify-center items-center animate-float">
                <Smartphone size={64} className="text-pink-400 mb-4" />
                <p className="font-bold text-gray-700">iPhone Perfect</p>
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Ultimate Labubu Wallpaper iPhone Experience</h3>
              <p className="text-gray-700">
                Creating the perfect <span className="font-semibold">labubu wallpaper iphone</span> is an art. Our AI considers lock screen elements and icon layouts, helping you craft a vertical masterpiece. Generate a <span className="font-semibold">cute labubu wallpaper</span> that brings joy every time you unlock your phone, with flawless 9:16 aspect ratio rendering.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expansive Labubu Wallpaper Laptop Designs</h3>
              <p className="text-gray-700">
                Your laptop is a space for work and play, and your background should reflect that. Design a stunning <span className="font-semibold">labubu wallpaper laptop</span> that inspires creativity and focus. Our AI can generate detailed 16:9 landscape scenes perfect for any laptop or desktop computer, turning your screen into a window to the Labubu world.
              </p>
            </div>
            <div className="md:col-span-2 md:order-1">
              <div className="seo-card p-6 aspect-w-16 aspect-h-9 flex flex-col justify-center items-center animate-float">
                <Monitor size={64} className="text-purple-500 mb-4" />
                <p className="font-bold text-gray-700">Laptop Ready</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Popular Themes & Characters
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dive into a universe of possibilities. From specific characters like Zimomo to vibrant color palettes, guide our AI to create a truly personalized <span className="font-semibold">wallpaper labubu</span>.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="seo-gradient-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200/50 rounded-lg flex items-center justify-center"><Star className="w-6 h-6 text-gray-700" /></div>
              <h3 className="text-xl font-bold text-gray-900">The Enchanting World of Labubu Zimomo Wallpaper</h3>
            </div>
            <p className="text-gray-700">
              Fans of the mischievous Zimomo can create a dedicated <span className="font-semibold">labubu zimomo wallpaper</span>. Describe Zimomo's iconic look and place them in a scene that matches their adventurous spirit. Our AI understands character specifics, ensuring your <span className="font-semibold">labubu zimomo wallpaper</span> is authentic and full of life.
            </p>
          </div>
          <div className="seo-gradient-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-rose-200/50 rounded-lg flex items-center justify-center"><Palette className="w-6 h-6 text-rose-600" /></div>
              <h3 className="text-xl font-bold text-gray-900">A Splash of Color: Pink, Blue, and Beyond</h3>
            </div>
            <p className="text-gray-700">
              Your desired aesthetic is just a description away. Create a dreamy `labubu pink wallpaper` or a calming `labubu blue wallpaper`. The AI responds to color cues, allowing you to craft a <span className="font-semibold">labubu wallpaper</span> that perfectly matches your mood, room decor, or favorite Labubu figure.
            </p>
          </div>
          <div className="seo-gradient-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-teal-200/50 rounded-lg flex items-center justify-center"><Layers className="w-6 h-6 text-teal-600" /></div>
              <h3 className="text-xl font-bold text-gray-900">Crafting the Perfect Labubu Background Wallpaper</h3>
            </div>
            <p className="text-gray-700">
              A great <span className="font-semibold">labubu wallpaper</span> tells a story, and the background is the setting. Use our tool to create a rich <span className="font-semibold">labubu background wallpaper</span> that gives your character context and depth. From enchanted forests to bustling cityscapes, the only limit is your imagination. This is key to a truly unique <span className="font-semibold">wallpaper labubu</span>.
            </p>
          </div>
        </div>
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Questions Answered: <span className="text-gradient">Wallpaper Labubu FAQ</span>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="seo-card p-6">
            <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2 mb-2"><HelpCircle className="w-5 h-5 text-pink-500" />How do I create a high-quality labubu wallpaper 4k?</h3>
            <p className="text-gray-700 pl-7">
              To achieve the best <span className="font-semibold">labubu wallpaper 4k</span> results, start with a high-resolution base image. In your prompt, specifically mention "4K resolution," "highly detailed," and "sharp focus." Select a landscape aspect ratio like 16:9 or 21:9 for desktop monitors.
            </p>
          </div>
          <div className="seo-card p-6">
            <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2 mb-2"><HelpCircle className="w-5 h-5 text-pink-500" />What's the secret to a really cute labubu wallpaper?</h3>
            <p className="text-gray-700 pl-7">
              For a <span className="font-semibold">cute labubu wallpaper</span>, use descriptive words like "soft pastel colors," "chibi style," "sparkling eyes," and "fluffy texture" in your prompt. Adding elements like flowers, stars, or sweets can also enhance the "cute" factor of your <span className="font-semibold">labubu wallpaper</span>.
            </p>
          </div>
        </div>
        <div className="seo-card text-center decorative-wave overflow-hidden p-8 md:p-12 mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Signature Wallpaper?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            You have the knowledge and the ultimate tool at your fingertips. Start bringing your ideas to life and design a beautiful <span className="font-semibold">labubu wallpaper</span> that is uniquely yours. From a `labubu wallpaper laptop` design to a `cute labubu wallpaper` for your phone, it all starts now.
          </p>
          <button className="btn-primary animate-pulse-glow" onClick={() => window.scrollTo(0, 0)}>
            Start Creating Now
          </button>
        </div>
      </motion.section>
    </>
  )
}