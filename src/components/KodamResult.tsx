import React from "react";
import Loading from "./Loading";
import { CldImage } from "next-cloudinary";

interface Props {
  loading: boolean;
  error?: string;
  data: {
    kodam: string;
    image: string;
    cloudinaryPublicId: string;
  };
}

export default function KodamResult({ loading, data, error }: Props) {
  return (
    <div className="relative z-[1] flex place-items-center flex-col items-center gap-5 mb-5 mt-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-wide drop-shadow-md">
          Cek Kodam Online
        </h1>
        {!loading && !data.kodam && (
          <p className="drop-shadow-md max-w-sm lg:max-w-md text-center text-xs lg:text-base text-secondary">
            Website untuk Cek kodam online dengan memasukkan namamu di bawah.
            Just for fun! ✨
          </p>
        )}
      </div>

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

      {error && (
        <p className="text-red-500 text-center text-xs lg:text-base">{error}</p>
      )}
    </div>
  );
}
