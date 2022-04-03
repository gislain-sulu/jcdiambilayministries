import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const MyCarousel = ({ children }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {children.map((child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const MyCarouselMobile = ({ children }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiperMobile"
      >
        {children.map((child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
const MyCarouselMobileBlogSection = ({ children }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={1}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiperMobileBlogSection"
      >
        {children.map((child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export { MyCarousel, MyCarouselMobile, MyCarouselMobileBlogSection };
