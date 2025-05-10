import React from 'react';
import Filter from "./Filter";
import CardPet from "./Pets/CardPet";
import Step from "./Pets/Step";
import { Search, PawPrint, CalendarDays, Handshake } from "lucide-react";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db, fetchImages } from "../firebaseConfig";
import { Loading } from './Loading';
import ScrollToTop from './ScrollToTop';



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


interface Item {
  pets: Pet[]; 
}
export default function Pets() {
  const [items, setItems] = useState<Item>({pets: []});  
  const [filteredItems, setFilteredItems] = useState<Item>({ pets:  [] });
  const [images, setImages] = useState<string[]>([]);
  const [isFilterVisible, setFilterVisible] = useState(true);
  const [visibleItems, setVisibleItems] = useState(6)
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState({
    category: '',
    sex: '',
    ageRange: '',
    shelter: '',
  })

  const toggleFilter = () => {
    setFilterVisible((prev) => !prev);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        
        const querySnapshot = await getDocs(collection(db, "pets"));
        const data = querySnapshot.docs.map(doc => doc.data());
        const petsData = data[0].pets
        setItems({pets: petsData});
        setFilteredItems({pets: petsData});
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    };
    
    const getImages = async () => {
      const images = await fetchImages();
      setImages(images);
    };

    fetchData();
    getImages();  
  }, []);

  useEffect(() => {
    const filtered = items.pets.filter((item) => {
      const petAge = extractAge(item.age);
      
      const matchesCategory = filter.category === '' || item.species === filter.category;
      const matchesSex = filter.sex === '' || item.sex.toLowerCase() === filter.sex;
      const matchesAgeRange = filter.ageRange === '' || checkAgeRange(petAge, filter.ageRange);
      const matchesShelter = filter.shelter === '' || item.shelter === filter.shelter;
      return matchesCategory && matchesSex && matchesAgeRange && matchesShelter;
    });
  
    setFilteredItems({ pets: filtered });
  }, [filter]);

  const loadMore = () => {
    setVisibleItems(prevVisibleComments => prevVisibleComments + 6);
  }

  const extractAge = (ageString: string) => {
    const match = ageString.match(/\d+/); 
    return match ? parseInt(match[0], 10) : null; 
  };

  const applyFilters = (newFilter) =>{
    setFilter(newFilter)
  }

  const checkAgeRange = (age:number | null, ageRange:string) => {
    if (!ageRange || ageRange === '') return true;
    if (age === null) return false;
    if(ageRange === '7+') return age > 7



    const [minAge, maxAge] = ageRange.split('-').map(Number)
   

    return age >= minAge && age <= maxAge
  }

  return (
    <div className='mt-12 flex flex-col items-center ' style={{padding: '15px'}}>
      <section className='m-auto text-center'>
        <h1 className='text-2xl text-brown md:text-4xl'>Как забрать питомца из приюта?</h1>
        <p className='mt-5 text-sm font-medium text-gray-500 md:text-base'>
          Всего 4 простых шага чтобы найти верного друга
        </p>
        <div className='w-full mt-[100px] flex items-start justify-center flex-wrap gap-6 '>
          {steps.map((step, index) => (
            <Step key={index} icon={step.icon} title={step.title} text={step.text} />
          ))}
        </div>
      </section>
      {loading && (<div className='flex flex-col items-center mt-20'><Loading /></div>)}
      <section className='w-full mt-[150px] pt-12 flex flex-col justify-between gap-12 border-t border-gray-200 lg:flex-row'>
        {!loading &&
        <div className='flex-[35%] '>  
          <button className='block mb-4 py-2 px-4 bg-greenCustom text-white border-none rounded-lg cursor-pointer text-sm font-semibold focus:outline-none active:outline-none' onClick={toggleFilter}>
              {isFilterVisible ? "Скрыть фильтр" : "Показать фильтр"}
          </button>
          <aside className={`sticky top-0 transition-all duration-300 ease ${isFilterVisible ? 'block translate-y-0' : 'translate-y-[-50%] hidden pointer-events-none transition-all duration-300 ease-in'}`}>
            <Filter handleSubmitFilter={applyFilters}/>
          </aside>
        </div>}
        <div className="flex flex-col gap-6">
          {!loading && <h3 className='text-lg text-grey'>Показано {Math.min(visibleItems, filteredItems.pets.length)} из {filteredItems.pets.length} животных</h3>}
          {filteredItems.pets.length > 0 && filteredItems.pets.slice(0, visibleItems).map((pet) => {
            const petImage = images[pet.id - 1]; 
            return (
              <CardPet key={pet.id} item={pet} img={petImage} />
            );
          })}
            {filteredItems.pets.length > visibleItems && (
              <div className="mt-10 flex justify-center">
                <button onClick={loadMore} className="button">
                  Загрузить больше
                </button>
              </div> 
            )}
          </div>
      </section>
      <ScrollToTop />
    </div>
  );
}
