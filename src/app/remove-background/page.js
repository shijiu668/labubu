'use client'

import { motion } from 'framer-motion'
import { Scissors, Layers, Wand2, Download } from 'lucide-react'
import Sidebar from '../../components/Sidebar'
import ImageUpload from '../../components/ImageUpload'

export default function RemoveBackground() {
  return (
    <div className="function-page pt-16">
      <div className="flex min-h-screen">
        <Sidebar />
        
        <main className="flex-1 ml-64 p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Background Remover</h1>
                <p className="text-lg text-gray-600 mt-2">
                  Effortlessly remove backgrounds from your Labubu images with precision AI technology
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4" />
                <span>Precision Cutting</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wand2 className="w-4 h-4" />
                <span>AI Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>PNG Export</span>
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
              className="space-y-8"
            >
              <ImageUpload />
            </motion.div>

            {/* Right Panel - Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-gray-900">Background Removal Preview</h3>
              
              {/* Before/After Preview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mb-2">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🖼️</div>
                      <div className="text-xs text-gray-600">Original</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Before</div>
                </div>

                <div className="text-center">
                  <div className="w-full h-32 bg-transparent rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center mb-2 relative overflow-hidden">
                    {/* Transparent background pattern */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='10' height='10' fill='%23f0f0f0'/%3e%3crect x='10' y='10' width='10' height='10' fill='%23f0f0f0'/%3e%3c/svg%3e")`
                    }}></div>
                    <div className="text-center relative z-10">
                      <div className="text-2xl mb-1">✨</div>
                      <div className="text-xs text-blue-600">Transparent</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">After</div>
                </div>
              </div>

              {/* Quality Options */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Quality Settings</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="quality" value="standard" defaultChecked className="text-blue-500" />
                    <span className="text-sm">Standard Quality (Fast)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="quality" value="high" className="text-blue-500" />
                    <span className="text-sm">High Quality (Precise)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="quality" value="ultra" className="text-blue-500" />
                    <span className="text-sm">Ultra Quality (Best)</span>
                  </label>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h4 className="font-medium text-green-900 mb-2">🎯 Best Results Tips</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Use images with clear subject-background contrast</li>
                  <li>• Avoid images with complex or busy backgrounds</li>
                  <li>• Higher resolution images yield better results</li>
                  <li>• Good lighting helps AI identify edges better</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* SEO Content Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Professional Labubu Background Removal
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Remove backgrounds from your Labubu images with pixel-perfect precision using advanced AI technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="seo-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Precision AI Technology</h3>
                <p className="text-gray-600 mb-4">
                  Our advanced AI background removal tool uses state-of-the-art machine learning algorithms 
                  specifically trained on character images. The technology can distinguish between Labubu 
                  figures and complex backgrounds with exceptional accuracy, preserving fine details like 
                  hair, clothing textures, and accessory edges.
                </p>
                <p className="text-gray-600">
                  The AI automatically detects subject boundaries and applies intelligent edge refinement 
                  to ensure clean, professional results without manual editing.
                </p>
              </div>

              <div className="seo-gradient-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Multiple Quality Levels</h3>
                <p className="text-gray-600 mb-4">
                  Choose from different quality settings based on your needs and time constraints. Our 
                  background remover offers three processing levels: Standard for quick results, High 
                  for detailed precision, and Ultra for the most demanding professional applications.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>• Standard Mode:</strong> Fast processing, good quality</p>
                  <p className="text-gray-600"><strong>• High Precision:</strong> Detailed edge detection</p>
                  <p className="text-gray-600"><strong>• Ultra Quality:</strong> Professional-grade results</p>
                </div>
              </div>

              <div className="seo-card seo-icon-card">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent PNG Export</h3>
                  <p className="text-gray-600 mb-4">
                    All processed images are exported as high-quality PNG files with transparent backgrounds, 
                    making them perfect for use in graphic design, presentations, social media posts, and 
                    professional printing applications.
                  </p>
                  <p className="text-gray-600">
                    The transparent background allows for easy integration into any design project, 
                    giving you maximum flexibility in how you use your Labubu images.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">How Background Removal Works</h2>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">AI Image Analysis</h3>
                  <p className="text-gray-600">
                    The process begins with our AI analyzing your uploaded image to identify the main subject 
                    (your Labubu character) and distinguish it from the background. The system uses advanced 
                    computer vision techniques to map pixel-level details and create precise subject boundaries.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Edge Detection and Refinement</h3>
                  <p className="text-gray-600">
                    Once the subject is identified, the AI applies sophisticated edge detection algorithms 
                    to ensure clean, natural-looking cutouts. Special attention is paid to complex areas 
                    like hair, clothing details, and semi-transparent elements.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Quality Optimization</h3>
                  <p className="text-gray-600">
                    The final step involves quality optimization where the AI fine-tunes the edges, removes 
                    any remaining background artifacts, and ensures the transparent areas are perfectly clean. 
                    The result is a professional-quality cutout ready for any application.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Use Cases for Background Removal</h2>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Graphic Design Projects</h3>
                  <p className="text-gray-600">
                    Perfect for creating custom graphics, posters, and digital artwork. Remove busy backgrounds 
                    to focus attention on your Labubu characters, then place them in new, more suitable 
                    environments that match your creative vision.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Social Media Content</h3>
                  <p className="text-gray-600">
                    Create eye-catching social media posts by removing distracting backgrounds and placing 
                    your Labubu characters on clean, branded backgrounds. Perfect for Instagram stories, 
                    Facebook posts, and Twitter content that stands out in busy feeds.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">E-commerce and Marketing</h3>
                  <p className="text-gray-600">
                    Professional product photography often requires clean, white backgrounds. Use our 
                    background remover to create catalog-ready images of Labubu products, merchandise 
                    photos, and marketing materials that meet commercial standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-card text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Remove Backgrounds with Precision</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Transform your Labubu images with professional background removal that preserves every detail. 
                Whether you're creating artwork, designing marketing materials, or preparing images for social 
                media, our AI-powered tool delivers studio-quality results in seconds.
              </p>
              <button className="btn-primary">
                Start Removing Backgrounds
              </button>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  )
}