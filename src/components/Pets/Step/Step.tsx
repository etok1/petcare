import { ReactNode } from "react";
import styles from "./style.module.css";

interface StepProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export default function Step({ icon, title, text }: StepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.icon}>{icon}</div>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
}
