import { useEffect, useRef } from "react";
import SwiperCore from "swiper/core";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import vegetablesImage from "./../../assets/images/Riviera-Summer-Vegetables.jpg";

const Slider = () => {
  const swiperRef = useRef(null);
  SwiperCore.use([Pagination, Navigation, Autoplay]);

  useEffect(() => {
    const swiper = swiperRef?.current?.swiper;

    if (swiper) {
      swiper?.autoplay?.start();
    }

    return () => {
      if (swiper) {
        swiper?.autoplay?.stop();
      }
    };
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      speed={2000}
      effect="fade"
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full h-[520px] relative">
          <img
            className="w-full h-full object-cover"
            src={vegetablesImage}
            alt=""
          />
        </div>
        <div className="slider-content absolute top-0 left-0">
          <strong>শতভাগ অর্গানিক ও টাটকা</strong>
          <h2>
            আপনাদের জন্য সরাসরি ফসলের মাঠ থেকে নিয়ে আসা টাটকা ও ফর্মালিন মুক্ত
            সবজি ।{" "}
          </h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
