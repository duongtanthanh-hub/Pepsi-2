
import React, { useRef } from 'react';
import { UploadIcon } from './icons';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  imageUrl: string | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, imageUrl }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      onImageUpload(file);
    } else {
      alert("Please select a valid image file (JPEG or PNG).");
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files?.[0];
     if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      onImageUpload(file);
    } else {
      alert("Please select a valid image file (JPEG or PNG).");
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };


  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-3 text-center md:text-left">1. Upload Your Photo</h3>
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="relative w-full aspect-[4/5] bg-black/20 rounded-xl border-2 border-dashed border-white/50 flex flex-col justify-center items-center text-center p-4 cursor-pointer hover:bg-black/30 transition-colors"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
          className="hidden"
        />
        {imageUrl ? (
          <img src={imageUrl} alt="Uploaded preview" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
        ) : (
          <>
            <UploadIcon className="h-12 w-12 text-white/70 mb-2" />
            <p className="font-semibold">Click to upload or drag & drop</p>
            <p className="text-sm text-white/60">PNG or JPG. Parent & Child photo.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
