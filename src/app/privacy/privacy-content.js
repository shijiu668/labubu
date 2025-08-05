'use client'

import { motion } from 'framer-motion';

// 您原来 page.js 里的所有显示逻辑现在都在这里
export default function PrivacyContent() {
  return (
    <div className="function-page pt-24 pb-16">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 prose lg:prose-xl"
      >
        <h1 className="text-5xl font-bold text-gradient mb-8">Privacy Policy</h1>
        <p className="text-lg text-gray-500">Last updated: August 06, 2025</p>

        <div className="space-y-6 text-gray-700">
          <p>Welcome to Labubu Maker. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.</p>

          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Images You Provide:</strong> When you upload an image for processing, we handle that image to provide the service. Uploaded images are stored temporarily on Vercel Blob servers to generate new artwork.</li>
            <li><strong>Prompts You Enter:</strong> We collect the text prompts you provide to guide the AI image generation process.</li>
            <li><strong>Generated Images:</strong> We store the images created by our AI. The generation is performed by a third-party service, `api.apicore.ai`.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>Your information is used solely to provide and improve our services. Specifically:</p>
          <ul>
            <li>To process your uploaded image and prompt to generate a new AI artwork.</li>
            <li>To troubleshoot issues and improve the quality and features of our platform.</li>
            <li>We do not use your personal images or prompts for any purpose other than providing the service you requested.</li>
          </ul>

          <h2>Data Storage and Security</h2>
          <p>We use Vercel's Blob service to store uploaded and generated images. We take reasonable measures to protect your information, but no online service is 100% secure.</p>
          
          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this page periodically for any changes.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, you can contact us at: hello@labubu-maker.com</p>
        </div>
      </motion.main>
    </div>
  );
}