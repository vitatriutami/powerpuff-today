// pages/index.tsx
"use client"
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl">
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
    </div>
  );
};

export default Home;
