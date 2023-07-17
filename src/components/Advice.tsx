"use client";

import Image from "next/image";
import { useState } from "react";
import { Divider } from "./Divider";
import { fetchAdvice } from "./fetchAdvice";

interface AdviceProps {
  id: number;
  advice: string;
}

export function Advice() {
  const [advice, setAdvice] = useState<AdviceProps>({
    id: 117,
    advice: "A common regret in life is wishing one hadn't worked so hard.",
  });
  const [buttonAdvice, setButtonAdvice] = useState("");

  const newFetchAdvice = async () => {
    const data = await fetchAdvice();
    setAdvice(data.slip);
    setButtonAdvice("animate-spin cursor-not-allowed");
  };

  if (buttonAdvice !== "") {
    setTimeout(() => {
      setButtonAdvice("");
    }, 1500);
  }

  return (
    <section className="text-center relative px-7 pt-10 pb-16 min-[481px]:px-11">
      <h2 className="text-sm text-neon-green uppercase tracking-[0.25em] mb-8">
        Advice # {advice.id}
      </h2>
      <p className="max-[481px]:text-[1.375rem] text-[1.75rem] mb-6">
        {advice.advice}
      </p>
      <Divider />
      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2">
        <button
          className={`${"bg-neon-green p-5 rounded-full hover:shadow-[0_0_30px_0_rgb(82,255,168)]"} ${buttonAdvice}`}
          onClick={newFetchAdvice}
        >
          <Image src="/icon-dice.svg" alt="Icon Dice" width="24" height="24" />
        </button>
      </div>
    </section>
  );
}
