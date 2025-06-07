import { CheckCircle2, ArrowRight } from "lucide-react";

interface CardActionProps {
  isSelected: boolean;
}

const CardAction: React.FC<CardActionProps> = ({ isSelected }) => (
  <div className="mt-4">
    <button
      className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        isSelected
          ? "bg-blue-600 text-white"
          : "bg-gray-800 text-white hover:bg-gray-700"
      }`}
    >
      {isSelected ? (
        <>
          <CheckCircle2 size={16} /> Selected
        </>
      ) : (
        <>
          Select This Skip <ArrowRight size={16} />
        </>
      )}
    </button>
  </div>
);

export default CardAction;
