'use client'

import { motion } from 'framer-motion';
import { Sparkles, Heart, Users } from 'lucide-react';

// 您原来 page.js 里的所有交互和显示逻辑现在都在这里
export default function AboutContent() {
  return (
    <div className="function-page pt-24 pb-16">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            About Labubu Maker
          </h1>
          <p className="text-xl text-gray-700">
            Fusing AI creativity with our love for Labubu.
          </p>
        </div>

        <div className="space-y-12">
          <div className="seo-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Labubu Maker started as a passion project by a group of designers and AI enthusiasts who share a deep love for the whimsical world of Labubu. We wanted to create a space where fans could not just collect, but also create and bring their own Labubu-inspired ideas to life. This platform is our tribute to the creativity that Labubu inspires in all of us.
            </p>
          </div>

          <div className="seo-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to provide an intuitive, powerful, and fun AI-powered creative platform for the Labubu community. We aim to empower every fan to become a creator, transforming their imagination into stunning, high-quality artwork effortlessly. Whether you're making a custom wallpaper or a travel scene, we want to be the magic wand in your hands.
            </p>
          </div>
          
          <div className="seo-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are more than just a tool; we are a community. We believe in the power of shared creativity and invite you to join us on this journey. Share your creations, get inspired by others, and help us shape the future of Labubu Maker. Let's create something amazing together!
            </p>
          </div>
        </div>
      </motion.main>
    </div>
  );
}