
import React from 'react';
import { PepsiLogoIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 md:px-8">
      <div className="container mx-auto flex justify-center items-center">
        <PepsiLogoIcon className="h-12 w-auto" />
        <h1 className="ml-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
          Golden Tet Moment
        </h1>
      </div>
    </header>
  );
};

export default Header;
