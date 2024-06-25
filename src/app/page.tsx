"use client";
import { Particle } from "@/components/Particle";
import { FormEvent, useState } from "react";
import KodamResult from "@/components/KodamResult";
import InputKodam from "@/components/InputKodam";
import WaterMark from "@/components/WaterMark";

export default function Home() {
  const [kodamData, setKodamData] = useState({
    kodam: "",
    image: "",
    cloudinaryPublicId: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (!name.trim()) {
      setError("Silahkan masukkan namamu terlebih dahulu!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/kodam", {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        setLoading(false);
        return;
      }

      setKodamData(data);
      setError("");
    } catch (error) {
      setError("Terjadi kesalahan saat memproses data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 text-primary bg-background/70">
      <Particle />

      <WaterMark />

      <KodamResult loading={loading} data={kodamData} error={error} />

      <InputKodam
        handleSubmit={handleSubmit}
        loading={loading}
        setName={setName}
      />
    </main>
  );
}
