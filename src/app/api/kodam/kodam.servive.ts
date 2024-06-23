import generateKodam from "@/actions/generateKodam";
import { getResult, saveResult } from "./kodam.repository";

export async function getDataFromDatabase() {
  const result = await getResult();

  if (!result) {
    return new Response(
      JSON.stringify({
        message: "Terjadi kesalahan saat memproses data",
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  return new Response(
    JSON.stringify({
      kodam: result.resultName,
      image: result.resultImageUrl,
      cloudinaryPublicId: result.resultImagePath,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}

export async function getDataFromOpenAI(nama: string) {
  const result = await generateKodam(nama);

  if (result.error) {
    return new Response(JSON.stringify(result), {
      headers: {
        "content-type": "application/json",
      },
    });
  }

  await saveResult({
    resultName: result.kodam as string,
    resultUrl: result.image,
    resultPath: result.cloudinaryPublicId,
    userName: nama,
  });

  return new Response(JSON.stringify(result), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export function getDataFromGemini() {
  return new Response(
    JSON.stringify({
      message: "Gemini is not available yet",
    }),
    {
      status: 501,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
