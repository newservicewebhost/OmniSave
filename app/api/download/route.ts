import { NextRequest, NextResponse } from 'next/server';
import ytdl from '@distube/ytdl-core';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');
  
  if (!url || !ytdl.validateURL(url)) {
    return NextResponse.json({ error: 'Valid YouTube URL is required' }, { status: 400 });
  }

  try {
    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title.replace(/[^\w\s]/gi, ''); // sanitize
    
    // Choose format
    const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
    
    const stream = ytdl(url, { format });

    // Node Stream to Web ReadableStream
    const webStream = new ReadableStream({
      start(controller) {
        stream.on('data', (chunk) => controller.enqueue(new Uint8Array(chunk)));
        stream.on('end', () => controller.close());
        stream.on('error', (err) => controller.error(err));
      }
    });

    const headers = new Headers();
    headers.set('Content-Disposition', `attachment; filename="${title}.mp4"`);
    headers.set('Content-Type', 'video/mp4');
    
    return new NextResponse(webStream, { headers });
  } catch (error: any) {
    console.error('YTDL Error:', error);
    return NextResponse.json({ error: 'Failed to download video: ' + error.message }, { status: 500 });
  }
}
