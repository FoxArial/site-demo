import { TechnoCard } from "../../models/HomePage";
import { StrapiImage } from "./strapa-image";

type CarouselProps = {
  arr: TechnoCard[];
};

export function Carousel({ arr }: CarouselProps) {
  return (
    <div className="scroller">
      <div className="scroller-inner">
        {[...arr, ...arr].map((item, index) => (
          <div key={item.id + "-" + index} className="card flex-central">
            <StrapiImage
              src={item.image.url}
              width={512}
              height={512}
              className="card-image"
            />
            <div
              className={`text-${item.description.color} textWeight-${item.description.fontWeight} text-main card-title`}
            >
              {item.description.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
