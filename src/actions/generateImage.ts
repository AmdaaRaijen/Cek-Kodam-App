"use server";

import openai from "../libs/openai";

export default async function generateGambarKodam(namaKodam: string) {
  console.log("generating image for ", namaKodam);

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: namaKodam,
    size: "1024x1024",
    quality: "standard",
    n: 1,
  });

  const image_url = response.data[0].url;

  return image_url;
}
