'use client'

import { motion } from 'framer-motion'
import { MapPin, Globe, Camera, Compass } from 'lucide-react'
import Sidebar from '../../components/Sidebar'
import ImageUpload from '../../components/ImageUpload'

export default function LabubuTravels() {
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
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Labubu Travel Adventures</h1>
                <p className="text-lg text-gray-600 mt-2">
                  Create amazing travel scenes featuring your favorite Labubu characters in exotic locations
                </p>
              </div>
            </div>

            {/* Travel Themes */}
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>World Destinations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Camera className="w-4 h-4" />
                <span>Photo Realistic</span>
              </div>
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4" />
                <span>Adventure Ready</span>
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
              <h3 className="text-lg font-semibold text-gray-900">Travel Destinations</h3>
              
              {/* Popular Destinations */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏔️</div>
                  <div className="text-sm font-medium">Mountains</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-orange-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏖️</div>
                  <div className="text-sm font-medium">Beaches</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🌸</div>
                  <div className="text-sm font-medium">Gardens</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏛️</div>
                  <div className="text-sm font-medium">Cities</div>
                </div>
              </div>

              {/* Example Prompts */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <h4 className="font-medium text-purple-900 mb-3">✨ Popular Travel Ideas</h4>
                <div className="space-y-2 text-sm text-purple-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>"Labubu exploring cherry blossoms in Japan"</span>
                  </div>  
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>"Adventure in the Swiss Alps with snow"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>"Tropical beach sunset in Maldives"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>"Exploring ancient temples in Thailand"</span>
                  </div>
                </div>
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
                Create Epic Labubu Travel Adventures
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your Labubu characters into world travelers with our AI-powered travel scene generator
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="seo-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Destinations</h3>
                <p className="text-gray-600 mb-4">
                  Our Labubu travel generator features destinations from around the world. From iconic landmarks 
                  like the Eiffel Tower and Mount Fuji to hidden gems in tropical paradises, create travel 
                  adventures that showcase Labubu characters in stunning global locations.
                </p>
                <p className="text-gray-600">
                  Each destination is carefully crafted with authentic cultural elements, realistic lighting, 
                  and atmospheric details that make your Labubu travel scenes come alive.
                </p>
              </div>

              <div className="seo-gradient-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Seasonal Adventures</h3>
                <p className="text-gray-600 mb-4">
                  Create Labubu travel scenes for every season and weather condition. Whether it's spring 
                  cherry blossoms in Japan, summer beaches in Hawaii, autumn leaves in New England, or 
                  winter snow in the Alps, our AI captures the perfect seasonal atmosphere.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>• Spring Journeys:</strong> Blooming flowers and fresh landscapes</p>
                  <p className="text-gray-600"><strong>• Summer Adventures:</strong> Beaches and tropical destinations</p>
                  <p className="text-gray-600"><strong>• Autumn Explorations:</strong> Colorful foliage and cozy scenes</p>
                  <p className="text-gray-600"><strong>• Winter Wonderlands:</strong> Snow-covered mountains and cities</p>
                </div>
              </div>

              <div className="seo-card seo-icon-card">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Adventure Themes</h3>
                  <p className="text-gray-600 mb-4">
                    From peaceful meditation retreats to thrilling outdoor adventures, our travel generator 
                    creates scenes that match any mood or adventure type. Design Labubu characters engaging 
                    in hiking, sightseeing, cultural exploration, or simply relaxing in beautiful settings.
                  </p>
                  <p className="text-gray-600">
                    Each adventure theme includes appropriate props, clothing, and environmental elements 
                    to create authentic and engaging travel narratives.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Popular Travel Destinations for Labubu</h2>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Asian Adventures</h3>
                  <p className="text-gray-600">
                    Create magical scenes in Asia's most beautiful destinations. From the cherry blossom 
                    festivals in Japan to the ancient temples of Thailand, the Great Wall of China to the 
                    rice terraces of Vietnam, Asian destinations offer endless possibilities for Labubu adventures.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">European Explorations</h3>
                  <p className="text-gray-600">
                    Transport your Labubu characters to Europe's most iconic locations. Picture them exploring 
                    Paris streets, enjoying Italian countryside, discovering Nordic fjords, or wandering through 
                    historic castles in Germany and Scotland.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-808">Tropical Paradises</h3>
                  <p className="text-gray-600">
                    Create dreamy tropical scenes with Labubu characters enjoying pristine beaches, crystal-clear 
                    waters, and lush island landscapes. From Caribbean islands to Pacific atolls, tropical 
                    destinations provide perfect backdrops for relaxing travel adventures.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Creating Authentic Travel Scenes</h2>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Cultural Integration</h3>
                  <p className="text-gray-600">
                    Our AI understands cultural contexts and creates authentic travel scenes that respect 
                    and celebrate local traditions. Labubu characters are seamlessly integrated into 
                    culturally appropriate settings with accurate architectural details and environmental elements.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Realistic Photography Effects</h3>
                  <p className="text-gray-600">
                    Every travel scene is rendered with professional photography techniques including proper 
                    lighting, depth of field, and composition. The AI applies realistic shadows, reflections, 
                    and atmospheric effects that make your Labubu travel adventures look like actual photographs.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Interactive Storytelling</h3>
                  <p className="text-gray-600">
                    Create series of travel images that tell complete adventure stories. Design sequential 
                    scenes showing Labubu characters' journey from departure to arrival, exploration, and 
                    memorable moments in each destination.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-card text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Your Labubu Travel Adventure</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Begin creating extraordinary travel adventures for your Labubu characters. Whether you're 
                dreaming of far-off destinations or planning your next vacation, our AI travel generator 
                brings your wanderlust to life with adorable Labubu companions exploring the world's most 
                beautiful places.
              </p>
              <button className="btn-primary">
                Create Travel Adventure
              </button>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  )
}