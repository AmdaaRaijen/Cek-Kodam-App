import prisma from "@/libs/prisma";

interface Data {
  resultName: string;
  resultUrl: string;
  resultPath: string;
  userName: string;
}

export async function saveResult(data: Data) {
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

export async function getResult() {
  const counter = await prisma.results.count();

  const random = Math.floor(Math.random() * counter);

  return await prisma.results.findFirst({
    where: {
      number: random,
    },
    select: {
      resultName: true,
      resultImageUrl: true,
      resultImagePath: true,
    },
  });
}

async function counter() {
  return await prisma.results.count();
}
