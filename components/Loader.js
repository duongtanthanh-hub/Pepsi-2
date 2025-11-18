import React from 'react';

const Loader = () => {
  return (
    React.createElement('div', { className: "fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col justify-center items-center z-50" },
      React.createElement('div', { className: "w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4" }),
      React.createElement('p', { className: "text-white text-xl font-semibold" }, "Generating your moment..."),
      React.createElement('p', { className: "text-white/80 mt-1" }, "This may take a moment.")
    )
  );
};

export default Loader;