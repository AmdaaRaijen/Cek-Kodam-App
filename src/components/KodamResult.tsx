import React from "react";
import Loading from "./Loading";
import { CldImage } from "next-cloudinary";

interface Props {
  loading: boolean;
  data: {
    kodam: string;
    image: string;
    cloudinaryPublicId: string;
  };
}

export default function KodamResult({ loading, data }: Props) {
  return (
    <div className="relative z-[1] flex place-items-center flex-col items-center gap-5 mb-5 mt-20">
      <h1 className="text-4xl lg:text-6xl font-bold tracking-wide drop-shadow-md">
        Cek Kodam Online
      </h1>

      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center justify-center text-center gap-5">
          {data.kodam}
          {data.image && (
            <CldImage
              className="w-full max-w-xs rounded-xl shadow-md"
              src={data.cloudinaryPublicId}
              alt="Kodam"
              width="1024"
              height="1024"
            />
          )}
        </div>
      )}
    </div>
  );
}
