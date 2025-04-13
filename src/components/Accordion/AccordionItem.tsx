import React from 'react';
import { ChevronUp } from 'lucide-react';

interface AccordionItemProps {
    item: {
      question: string;
      answer: string;
    };
    index: number;
    isOpen: boolean;
    onToggle: (index: number) => void;
  };
  
  export function AccordionItem({
    item,
    index,
    isOpen,
    onToggle,
  }: AccordionItemProps) {
    return (
      <div className={`w-[95%] bg-white min-h-[50px] border-2 !border-black bg-transparent mb-2 p-3 shadow-md transition-all duration-500 ease-[cubic-bezier(0,1,0,1)] ${isOpen ? "shadow-lg" : ""}`}>
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => onToggle(index)}
      >
        <h3 className={`text-[clamp(12px,1.5vw,16px)] leading-[clamp(17px,1.5vw,26px)] font-semibold transition-all duration-300 ${isOpen ? "font-extrabold text-greenCustom underline underline-offset-3" : ""}`}>
          {item.question}
        </h3>
        <ChevronUp 
          className={`transition-all duration-500 ease-[cubic-bezier(0,1,0,1)] ${isOpen ? "rotate-180" : ""}`} 
          size={24} 
        />
      </div>
      <div className={`overflow-hidden pt-1 transition-all duration-300 ease-[cubic-bezier(1,0,1,0)] ${isOpen ? "max-h-[1000px]  transition-all duration-300 ease-[cubic-bezier(1,0,1,0)]" : "max-h-0  transition-all duration-300 ease-[cubic-bezier(1,0,1,0)]"}`}>
        <p className='text-[clamp(10px,1.5vw,16px)] leading-[clamp(20px,1.5vw,40px)] font-semibold'>{item.answer}</p>
      </div>
    </div>
    );
  }