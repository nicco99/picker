import React from "react";

interface CardImageHeaderProps {
  imageUrl: string;
  label: string;
}

const CardImageHeader: React.FC<CardImageHeaderProps> = ({
  imageUrl,
  label,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden group">
      <img
        src={imageUrl}
        alt={label}
        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-sm font-medium px-3 py-1 rounded-md bg-blue-600">
          {label}
        </span>
      </div>
    </div>
  );
};

export default CardImageHeader;
