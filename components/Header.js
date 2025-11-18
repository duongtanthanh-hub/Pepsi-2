import React from 'react';
import { PepsiLogoIcon } from './icons.js';

const Header = () => {
  return React.createElement('header', { className: "py-6 px-4 md:px-8" },
    React.createElement('div', { className: "container mx-auto flex justify-center items-center" },
      React.createElement(PepsiLogoIcon, { className: "h-12 w-auto" }),
      React.createElement('h1', { className: "ml-4 text-3xl md:text-4xl font-bold tracking-tight text-white" },
        "Golden Tet Moment"
      )
    )
  );
};

export default Header;
