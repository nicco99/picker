import CardContainer from "./cardContainer";
import CardImageHeader from "./cardImageHeader";
import CardContent from "./cardContent";
import CardAction from "./cardAction";
import CardBanner from "./CardBanner";

export interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export interface Skip {
  id: number;
  allowed_on_road: boolean;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  image_url: string;
  postcode: string;
  allows_heavy_waste: boolean;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <CardContainer onClick={() => onSelect(skip.id)} isSelected={isSelected}>
      <CardImageHeader imageUrl={skip.image_url} label={`${skip.size} Yards`} />
      <CardBanner allowedOnRoad={skip.allowed_on_road} />
      <CardContent
        title={`${skip.size} Yard Skip`}
        subtitle={`${skip.hire_period_days} day hire period`}
        price={totalPrice}
        postcode={skip.postcode}
        allowsHeavyWaste={skip.allows_heavy_waste}
      />
      <CardAction isSelected={isSelected} />
    </CardContainer>
  );
};

export default SkipCard;
