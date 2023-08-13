import ytGet from "yt-get";
const { Deepgram } = require("@deepgram/sdk");

export async function POST(request) {
  try {
    const body = await request.json();
    const VIDEO_URL = body["video-url"];
    const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);
    const { mp3, title } = await ytGet.getVideoMP3Binary(VIDEO_URL);
    const result = await deepgram.transcription.preRecorded(
      {
        buffer: mp3,
        mimetype: "audio/mpeg",
      },
      {
        punctuate: true,
        utterances: true,
      }
    );
    const transcript = result.toWebVTT();
    const lines = transcript.split("\n");
    lines.splice(0, 9);
    let data = "";
    lines.forEach((line) => {
      if (!line.includes("-->")) {
        data += line + " ";
      }
    });
    return new Response(JSON.stringify({ transcript: data, title: title }));
  } catch (e) {
    return new Response("Error");
  }
}
