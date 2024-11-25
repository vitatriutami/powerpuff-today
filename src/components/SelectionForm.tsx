// components/SelectionForm.tsx
"use client"
import React, { useState } from 'react';

type Mood = 'happy' | 'sad' | 'angry' | 'tired';
type Productivity = 'full' | 'half' | 'low';
type Sociality = 'hangout' | 'helping' | 'alone';

interface SelectionFormProps {
  onSubmit: (mood: Mood, productivity: Productivity, sociality: Sociality) => void;
}

const SelectionForm: React.FC<SelectionFormProps> = ({ onSubmit }) => {
  const [mood, setMood] = useState<Mood>('happy');
  const [productivity, setProductivity] = useState<Productivity>('full');
  const [sociality, setSociality] = useState<Sociality>('hangout');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(mood, productivity, sociality);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xl">How do you feel today?</label>
        <div className="flex space-x-4">
          <button type="button" onClick={() => setMood('happy')} className="text-3xl">
            😊
          </button>
          <button type="button" onClick={() => setMood('sad')} className="text-3xl">
            😢
          </button>
          <button type="button" onClick={() => setMood('angry')} className="text-3xl">
            😠
          </button>
          <button type="button" onClick={() => setMood('tired')} className="text-3xl">
            😴
          </button>
        </div>
      </div>

      <div>
        <label className="block text-xl">How productive do you feel?</label>
        <div className="flex space-x-4">
          <button type="button" onClick={() => setProductivity('full')} className="text-3xl">
            🔋
          </button>
          <button type="button" onClick={() => setProductivity('half')} className="text-3xl">
            🔋🔋
          </button>
          <button type="button" onClick={() => setProductivity('low')} className="text-3xl">
            🪫
          </button>
        </div>
      </div>

      <div>
        <label className="block text-xl">How social are you today?</label>
        <div className="flex space-x-4">
          <button type="button" onClick={() => setSociality('hangout')} className="text-3xl">
            🎉
          </button>
          <button type="button" onClick={() => setSociality('helping')} className="text-3xl">
            🤝
          </button>
          <button type="button" onClick={() => setSociality('alone')} className="text-3xl">
            🛋️
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 px-6 py-3 bg-teal-500 text-white rounded-lg"
      >
        Show My Powerpuff Character!
      </button>
    </form>
  );
};

export default SelectionForm;
