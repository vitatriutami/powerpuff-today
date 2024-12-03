"use client";
// pages/index.tsx
// import { useState } from "react";
// import SelectionForm from "@/components/SelectionForm";
import { motion } from "framer-motion";
import TextShimmerColor from "@/components/motion-ui/TextShimmerColor";
import Link from "next/link";
import Image from "next/image";
import { InView } from "@/components/core/in-view";
// import { TextLoop } from "@/components/motion-ui/TextLoop";
import { TiltCardTrail1 } from "@/components/motion-ui/TiltCardTrail1";
import { TiltCardTrail2 } from "@/components/motion-ui/TiltCardTrail2";
import { TiltCardTrail3 } from "@/components/motion-ui/TiltCardTrail3";
// import { BorderTrailCard2 } from "@/components/motion-ui/BorderTrailCard";

// type Mood = "happy" | "sad" | "angry" | "tired";
// type Productivity = "full" | "half" | "low";
// type Sociality = "hangout" | "helping" | "alone";

// const getCharacter = (
//   mood: Mood,
//   productivity: Productivity,
//   sociality: Sociality
// ) => {
//   if (mood === "happy" && productivity === "full" && sociality === "hangout") {
//     return "Bubbles: You’re cheerful and always ready for fun!";
//   } else if (
//     mood === "angry" &&
//     productivity === "half" &&
//     sociality === "alone"
//   ) {
//     return "Buttercup: Strong, independent, and prefers solitude.";
//   } else if (
//     mood === "sad" &&
//     productivity === "low" &&
//     sociality === "helping"
//   ) {
//     return "Blossom: Thoughtful, caring, and ready to help.";
//   } else {
//     return "You’re a unique mix of Powerpuff traits!";
//   }
// };

const Home: React.FC = () => {
  //   const [_character, setCharacter] = useState<string | null>(null);

  //  const handleFormSubmit = (
  //   _mood: Mood,
  //   _productivity: Productivity,
  //   _sociality: Sociality
  // ) => {
  //   const result = getCharacter(_mood, _productivity, _sociality);
  //   setCharacter(result);
  // };

  return (
    <div>
      <section className="flex flex-1 flex-col items-center justify-center gap-6 py-6 px-16 md:h-[94.5vh]">
        <nav className="flex gap-2 items-center justify-between px-8 py-4 border-[2.5px] border-black rounded-[4.5px] w-full overflow-hidden">
          <div className="flex items-center gap-3">
            <img
              src="/blast.png"
              alt="Blastpuff Match"
              width={250}
              height={50}
            />
            <Link href="#" className="hover:font-semibold">
              About
            </Link>
            <Link href="#" className="hover:font-semibold">
              Contact
            </Link>
          </div>
          {/* <TextLoop
            className="text-lg text-purple-800 hidden md:block"
            interval={3}
            transition={{ duration: 0.4 }}
          >
            <span>How&apos;s your day?</span>
            <span>You did great!</span>
            <span>Explore your inner hero today!</span>
            <span>Match your vibes daily!</span>
          </TextLoop> */}
        </nav>
        <section className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-7 md:grid-rows-[1fr_auto]">
          {[
            {
              bg: "bg-purple-200",
              src: "/tri.png",
              isRowSpan: true,
              name: "The Powerpuff Girls",
              desc: "Superhero in Townsville",
            },
            {
              bg: "bg-sky-200",
              src: "/pngegg (4).png",
              name: "Bubbles",
              desc: "The joy and the laughter",
            },
            {
              bg: "bg-pink-200",
              src: "/pngegg5.png",
              name: "Blossom",
              desc: "The commander and the leader",
            },
            {
              bg: "bg-emerald-200",
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
              } group relative flex items-center justify-center overflow-hidden rounded-[4.5px] border-black border-2 ${
                item.isRowSpan ? "md:row-span-2 h-full" : "h-32 md:h-44"
              }`}
            >
              <div
                className={`absolute bottom-[-38px] left-0 hidden w-full px-4 py-1 text-center ${
                  item.src === "/tri.png"
                    ? "group-hover:text-center"
                    : "group-hover:text-start"
                } text-white bg-black transition-transform duration-300 ease-out group-hover:translate-y-[-38px] md:block`}
              >
                <span className="text-2xl uppercase font-ticketing text-white">
                  {item.name}
                </span>
                <p className="line-clamp-2 h-8 leading-4 mt-2 text-lg text-white">
                  {item.desc}
                </p>
              </div>
              <Image
                src={item.src}
                width={item.src === "/tri.png" ? 300 : 130}
                height={item.src === "/tri.png" ? 300 : 130}
                alt="Powerpuff Girl"
                className={`transition-transform ease-out ${
                  item.src === "/tri.png" && item.isRowSpan
                    ? ""
                    : "md:group-hover:translate-x-[70px]"
                } group-hover:translate-y-[-18px] duration-300 ease-out group-hover:scale-75 md:group-hover:scale-75`}
              />
            </div>
          ))}
          {/* Second Row Content */}
          <div className="col-span-4 md:col-span-3 md:col-start-2">
            <div className="mt-8 flex flex-col gap-3 sm:mt-0 sm:gap-3">
              <div>
                <h1 className="text-3xl md:text-5xl uppercase leading-9 font-ticketing">
                  Which Powerpuff Girls are You Today?
                </h1>
                <p className="mb-2 text-lg md:text-xl">
                  Ready to uncover your inner hero?{" "}
                  <span className="inline-flex">
                    <img
                      src="/blast.png"
                      alt="Blastpuff Match"
                      className="self-center w-52 h-5 mr-1"
                    />
                  </span>
                  is a fun, interactive journey that matches you with a
                  Powerpuff-inspired character based on your unique daily
                  experiences. Every day brings a new adventure, and who you are
                  today might surprise you! Dive in, explore your story, and let
                  the blast begin!
                </p>
              </div>
              <Link
                href="/quiz"
                className="w-[200px] md:w-[300px] font-tracking text-xl md:text-2xl uppercase text-center bg-slate-700 font-semibold py-4 px-6 rounded-[4.5px] shadow-md border-2 border-black shadow-custom hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <TextShimmerColor>Play now</TextShimmerColor>
              </Link>
            </div>
          </div>
        </section>
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
      </section>
      <section className="bg-purple-200 md:h-[94.5vh] py-6 px-16 flex flex-1 items-center justify-center">
        <InView viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5, // Stagger delay between children
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5, // Duration of each child's animation
                  },
                },
              }}
            >
              <TiltCardTrail1 />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
            >
              <TiltCardTrail2 />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
            >
              <TiltCardTrail3 />
            </motion.div>
          </motion.div>
        </InView>
      </section>
    </div>
  );
};

export default Home;
