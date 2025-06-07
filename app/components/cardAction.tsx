import { CheckCircle2, ArrowRight } from "lucide-react";

interface CardActionProps {
  isSelected: boolean;
}

const CardAction: React.FC<CardActionProps> = ({ isSelected }) => {
  return (
    <div className={`mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors text-sm font-medium
       text-white` + (isSelected ? "bg-blue-700" : " bg-gray-700 hover:bg-gray-600")}>
      {isSelected ? (
        <>
          <CheckCircle2 size={16} /> Selected
        </>
      ) : (
        <>
          Select This Skip <ArrowRight size={16} />
        </>
      )}
    </div>
  );
};

export default CardAction;
