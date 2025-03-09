import { Link } from 'react-router-dom';
import styles  from './Accordion.module.css'
import { AccordionItem } from './AccordionItem/AccordionItem';
import { useState } from 'react';


export function Accordion({ data }: { data: { question: string; answer: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggle = (index: number | null) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className={styles.accordion}>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={toggle}
          />
        ))}
        <p className={styles.supportText} >
          Остались вопросы? Напишите
          <Link className={styles.support} to='#' target="blank"> нам</Link>
        </p>
      </div>
    );
  }