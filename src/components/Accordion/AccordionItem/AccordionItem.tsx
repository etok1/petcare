import { ChevronUp } from 'lucide-react';
import styles from './style.module.css'

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
      <div className={`${styles.question} ${isOpen ? styles.opened : ""}`}>
        <div className={styles.title} onClick={() => onToggle(index)}>
          <h3 className={`${styles.caption} ${isOpen ? styles.bold : ""}`}>
            {item.question}
          </h3>
         
          <ChevronUp  className={`${styles.arrowIcon} ${isOpen ? styles.rotate : ""}`} size={24}/>

        </div>
        <div className={`${styles.content} ${isOpen ? styles.show : ""}`}>
          {item.answer}
        </div>
      </div>
    );
  }