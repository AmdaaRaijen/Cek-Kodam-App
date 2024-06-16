import generateKodam from "../../../actions/generateKodam";
import saveResult from "./kodam.repository";

export async function POST(request: Request) {
  const formData = await request.formData();

  const nama = formData.get("nama") as string;

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
