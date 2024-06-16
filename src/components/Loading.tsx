"use client";
import React from "react";
import { HashLoader } from "react-spinners";

export default function Loading() {
  const loadingTextArray = [
    "Abrakadabra, kodam datanglah!",
    "Sim salabim, muncullah wahai kodam!",
    "Kodam sakti, hadirkan dirimu!",
    "Hocus pocus, kodam fokus!",
    "Mantra sakti, kodam terbang tinggi!",
    "Kodam gaib, segera hadir!",
    "Hadir wahai kodam, atas nama mantra sakti!",
    "Kodam kuno, muncullah sekarang!",
    "Kodam mistik, terbanglah kemari!",
    "Kodam agung, tampakkan wujudmu!",
    "Dengan mantra sakti, kodam datanglah!",
    "Kodam sakti mandraguna, hadir di sini!",
    "Kodam suci, muncullah di hadapanku!",
    "Kodam sejati, dengarkan panggilanku!",
    "Kodam perkasa, segera tampakkan dirimu!",
    "Kodam sakti, melalui mantra ini datanglah!",
    "Kodam rahasia, munculkan dirimu sekarang!",
    "Kodam legendaris, terimalah panggilanku!",
    "Kodam gaib, dengan mantra ini hadir!",
    "Kodam sakti, datanglah dari dimensi lain!",
  ];

  const [text, setText] = React.useState(
    loadingTextArray[Math.floor(Math.random() * loadingTextArray.length)]
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setText(
        loadingTextArray[Math.floor(Math.random() * loadingTextArray.length)]
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p className="font-semibold drop-shadow-md">{text}</p>
      <HashLoader color="#3A4D39" />
    </div>
  );
}
