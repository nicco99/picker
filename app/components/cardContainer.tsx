interface CardContainerProps {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
}

const CardContainer: React.FC<CardContainerProps> = ({ children, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-[#111] border rounded-xl p-4 w-[280px] shrink-0 lg:w-full transition-all hover:border-blue-500  animate-pulse
 ${
    isSelected ? "border-blue-500 shadow-xl animate-bounce" : "border-gray-700 animate-spin"
  }`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
