import generateKodam from "../../../actions/generateKodam";

export async function POST(request: Request) {
  const formData = await request.formData();

  const nama = formData.get("nama") as string;

  const result = await generateKodam(nama);

  return new Response(JSON.stringify(result), {
    headers: {
      "content-type": "application/json",
    },
  });
}
