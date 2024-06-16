"use server";

import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import openai from "../libs/openai";
import uploadImage from "@/utils/uploadImage";

export default async function generateGambarKodam(
  namaKodam: string
): Promise<UploadApiResponse | UploadApiErrorResponse | null> {
  console.log("generating image for ", namaKodam);

  const prompt = `Buatlah sebuah gambar yang terinspirasi dari nama ${namaKodam}. Gambar ini harus bersifat umum dan mencakup elemen-elemen yang secara artistik menggambarkan karakter atau esensi dari nama tersebut. Gunakan kreativitas Anda untuk menghasilkan gambar yang menarik dan unik.`;

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

  const imageUrl = response.data[0].url as string;

  const uploadedImage = await uploadImage(imageUrl, `${namaKodam}.png`);

  return uploadedImage;
}
