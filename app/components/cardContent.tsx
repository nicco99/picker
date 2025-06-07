interface CardContentProps {
  title: string;
  subtitle: string;
  price: string;
  postcode: string;
  allowsHeavyWaste: boolean;
}

const CardContent: React.FC<CardContentProps> = ({
  title,
  subtitle,
  price,
  postcode,
  allowsHeavyWaste,
}) => {
  return (
    <div className="mt-4 space-y-2 text-white">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-400">{subtitle}</p>
      <p className="text-xl font-semibold text-blue-500">£{price}</p>

      <div className="text-xs text-gray-400 space-y-1">
        <p>
          Postcode: <span className="font-medium text-white">{postcode}</span>
        </p>
        <p>
          Heavy Waste:{" "}
          <span
            className={`font-medium ${
              allowsHeavyWaste ? "text-green-400" : "text-red-400"
            }`}
          >
            {allowsHeavyWaste ? "Allowed" : "Not Allowed"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardContent;
