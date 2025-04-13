import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 max-h-[500px] h-full pt-5 bg-greenCustom">
      <div className=" flex flex-col items-center justify-center text-center gap-6 px-5">
        <h2 className="text-xs uppercase tracking-[2.8px] font-bold text-white opacity-60 leading-[27px] sm:text-sm">
          С любовью к каждому <br /> хвостику!
        </h2>
        <p className="max-w-[581px] w-full leading-[25px] font-light text-white text-xs sm:text-sm sm:leading-[27px] md:text-base md:leading-[33px]">
          Наша миссия — создать идеальные условия для жизни ваших питомцев, где
          они будут счастливы, здоровы и любимы. Давайте вместе заботиться о
          ваших любимцах!
        </p>
        <button className="border-0 rounded-[30px] font-medium py-3 px-10 sm:py-5 text-sm md:text-base text-greenCustom bg-white cursor-pointer transition-all duration-300 ease-in-out hover:bg-pastelGreen hover:text-white">
          Напишите нам
        </button>

        

        <div className="w-full border-t border-white flex items-center justify-between mt-5 pt-5">
          <img src="/logo.png" alt="logo" />
          <nav>
            <ul className=" items-start justify-between gap-6 md:gap-4 hidden md:flex">
              <li>
                <Link to="/" className="relative text-white text-base transition-all duration-500 ease-in-out hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-green-300">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/help" className="relative text-white text-base transition-all duration-500 ease-in-out hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-green-300">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/pets" className="relative text-white text-base transition-all duration-500 ease-in-out hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-green-300">
                  Животные
                </Link>
              </li>
              <li>
                <Link to="/faq" className="relative text-white text-base transition-all duration-500 ease-in-out hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-green-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/form" className="relative text-white text-base transition-all duration-500 ease-in-out hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-green-300">
                  Написать
                </Link>
              </li>
            </ul>
          </nav>
          <a
            href="https://www.instagram.com/petcare.jardem?igsh=MWV1M2psanpyY2g2dQ%3D%3D&utm_source=qr"
            className="ml-5"
          >
            <img src="/images/inst.svg" alt="inst" />
          </a>
        </div>
        <span className="text-sm text-white opacity-60 font-light mb-2">
          © 2024 petcare kz, jardem
        </span>
      </div>
    </footer>

  );
}
