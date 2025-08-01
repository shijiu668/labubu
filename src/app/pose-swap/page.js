'use client'

import { motion } from 'framer-motion'
import { User, RotateCcw, Zap, Palette } from 'lucide-react'
import Sidebar from '../../components/Sidebar'
import ImageUpload from '../../components/ImageUpload'

export default function PoseSwap() {
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
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Labubu Pose Transformer</h1>
                <p className="text-lg text-gray-600 mt-2">
                  Transform Labubu poses and expressions to create unique and personalized artwork
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-4 h-4" />
                <span>Dynamic Poses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Expression Control</span>
              </div>
              <div className="flex items-center space-x-2">
                <Palette className="w-4 h-4" />
                <span>Style Adaptation</span>
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
              <h3 className="text-lg font-semibold text-gray-900">Pose Variations</h3>
              
              {/* Pose Examples */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                  <div className="text-3xl mb-2">🤗</div>
                  <div className="text-xs font-medium">Welcoming</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                  <div className="text-3xl mb-2">👋</div>
                  <div className="text-xs font-medium">Waving</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                  <div className="text-3xl mb-2">🧘</div>
                  <div className="text-xs font-medium">Peaceful</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                  <div className="text-3xl mb-2">🕺</div>
                  <div className="text-xs font-medium">Dancing</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                  <div className="text-3xl mb-2">🤸</div>
                  <div className="text-xs font-medium">Playful</div>
                </div>
                <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                  <div className="text-3xl mb-2">❤️</div>
                  <div className="text-xs font-medium">Loving</div>
                </div>
              </div>

              {/* Expression Options */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Expression Settings</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Happiness</span>
                    <input type="range" min="0" max="100" defaultValue="50" className="w-24" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Energy Level</span>
                    <input type="range" min="0" max="100" defaultValue="70" className="w-24" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Cuteness</span>
                    <input type="range" min="0" max="100" defaultValue="90" className="w-24" />
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                <h4 className="font-medium text-indigo-900 mb-2">💡 Pose Tips</h4>
                <ul className="text-sm text-indigo-800 space-y-1">
                  <li>• Clear, well-lit images work best for pose detection</li>
                  <li>• Full-body poses offer more transformation options</li>
                  <li>• Describe the desired mood and energy level</li>
                  <li>• Combine multiple poses for creative results</li>
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
                Advanced Labubu Pose Transformation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Create dynamic and expressive Labubu characters with our AI-powered pose transformation technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="seo-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Pose Recognition</h3>
                <p className="text-gray-600 mb-4">
                  Our advanced AI system analyzes the pose and body structure of your Labubu characters with 
                  exceptional precision. Using sophisticated computer vision algorithms, the technology identifies 
                  key pose points, body proportions, and movement patterns to create natural-looking transformations.
                </p>
                <p className="text-gray-600">
                  The pose recognition system understands Labubu's unique character design and applies 
                  transformations that maintain the authentic look and feel while adding new expressions and positions.
                </p>
              </div>

              <div className="seo-gradient-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expression Control System</h3>
                <p className="text-gray-600 mb-4">
                  Fine-tune your Labubu character's personality with our comprehensive expression control 
                  system. Adjust happiness levels, energy, cuteness, and other emotional attributes to 
                  create the perfect character mood for any situation or story.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>• Emotion Sliders:</strong> Precise control over feelings</p>
                  <p className="text-gray-600"><strong>• Energy Levels:</strong> From calm to hyperactive</p>
                  <p className="text-gray-600"><strong>• Personality Traits:</strong> Customize character behavior</p>
                  <p className="text-gray-600"><strong>• Mood Presets:</strong> Quick emotional transformations</p>
                </div>
              </div>

              <div className="seo-card seo-icon-card">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dynamic Animation Ready</h3>
                  <p className="text-gray-600 mb-4">
                    All pose transformations are created with animation potential in mind. The AI maintains 
                    proper joint articulation and natural movement flows, making your transformed Labubu 
                    characters perfect for creating animated sequences and dynamic storytelling.
                  </p>
                  <p className="text-gray-600">
                    Export poses that work seamlessly in animation software or use them as keyframes 
                    for creating your own Labubu character animations and stories.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Popular Pose Categories</h2>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Action and Adventure Poses</h3>
                  <p className="text-gray-600">
                    Transform your Labubu characters into action heroes with dynamic poses including running, 
                    jumping, climbing, and exploring. These poses are perfect for creating adventure stories, 
                    comic strips, and energetic social media content that showcases Labubu's playful spirit.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Emotional Expression Poses</h3>
                  <p className="text-gray-600">
                    Create heartwarming moments with poses that express love, joy, surprise, curiosity, and 
                    other emotions. These poses are ideal for storytelling, greeting cards, and content that 
                    connects emotionally with your audience.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Social and Interactive Poses</h3>
                  <p className="text-gray-600">
                    Design Labubu characters that interact with their environment and other characters. 
                    Waving, hugging, pointing, and other social poses help create engaging scenes and 
                    interactive storytelling opportunities.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Pose Transformation Technology</h2>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Anatomical Accuracy</h3>
                  <p className="text-gray-600">
                    Our pose transformation system understands Labubu's unique anatomical structure and 
                    ensures all pose changes maintain proper proportions and natural movement patterns. 
                    The AI prevents unrealistic distortions while allowing for creative expression.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Style Consistency</h3>
                  <p className="text-gray-600">
                    Every pose transformation maintains the distinctive Labubu art style and character 
                    design elements. Colors, textures, and visual characteristics remain consistent 
                    across all pose variations, ensuring brand authenticity.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Contextual Adaptation</h3>
                  <p className="text-gray-600">
                    The AI considers the context and environment when applying pose transformations. 
                    Poses are adapted to fit naturally within their surroundings, including proper 
                    shadow casting, ground contact, and environmental interaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="seo-card text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Labubu Poses Today</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Bring your Labubu characters to life with dynamic pose transformations that capture every 
                emotion and movement. Whether you're creating stories, artwork, or social media content, 
                our AI-powered pose system gives you unlimited creative possibilities with professional-quality results.
              </p>
              <button className="btn-primary">
                Start Transforming Poses
              </button>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  )
}