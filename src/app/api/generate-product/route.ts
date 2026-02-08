import { NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

export async function POST() {
  try {
    const zai = await ZAI.create();

    const response = await zai.images.generations.create({
      prompt: 'Premium smart water bottle, sleek modern design, minimalist tech product, white and silver colors, studio lighting on white background, professional product photography, high quality, transparent background style',
      size: '1024x1024'
    });

    const imageBase64 = response.data[0].base64;
    const buffer = Buffer.from(imageBase64, 'base64');

    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Save image
    const outputPath = path.join(publicDir, 'product.png');
    fs.writeFileSync(outputPath, buffer);

    return NextResponse.json({
      success: true,
      imageUrl: '/product.png'
    });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
