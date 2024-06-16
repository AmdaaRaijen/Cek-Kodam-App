"use client";
import { Particle } from "@/components/Particle";
import { FormEvent, useState } from "react";
import KodamResult from "@/components/KodamResult";
import InputKodam from "@/components/InputKodam";
import WaterMark from "@/components/WaterMark";

export default function Home() {
  const [state, setState] = useState({
    kodam: "",
    image: "",
    cloudinaryPublicId: "",
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
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 text-primary bg-background/70">
      <Particle />

      <WaterMark />

      <KodamResult loading={loading} data={state} />

      <InputKodam handleSubmit={handleSubmit} loading={loading} />
    </main>
  );
}
