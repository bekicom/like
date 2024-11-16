import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./mainTinder.css";
import img1 from "../img/swiper-img/11111111111111.png";
import img2 from "../img/swiper-img/2222222222222222.png";
import { EffectCards } from "swiper/modules";
import { IoClose } from "react-icons/io5";
import { FaSms } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";

const TinderCards = () => {
  const girls = [
    {
      id: 1,
      name: "Sarina",
      img: img1,
      age: 36,
      city: "Москва",
      status: "Свободная",
      height: 166,
      nationality: "Русский",
    },
    {
      id: 2,
      name: "Malika",
      img: img2,
      age: 36,
      city: "Москва",
      status: "Свободная",
      height: 166,
      nationality: "Русский",
    },
    {
      id: 3,
      name: "Yasmina",
      img: img1,
      age: 36,
      city: "Москва",
      status: "Свободная",
      height: 166,
      nationality: "Русский",
    },
    {
      id: 4,
      name: "Zarina",
      img: img2,
      age: 36,
      city: "Москва",
      status: "Свободная",
      height: 166,
      nationality: "Русский",
    },
    {
      id: 5,
      name: "Sarina",
      img: img1,
      age: 36,
      city: "Москва",
      status: "Свободная",
      height: 166,
      nationality: "Русский",
    },
    {
      id: 6,
      name: "Malika",
      img: img2,
      age: 36,
      city: "Москва",
      status: "Свободная",
      height: 166,
      nationality: "Русский",
    },
    {
      id: 7,
      name: "Yasmina",
      img: img1,
      age: 36,
      city: "Москва",
      status: "Свободная",
      height: 166,
      nationality: "Русский",
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [animationText, setAnimationText] = useState("");

  // Slide o'zgarganda qaysi tomonga o'zgarganini aniqlash
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    const previousIndex = swiper.previousIndex;

    if (currentIndex > previousIndex) {
      // O'ngga surilgan (right)
      setAnimationText("x");
      setTimeout(() => {
        setAnimationText("");
      }, 500); // 0.5 sekunddan keyin matnni yo'qotish
    } else if (currentIndex < previousIndex) {
      // Chapga surilgan (left)
      setAnimationText("❤");
      setTimeout(() => {
        setAnimationText("");
      }, 500);
    }
  };
  return (
    <div className="tinder-container">
      <Header />

      {animationText && (
        <div
          className={`animation-text ${
            animationText === "x" ? "dislike" : "like"
          }`}
        >
          {animationText}
        </div>
      )}

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {girls.map((girl) => (
          <SwiperSlide key={girl.id} className="girl-item">
            <img id="img" src={girl.img} alt={girl.name} />
            <div className="buttons-container">
              <button
                className="dislike-button"
                onClick={() => swiperInstance?.slideNext()}
              >
                <IoClose />
              </button>
              <button className="dislike-sms">
                <FaSms color="#AA3FEC" size={40} />
              </button>
              <button
                className="like-button"
                onClick={() => swiperInstance?.slidePrev()}
              >
                ❤
              </button>
            </div>
            <div className="girl_info">
              <b>
                {girl.name} {girl.age}
              </b>
              <p>{girl.city}</p>
              <p>{girl.status}</p>
              <p>
                {girl.height}
                см рост
              </p>
              <p>{girl.nationality}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Footer />
    </div>
  );
};

export default TinderCards;
