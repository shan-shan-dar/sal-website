// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function MySwiper() {
  return (
    <div className='flex mt-16 select-none'>
      <div className='swiper-button-prev-custom text-lightgreen hover:opacity-50 transition-all p-2 rounded-full my-auto mx-auto object-fit'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-16 h-16'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </div>
      <Swiper
        // install Swiper modules
        effect={"fade"}
        modules={[Navigation, A11y, EffectFade]}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
      >
        {[...Array(28)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className='bg-dartmouth p-2 rounded-2xl'>
              <img
                src={`/outreach_pictures/${index + 1}.jpg`}
                className='rounded-2xl w-full aspect-video object-cover'
                alt={`outreach image ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='swiper-button-next-custom text-lightgreen hover:opacity-50 transition-all p-2 rounded-full my-auto mx-auto'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-16 h-16'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </div>
    </div>
  );
}
