"use client";
import { Particle } from "@/components/Particle";
import { FormEvent, useState } from "react";
import { Poppins } from "next/font/google";
import KodamResult from "@/components/KodamResult";
import InputKodam from "@/components/InputKodam";
import WaterMark from "@/components/WaterMark";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const [state, setState] = useState({
    kodam: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    fetch("/api/kodam", {
      method: "POST",
      body: new FormData(e.target as HTMLFormElement),
    })
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main
      className={`${poppins.className} flex min-h-screen flex-col items-center justify-between lg:p-24 text-[#3A4D39] bg-[#ECE3CE]/70`}
    >
      <Particle />

      <WaterMark />

      <KodamResult loading={loading} data={state} />

      <InputKodam handleSubmit={handleSubmit} />
    </main>
  );
}
