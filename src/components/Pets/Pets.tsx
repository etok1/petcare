// import CardPet from "./CardPet/CardPet";

import Filter from "../Filter/Filter";
import CardPet from "./CardPet/CardPet";
import Step from "./Step/Step";
import styles from "./style.module.css";
import { Search, PawPrint, CalendarDays, Handshake } from "lucide-react";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db, fetchImages } from "../../firebaseConfig";



const steps = [
  {
    icon: <Search size={32} color="#059669" />,
    title: "Выберите питомца",
    text: "Используйте фильтры чтобы найти идеального компаньона",
  },
  {
    icon: <CalendarDays size={32} color="#059669" />,
    title: "Запланируйте встречу",
    text: "Договоритесь о визите в приют, чтобы лично познакомиться с питомцем.",
  },
  {
    icon: <Handshake size={32} color="#059669" />,
    title: "Познакомьтесь и подружитесь",
    text: "Пообщайтесь с питомцем и убедитесь, что вы подходите друг другу.",
  },
  {
    icon: <PawPrint size={32} color="#059669" />,
    title: "Делайте шаг вместе",
    text: "Заберите питомца домой и начните ваше совместное приключение.",
  },
];


interface Pet {
  id: number;
  image: string;
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

export default function Pets() {
  const [items, setItems] = useState<any[]>([]);  
  const [images, setImages] = useState<string[]>([]);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible((prev) => !prev);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "pets"));
      const data = querySnapshot.docs.map(doc => doc.data());  console.log(data);
      setItems(data);
    };
    
    const getImages = async () => {
      const images = await fetchImages();
      setImages(images);
    };

    fetchData();
    getImages();
  }, []);

    

  return (
    <div className={styles.container} style={{padding: '15px'}}>
      <section className={styles.steps}>
        <h1>Как забрать питомца из приюта?</h1>
        <p className={styles.subheader}>
          Всего 4 простых шага чтобы найти верного друга
        </p>
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <Step key={index} icon={step.icon} title={step.title} text={step.text} />
          ))}
        </div>
      </section>
      <div className={styles.content}>
        <div className={styles.aside}>  
        <button className={styles.toggleBtn} onClick={toggleFilter}>
              {isFilterVisible ? "Скрыть фильтр" : "Показать фильтр"}
          </button>
          <aside className={`${styles.filter} ${isFilterVisible ? styles.show : styles.hide}`}>
            <Filter />
          </aside>
        </div>
        <div className={styles.cards}> 
          {images.length > 0 && items.map((item) => (
            item.pets.map((pet: Pet, petIndex: number) => {
              const petImage = images[pet.id - 1]; 
              console.log(pet.id);
              return (
                <CardPet key={petIndex} item={pet} img={petImage} />
              );
            })
          ))}
        </div>
      </div>
    </div>
  );
}
