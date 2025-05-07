import React from 'react';
import { JSX } from "react";

interface GoalProps {
  svg: JSX.Element;
  text: string;
}

export default function Goal({ svg, text }: GoalProps) {
  return (
    <div className='max-w-[481px] w-full flex items-start gap-4 '>
      <div className='w-[50px] h-[50px]'>{svg}</div>
      <p className='leading-[14px] text-grey text-[8px] font-medium sm:text-xs md:text-sm lg:text-lg'>{text}</p>
    </div>
  );
}
