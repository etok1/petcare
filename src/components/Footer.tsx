import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  const currenyYear = new Date().getFullYear()
  const linkStyles = `relative text-white text-base transition-all duration-500 ease-in-out hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-pastelGreen after:transition-all after:duration-500 after:ease-in-out`
  const routes = [{name:'Главная',link: '/'}, {name:'О нас',link: '/help'},{name:'Животные',link: ''}, {name:'FAQ',link: '/faq'}, {name:'Отзывы',link: '/reviews'}]

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
        <Link to="https://www.instagram.com/petcare.jardem?igsh=MXF1Yzk3MGJieW8ydg==" target='_blank'>
          <button className="border-0 rounded-[30px] font-medium py-3 px-10 sm:py-5 text-sm md:text-base text-greenCustom bg-white cursor-pointer transition-all duration-300 ease-in-out hover:bg-pastelGreen hover:text-white">
            Напишите нам
          </button>
        </Link>
        <div className="w-full border-t border-white flex items-center justify-between mt-5 pt-5">
          <img src="/logo.png" alt="logo" />
          <nav>
            <ul className="items-start justify-between gap-6 md:gap-4 hidden md:flex">
            {routes.map((item, index) => (
              <li key={index}>
                <Link to={item.link} className={linkStyles}>
                {item.name}
                </Link>
              </li>
              ))}
            </ul>
          </nav>
          <Link
            to="https://www.instagram.com/petcare.jardem?igsh=MWV1M2psanpyY2g2dQ%3D%3D&utm_source=qr"
            className="ml-5 transition-all duration-500 ease-in-out hover:scale-110"
            target='_blank'
          >
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path opacity="0.25" d="M44 22.5C44 34.3741 34.3741 44 22.5 44C10.6259 44 1 34.3741 1 22.5C1 10.6259 10.6259 1 22.5 1C34.3741 1 44 10.6259 44 22.5Z" stroke="white" stroke-width="2" className='transition-all duration-500 ease-in-out hover:shadow-md'/>
              <path d="M25.8678 19.9423C26.2986 19.9423 26.6478 19.5931 26.6478 19.1623C26.6478 18.7315 26.2986 18.3823 25.8678 18.3823C25.437 18.3823 25.0878 18.7315 25.0878 19.1623C25.0878 19.5931 25.437 19.9423 25.8678 19.9423Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 22.5C19.25 24.2924 20.7076 25.75 22.5 25.75C24.2924 25.75 25.75 24.2924 25.75 22.5C25.75 20.7076 24.2924 19.25 22.5 19.25C20.7076 19.25 19.25 20.7076 19.25 22.5ZM20.875 22.5C20.875 21.6038 21.6038 20.875 22.5 20.875C23.3962 20.875 24.125 21.6038 24.125 22.5C24.125 23.3962 23.3962 24.125 22.5 24.125C21.6038 24.125 20.875 23.3962 20.875 22.5Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 29H25.75C27.4205 29 29 27.4205 29 25.75V19.25C29 17.5795 27.4205 16 25.75 16H19.25C17.5795 16 16 17.5795 16 19.25V25.75C16 27.4205 17.5795 29 19.25 29ZM17.625 19.25C17.625 18.4903 18.4903 17.625 19.25 17.625H25.75C26.5097 17.625 27.375 18.4903 27.375 19.25V25.75C27.375 26.5097 26.5097 27.375 25.75 27.375H19.25C18.4757 27.375 17.625 26.5243 17.625 25.75V19.25Z" fill="white"/>
            </svg>
          </Link>
        </div>
        <span className="text-sm text-white opacity-60 font-light mb-2">
          © {currenyYear} petcare kz, jardem
        </span>
      </div>
    </footer>

  );
}
