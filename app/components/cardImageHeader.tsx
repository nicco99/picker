interface CardImageHeaderProps {
  imageUrl: string;
  label: string;
}

const CardImageHeader: React.FC<CardImageHeaderProps> = ({ imageUrl, label }) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <img src={imageUrl} alt={label} className="w-full h-40 object-cover" />
      <span className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-medium">
        {label}
      </span>
    </div>
  );
};

export default CardImageHeader;
