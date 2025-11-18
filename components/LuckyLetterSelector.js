import React from 'react';

const LuckyLetterSelector = ({ letters, selectedLetter, onSelect }) => {
  return (
    React.createElement('div', { className: "w-full" },
      React.createElement('h3', { className: "text-xl font-semibold mb-3 text-center md:text-left" }, "2. Choose a Lucky Letter"),
      React.createElement('div', { className: "grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2" },
        letters.map((letter) => (
          React.createElement('button',
            {
              key: letter.value,
              onClick: () => onSelect(letter),
              className: `flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 aspect-square ${
                selectedLetter?.value === letter.value
                  ? 'bg-yellow-400 border-yellow-400 text-blue-900 shadow-lg scale-105'
                  : 'bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50'
              }`
            },
            React.createElement('span', { className: "font-bold text-5xl mb-2" }, letter.value),
            React.createElement('span', { className: "text-sm text-center font-medium leading-tight opacity-90" }, letter.textOverlay)
          )
        ))
      )
    )
  );
};

export default LuckyLetterSelector;