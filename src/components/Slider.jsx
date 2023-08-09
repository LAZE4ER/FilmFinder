import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="2.jpg" alt="1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="1.jpg" alt="2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="3.jpg" alt="3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="4.jpg" alt="4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="5.jpg" alt="5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="6.jpg" alt="6" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="7.jpg" alt="7" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="8.jpg" alt="8" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="9.jpg" alt="9" />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
