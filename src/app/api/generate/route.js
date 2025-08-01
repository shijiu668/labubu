import { NextResponse } from 'next/server'

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
    const imageBuffer = await image.arrayBuffer()
    const imageBase64 = Buffer.from(imageBuffer).toString('base64')
    const imageUrl = `data:${image.type};base64,${imageBase64}`

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