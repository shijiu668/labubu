import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const image = formData.get('image')
    const prompt = formData.get('prompt')
    const size = formData.get('size') || '1:1'

    if (!image || !prompt) {
      return NextResponse.json(
        { error: 'Image and prompt are required' },
        { status: 400 }
      )
    }

    // First, we need to upload the image to a temporary storage or convert to URL
    // For this example, we'll create a temporary blob URL
    // 上传图片到Vercel Blob获得短URL
    const imageBuffer = await image.arrayBuffer()

    // 🐛 调试：上传图片过程
    console.log('📤 开始上传图片到Vercel Blob...')
    console.log('  - 图片大小:', imageBuffer.byteLength, 'bytes')

    try {
      // 上传到Vercel Blob存储
      const blob = await put(`temp-${Date.now()}-${image.name}`, imageBuffer, {
        access: 'public',
        contentType: image.type,
      })

      const imageUrl = blob.url
      console.log('✅ 图片上传成功!')
      console.log('  - 短URL:', imageUrl)
      console.log('  - URL长度:', imageUrl.length, '字符')

    } catch (uploadError) {
      console.error('❌ 图片上传失败:', uploadError)
      // 降级方案：使用base64（但会很长）
      const imageBase64 = Buffer.from(imageBuffer).toString('base64')
      const imageUrl = `data:${image.type};base64,${imageBase64}`
      console.log('⚠️  使用降级方案 - Base64 URL长度:', imageUrl.length, '字符')
    }

    // Prepare the API request
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    if (!apiKey) {
      console.error('API key not found')
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      )
    }

    // Call the external API
    const apiResponse = await fetch('https://api.apicore.ai/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'flux-kontext-pro',
        prompt: `${imageUrl} ${prompt}`,
        size: size
      })
    })

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text()
      console.error('API Error:', errorText)
      return NextResponse.json(
        { error: 'Image generation failed' },
        { status: apiResponse.status }
      )
    }

    const result = await apiResponse.json()

    // The API should return the generated image URL
    // You may need to adjust this based on the actual API response structure
    return NextResponse.json({
      success: true,
      imageUrl: result.data?.[0]?.url || result.imageUrl || result.url,
      message: 'Image generated successfully'
    })

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}