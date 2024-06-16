import cloudinary from "@/libs/cloudinary";
import Axios from "axios";
import fs from "fs";
import path from "path";

async function downloadImage(url: string, filePath: string) {
  const writer = fs.createWriteStream(filePath);

  const response = await Axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

const savePath = path.join(__dirname, "../../public/resultImages");

fs.mkdirSync(savePath, { recursive: true });

export default async function uploadImage(url: string, fileName: string) {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    await downloadImage(url, path.join(savePath, fileName));

    const result = await cloudinary.v2.uploader.upload(
      path.join(savePath, fileName),
      options
    );

    fs.unlinkSync(path.join(savePath, fileName));

    console.log("Image uploaded to cloudinary", result);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}