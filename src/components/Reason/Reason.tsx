import { ReactElement } from "react";
import styles from "./style.module.css";

interface ReasonProp {
  color: string;
  head: string;
  text: string;
  img: ReactElement;
}

export default function Reason({ color, head, text, img }: ReasonProp) {
  return (
    <div className={styles.card} style={{ border: `3px solid ${color}` }}>
      <div className={styles.image}>{img}</div>
      <div className={styles.content}>
        <h3>{head}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
