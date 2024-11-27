// pages/index.tsx
"use client";
import { useState } from "react";
import SelectionForm from "@/components/SelectionForm";
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
    <div className="flex flex-col items-center justify-center space-y-4 px-10">
      <nav className="flex gap-2 justify-between px-4 py-2 border border-black w-full">
        <div>Logo</div>
        <div>About</div>
      </nav>
      <section className="grid grid-cols-4 h-[78vh] gap-2 sm:gap-4 md:gap-7">
        <div className="md:row-span-2 flex flex-wrap gap-4">
          {[
            { bg: "bg-purple-200", src: "/buttercup.png" },
            { bg: "bg-[#fbafc1]", src: "/blossom.png" },
            { bg: "bg-[#3eafeb]", src: "/bubbles.png" },
            { bg: "bg-[#50b442]", src: "/buttercup.png" },
          ].map((item, index) => (
            // group per icon box
            <div
              key={index}
              className={`${item.bg} group relative flex h-32 w-32 md:h-48 md:w-48 items-center justify-center overflow-hidden rounded-xl border-2`}
            >
              <div className="absolute bottom-[-32px] left-0 hidden w-full border-t-2 px-4 py-2 text-center text-white bg-black transition-transform duration-300 group-hover:translate-y-[32px] md:block">
                <span className="text-xl uppercase">Powerpuff</span>
                <p className="line-clamp-2 h-8 leading-4 mt-2">
                  Powerpuff Girl
                </p>
              </div>
              <Image
                src={item.src}
                width={150}
                height={150}
                alt="Powerpuff Girl"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="col-span-4 md:col-span-3 md:col-start-2">
          <div className="mt-4 flex flex-col gap-3 sm:mt-0 sm:gap-3">
            <h1 className="text-4xl uppercase leading-9 tracking-tight sm:text-7xl">
              Which Powerpuff are You Today?
            </h1>
            <p className="mb-2 text-lg leading-7 md:text-xl">
              A fun play-to-learn platform
            </p>
            <Link
              href="#"
              className="px-4 py-2 text-2xl bg-black text-white uppercase"
            >
              Play Now
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-rose-300 p-8 rounded-lg shadow-xl">
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
      </section>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        numquam eaque iure odio sapiente, impedit aliquid exercitationem sunt in
        totam sed repellendus, aliquam dolores. Saepe nobis officia quae
        expedita nulla?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        numquam eaque iure odio sapiente, impedit aliquid exercitationem sunt in
        totam sed repellendus, aliquam dolores. Saepe nobis officia quae
        expedita nulla?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        numquam eaque iure odio sapiente, impedit aliquid exercitationem sunt in
        totam sed repellendus, aliquam dolores. Saepe nobis officia quae
        expedita nulla?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        numquam eaque iure odio sapiente, impedit aliquid exercitationem sunt in
        totam sed repellendus, aliquam dolores. Saepe nobis officia quae
        expedita nulla?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        numquam eaque iure odio sapiente, impedit aliquid exercitationem sunt in
        totam sed repellendus, aliquam dolores. Saepe nobis officia quae
        expedita nulla?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        numquam eaque iure odio sapiente, impedit aliquid exercitationem sunt in
        totam sed repellendus, aliquam dolores. Saepe nobis officia quae
        expedita nulla?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        numquam eaque iure odio sapiente, impedit aliquid exercitationem sunt in
        totam sed repellendus, aliquam dolores. Saepe nobis officia quae
        expedita nulla?
      </h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        numquam eaque iure odio sapiente, impedit aliquid exercitationem sunt in
        totam sed repellendus, aliquam dolores. Saepe nobis officia quae
        expedita nulla?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        numquam eaque iure odio sapiente, impedit aliquid exercitationem sunt in
        totam sed repellendus, aliquam dolores. Saepe nobis officia quae
        expedita nulla?
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        numquam eaque iure odio sapiente, impedit aliquid exercitationem sunt in
        totam sed repellendus, aliquam dolores. Saepe nobis officia quae
        expedita nulla?
      </div>
    </div>
  );
};

export default Home;
