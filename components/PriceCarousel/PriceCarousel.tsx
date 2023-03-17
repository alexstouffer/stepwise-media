import { useState, useRef } from "react";
import PriceCard from "../PriceCard/PriceCard";

interface PriceCarouselProps {
  pricingOptions: {
    title: string;
    monthlyFee: number;
    features: string[];
  }[];
}

function PriceCarousel({ pricingOptions }: PriceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    const scrollPos = carousel?.scrollLeft ?? 0;
    const cardWidth = carousel?.clientWidth ?? 0;
    const index = Math.round(scrollPos / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section className="pricing bg-white flex p-10 justify-center h-full">
      <div className="carousel" ref={carouselRef} onScroll={handleScroll}>
        {pricingOptions.map((option, index) => (
          <PriceCard
            key={option.title}
            title={option.title}
            monthlyFee={option.monthlyFee}
            features={option.features}
            className="h-full w-80 flex-shrink-0"
          />
        ))}
      </div>
      <div className="dots">
        {pricingOptions.map((option, index) => (
          <button
            key={option.title}
            className={index === activeIndex ? "active" : ""}
            onClick={() => {
              const carousel = carouselRef.current;
              const cardWidth = carousel?.clientWidth ?? 0;
              if (carousel) {
                carousel.scrollLeft = index * cardWidth;
              }
              setActiveIndex(index);
            }}
          >
            {option.title}
          </button>
        ))}
      </div>
    </section>
  );
}

export default PriceCarousel;
