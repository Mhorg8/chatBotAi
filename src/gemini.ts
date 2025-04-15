import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyD2-yq4h8iGG0bB2-3-r4AO-rGChRNcb_4",
});

export default async function chat(propmpt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: propmpt,
  });
  return response.text;
}
