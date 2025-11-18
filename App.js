import React, { useState, useCallback } from 'react';
import { LUCKY_LETTERS } from './constants.js';
import { generateImage } from './services/geminiService.js';
import Header from './components/Header.js';
import ImageUploader from './components/ImageUploader.js';
import LuckyLetterSelector from './components/LuckyLetterSelector.js';
import ResultDisplay from './components/ResultDisplay.js';
import Loader from './components/Loader.js';

const App = () => {
  const [inputImage, setInputImage] = useState(null);
  const [inputImageUrl, setInputImageUrl] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = (file) => {
    setInputImage(file);
    setInputImageUrl(URL.createObjectURL(file));
    setGeneratedImage(null);
  };

  const handleLetterSelect = (letter) => {
    setSelectedLetter(letter);
  };
  
  const handleGenerate = useCallback(async () => {
    if (!inputImage || !selectedLetter) {
      setError('Please upload an image and select a lucky letter.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const prompt = selectedLetter.getPrompt();
      const generatedImageData = await generateImage(inputImage, prompt);
      setGeneratedImage(`data:image/png;base64,${generatedImageData}`);
    } catch (err) {
      console.error(err);
      setError('Failed to generate image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [inputImage, selectedLetter]);

  const handleReset = () => {
    setInputImage(null);
    setInputImageUrl(null);
    setSelectedLetter(null);
    setGeneratedImage(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-red-600 text-white" },
      isLoading && React.createElement(Loader, null),
      React.createElement(Header, null),
      React.createElement('main', { className: "container mx-auto p-4 md:p-8" },
        !generatedImage ? (
          React.createElement('div', { className: "max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8" },
            React.createElement('h2', { className: "text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-300" }, "Create Your Golden Tet Moment"),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-start" },
              React.createElement(ImageUploader, { onImageUpload: handleImageUpload, imageUrl: inputImageUrl }),
              React.createElement(LuckyLetterSelector, {
                letters: LUCKY_LETTERS,
                selectedLetter: selectedLetter,
                onSelect: handleLetterSelect,
              })
            ),
            error && React.createElement('p', { className: "text-center text-red-400 mt-6" }, error),
            React.createElement('div', { className: "mt-8 text-center" },
              React.createElement('button',
                {
                  onClick: handleGenerate,
                  disabled: !inputImage || !selectedLetter || isLoading,
                  className: "bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-500 disabled:cursor-not-allowed text-blue-900 font-bold py-3 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
                },
                "Generate Moment"
              )
            )
          )
        ) : (
          React.createElement(ResultDisplay, {
            generatedImage: generatedImage,
            textOverlay: selectedLetter?.textOverlay || '',
            onReset: handleReset,
          })
        )
      ),
      React.createElement('footer', { className: "text-center p-4 text-white/70 text-sm" },
        React.createElement('p', null, `© ${new Date().getFullYear()} PepsiCo. All rights reserved.`)
      )
    )
  );
};

export default App;
