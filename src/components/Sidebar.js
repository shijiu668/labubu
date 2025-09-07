'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Image as ImageIcon, MapPin, Scissors, User, Gamepad2, ChevronRight } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      name: 'Labubu Wallpaper',
      href: '/labubu-wallpaper',
      icon: <ImageIcon className="w-5 h-5" />,
      description: 'Create stunning wallpapers'
    },
    {
      name: 'Labubu Travels',
      href: '/labubu-travels',
      icon: <MapPin className="w-5 h-5" />,
      description: 'Generate travel scenes'
    },
    {
      name: 'Remove Background',
      href: '/remove-background',
      icon: <Scissors className="w-5 h-5" />,
      description: 'Professional editing'
    },
    {
      name: 'Pose Swap',
      href: '/pose-swap',
      icon: <User className="w-5 h-5" />,
      description: 'Transform poses'
    },
    {
      name: 'Clicker Game',
      href: '/labubu-clicker',
      icon: <Gamepad2 className="w-5 h-5" />,
      description: 'Play & have fun'
    }
  ]

  return (
    <aside className="sidebar fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto z-40">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Creative Tools</h2>
          <p className="text-sm text-gray-600">Choose your AI-powered creation tool</p>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`sidebar-item group ${isActive ? 'active' : ''}`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg transition-colors ${isActive
                          ? 'bg-pink-100 text-pink-600'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-pink-50 group-hover:text-pink-500'
                        }`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-600">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-pink-600 rotate-90' : 'text-gray-400 group-hover:text-pink-500'
                      }`} />
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8 p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-100">
          <h3 className="font-medium text-gray-900 mb-3">Your Progress</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Images Created</span>
              <span className="text-sm font-semibold text-pink-600">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Tools Used</span>
              <span className="text-sm font-semibold text-purple-600">0/4</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full w-0 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="font-medium text-blue-900 mb-2">Need Help?</h3>
          <p className="text-sm text-blue-700 mb-3">
            Check our tutorials and guides to get the most out of Labubu Maker.
          </p>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View Tutorials →
          </button>
        </div>
      </div>
    </aside>
  )
}