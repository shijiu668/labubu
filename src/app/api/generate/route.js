import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const image = formData.get('image')
    const prompt = formData.get('prompt')
    const size = formData.get('size') || '1:1'

    // 🐛 调试：打印接收到的请求参数
    console.log('=== API调试信息 ===')
    console.log('📥 接收到的参数:')
    console.log('  - 图片文件名:', image?.name || 'undefined')
    console.log('  - 图片类型:', image?.type || 'undefined')
    console.log('  - 图片大小:', image?.size || 'undefined', 'bytes')
    console.log('  - 提示词:', prompt)
    console.log('  - 尺寸比例:', size)

    if (!image || !prompt) {
      return NextResponse.json(
        { error: 'Image and prompt are required' },
        { status: 400 }
      )
    }

    // 上传图片到Vercel Blob获得短URL
    const imageBuffer = await image.arrayBuffer()
    let imageUrl; // 在外部作用域定义变量

    // 🐛 调试：上传图片过程
    console.log('📤 开始上传图片到Vercel Blob...')
    console.log('  - 图片大小:', imageBuffer.byteLength, 'bytes')

    try {
      // 上传到Vercel Blob存储
      const blob = await put(`temp-${Date.now()}-${image.name}`, imageBuffer, {
        access: 'public',
        contentType: image.type,
      })

      imageUrl = blob.url
      console.log('✅ 图片上传成功!')
      console.log('  - 短URL:', imageUrl)
      console.log('  - URL长度:', imageUrl.length, '字符')

    } catch (uploadError) {
      console.error('❌ 图片上传失败:', uploadError)
      // 降级方案：使用base64
      const imageBase64 = Buffer.from(imageBuffer).toString('base64')
      imageUrl = `data:${image.type};base64,${imageBase64}`
      console.log('⚠️  使用降级方案 - Base64 URL长度:', imageUrl.length, '字符')
    }

    // 准备API请求
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    if (!apiKey) {
      console.error('❌ API密钥未配置')
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      )
    }

    // 🐛 调试：API密钥状态
    console.log('🔑 API密钥检查:')
    console.log('  - API密钥状态:', apiKey ? '✅ 已配置' : '❌ 未配置')
    console.log('  - API密钥前缀:', apiKey ? apiKey.substring(0, 15) + '...' : 'undefined')

    // 准备API请求体
    const apiRequestBody = {
      model: 'flux-kontext-pro',
      prompt: `${imageUrl} ${prompt}`,
      size: size
    }

    // 🐛 调试：准备发送给外部API的数据
    console.log('=== 🚀 外部API调用详情 ===')
    console.log('📤 请求配置:')
    console.log('  - API地址:', 'https://api.apicore.ai/v1/images/generations')
    console.log('  - 请求方法: POST')
    console.log('  - Content-Type: application/json')

    console.log('📋 请求体数据:')
    console.log('  - 模型:', apiRequestBody.model)
    console.log('  - 图片尺寸:', apiRequestBody.size)
    console.log('  - 图片URL:', imageUrl)
    console.log('  - 用户提示词:', prompt)
    console.log('  - 完整提示词长度:', apiRequestBody.prompt.length, '字符')
    console.log('  - 完整提示词内容:', apiRequestBody.prompt)

    console.log('📦 完整请求体JSON:')
    console.log(JSON.stringify(apiRequestBody, null, 2))

    // 记录开始时间
    const startTime = Date.now()
    console.log('⏰ 开始API调用时间:', new Date(startTime).toISOString())

    // 调用外部API
    let apiResponse;
    try {
      console.log('🚀 正在调用外部API...')
      apiResponse = await fetch('https://api.apicore.ai/v1/images/generations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiRequestBody)
      })
      console.log('📡 API调用完成，开始处理响应...')
    } catch (fetchError) {
      console.error('❌ API调用异常:', fetchError.message)
      console.error('❌ 详细错误信息:', fetchError)
      console.log('=== ❌ API调试信息结束 (调用异常) ===\n')
      return NextResponse.json(
        { error: 'API调用失败', details: fetchError.message },
        { status: 500 }
      )
    }

    // 记录响应时间
    const responseTime = Date.now()
    console.log('📨 外部API响应详情:')
    console.log('  - 响应时间:', new Date(responseTime).toISOString())
    console.log('  - 响应状态码:', apiResponse.status)
    console.log('  - 响应状态文本:', apiResponse.statusText)

    if (!apiResponse.ok) {
      console.error('❌ API调用失败!')
      const errorText = await apiResponse.text()
      console.error('📄 错误响应内容:', errorText)

      console.log('=== ❌ API调试信息结束 (失败) ===\n')
      return NextResponse.json(
        { error: 'Image generation failed', details: errorText },
        { status: apiResponse.status }
      )
    }

    // 成功响应处理
    console.log('✅ API调用成功!')
    const result = await apiResponse.json()

    console.log('📋 响应JSON结构:')
    console.log(JSON.stringify(result, null, 2))

    // 提取图片URL
    const generatedImageUrl = result.data?.[0]?.url || result.imageUrl || result.url || result.image_url
    console.log('🖼️  生成的图片URL:', generatedImageUrl || 'undefined')

    // 计算总耗时
    const endTime = Date.now()
    console.log('⏱️  总处理耗时:', endTime - startTime, 'ms')
    console.log('=== ✅ API调试信息结束 (成功) ===\n')

    // 返回成功响应
    return NextResponse.json({
      success: true,
      imageUrl: generatedImageUrl,
      message: 'Image generated successfully'
    })

  } catch (error) {
    console.error('❌ 服务器错误:', error)
    console.log('=== ❌ 服务器错误调试信息结束 ===\n')
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
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