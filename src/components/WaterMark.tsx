import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WaterMark() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <Link
        href="https://github.com/AmdaaRaijen/Cek-Kodam-App"
        className="fixed left-0 top-0 flex w-full justify-center items-center gap-3 shadow-md border-b border-secondary bg-gradient-to-b pb-4 pt-6 backdrop-blur-sm dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-100/30"
      >
        <code className="font-mono font-bold">Github </code>
        <Image
          src="/github.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
      </Link>
      <div className="fixed bottom-0 left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0 drop-shadow-md"
          href="https://www.instagram.com/a.amdaa_"
          target="_blank"
          rel="noopener noreferrer"
        >
          By <p className="text-xl font-semibold">Amda23</p>
        </a>
      </div>
    </div>
  );
}
