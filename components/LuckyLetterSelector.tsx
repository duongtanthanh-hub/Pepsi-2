
import React from 'react';
import { LuckyLetter } from '../types';

interface LuckyLetterSelectorProps {
  letters: LuckyLetter[];
  selectedLetter: LuckyLetter | null;
  onSelect: (letter: LuckyLetter) => void;
}

const LuckyLetterSelector: React.FC<LuckyLetterSelectorProps> = ({ letters, selectedLetter, onSelect }) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-3 text-center md:text-left">2. Choose a Lucky Letter</h3>
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {letters.map((letter) => (
          <button
            key={letter.value}
            onClick={() => onSelect(letter)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedLetter?.value === letter.value
                ? 'bg-yellow-400 border-yellow-400 text-blue-900 shadow-lg scale-105'
                : 'bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50'
            }`}
          >
            <p className="font-bold text-lg">{letter.label}</p>
            <p className={`text-sm ${selectedLetter?.value === letter.value ? 'text-blue-800' : 'text-white/80'}`}>{letter.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LuckyLetterSelector;
