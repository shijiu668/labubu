'use client'

import { motion } from 'framer-motion';
import { HelpCircle, Image, AlertCircle, Mail } from 'lucide-react';

// 您原来 page.js 里的所有交互和显示逻辑现在都在这里
export default function HelpContent() {
  const faqs = [
    {
      q: "How do I create a wallpaper?",
      a: "Simply go to the Labubu Wallpaper creator, upload your base image, type a descriptive prompt of what you want, select your desired aspect ratio, and click 'Generate Image'. Our AI will handle the rest!",
      icon: <Image className="w-6 h-6 text-pink-500" />
    },
    {
      q: "Why did my image generation fail?",
      a: "Image generation can sometimes fail due to high server traffic or issues with the prompt. Please try again after a few moments. If the problem persists, try simplifying your prompt or using a different base image.",
      icon: <AlertCircle className="w-6 h-6 text-yellow-500" />
    },
    {
      q: "What image formats can I upload?",
      a: "We support common image formats including PNG, JPG, JPEG, and WEBP. For best results, use a high-resolution image. The maximum file size is 10MB.",
      icon: <HelpCircle className="w-6 h-6 text-blue-500" />
    },
    {
      q: "How can I contact support for more help?",
      a: "If you can't find the answer here, please feel free to email us directly at hello@labubu-maker.com. We're always happy to help!",
      icon: <Mail className="w-6 h-6 text-purple-500" />
    },
  ];

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
            Help Center
          </h1>
          <p className="text-xl text-gray-700">
            Have questions? We've got answers.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="seo-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  {faq.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  );
}