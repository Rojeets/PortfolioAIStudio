import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ text: "API Key missing. Please set up GEMINI_API_KEY." }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    
    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json({ text: "I encountered an error while processing your request." }, { status: 500 });
  }
}
