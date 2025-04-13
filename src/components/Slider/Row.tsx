import React from "react";
import { ReactNode } from "react";

interface RowProp {
  color: string;
  name: string;
  text: string;
  isActive: boolean;
  icon: ReactNode;
}

export default function Row({ color, name, text, isActive, icon }: RowProp) {
  function hexToRgb(hex: string) {
    hex = hex.replace(/^#/, "");

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
  }

  return (
    <div
      className='max-w-[780px] w-full p-[10px] rounded-2xl flex items-center gap-6 border border-black border-opacity-20 h-[50px] md:h-[65px] lg:h-[75px]'
      style={{ border: isActive ? `2px solid ${color}` : "" }}
    >
      <div
        className='md:min-w-[64px] md:h-[64px] flex items-center justify-center rounded-[50%] min-w-[46px] h-[46px]'
        style={{ backgroundColor: `rgba(${hexToRgb(color)}, 0.1)` }}
      >
        {icon}
      </div>
      <div className='w-full flex flex-col sm:gap-1 md:gap-0 '>
        <div className='w-full flex items-center justify-between'>
          <h2 className="text-xs sm:text-sm lg:text-base">{name}</h2>
          {isActive && (
            <p
              className='text-[9px] font-semibold py-2 px-3 rounded-full sm:text-xs md:text-sm'
              style={{
                backgroundColor: `rgba(${hexToRgb(color)}, 0.1)`,
                color: `${color}`,
              }}
            >
              Срочно
            </p>
          )}
        </div>
        <p style={{ marginTop: !isActive ? "5px" : "" }} className="text-xs md:mb-2">{text}</p>
      </div>
    </div>
  );
}
