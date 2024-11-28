// pages/index.tsx
"use client";
import { useState } from "react";
// import SelectionForm from "@/components/SelectionForm";
import TextShimmerColor from "@/components/motion-ui/TextShimmerColor"
import Link from "next/link";
import Image from "next/image";

type Mood = "happy" | "sad" | "angry" | "tired";
type Productivity = "full" | "half" | "low";
type Sociality = "hangout" | "helping" | "alone";

const getCharacter = (
  mood: Mood,
  productivity: Productivity,
  sociality: Sociality
) => {
  if (mood === "happy" && productivity === "full" && sociality === "hangout") {
    return "Bubbles: You’re cheerful and always ready for fun!";
  } else if (
    mood === "angry" &&
    productivity === "half" &&
    sociality === "alone"
  ) {
    return "Buttercup: Strong, independent, and prefers solitude.";
  } else if (
    mood === "sad" &&
    productivity === "low" &&
    sociality === "helping"
  ) {
    return "Blossom: Thoughtful, caring, and ready to help.";
  } else {
    return "You’re a unique mix of Powerpuff traits!";
  }
};

const Home: React.FC = () => {
  const [character, setCharacter] = useState<string | null>(null);

  const handleFormSubmit = (
    mood: Mood,
    productivity: Productivity,
    sociality: Sociality
  ) => {
    const result = getCharacter(mood, productivity, sociality);
    setCharacter(result);
  };

  return (
    <div className="py-6 px-16 h-[80vh]">
      <main className="flex flex-col items-center justify-center md:justify-between gap-8">
      <nav className="flex gap-2 justify-between px-8 py-4 border-[3px] border-black rounded-lg w-full">
        <div>Logo</div>
        <div className="flex gap-1">
          <img src="/blossom.svg" width={50} alt="Blossom" />
        </div>
        <div>About</div>
      </nav>
      <section className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-7 md:grid-rows-[1fr_auto]">
        {[
          {
            bg: "bg-gradient-to-r from-slate-100 via-purple-300 to-slate-100",
            src: "/pngegg (1).png",
            isRowSpan: true,
            name: "Powerpuff Girls",
            desc: "Superhero in Townsville",
          },
          {
            bg: "bg-gradient-to-b from-sky-300 via-cyan-100 to-sky-300",
            src: "/pngegg (4).png",
            name: "Bubbles",
            desc: "The joy and the laughter",
          },
          {
            bg: "bg-gradient-to-b from-pink-300 via-purple-100 to-pink-300",
            src: "/pngegg5.png",
            name: "Blossom",
            desc: "The commander and the leader",
          },
          {
            bg: "bg-gradient-to-b from-emerald-300 via-green-100 to-emerald-300",
            src: "/pngegg (3).png",
            name: "Buttercup",
            desc: "The toughest fighter",
          },
        ].map((item, index) => (
          // Group per icon box
          <div
            key={index}
            className={`${
              item.bg
            } group relative flex items-center justify-center overflow-hidden rounded-lg border-2 ${
              item.isRowSpan ? "md:row-span-2 h-full" : "h-56 md:h-64"
            }`}
          >
            <div
              className={`absolute bottom-[-32px] left-0 hidden w-full border-t-2 px-4 py-2 text-center ${
                item.src === "/pngegg (1).png"
                  ? "group-hover:text-center"
                  : "group-hover:text-start"
              } text-black bg-slate-300 transition-transform duration-300 ease-out group-hover:translate-y-[-32px] md:block`}
            >
              <span className="text-4xl uppercase font-ppg text-black tracking-wider">
                {item.name}
              </span>
              <p className="line-clamp-2 h-8 leading-4 mt-2 text-xl">
                {item.desc}
              </p>
            </div>
            <Image
              src={item.src}
              width={item.src === "/pngegg (1).png" ? 300 : 130}
              height={item.src === "/pngegg (1).png" ? 300 : 130}
              alt="Powerpuff Girl"
              className={`transition-transform ease-out ${
                item.src === "/pngegg (1).png" && item.isRowSpan
                  ? ""
                  : "md:group-hover:translate-x-[55px]"
              } group-hover:translate-y-[-6px] duration-300 ease-out group-hover:scale-75 md:group-hover:scale-75`}
            />
          </div>
        ))}
        {/* Second Row Content */}
        <div className="col-span-4 md:col-span-3 md:col-start-2">
          <div className="mt-8 flex flex-col gap-3 sm:mt-0 sm:gap-3 font-ticketing">
            <div>
              <h1 className="text-3xl md:text-7xl uppercase leading-9 tracking-tight">
                Which Powerpuff Girls are You Today?
              </h1>
              <p className="mb-2 text-3xl md:text-3xl">
                Ready to uncover your inner hero? <span className="font-bold text-purple-400">Blastpuff Match</span> is a fun,
                interactive journey that matches you with a Powerpuff-inspired
                character based on your unique daily experiences. Every day
                brings a new adventure, and who you are today might surprise
                you! Dive in, explore your story, and let the blast begin!
              </p>
            </div>
            <Link
              href="#"
              className="w-[300px] text-4xl uppercase text-center group bg-black font-semibold py-4 px-6 rounded-lg shadow-md overflow-hidden"
            >
              <TextShimmerColor>Play now</TextShimmerColor>
            </Link>
          </div>
        </div>
      </section>
 </main>
      {/* <section className="bg-rose-300 p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Which Powerpuff Are You Today?
        </h1>
        {character ? (
          <div className="text-xl text-center">
            <p>{character}</p>
          </div>
        ) : (
          <SelectionForm onSubmit={handleFormSubmit} />
        )}
      </section> */}
    </div>
  );
};

export default Home;
