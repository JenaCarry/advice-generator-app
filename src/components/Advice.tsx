"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface AdviceProps {
  id: number;
  advice: string;
}

export function Advice() {
  const [adviceApi, setAdviceApi] = useState<AdviceProps | null>(null);
  const [initialAdvice, setInitialAdvice] = useState<AdviceProps | null>(null);
  const [buttonAdvice, setButtonAdvice] = useState("");

  function fetchApi() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdviceApi(data.slip);
        setButtonAdvice("animate-spin cursor-not-allowed");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchApi();
  }, []);

  if (buttonAdvice !== "") {
    setTimeout(() => {
      setButtonAdvice("");
    }, 2000);
  }

  return (
    <section className="text-center relative px-7 pt-10 pb-16 min-[481px]:px-11">
      <h2 className="text-sm text-neon-green uppercase tracking-[0.25em] mb-8">
        Advice # {adviceApi?.id ? adviceApi.id : initialAdvice?.id}
      </h2>
      <p className="max-[481px]:text-[1.375rem] text-[1.75rem] mb-6">
        {adviceApi?.advice ? adviceApi.advice : initialAdvice?.advice}
      </p>
      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2">
        <button
          className={`${"bg-neon-green p-5 rounded-full hover:shadow-[0_0_30px_0_rgb(82,255,168)]"} ${buttonAdvice}`}
          onClick={fetchApi}
        >
          <Image src="/icon-dice.svg" alt="Icon Dice" width="24" height="24" />
        </button>
      </div>
    </section>
  );
}
