import { Link } from 'react-router-dom';
import React from 'react';
import { border } from '@mui/system';

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

let listStyle = 'capitalize flex items-center gap-1 text-[7px] text-black font-semibold sm:text-xs md:text-sm'

export default function CardPet({item, img}: CardPetProps) {
  return (
    <div className='relative font-inter bg-white flex items-center gap-6 max-w-[760px] max-h-[350px] shadow-xl rounded-xl p-4' style={{border: '1px solid #3c2e2455'}}>
      <div className='rounded-full absolute bg-white px-4 py-1 text-sm font-poppins left-5 top-5 text-greenCustom font-bold'>{item.shelter}</div>
      <div className='rounded-xl object-contain overflow-hidden'>
        <img src={img} loading="lazy" alt={item.name} className='w-[200px] h-[220px] sm:w-[220px] md:w-[300px] md:h-[300px]'/>
      </div>
      <div className='w-1/2 flex flex-col'>
        <h2 className='text-base mb-1 font-bold text-gray-700 md:text-2xl'>{item.name}</h2>
        <p className='text-[9px] font-normal text-gray-500 sm:mt-3 sm:text-xs'>
        {item.description}
        </p>
        <ul className='mt-4 flex flex-wrap items-center gap-2'>
          <li className={listStyle}>
            <span>📅</span>{item.age}
          </li>
          <li className={listStyle}>
            <span>📏</span>{item.vaccinated ? 'Вакцинирован' :'Невакцинирован'}
          </li>
          <li className={listStyle}>
            <span>⚢</span>{item.sex}
          </li>
        </ul>
        <div className='mt-3 sm:mt-4'>
            <ol className='flex flex-wrap items-start gap-2 capitalize'>
              {item?.features?.map((feature) => (
                <li key={feature} className='bg-gray-200 text-grey py-[2px] px-[5px] rounded-full text-[7px] font-medium sm:text-xs sm:py-1 sm:px-2 md:py-[6px] md:px-4 md:text-sm'>{feature}</li>
              ))}
            </ol>
        </div>
        <button className='w-full mt-6 flex self-center justify-center font-comfortaa bg-greenCustom rounded-lg border-none text-white py-[10px] px-3 cursor-pointer transition-all duration-300 ease-in hover:bg-pastelGreen'>
          <Link to={item.link} target='_blank' className='text-white text-[8px] sm:text-xs md:text-base tracking-[1%] hover:text-white'>
            Записаться на знакомство
          </Link>
        </button>
      </div>
  </div>
  );
}


