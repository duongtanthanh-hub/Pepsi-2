import React from 'react';
import { PepsiLogoIcon } from './icons.js';

const Loader = () => {
  return (
    React.createElement('div', { className: "fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col justify-center items-center z-50" },
      React.createElement(PepsiLogoIcon, { className: "h-20 w-20 animate-pulse" }),
      React.createElement('p', { className: "text-white text-xl mt-4 font-semibold" }, "Generating your moment..."),
      React.createElement('p', { className: "text-white/80 mt-1" }, "This may take a moment.")
    )
  );
};

export default Loader;
