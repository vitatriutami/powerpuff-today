// pages/index.tsx
"use client";
import { useState } from "react";
import SelectionForm from "@/components/SelectionForm";

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
    <div className="flex flex-col space-y-8 p-6 shadow-md">
      <div className="bg-rose-300 p-8 rounded-lg shadow-xl">
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
      </div>
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
