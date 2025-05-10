import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';
import { Instagram, Menu, Search, X } from "lucide-react";
import { useState } from "react";

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false)
const location = useLocation()


  const handleClick = () => {
      setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.closest(".scroll-to-top")) return;


      if (!event.target.closest(".mobile-menu") && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);
  
useEffect(() => {
  setIsOpen(false)
},[location])

  const linkClasses = (isActive:boolean) =>
  `relative text-sm font-medium text-black transition-colors duration-300 hover:text-green-700 ${
    isActive ? "after:w-full text-green-700" : ""
  } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-greenCustom after:transition-all after:duration-500 hover:after:w-full`;


  return (
    <>
    <div className="absolute right-5 top-12 cursor-pointer" onClick={handleClick} aria-label="Toggle menu">
      {isOpen ? (
        <X className="transition-all duration-300 ease-in-out" size={30} color={"#059669"} />
      ) : (
        <Menu className="transition-all duration-300 ease-in-out" size={30} color={"#059669"} />
      )}
    </div>

    <div className={`pt-5 absolute top-full left-0 w-full bg-desktop border-t border-formBorder shadow-md transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'}`}>
      <nav className="flex flex-col items-center">
        <ul className="flex flex-col items-center gap-2.5 font-poppins">
          {["/", "/help", "/pets", "/faq", "/reviews"].map((path, index) => {
              const labels = ["Главная", "О нас", "Животные", "FAQ", "Отзывы"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => handleClick()}
                    className={({ isActive }) => linkClasses(isActive)}
                    aria-label={labels[index]}
                  >
                    {labels[index]}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
      <div className="w-full flex flex-col items-center justify-center gap-4 mt-4 mb-6 ">
      <Link to="https://www.instagram.com/petcare.jardem?igsh=MXF1Yzk3MGJieW8ydg==" target='_blank'>
        <button className="button">
          <Instagram size={20} />
          Instagram
        </button>
      </Link>
      <NavLink to="/pets">
        <button className="button">
          <Search size={20} />
          Поиск питомцев
        </button>
      </NavLink>
      </div>
    </div>
  </>
  );
}