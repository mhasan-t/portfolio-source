import React from "react";
import { ShowcaseProps } from "@/types";
import CarouselBottomNavs from "./CarouselBottomNavs";

export default function WideImageCarousel({ data }: { data: ShowcaseProps }) {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(1);
  const [fromRight, setFromRight] = React.useState<boolean | null>(null);

  function goPrev() {
    setFromRight(false);
    setSelectedImageIndex(
      selectedImageIndex < 2
        ? data.numberOfImages
        : selectedImageIndex - 1
    );
  }
  function goNext() {
    setFromRight(true);
    setSelectedImageIndex(
      selectedImageIndex + 1 > data.numberOfImages
        ? 1
        : selectedImageIndex + 1
    );
  }

  return (
    <div className="flex flex-col justify-center gap-2">
      {/* MIDDLE */}
      <div className="w-full flex justify-center items-center">
        <div
          className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-full mr-2 relative flex justify-center items-center "
          key={selectedImageIndex}
        >
          <img
            className="object-contain h-auto max-h-64 md:max-h-80 lg:max-h-96 w-full border-[1px] border-gray-300 rounded-xl shadow-lg"
            src={
              "/images/" +
              data.imagesFolder +
              "/" +
              selectedImageIndex +
              ".jpg"
            }
            alt={data.title + " image"}
          />
        </div>
      </div>

      {/* NAV */}
      <CarouselBottomNavs goNext={goNext} goPrev={goPrev} />
    </div>
  );
}
