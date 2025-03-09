import { Link } from 'react-router-dom';
import styles from './style.module.css'

interface Pet {
  name: string;
  species: string;
  sex: string;
  age: string;
  description: string;
  shelter: string;
  features: string[];
  vaccinated: boolean;
  link: string;
}

interface CardPetProps {
  item: Pet; 
  img: string;
}

export default function CardPet({item, img}: CardPetProps) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} loading="lazy" alt={item.name} />
      </div>
      <div className={styles.info}>
        <h2>{item.name}</h2>
        <p>
        {item.description}
        </p>
        <ul>
          <li>
            <span>📅</span>{item.age}
          </li>
          <li>
            <span>📏</span>{item.vaccinated ? 'Вакцинирован' :'Невакцинирован'}
          </li>
          <li>
            <span>⚢</span>{item.sex}
          </li>
        </ul>
        <div className={styles.qualities}>
            <ol>
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ol>
        </div>
        <button className={styles.booking}>
          <Link to={item.link}>Записаться на знакомство</Link>
        </button>
      </div>
  </div>
  );
}


