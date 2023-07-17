import { Advice } from "@/components/Advice";

export default function Home() {
  return (
    <main
      className="w-full max-w-[540px] bg-dark-grayish-blue rounded-xl mt-4 mb-12 
    shadow-[0_2px_15px_rgb(0,0,0,0.05)]"
    >
      <Advice />
    </main>
  );
}
