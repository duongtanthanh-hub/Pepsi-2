import React, { useRef, useCallback } from 'react';
import { DownloadIcon, RedoIcon } from './icons.js';

const ResultDisplay = ({ generatedImage, textOverlay, onReset }) => {
  const imageContainerRef = useRef(null);

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

      ctx.drawImage(image, 0, 0);

      const fontSize = Math.floor(image.width / 15);
      ctx.font = `bold ${fontSize}px Pacifico, cursive`;
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      
      ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      
      ctx.fillText(textOverlay, canvas.width / 2, canvas.height - (fontSize / 2));

      const link = document.createElement('a');
      link.download = 'pepsi-tet-moment.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  }, [generatedImage, textOverlay]);

  return (
    React.createElement('div', { className: "max-w-xl mx-auto text-center" },
      React.createElement('h2', { className: "text-3xl font-bold mb-6 text-yellow-300" }, "Your Golden Moment is Here!"),
      React.createElement('div', { ref: imageContainerRef, className: "relative aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden mb-6" },
        React.createElement('img', { src: generatedImage, alt: "Generated Tet moment", className: "w-full h-full object-cover" }),
        React.createElement('div', { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
        React.createElement('p', { className: "font-pacifico absolute bottom-4 left-0 right-0 text-white text-4xl md:text-5xl text-shadow", style: {textShadow: '2px 2px 8px rgba(0,0,0,0.8)'} },
          textOverlay
        )
      ),
      React.createElement('div', { className: "flex justify-center items-center gap-4" },
        React.createElement('button',
          {
            onClick: handleDownload,
            className: "flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          },
          React.createElement(DownloadIcon, { className: "h-6 w-6" }),
          "Download"
        ),
        React.createElement('button',
          {
            onClick: onReset,
            className: "flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          },
          React.createElement(RedoIcon, { className: "h-6 w-6" }),
          "Create Another"
        )
      )
    )
  );
};

export default ResultDisplay;
