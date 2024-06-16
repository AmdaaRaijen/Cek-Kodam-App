import prisma from "@/libs/prisma";

interface Data {
  resultName: string;
  resultUrl: string;
  resultPath: string;
  userName: string;
}

export default async function saveResult(data: Data) {
  const number = (await counter()) + 1;

  const result = await prisma.results.create({
    data: {
      resultName: data.resultName,
      resultImageUrl: data.resultUrl,
      resultImagePath: data.resultPath,
      userName: data.userName,
      number: number,
    },
  });

  return result;
}

async function counter() {
  return await prisma.results.count();
}
