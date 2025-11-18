
import React, { useState, useCallback } from 'react';
import { LuckyLetter } from './types';
import { LUCKY_LETTERS } from './constants';
import { generateImage } from './services/geminiService';

import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import LuckyLetterSelector from './components/LuckyLetterSelector';
import ResultDisplay from './components/ResultDisplay';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [inputImage, setInputImage] = useState<File | null>(null);
  const [inputImageUrl, setInputImageUrl] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<LuckyLetter | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    setInputImage(file);
    setInputImageUrl(URL.createObjectURL(file));
    setGeneratedImage(null); // Reset result if a new image is uploaded
  };

  const handleLetterSelect = (letter: LuckyLetter) => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-red-600 text-white">
      {isLoading && <Loader />}
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        {!generatedImage ? (
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-300">Create Your Golden Tet Moment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <ImageUploader onImageUpload={handleImageUpload} imageUrl={inputImageUrl} />
              <LuckyLetterSelector
                letters={LUCKY_LETTERS}
                selectedLetter={selectedLetter}
                onSelect={handleLetterSelect}
              />
            </div>

            {error && <p className="text-center text-red-400 mt-6">{error}</p>}
            
            <div className="mt-8 text-center">
              <button
                onClick={handleGenerate}
                disabled={!inputImage || !selectedLetter || isLoading}
                className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-500 disabled:cursor-not-allowed text-blue-900 font-bold py-3 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
              >
                Generate Moment
              </button>
            </div>
          </div>
        ) : (
          <ResultDisplay
            generatedImage={generatedImage}
            textOverlay={selectedLetter?.textOverlay || ''}
            onReset={handleReset}
          />
        )}
      </main>
      <footer className="text-center p-4 text-white/70 text-sm">
        <p>&copy; {new Date().getFullYear()} PepsiCo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
