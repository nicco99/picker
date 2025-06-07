import { AlertTriangle } from "lucide-react";

interface CardBannerProps {
  allowedOnRoad: boolean;
}

const CardBanner: React.FC<CardBannerProps> = ({ allowedOnRoad }) => {
  if (allowedOnRoad) return null;

  return (
    <div className="bg-red-600 text-white text-xs font-medium px-3 mt-3 py-2 rounded-md flex items-center gap-2 mb-3">
      <AlertTriangle size={16} />
      This skip is not allowed on public roads.
    </div>
  );
};

export default CardBanner;
