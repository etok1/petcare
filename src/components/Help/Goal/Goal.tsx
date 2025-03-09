import styles from "./style.module.css";

interface GoalProps {
  svg: JSX.Element;
  text: string;
}

export default function Goal({ svg, text }: GoalProps) {
  return (
    <div className={styles.container}>
      <div className={styles.svgContainer}>{svg}</div>
      <p>{text}</p>
    </div>
  );
}
