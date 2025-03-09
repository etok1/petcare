import { ReactNode } from "react";
import Row from "./Row/Row";
import styles from "./style.module.css";

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
    <div className={styles.slide}>
      <h3>{title}</h3>
      {reasons.map((reason) => (
        <Row
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
