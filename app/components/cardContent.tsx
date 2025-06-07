interface CardContentProps {
  title: string;
  subtitle: string;
  price: string;
}

const CardContent: React.FC<CardContentProps> = ({ title, subtitle, price }) => {
  return (
    <div className="mt-4 space-y-2">
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <p className="text-sm text-gray-400">{subtitle}</p>
      <p className="text-xl font-semibold text-blue-500">£{price}</p>
    </div>
  );
};

export default CardContent;
