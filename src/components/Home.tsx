import React from 'react';
import { ChartNoAxesCombined, Dog, Users } from "lucide-react";
import Mission from './Mission'
import Reason from './Reason'
import ScrollToTop from './ScrollToTop';

const missions = [
  {
    img: "/images/home2.webp",
    text: "Мы стремимся предоставить бездомным животным заботу, любовь и защиту, которых они заслуживают. Наша цель — создать безопасную и комфортную среду для животных, находящихся в приютах.",
  },
  {
    img: "/images/home3.webp",
    text: "Мы работаем над тем, чтобы привлечь внимание к проблемам бездомных животных и важности их усыновления, стерилизации и ответственного отношения к ним. Образовательные программы и мероприятия помогают людям понять, как они могут помочь.",
  },
  {
    img: "/images/home4.webp",
    text: "Мы вдохновляем людей становиться волонтерами в приютах, предоставляя им возможности для участия в уходе за животными, организации мероприятий и продвижении нашей миссии. Мы верим, что каждый может внести свой вклад.",
  },
];

const reasons = [
  {
    color: "#FF7700",
    head: "Помощь тем, кто в ней нуждается",
    text: "Волонтёрство позволяет поддерживать тех, кто оказался в сложной жизненной ситуации, будь то животные, люди или природа. Ваш вклад может изменить чью-то жизнь к лучшему, подарить надежду и возможность на новый старт.",
    img: <Dog color="#ff7700" className="w-[40px] h-[40px] md:w-[64px] md:h-[64px]" />,
  },
  {
    color: "#059669",
    head: "Личностный рост и новые навыки",
    text: "Участие в волонтёрских проектах развивает коммуникацию, организаторские способности и эмпатию. Это отличная возможность изучить что-то новое, стать увереннее в себе и научиться работать в команде.",
    img: <ChartNoAxesCombined className="w-[40px] h-[40px] md:w-[64px] md:h-[64px]"  color="#059669" />,
  },
  {
    color: "#FF0004",
    head: "Изменения в обществе",
    text: "Волонтёры — это те, кто делает мир добрее и справедливее. Через совместные усилия можно улучшить экологию, поддержать бездомных животных, помочь малообеспеченным семьям или решить проблемы, которые важны для всех.",
    img: <Users className="w-[40px] h-[40px] md:w-[64px] md:h-[64px]"  color="#FF0004" />,
  },
];

export default function Home() {
  return (
    <div className="font-comfortaa">
           
      <section className="relative h-[85vh] overflow-hidden">
        <img 
          src="/images/home1.webp" 
          alt="Hero image"
          className="absolute inset-0 w-full h-full object-cover" 
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10"></div>
        <div className="relative z-100 top-[10%]">
          <div className="relative z-20  left-[10%] right-[10%] max-w-[650px] w-full text-left flex flex-col gap-5 md:gap-8">
            <h1 className="font-black text-greenCustom text-[38px] w-4/5 leading-[45px] font-poppins md:text-[55px] md:leading-[65px] md:w-full lg:text-6xl lg:leading-[80px]">
              Добро пожаловать в Petcare
            </h1>
            <p className="text-white text-sm font-medium font-exo w-[80%] leading-[23px] md:text-base md:w-full lg:text-lg lg:w-full">
              Волонтерство в приютах — это не только помощь животным, но и вклад в улучшение общества и развитие самих волонтеров. Мы верим, что каждое животное имеет право на любовь и заботу, и наша миссия — помочь им найти свой дом и обеспечить будущее.
            </p>
            <button className="button w-[50vw] font-exo py-3 text-xs sm:text-sm md:text-lg md:w-[70vw] lg:w-full lg:text-xl">
              Приютить пушистика
            </button>
          </div>  
        </div>
      </section>
      <section className="flex flex-col items-center mt-12 px-4">
        <h2 className="text-4xl md:text-6xl text-greenCustom">Наша миссия</h2>
        <div className="mt-24 flex flex-col lg:flex-col xl:flex-row items-center justify-around gap-12 w-full">
          {missions.map((mission, index) => (
            <Mission key={index} img={mission.img} text={mission.text} index={index+1}/>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center mt-36 px-4">
        <h2 className="text-3xl md:text-6xl text-greenCustom text-center">Важность волонтерства</h2>
        <div className="mt-12 mb-36 flex flex-col items-center gap-5 w-full md:gap-10 md:mt-24">
          {reasons.map((reason, index) => (
            <Reason
              key={index}
              color={reason.color}
              head={reason.head}
              text={reason.text}
              img={reason.img}
            />
          ))}
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}
