import { ReactElement } from "react";
import React from 'react';

interface ReasonProp {
  color: string;
  head: string;
  text: string;
  img: ReactElement;
}

export default function Reason({ color, head, text, img }: ReasonProp) {
  return (
    <div
  className={`bg-desktop p-5 max-w-[100vw] w-full h-full flex items-center justify-center gap-3 shadow-lg rounded-lg transition-transform duration-600 cursor-pointer hover:[transform:scale3d(1.05,1.08,1)] md:gap-6 lg:max-w-[760px] lg:w-full`}
  style={{ border: `3px solid ${color}` }}
>
  <div className="self-start">{img}</div>
  <div className="flex flex-col self-start gap-1 w-full">
    <h3 className="text-xs font-bold text-darkGreen md:text-xl">{head}</h3>
    <p className="text-[10px] font-bold text-[#0000005e] leading-[15px] md:text-base">
      {text}
    </p>
  </div>
</div>
  
  );
}
