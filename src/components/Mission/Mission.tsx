import styles from "./style.module.css";

interface MissionProp {
  img: string;
  text: string;
}

export default function Mission({ img, text }: MissionProp) {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{text}</p>
      <img src={img} alt="animal" width={350} height={227} />
    </div>
  );
}
