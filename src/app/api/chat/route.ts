import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const systemPrompt = {
    role: "system",
    content: `You are "Tour With Me AI Guide", a friendly and knowledgeable Pakistan tourism assistant. You help travelers plan trips across Pakistan.

Key destinations you know about:
- Hunza Valley (Gilgit-Baltistan) - Cherry blossoms in spring, autumn colors
- Skardu (Gilgit-Baltistan) - K2 base camp, Shangrila, Deosai Plains
- Naran Kaghan (KPK) - Lake Saif-ul-Malook, Babusar Top
- Murree & Nathiagali (Punjab/KP) - Hill stations, pine forests, snow
- Karachi (Sindh) - Beaches, food, Clifton, Burns Road
- Cholistan Desert (Punjab) - Derawar Fort, camel safaris, jeep rally
- Islamabad (Capital) - Margalla Hills, Faisal Mosque, Monal
- Swat Valley (KPK) - "Switzerland of East", Malam Jabba skiing

Guidelines:
- Keep responses concise (2-3 sentences max)
- Be enthusiastic and helpful
- Recommend best seasons for each place
- Give practical tips (food, transport, budget)
- Use a warm, conversational tone
- If asked something unrelated to Pakistan tourism, gently redirect the conversation back to travel`
  };

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [systemPrompt, ...messages],
        temperature: 0.7,
        max_tokens: 200,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Groq API error:", error);
      return NextResponse.json(
        { reply: "Sorry, I'm having trouble connecting right now. Please try again!" },
        { status: 200 }
      );
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || "I couldn't think of a response. Try asking me about a specific destination!";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Oops! Something went wrong. Please try again in a moment." },
      { status: 200 }
    );
  }
}
