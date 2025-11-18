import React from 'react';

const LuckyLetterSelector = ({ letters, selectedLetter, onSelect }) => {
  return (
    React.createElement('div', { className: "w-full" },
      React.createElement('h3', { className: "text-xl font-semibold mb-3 text-center md:text-left" }, "2. Choose a Lucky Letter"),
      React.createElement('div', { className: "space-y-3 max-h-[400px] overflow-y-auto pr-2" },
        letters.map((letter) => (
          React.createElement('button',
            {
              key: letter.value,
              onClick: () => onSelect(letter),
              className: `w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedLetter?.value === letter.value
                  ? 'bg-yellow-400 border-yellow-400 text-blue-900 shadow-lg scale-105'
                  : 'bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50'
              }`
            },
            React.createElement('p', { className: "font-bold text-lg" }, letter.label),
            React.createElement('p', { className: `text-sm ${selectedLetter?.value === letter.value ? 'text-blue-800' : 'text-white/80'}` }, letter.description)
          )
        ))
      )
    )
  );
};

export default LuckyLetterSelector;
