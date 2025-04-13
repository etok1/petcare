import React from 'react';
import { NavLink } from "react-router-dom";
import { Instagram, Search } from "lucide-react";

export default function Desktop() {
    return(
        <>
      <nav>
        <ul className="flex items-center justify-between gap-6 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative text-sm font-medium text-black transition-colors duration-300 hover:text-green-700 
                ${isActive ? 'after:w-full text-green-700' : ''} 
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-greenCustom after:transition-all after:duration-500 hover:after:w-full`
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `relative text-sm font-medium text-black transition-colors duration-300 hover:text-green-700 
                ${isActive ? 'after:w-full text-green-700' : ''} 
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-greenCustom after:transition-all after:duration-500 hover:after:w-full`
              }
            >
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pets"
              className={({ isActive }) =>
                `relative text-sm font-medium text-black transition-colors duration-300 hover:text-green-700 
                ${isActive ? 'after:w-full text-green-700' : ''} 
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-greenCustom after:transition-all after:duration-500 hover:after:w-full`
              }
            >
              Животные
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `relative text-sm font-medium text-black transition-colors duration-300 hover:text-green-700 
                ${isActive ? 'after:w-full text-green-700' : ''} 
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-greenCustom after:transition-all after:duration-500 hover:after:w-full`
              }
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `relative text-sm font-medium text-black transition-colors duration-300 hover:text-green-700 
                ${isActive ? 'after:w-full text-green-700' : ''} 
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-greenCustom after:transition-all after:duration-500 hover:after:w-full`
              }
            >
              Отзывы
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-6 mt-4">
  <NavLink to="">
    <button className="button">
      <Instagram size={20} />
      Instagram
    </button>
  </NavLink>
  <NavLink to="/pets">
    <button className=" button">
      <Search size={20} />
      Поиск питомцев
    </button>
  </NavLink>
</div>
    </>
    )
}