"use client"
import React, { useState } from "react";

type Question = {
  question: string;
  options: {
    answer: string;
    character: "Blossom" | "Bubbles" | "Buttercup";
  }[];
};

const quizQuestions: Question[] = [
  {
    question: "How energetic do you feel today?",
    options: [
      { answer: "Focused and ready to conquer tasks.", character: "Blossom" },
      { answer: "Chill, relaxed, and a bit dreamy.", character: "Bubbles" },
      {
        answer: "Buzzing with energy and ready to take on challenges!",
        character: "Buttercup",
      },
    ],
  },
  {
    question: "How was your social interaction today?",
    options: [
      {
        answer: "I took the lead in conversations and made plans.",
        character: "Blossom",
      },
      {
        answer: "I enjoyed casual chats and spread kindness.",
        character: "Bubbles",
      },
      {
        answer: "I kept it real and maybe got a little competitive.",
        character: "Buttercup",
      },
    ],
  },
  // Add more questions here...
  {
    question: "How did you handle problems today?",
    options: [
      {
        answer: "I analyzed the situation and made a solid plan.",
        character: "Blossom",
      },
      {
        answer: "I went with the flow and hoped for the best",
        character: "Bubbles",
      },
      {
        answer: "I tackled the problem head-on, no hesitation!",
        character: "Buttercup",
      },
    ],
  },
  {
    question: "How did you handle problems today?",
    options: [
      {
        answer: "I analyzed the situation and made a solid plan.",
        character: "Blossom",
      },
      {
        answer: "I went with the flow and hoped for the best",
        character: "Bubbles",
      },
      {
        answer: "I tackled the problem head-on, no hesitation!",
        character: "Buttercup",
      },
    ],
  },
  {
    question: "How did you handle problems today?",
    options: [
      {
        answer: "I analyzed the situation and made a solid plan.",
        character: "Blossom",
      },
      {
        answer: "I went with the flow and hoped for the best",
        character: "Bubbles",
      },
      {
        answer: "I tackled the problem head-on, no hesitation!",
        character: "Buttercup",
      },
    ],
  },
  {
    question: "How did you handle problems today?",
    options: [
      {
        answer: "I analyzed the situation and made a solid plan.",
        character: "Blossom",
      },
      {
        answer: "I went with the flow and hoped for the best",
        character: "Bubbles",
      },
      {
        answer: "I tackled the problem head-on, no hesitation!",
        character: "Buttercup",
      },
    ],
  },
  {
    question: "How did you handle problems today?",
    options: [
      {
        answer: "I analyzed the situation and made a solid plan.",
        character: "Blossom",
      },
      {
        answer: "I went with the flow and hoped for the best",
        character: "Bubbles",
      },
      {
        answer: "I tackled the problem head-on, no hesitation!",
        character: "Buttercup",
      },
    ],
  },
  {
    question: "How did you handle problems today?",
    options: [
      {
        answer: "I analyzed the situation and made a solid plan.",
        character: "Blossom",
      },
      {
        answer: "I went with the flow and hoped for the best",
        character: "Bubbles",
      },
      {
        answer: "I tackled the problem head-on, no hesitation!",
        character: "Buttercup",
      },
    ],
  },
  //   4. Outfit or Style Vibe
  // Question: What’s your outfit vibe today?

  // Blossom: "Polished, classy, and organized."
  // Bubbles: "Colorful, soft, and cute."
  // Buttercup: "Sporty, edgy, and practical."
  // 5. Most Memorable Event
  // Question: What was the highlight of your day?

  // Blossom: "I achieved a big goal or finished an important task."
  // Bubbles: "I had a sweet moment with someone or enjoyed a simple joy."
  // Buttercup: "I did something bold or had an exciting adventure."
  // 6. Music Preference Today
  // Question: What type of music reflects your mood today?

  // Blossom: "Something motivating, like classical or pop anthems."
  // Bubbles: "Upbeat and cheerful tunes or bubblegum pop."
  // Buttercup: "Rock, punk, or anything with a rebellious edge."
  // 7. Conflict Resolution
  // Question: How did you handle disagreements today?

  // Blossom: "Diplomatic and logical, I kept things in control."
  // Bubbles: "I tried to keep peace and avoid confrontation."
  // Buttercup: "I stood my ground and wasn’t afraid to speak up!"
  // 8. Snack Time
  // Question: What snack represents your mood today?

  // Blossom: "A balanced snack, like fruit or a smoothie."
  // Bubbles: "Something fun and sweet, like cupcakes."
  // Buttercup: "Savory or bold flavors, like chips or spicy snacks."

  {
    question: "How did you handle problems today?",
    options: [
      {
        answer: "I analyzed the situation and made a solid plan.",
        character: "Blossom",
      },
      {
        answer: "I went with the flow and hoped for the best",
        character: "Bubbles",
      },
      {
        answer: "I tackled the problem head-on, no hesitation!",
        character: "Buttercup",
      },
    ],
  },
  {
    question: "If you had a superpower today, what would it be?",
    options: [
      {
        answer: "Super intelligence to get things done efficiently.",
        character: "Blossom",
      },
      {
        answer: "The power to spread happiness and laughter.",
        character: "Bubbles",
      },
      {
        answer: "Super strength to conquer any obstacle.",
        character: "Buttercup",
      },
    ],
  },
];

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [_results, setResults] = useState<string[]>([]);

  const handleOptionSelect = (character: string) => {
    setResults((prev) => [...prev, character]);
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      alert("Quiz Complete!"); // Replace this with final results handling
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  return (
    <div className="grid grid-cols-2 md:h-[94.5vh]">
      {/* Question Section */}
      <div className="order-1 bg-purple-300 flex items-center justify-center text-center p-4">
        <h1 className="text-2xl font-bold">{currentQuestion.question}</h1>
      </div>

      {/* Options Section */}
      <div className="order-2 bg-emerald-300 flex flex-col items-center justify-center gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option.character)}
            className="px-4 py-2 bg-white rounded-md shadow hover:bg-gray-100"
          >
            {option.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
