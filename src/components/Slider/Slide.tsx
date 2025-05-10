import React from "react";
import { ReactNode } from "react";
import Row from "./Row";

interface Reason {
  name: string;
  text: string;
  isActive: boolean;
  icon: ReactNode;
}

interface SlideProp {
  title: string;
  color: string;
  reasons: Reason[];
}

export default function Slide({ title, color, reasons }: SlideProp) {
  return (
    <div className='flex flex-col items-center gap-[25px] lg:max-w-full !important lg:w-[80%] !important lg:justify-self-center'>
      <h3 className="text-base text-grey font-bold mb-7 lg:text-xl">{title}</h3>
      {reasons.map((reason, index) => (
        <Row key={index}
          color={color}
          name={reason.name}
          text={reason.text}
          isActive={reason.isActive}
          icon={reason.icon}
        />
      ))}
    </div>
  );
}
