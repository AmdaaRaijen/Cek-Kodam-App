"use server";

import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import openai from "../libs/openai";
import uploadImage from "@/utils/uploadImage";
import geminiAI from "@/libs/geminiai";

export default async function generateGambarKodam(
  namaKodam: string,
  mode: "OPENAI" | "GEMINI" = "OPENAI"
): Promise<UploadApiResponse | UploadApiErrorResponse | null> {
  console.log("generating image for ", namaKodam);

  const prompt = `Buatlah sebuah gambar yang terinspirasi dari nama "${namaKodam}". Gambar ini harus bersifat umum dan mencakup elemen-elemen yang secara artistik menggambarkan karakter atau esensi dari nama tersebut. Gunakan kreativitas Anda untuk menghasilkan gambar yang menarik dan unik.`;

  if (mode === "GEMINI") {
    await GeminiAiGeneration(prompt);

    return null;
  }
  const imageUrl = await OpenAiGeneration(prompt);

  const uploadedImage = await uploadImage(imageUrl, `${namaKodam}.png`);

  return uploadedImage;
}

async function OpenAiGeneration(prompt: string) {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    size: "1024x1024",
    quality: "standard",
    n: 1,
  });

  if (!response.data || response.data.length === 0) {
    throw new Error("Failed to generate image");
  }

  return response.data[0].url as string;
}

async function GeminiAiGeneration(prompt: string) {
  const result = await geminiAI.generateContent(prompt);

  const response = result.response;

  console.log(response);
}
