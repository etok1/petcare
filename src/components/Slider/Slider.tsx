import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import {
  Bone,
  BookHeart,
  BriefcaseMedical,
  Camera,
  Car,
  ChevronLeft,
  ChevronRight,
  Ham,
  Hammer,
  HandCoins,
  Handshake,
  Speech,
  Timer,
  Trees,
} from "lucide-react";


const methods = [
  {
    title: "Помощь питомцам",
    color: "#ff0004",
    reasons: [
      {
        name: "Корм и лакомства",
        text: "Сухой и влажный корм, лакомства",
        isActive: true,
        icon: <Ham color="#FF0004" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>,
      },
      {
        name: "Временная передержка",
        text: "Приютить животное на время поиска хозяев",
        isActive: false,
        icon: <Timer color="#FF0004"  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>,
      },
      {
        name: "Лечение",
        text: "Помощь в оплате ветеринарных услуг",
        isActive: false,
        icon: <BriefcaseMedical color="#FF0004"  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>,
      },
    ],
  },
  {
    title: "Стать волонтером",
    color: "#4299e1",
    reasons: [
      {
        name: "Выгул собак",
        text: "Прогулки с собаками из приюта",
        isActive: true,
        icon: <Trees size={32} color="#4299e1"  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>,
      },
      {
        name: "Уход и забота",
        text: "Помощь в кормлении и уходе за животными",
        isActive: false,
        icon: <BookHeart size={32} color="#4299e1"  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>,
      },
      {
        name: "Фотосъёмка",
        text: "Фото питомцев для пристройства",
        isActive: false,
        icon: <Camera size={32} color="#4299e1" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />,
      },
    ],
  },
  {
    title: "Материальная помощь",
    color: "#FF7700",
    reasons: [
      {
        name: "Предметы ухода",
        text: "Миски, лотки, игрушки, поводки, лежанки",
        isActive: true,
        icon: <Bone size={32} color="#FF7700" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>,
      },
      {
        name: "Пожертвования",
        text: "Финансовая поддержка приютов",
        isActive: false,
        icon: <HandCoins size={32} color="#FF7700" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>,
      },
      {
        name: "Строительство",
        text: "Материалы для ремонта и обустройства",
        isActive: false,
        icon: <Hammer size={32} color="#FF7700" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>,
      },
    ],
  },
  {
    title: "Информационная помощь",
    color: "#059669",
    reasons: [
      {
        name: "Пиар приютов",
        text: "Репосты, рассказы о питомцах",
        isActive: true,
        icon: <Speech size={32} color="#059669" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>,
      },
      {
        name: "Транспорт",
        text: "Помощь с перевозкой животных",
        isActive: false,
        icon: <Car size={32} color="#059669" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>,
      },
      {
        name: "Кураторство",
        text: "Курирование питомца до пристройства",
        isActive: false,
        icon: <Handshake size={32} color="#059669" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>,
      },
    ],
  },
];

export default function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  
    slidesToScroll: 1,
    nextArrow: (
      <div style={{ width: "100%", height: "100%" }}>
        <ChevronRight size={35} color="#3c2e24" />
      </div>
    ),
    prevArrow: (
      <div style={{ width: "auto", height: "auto" }}>
        <ChevronLeft size={35} color="#3c2e24" />
      </div>
    ),
  };

  return (
    <div className='container'  style={{ width: "90%", margin: "0 auto", marginTop: "55px" }}>
      <Slider {...settings}>
        {methods.map((method, index) => (
          <Slide key={index}
            title={method.title}
            color={method.color}
            reasons={method.reasons}
          />
        ))}
      </Slider>
    </div>
  );
}
