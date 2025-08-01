'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, X, Image as ImageIcon, Download, Loader } from 'lucide-react'

export default function ImageUpload({ onImageGenerated }) {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [prompt, setPrompt] = useState('')
  const [aspectRatio, setAspectRatio] = useState('1:1')
  const [generatedImage, setGeneratedImage] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage({
          file,
          preview: e.target.result,
          name: file.name
        })
        setError('')
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: false
  })

  const removeImage = () => {
    setUploadedImage(null)
    setGeneratedImage(null)
    setError('')
  }

  const handleGenerate = async () => {
    if (!uploadedImage || !prompt.trim()) {
      setError('Please upload an image and enter a description')
      return
    }

    setIsGenerating(true)
    setError('')

    try {
      // Convert image to base64 or upload to a temporary storage first
      const formData = new FormData()
      formData.append('image', uploadedImage.file)
      formData.append('prompt', `${uploadedImage.preview} ${prompt}`)
      formData.append('size', aspectRatio)

      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Generation failed')
      }

      const result = await response.json()
      setGeneratedImage(result.imageUrl)
      onImageGenerated?.(result.imageUrl)
    } catch (err) {
      setError('Failed to generate image. Please try again.')
      console.error('Generation error:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = `labubu-creation-${Date.now()}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const aspectRatios = [
    { value: '1:1', label: 'Square (1:1)' },
    { value: '16:9', label: 'Landscape (16:9)' },
    { value: '9:16', label: 'Portrait (9:16)' },
    { value: '4:3', label: 'Standard (4:3)' },
    { value: '3:4', label: 'Portrait (3:4)' },
    { value: '21:9', label: 'Ultrawide (21:9)' },
  ]

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Upload Image</h3>
        
        <motion.div
          {...getRootProps()}
          className={`upload-area p-8 text-center cursor-pointer transition-all duration-300 ${
            isDragActive ? 'drag-active' : ''
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <input {...getInputProps()} />
          
          {uploadedImage ? (
            <div className="relative">
              <img
                src={uploadedImage.preview}
                alt="Uploaded"
                className="max-w-full max-h-64 mx-auto rounded-lg shadow-lg"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  removeImage()
                }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="mt-3 text-sm text-gray-600">
                {uploadedImage.name}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-pink-500" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">
                  {isDragActive ? 'Drop your image here' : 'Upload your image'}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Drag and drop or click to browse (PNG, JPG, GIF up to 10MB)
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Prompt Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Describe Your Vision</h3>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe how you want to transform your image... (e.g., 'make this character wear sunglasses and change the background to a beach scene')"
          className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-100 focus:border-pink-300 resize-none"
        />
        <div className="text-sm text-gray-500">
          {prompt.length}/500 characters
        </div>
      </div>

      {/* Aspect Ratio Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Aspect Ratio</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {aspectRatios.map((ratio) => (
            <button
              key={ratio.value}
              onClick={() => setAspectRatio(ratio.value)}
              className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-300 ${
                aspectRatio === ratio.value
                  ? 'border-pink-400 bg-pink-50 text-pink-700'
                  : 'border-gray-200 hover:border-pink-200 hover:bg-pink-25'
              }`}
            >
              {ratio.label}
            </button>
          ))}
        </div>
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="alert-error"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Generate Button */}
      <motion.button
        onClick={handleGenerate}
        disabled={isGenerating || !uploadedImage || !prompt.trim()}
        className={`w-full btn-primary flex items-center justify-center space-x-2 ${
          isGenerating || !uploadedImage || !prompt.trim()
            ? 'opacity-50 cursor-not-allowed'
            : ''
        }`}
        whileHover={!isGenerating ? { scale: 1.02 } : {}}
        whileTap={!isGenerating ? { scale: 0.98 } : {}}
      >
        {isGenerating ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            <span>Generating...</span>
          </>
        ) : (
          <>
            <ImageIcon className="w-5 h-5" />
            <span>Generate Image</span>
          </>
        )}
      </motion.button>

      {/* Generated Image Display */}
      <AnimatePresence>
        {generatedImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Generated Image</h3>
              <button
                onClick={downloadImage}
                className="btn-secondary flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
            
            <div className="image-display">
              <img
                src={generatedImage}
                alt="Generated"
                className="generated-image"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}