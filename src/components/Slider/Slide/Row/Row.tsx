import styles from "./style.module.css";
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
      className={styles.card}
      style={{ border: isActive ? `2px solid ${color}` : "" }}
    >
      <div
        className={styles.icon}
        style={{ backgroundColor: `rgba(${hexToRgb(color)}, 0.1)` }}
      >
        {icon}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>{name}</h2>
          {isActive && (
            <p
              className={styles.urge}
              style={{
                backgroundColor: `rgba(${hexToRgb(color)}, 0.1)`,
                color: `${color}`,
              }}
            >
              Срочно
            </p>
          )}
        </div>
        <p style={{ marginTop: !isActive ? "5px" : "" }}>{text}</p>
      </div>
    </div>
  );
}
