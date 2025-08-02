import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request) {
    // 从请求的 URL 中获取文件名
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (!filename || !request.body) {
        return NextResponse.json({ error: '缺少文件名或文件内容' }, { status: 400 });
    }

    // 将文件上传到 Vercel Blob，并设置为公开访问
    const blob = await put(filename, request.body, {
        access: 'public',
        addRandomSuffix: true,
    });

    // 返回 Vercel Blob 返回的元数据，其中包含了图片的 url
    return NextResponse.json(blob);
}

// 处理 CORS 预检请求
export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}