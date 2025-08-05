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

    const sizeMap = {
      '1:1': '1024x1024',
      '16:9': '1344x768',
      '9:16': '768x1344',
      '4:3': '1152x896',
      '3:4': '896x1152',
      '21:9': '1536x640'
    };
    const apiSize = sizeMap[size] || '1024x1024';

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
        size: apiSize
      })
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text()
      console.error(`--- [API返回错误] ---
      - 时间: ${new Date().toISOString()}
      - 前端传来的尺寸(size): ${size}
      - API返回的原始错误信息: ${errorText}
      ---------------------------------`);
      return NextResponse.json(
        { error: 'Image generation failed' },
        { status: apiResponse.status }
      )
    }

    const result = await apiResponse.json()

    // +++ 这是添加的成功日志 +++
    console.log(`--- [API返回成功] ---
    - 时间: ${new Date().toISOString()}
    - 前端传লেই尺寸(size): ${size}
    - API返回的完整数据结构: ${JSON.stringify(result, null, 2)}
    ---------------------------------`);

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