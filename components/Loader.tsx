
import React from 'react';
import { PepsiLogoIcon } from './icons';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col justify-center items-center z-50">
      <PepsiLogoIcon className="h-20 w-20 animate-pulse" />
      <p className="text-white text-xl mt-4 font-semibold">Generating your moment...</p>
      <p className="text-white/80 mt-1">This may take a moment.</p>
    </div>
  );
};

export default Loader;
