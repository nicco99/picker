import { useEffect, useState } from "react";
import axios from "axios";
import SkipCard from "../components/skipCard";

export function Skips() {
  const [skips, setSkips] = useState([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    );
    const skipsWithImages = response.data.map((skip: any) => ({
      ...skip,
      image_url: `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`
    }));
    setSkips(skipsWithImages);
  };

  return (
    <div className="bg-black min-h-screen py-12 px-4 flex flex-col text-white  items-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Choose Your Skip Size</h1>
        <p className="text-gray-400 text-sm mt-1">
          Select the skip size that best suits your needs
        </p>
      </div>
      <div className="grid  grid-cols-1 lg:w-[65%] sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {skips.map((skip: any) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={skip.id === selectedId}
            onSelect={(id) => setSelectedId(id)}
          />
        ))}
      </div>
    </div>
  );
}
