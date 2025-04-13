import { NavLink } from "react-router-dom";
import React from 'react';
import { Instagram, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Mobile() {
const [isOpen, setIsOpen] = useState(false)



const handleClick = () => {
    setIsOpen(prev => !prev);
};
  
  return (
    <>
    <div className="absolute right-5 top-12 cursor-pointer" onClick={handleClick}>
      {isOpen ? (
        <X className="transition-all duration-300 ease-in-out" size={30} color={"#059669"} />
      ) : (
        <Menu className="transition-all duration-300 ease-in-out" size={30} color={"#059669"} />
      )}
    </div>

    <div className={`pt-5 absolute top-full left-0 w-full bg-desktop border-t border-formBorder shadow-md transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'}`}>
      <nav className="flex flex-col items-center">
        <ul className="flex flex-col items-center gap-2.5 font-poppins">
          <li>
          <NavLink to="/" className="relative text-sm font-medium text-black transition-colors duration-300 hover:text-green-700 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-greenCustom after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100">
          Главная
        </NavLink>
          </li>
          <li>
            <NavLink to="/help" onClick={() => setIsOpen(false)} className=" relative text-sm font-medium text-black transition-colors duration-300 hover:text-green-700 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-greenCustom after:transition-all after:duration-500 hover:after:w-full">
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink to="/pets" onClick={() => setIsOpen(false)} className="relative text-sm font-medium text-black transition-colors duration-300 hover:text-green-700 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-greenCustom after:transition-all after:duration-500 hover:after:w-full">
              Животные
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" onClick={() => setIsOpen(false)} className="relative text-sm font-medium text-black transition-colors duration-300 hover:text-green-700 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-greenCustom after:transition-all after:duration-500 hover:after:w-full">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews" onClick={() => setIsOpen(false)} className="relative text-sm font-medium text-black transition-colors duration-300 hover:text-green-700 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-greenCustom after:transition-all after:duration-500 hover:after:w-full">
              Отзывы
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-full flex flex-col items-center justify-center gap-4 mt-4 mb-6 ">
        <button className="button w-2/3">
          <Instagram size={20} />
          <span>Instagram</span>
        </button>
        <button className="button w-2/3">
          <Search size={20} />
          <span>Поиск питомцев</span>
        </button>
      </div>
    </div>
  </>
  );
}