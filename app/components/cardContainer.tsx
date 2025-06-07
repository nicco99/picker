import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick?: () => void;
}

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-gray-900 border rounded-2xl p-4 w-[280px] shrink-0 lg:w-full transition-transform transform hover:scale-[1.02] hover:border-blue-500 cursor-pointer
      ${
        isSelected
          ? "border-blue-500 shadow-lg ring-2 ring-blue-500"
          : "border-gray-800"
      }`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
