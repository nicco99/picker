import CardContainer from "./cardContainer";
import CardImageHeader from "./cardImageHeader";
import CardContent from "./cardContent";
import CardAction from "./cardAction";

interface SkipCardProps {
  skip: {
    id: number;
    size: number;
    hire_period_days: number;
    price_before_vat: number;
    vat: number;
    image_url: string;
  };
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <CardContainer onClick={() => onSelect(skip.id)} isSelected={isSelected}>
      <CardImageHeader imageUrl={skip.image_url} label={`${skip.size} Yards`} />
      <CardContent
        title={`${skip.size} Yard Skip`}
        subtitle={`${skip.hire_period_days} day hire period`}
        price={totalPrice}
      />
      <CardAction isSelected={isSelected} />
    </CardContainer>
  );
};

export default SkipCard;
