
import React, { useRef, useCallback } from 'react';
import { DownloadIcon, RedoIcon } from './icons';

interface ResultDisplayProps {
  generatedImage: string;
  textOverlay: string;
  onReset: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ generatedImage, textOverlay, onReset }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback(() => {
    const canvas = document.createElement('canvas');
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = generatedImage;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw image
      ctx.drawImage(image, 0, 0);

      // Style and draw text overlay
      const fontSize = Math.floor(image.width / 15);
      ctx.font = `bold ${fontSize}px Pacifico, cursive`;
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      
      // Add a subtle shadow for better readability
      ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      
      ctx.fillText(textOverlay, canvas.width / 2, canvas.height - (fontSize / 2));

      // Trigger download
      const link = document.createElement('a');
      link.download = 'pepsi-tet-moment.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  }, [generatedImage, textOverlay]);

  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-yellow-300">Your Golden Moment is Here!</h2>
      <div ref={imageContainerRef} className="relative aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden mb-6">
        <img src={generatedImage} alt="Generated Tet moment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <p className="font-pacifico absolute bottom-4 left-0 right-0 text-white text-4xl md:text-5xl text-shadow" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
          {textOverlay}
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <DownloadIcon className="h-6 w-6" />
          Download
        </button>
        <button
          onClick={onReset}
          className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <RedoIcon className="h-6 w-6" />
          Create Another
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
