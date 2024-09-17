// src/routes/api/meme/+server.js
import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function GET({ request }) {
  try {
    const memesDirectory = path.join(process.cwd(), 'static/meme');
    const memeFiles = fs.readdirSync(memesDirectory);
    return json({ success: true, data: memeFiles });
  } catch (error) {
    console.error(error);
    return json({
      success: false,
      message: "Error fetching meme files",
    }, { status: 500 });
  }
}

export async function POST({ request }) {
  return json({ success: false, message: "Method not allowed" }, { status: 405 });
}
