import generateKodam from "../../../actions/generateKodam";
import { saveResult } from "./kodam.repository";

export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();

  const nama: string | null = formData.get("nama") as string;

  if (!nama) {
    return new Response(
      JSON.stringify({
        message: "Silahkan masukkan namamu terlebih dahulu!",
      }),
      {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

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
