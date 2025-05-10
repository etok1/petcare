import React from 'react';

interface MissionProp {
  img: string;
  text: string;
  index: number;
}

export default function Mission({ img, text, index }: MissionProp) {
  return (
    <div
    className={`relative w-full flex flex-col items-start gap-8 sm:flex-row md:flex-row md:justify-center 
     lg:mx-auto xl:flex-col 
    ${index === 2 ? "md:flex-row-reverse sm:flex-row-reverse xl:flex-col-reverse" : ""}`}
  >
    <p className="w-full text-left text-md sm:text-left sm:text-xs font-medium text-grey leading-[22px] sm:w-[358px] md:text-base md:w-[358px]">
      {text}
    </p>
    <img
      src={img}
      alt="animal"
      className="max-h-[200px] w-full sm:w-[358px] md:w-[358px] h-full rounded-lg object-cover object-center lg:max-h-[227px]"
    />
  </div>  
  );
}
