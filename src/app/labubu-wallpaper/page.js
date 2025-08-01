'use client'

import { motion } from 'framer-motion'
import { ImageIcon, Smartphone, Monitor, Tablet } from 'lucide-react'
import Sidebar from '../../components/Sidebar'
import ImageUpload from '../../components/ImageUpload'

export default function LabubuWallpaper() {
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
              <h3 className="text-lg font-semibold text-gray-900">Wallpaper Preview</h3>
              
              {/* Device Mockups */}
              <div className="grid grid-cols-3 gap-4">
                {/* Phone Mockup */}
                <div className="text-center">
                  <div className="w-16 h-28 bg-gray-200 rounded-lg border-4 border-gray-300 mx-auto mb-2 relative overflow-hidden">
                    <div className="absolute inset-1 bg-gradient-to-br from-pink-100 to-purple-100 rounded-sm flex items-center justify-center">
                      <div className="text-xs">📱</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">Mobile</div>
                </div>

                {/* Tablet Mockup */}
                <div className="text-center">
                  <div className="w-20 h-28 bg-gray-200 rounded-lg border-4 border-gray-300 mx-auto mb-2 relative overflow-hidden">
                    <div className="absolute inset-1 bg-gradient-to-br from-purple-100 to-blue-100 rounded-sm flex items-center justify-center">
                      <div className="text-xs">📱</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">Tablet</div>
                </div>

                {/* Desktop Mockup */}
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
                Create Perfect Labubu Wallpapers with AI
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform any image into a stunning Labubu-themed wallpaper optimized for all your devices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="seo-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Device Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Our Labubu wallpaper creator automatically optimizes your designs for smartphones, tablets, 
                  and desktop computers. Each wallpaper is generated with perfect aspect ratios and resolutions 
                  to ensure crisp, clear images on any screen size.
                </p>
                <p className="text-gray-600">
                  Whether you need a 9:16 portrait wallpaper for your phone or a 16:9 landscape background 
                  for your desktop, our AI ensures optimal results every time.
                </p>
              </div>

              <div className="seo-gradient-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Background Enhancement</h3>
                <p className="text-gray-600 mb-4">
                  The AI-powered wallpaper generator intelligently enhances backgrounds to complement Labubu 
                  characters. From dreamy pastel gradients to vibrant scenic landscapes, create wallpapers 
                  that perfectly match your style preferences.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>• Gradient Backgrounds:</strong> Smooth color transitions</p>
                  <p className="text-gray-600"><strong>• Scenic Enhancements:</strong> Beautiful landscapes</p>
                  <p className="text-gray-600"><strong>• Pattern Integration:</strong> Cute decorative elements</p>
                </div>
              </div>

              <div className="seo-card seo-icon-card">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">High-Resolution Quality</h3>
                  <p className="text-gray-600 mb-4">
                    Every Labubu wallpaper is generated in high resolution to ensure crisp details and 
                    vibrant colors. Our advanced AI maintains image quality while adding creative 
                    transformations and Labubu-themed elements.
                  </p>
                  <p className="text-gray-600">
                    Download your wallpapers in multiple resolutions suitable for different devices and 
                    display requirements, from Retina displays to 4K monitors.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">How to Create Labubu Wallpapers</h2>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Choose Your Base Image</h3>
                  <p className="text-gray-600">
                    Start with any image you want to transform into a Labubu wallpaper. Upload photos of your 
                    favorite Labubu figures, scenic backgrounds, or even personal photos that you'd like to 
                    enhance with Labubu elements.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Describe Your Vision</h3>
                  <p className="text-gray-600">
                    Use detailed descriptions to guide the AI transformation. Specify colors, themes, moods, 
                    and any specific Labubu characteristics you want to emphasize in your wallpaper design.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Wallpaper Customization Options</h2>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Aspect Ratio Selection</h3>
                  <p className="text-gray-600">
                    Choose from multiple aspect ratios including square (1:1) for social media, portrait (9:16) 
                    for mobile devices, and landscape (16:9) for desktop computers. Each ratio is optimized 
                    for specific use cases.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Style Customization</h3>
                  <p className="text-gray-600">
                    Customize your Labubu wallpapers with various artistic styles, from cute and kawaii 
                    aesthetics to more sophisticated and minimalist designs. The AI adapts to your 
                    preferred visual style automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-card text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Creating Your Labubu Wallpapers</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of Labubu fans who have created personalized wallpapers using our AI-powered 
                platform. Transform your devices with adorable, high-quality Labubu artwork that reflects 
                your unique style and personality.
              </p>
              <button className="btn-primary">
                Create Your First Wallpaper
              </button>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  )
}