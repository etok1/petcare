import React from 'react';
import { Link } from 'react-router-dom';
import { AccordionItem } from './AccordionItem';
import { useState } from 'react';


export function Accordion({ data }: { data: { question: string; answer: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggle = (index: number | null) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className='mt-12 flex flex-col flex-wrap items-end max-w-[800px] mb-2'>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={toggle}
          />
        ))}
        <p className='self-end [font-size: clamp(12px, 1.5vw, 18px)] [ line-height: clamp(16px, 1.5vw, 26px)] font-extrabold mt-3' >
          Остались вопросы? Напишите
          <Link className='no-underline text-greenCustom' to='#' target="blank"> нам</Link>
        </p>
      </div>
    );
  }