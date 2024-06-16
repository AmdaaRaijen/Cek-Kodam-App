import React, { FormEvent } from "react";

interface Props {
  handleSubmit: (e: FormEvent) => void;
  loading: boolean;
}

export default function InputKodam({ handleSubmit, loading }: Props) {
  return (
    <div className=" grid text-center  mb-32 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left ">
      <form
        className="mb-3 flex items-center justify-center px-2 gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="w-8/12 lg:w-10/12 lg:text-2xl text-lg font-semibold  shadow-md placeholder-primary  text-primary bg-transparent  backdrop-blur-sm rounded-lg border focus:outline-none focus:ring-zinc-800/30 focus:border-secondary/30 border-secondary  hover:border-secondary/70 px-5 py-4 transition-colors hover:bg-secondary/10 dark:border-secondary dark:bg-neutral-800/30"
          name="nama"
          disabled={loading}
          placeholder="Tulis Namamu Di Sini"
        />
        <button
          disabled={loading}
          className="w-4/12 lg:w-2/12 lg:text-2xl text-lg font-semibold shadow-md  text-primary bg-transparent  backdrop-blur-sm rounded-lg border focus:outline-none focus:ring-zinc-800/30 focus:border-secondary/30 border-secondary  hover:border-secondary/70 px-5 py-4 transition-colors hover:bg-secondary/10 dark:border-secondary dark:bg-neutral-800/30"
        >
          Cek
        </button>
      </form>
    </div>
  );
}
