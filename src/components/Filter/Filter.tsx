import { useState } from "react";
import styles from "./style.module.css";


const ageRanges = [
  { value: '', label: 'Все' },
  { value: '0-1', label: 'До 1 года' },
  { value: '1-3', label: '1-3 года' },
  { value: '3-7', label: '3-7 лет' },
  { value: '7+', label: '7+ лет' }
];

const shelters = [
  { value: '', label: 'Все' },
  {
    value: 'i am alive', label: 'i am alive'
  }, 
  {
    value: 'СтопОтлов', label: 'СтопОтлов'
  },
]

export default function Filter() {
const [filter, setFilter] = useState({
  category: 'all',
  sex: 'all',
  ageRange: '',
  shelter: '',
})

  return (
    <div className={styles.filter}>
      <h2>Фильтр поиска</h2>
      <div className={styles.category}>
        <label>Категория</label>
        <div className={styles.btns}>
          <button className={`${styles.btn} ${styles.btnActive}`}>Все</button>
          <button className={`${styles.btn}`}>Кошки</button>
          <button className={`${styles.btn}`}>Собаки</button>
        </div>
      </div>
      <div className={styles.category}>
        <label>Пол</label>{" "}
        <div className={styles.btns}>
          <button className={`${styles.btn}`}>Все</button>
          <button className={`${styles.btn} ${styles.btnActive}`}>М</button>
          <button className={`${styles.btn}`}>Ж</button>{" "}
        </div>
      </div>
      <div className={styles.category}>
      <label>Возраст</label>
      <select 
        className={styles.selection}
      >
        {ageRanges.map((range) => (
          <option key={range.value} value={range.value}  className={styles.option}>
            {range.label}
          </option>
        ))}
      </select>
      </div>
      <div className={styles.category}>
        <label>Приют (Астана)</label>
        <select name="shelter" id="shelter" className={styles.selection}>
          {shelters.map((shelter) => (
              <option value={shelter.value} className={styles.option}>
                {shelter.label}
              </option>
          ))}
         
        
        </select>
      </div>
      <button className={`${styles.applyBtn} button`}>Применить фильтр</button>
    </div>
  );
}
