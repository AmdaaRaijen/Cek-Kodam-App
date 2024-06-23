import { namaIsEmptyException } from "./kodam.exception";
import {
  getDataFromDatabase,
  getDataFromGemini,
  getDataFromOpenAI,
} from "./kodam.servive";

const KODAM_GENERATE_SOURCE = process.env.KODAM_GENERATE_SOURCE;

export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();

  const nama: string | null = formData.get("nama") as string;

  if (!nama) {
    return namaIsEmptyException("Silahkan masukkan namamu terlebih dahulu!");
  }

  if (KODAM_GENERATE_SOURCE === "DATABASE") {
    return await getDataFromDatabase();
  }

  if (KODAM_GENERATE_SOURCE === "GEMINI") {
    return getDataFromGemini();
  }

  return await getDataFromOpenAI(nama);
}
