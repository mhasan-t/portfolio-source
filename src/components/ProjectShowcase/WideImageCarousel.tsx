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
      <div className="min-w-[40%] flex justify-center items-center">
        <div
          className="w-fit h-full mr-2 max-w-xl relative flex justify-center items-center "
          key={selectedImageIndex}
        >
          <img
            className="object-contain h-fit w-96 max-w-[90vw] border-[1px] border-gray-300 rounded-xl shadow-lg"
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
