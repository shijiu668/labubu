import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // 解析 JSON 请求体
    const { imageUrl, prompt, size } = await request.json();

    if (!imageUrl || !prompt) {
      return NextResponse.json(
        { error: 'Image URL and prompt are required' },
        { status: 400 }
      );
    }

    // 准备 API 请求
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (!apiKey) {
      console.error('API key not found');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }
    console.log(`[调试日志] 发送给API的Prompt: ${imageUrl} ${prompt}`);
    const apiResponse = await fetch('https://api.apicore.ai/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'flux-kontext-pro',
        prompt: `${imageUrl} ${prompt}`,
        size: size || '1:1'
      })
    });
    // ...

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