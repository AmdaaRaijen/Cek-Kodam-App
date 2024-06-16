"use server";
import openai from "../libs/openai";
import cleanText from "../utils/cleanText";
import generateGambarKodam from "./generateImage";

export default async function generateKodam(nama: string) {
  const systemPrompt =
    "Aku akan memberimu sebuah data berupa nama. Kamu akan Generate nama kodam berdasarkan data nama yang diberikan. Nama kodam akan berasal dari gabungan 2 kata hewan dan benda di sekitar. Data yang hasilkan haruslah hanya berisi 2 kata tersebut saja, tanpa ada tambahan apapun! (contoh: 'Paus Api')";

  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    temperature: 1.2,
    max_tokens: 1000,
    stream: false,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: "nama: " + cleanText(nama),
      },
    ],
  });

  const data = result.choices.at(0);
  const message = data?.message.content;

  if (message) {
    if (message.split(" ").length > 3) {
      console.log(message);
      return {
        error:
          "Mohon Maaf, kodam belum ditemukan 🥲. Mohon untuk mencoba kembali! ✨",
      };
    }
    const imageKodam = await generateGambarKodam(message);

    return {
      kodam: message,
      image: imageKodam?.url,
      cloudinaryPublicId: imageKodam?.public_id,
    };
  }

  console.log(message);

  return {
    error:
      "Mohon Maaf, kodam belum ditemukan 🥲. Mohon untuk mencoba kembali! ✨",
    image: null,
  };
}
