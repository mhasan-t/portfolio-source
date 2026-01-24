import React from "react";

type Props = {};

function LoadingComponent({ }: Props) {
  return (
    <div className="w-screen h-screen fixed z-50 bg-gradient-to-br from-primary via-primary to-secondary flex justify-center items-center animate-fade-in">
      <div className="bg-text_primary w-40 h-40 rounded-full flex justify-center items-center animate-beat animate-shimmer relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        {/* <div className="text-black">loading</div> */}
      </div>
    </div>
  );
}

export default LoadingComponent;
