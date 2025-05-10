import React from 'react';
import { useState } from "react";


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


export default function Filter({handleSubmitFilter}) {
  const [category, setCategory] = useState('');
  const [sex, setSex] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [shelter, setShelter] = useState('');

    const handleChangeCategory = (value:string) => setCategory(value)
    const handleChangeGender = (value:string) => setSex(value)
    const handleChangeAge = (value: string) => setAgeRange(value)
    const handleChangeShelter = (value: string) => setShelter(value)

    const inputFormStyles = 'w-full flex flex-col gap-2 mb-0 flex-wrap'
    const labelsFormStyles = 'text-label text-xs font-semibold mb-3 md:mb-0 font-poppins text-grey md:text-sm lg:text-md'

    const onSubmitFilter = () => {
      const newFilter = {category, sex, ageRange, shelter}
      handleSubmitFilter(newFilter)
    }

  return (
        <div className=" w-full max-w-full bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row flex-wrap gap-3 items-center overflow-x-auto" style={{border: '2px solid #059669'}}>
          <h2 className="text-dark-grey text-lg font-bold mb-6 font-poppins text-grey md:text-xl lg:text-2xl">Фильтр поиска</h2>

          <div className={inputFormStyles}>
            <label className={labelsFormStyles}>Категория</label>
            <div className="flex flex-nowrap overflow-x-auto gap-1 pb-1 font-poppins">
              <button className={category === '' ? 'filterActiveBtn' : 'filterInactiveBtn'} onClick={() => handleChangeCategory('')}>
                Все
              </button>
              <button className={category === 'кот' ? 'filterActiveBtn' : 'filterInactiveBtn'}  onClick={() => handleChangeCategory('кот')}>
                Коты
              </button>
              <button className={category === 'собака' ? 'filterActiveBtn' : 'filterInactiveBtn'}  onClick={() => handleChangeCategory('собака')}>
                Собаки
              </button>
            </div>
          </div>

          <div className={inputFormStyles}>
            <label className={labelsFormStyles}>Пол</label>
            <div className="flex flex-nowrap overflow-x-auto gap-1 pb-1 font-poppins">
              <button className={sex === '' ? 'filterActiveBtn' : 'filterInactiveBtn'} onClick={() => handleChangeGender('')}>
                Все
              </button>
              <button className={sex === 'м' ? 'filterActiveBtn' : 'filterInactiveBtn'} onClick={() => handleChangeGender('м')}>
                М
              </button>
              <button className={sex === 'д' ? 'filterActiveBtn' : 'filterInactiveBtn'} onClick={() => handleChangeGender('д')}>
                Д
              </button>
            </div>
          </div>

          <div className={inputFormStyles}>
            <label className={labelsFormStyles}>Возраст</label>
            <select name="age" id="age" onClick={(e) => handleChangeAge(e.currentTarget.value)} className="appearance-none bg-white border-2 border-formBorder rounded-lg text-grey text-sm px-4 pr-12 py-2 w-full cursor-pointer transition-all duration-300 ease-in-out bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20fill=%22none%22%20viewBox=%220%200%2024%2024%22%20stroke=%22%236b7280%22%3E%3Cpath%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%20d=%22M19%209l-7%207-7-7%22/%3E%3C/svg%3E')] bg-no-repeat bg-[length:16px] bg-[position:right_12px_center] focus:outline-none focus:border-greenCustom focus:shadow-[0_0_0_3px_rgba(5,150,105,0.1)]">
              {ageRanges.map((range) => (
                <option key={range.value} value={range.value}  className="text-grey text-sm px-3 py-1 hover:bg-form-border">
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div className={inputFormStyles}>
            <label className={labelsFormStyles}>Приют (Астана)</label>
            <select name="shelter" id="shelter" onClick={(e) => handleChangeShelter(e.currentTarget.value)} className="appearance-none bg-white border-2 border-formBorder rounded-lg text-grey text-sm px-4 pr-12 py-2 w-full cursor-pointer transition-all duration-300 ease-in-out bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20fill=%22none%22%20viewBox=%220%200%2024%2024%22%20stroke=%22%236b7280%22%3E%3Cpath%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%20d=%22M19%209l-7%207-7-7%22/%3E%3C/svg%3E')] bg-no-repeat bg-[length:16px] bg-[position:right_12px_center] focus:outline-none focus:border-greenCustom focus:shadow-[0_0_0_3px_rgba(5,150,105,0.1)]">
              {shelters.map((shelter) => (
                <option key={shelter.value}  value={shelter.value} className="text-grey text-sm px-3 py-1 hover:bg-form-border">
                  {shelter.label}
                </option>
              ))}
            </select>
          </div>

          <button className="button text-[10px] sm:text-xs md:text-sm my-3 " onClick={onSubmitFilter}>
            Применить фильтр
          </button>
        </div>
  );
}
