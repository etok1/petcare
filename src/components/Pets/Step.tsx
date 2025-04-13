import { ReactNode } from "react";
import React from 'react';
import './style.css'

interface StepProps {
  icon: ReactNode;
  title: string;
  text: string;
}



export default function Step({ icon, title, text }: StepProps) {
  return (
    <div className='max-w-[280px] w-full flex flex-col items-center pb-3 md-border-bottom'>
      <div className='min-w-[64px] h-16 flex items-center justify-center rounded-full bg-green-600/15'>{icon}</div>
      <h5 className="mt-4 text-lg font-black leading-[22px]">{title}</h5>
      <p className="w-[83%] text-center mt-2 text-gray-600 text-xs leading-[18px] font-poppins">{text}</p>
    </div>
  );
}
