import React from 'react';
import Goal from './Goal';
import MySlider from "./Slider/Slider";
import { Flower2, Heart, Earth, Sun } from "lucide-react";
import { NavLink } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const goals = [
  {
    svg: <Earth color="#059669"  className='sm:w-6 sm:h-6 md:w-9 md:h-9 lg:w-[50px] lg:h-[50px]'/>,
    text: "Обеспечить приюты всем необходимым — от еды и медикаментов до средств для улучшения условий содержания животных.",
  },
  {
    svg: <Sun color="#059669"  className='sm:w-6 sm:h-6 md:w-9 md:h-9 lg:w-[50px] lg:h-[50px]'/>,
    text: "Спасение жизней животных. Развивать их проблемы и потребности. Информировать их природные угрозы, такие как зимование.",
  },
  {
    svg: <Flower2 color="#059669"  className='sm:w-6 sm:h-6 md:w-9 md:h-9 lg:w-[50px] lg:h-[50px]'/>,
    text: "Повышение шансов на успешное пристройстао. Наш сайт поможет найти людям своих питомцев, просматривать про них информацию.",
  },
  {
    svg: <Heart color="#059669" className='sm:w-6 sm:h-6 md:w-9 md:h-9 lg:w-[50px] lg:h-[50px]'/>,
    text: "Формирование гуманного общество. Чем больше развиваются проблемы животных-больше людей осведомляются об этом.",
  },
];

export default function Home() {
const issues = [
  {
    title: "Перенаселение приютов",
    text: "Многие приюты сталкиваются с проблемой перенаселения, из-за чего животным не хватает должного внимания и заботы."
  },
  {
    title: "Недостаток ресурсов",
    text: "Финансовая поддержка и ресурсы ограничены, что затрудняет обеспечение питомцев всем необходимым."
  },
  {
    title: "Необходимость в помощи с усыновлением",
    text: "Многие животные остаются в приютах на длительное время из-за трудности нахождения новых владельцев."
  },
  {
    title: "Проблемы со здоровьем",
    text: "Животные часто поступают в приюты в плохом состоянии, требуя немалых затрат на лечение и восстановление."
  }
]

  return (
    <div style={{padding: '15px'}}>
      <section className='my-[50px] mx-auto p-6 max-w-[90%] w-full h-full bg-greenCustom flex flex-col items-start gap-8 rounded-md lg:flex-row md:w-fill md:gap-12'>
          <img
            src="/images/pets1.webp"
            alt="pets1"
            width="100%"
            className="rounded-md w-full h-[300px] sm:h-[400px] object-cover"
            fetchPriority="high"
          />
        <div className=''>
          <h1 className='text-[clamp(12px, 2vw, 32px)] text-white uppercase font-bold md:text-3xl lg:text-4xl xl:text-[55px]'>Наша миссия</h1>
          <p className="text-[clamp(10px,1.7vw,20px)] text-white leading-[1.4] mt-3 md:leading-[1.6] lg:text-base"><strong className='font-bold'>
              Наша миссия — помочь животным, которым нужна забота и внимание.
            </strong>{" "}
            Мы стремимся поддерживать приюты для животных, предоставлять им
            необходимые ресурсы и заботиться о тех, кто оказался в трудной
            ситуации. Наши волонтеры работают не только для того, чтобы
            предоставить временное жилье для питомцев, но и для того, чтобы
            помочь им найти новые семьи, улучшить их здоровье и подарить шанс на
            счастливую жизнь.
          </p>
        </div>
      </section>
      <section className='my-[100px]'>
            <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center space-y-6 text-center bg-green-100 mx-auto">
              <blockquote className="relative text-sm sm:text-lg font-semibold text-gray-800">
                <div className="absolute text-4xl md:text-6xl text-greenCustom opacity-20 top-0 left-[-10px]">"</div>
                <div className="relative z-10 leading-5 sm:leading-6">
                  <span className="bg-pastelGreen text-white px-2 py-1 rounded">
                    Спасая одно животное
                  </span>
                  , ты не изменишь весь мир,<br/> 
                  но для него изменится целый мир.
                </div>
                <div className="absolute text-4xl md:text-6xl text-greenCustom opacity-20 bottom-0 right-0">"</div>
              </blockquote>
              
              <button className="button w-fit self-center py-3 text-xs sm:text-sm">
                <NavLink to='/pets'>Помочь животным</NavLink>
              </button>
            </div>
      </section>
      <section className='mt-[150px] flex flex-col items-center'>
        <h2 className='text-lg text-center font-extrabold text-brown sm:text-2xl md:text-3xl lg:text-[40px]'>Чего мы хотим</h2>
        <p className='mt-4 text-grey text-center max-w-[589px] w-full text-xs font-normal leading-5 sm:text-sm md:text-base lg:text-lg'>
          Мы хотим создать общество, в котором каждый питомец, независимо от его
          прошлого, получит шанс на лучшее будущее. Мы стремимся:
        </p>
        <div className='mt-[100px] grid grid-cols-2 grid-rows-2 gap-x-[30px] gap-y-[50px]'>
          {goals.map((goal, index) => (
            <Goal key={index} svg={goal.svg} text={goal.text} />
          ))}
        </div>
      </section>
      <section className="mt-[150px] flex flex-col items-center">
      <h2 className="text-xl font-extrabold text-brown tracking-wide text-center relative before:absolute before:w-full before:h-1 before:bg-brown before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 sm:text-2xl md:text-3xl lg:text-[40px] xl:text-5xl">Проблемы</h2>
      <ol className="mt-[50px] w-[90%] list-decimal list-inside text-brown text-2xl leading-relaxed lg:flex lg:flex-col lg:justify-center lg:items-start lg:my[50px] lg:mx-[40px] lg:max-w-[950px] ">
        {issues.map((item, index) => (
          <li key={index} className="mb-2 text-[10px] leading-4 text-start sm:text-sm sm:leading-[22px] sm:mb-4 md:text-lg md:leading-[26px] md:mb-5 lg:text-xl lg:leading-[1.3] lg:mb-6">
            <strong>{item.title}:</strong> {item.text}
          </li>
        ))}
      </ol>
      </section>
      <section className='mt-[150px] flex flex-col items-center'>
        <h4 className='text-lg text-brown text-center font-bold sm:text-2xl md:text-2xl lg:text-3xl xl:text-[40px]'>Чем можно помочь приютам?</h4>
        <p className='mt-4 text-grey text-center max-w-[589px] w-full text-xs font-normal leading-5 sm:text-sm md:text-base lg:text-lg'>
          Каждая помощь важна! Выберите удобный для вас способ поддержать
          животных из приютов.
        </p>
        <MySlider />
      </section>
         <ScrollToTop />
    </div>
  );
}
