'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Github, Twitter, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    'Product': [
      { name: 'Labubu Wallpaper', href: '/labubu-wallpaper' },
      { name: 'Labubu Travels', href: '/labubu-travels' },
      { name: 'Remove Background', href: '/remove-background' },
      { name: 'Pose Swap', href: '/pose-swap' },
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
    ],
    'Resources': [
      { name: 'Help Center', href: '/help' },
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
    { name: 'Github', icon: <Github className="w-5 h-5" />, href: '#' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@labubu-maker.com' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-pink-50 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Labubu Maker</span>
            </Link>
            
            <p className="text-gray-600 max-w-md">
              Transform your imagination into stunning Labubu artwork with our cutting-edge AI technology. 
              Create, customize, and share your unique creations with the world.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pink-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-600">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-500" />
              <span>for Labubu lovers</span>
            </div>
            
            <div className="text-gray-600 text-sm">
              © 2025 Labubu Maker. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}