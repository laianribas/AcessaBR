import React from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Church from '../../images/igreja-matriz.jpg'

import 'swiper/swiper-bundle.css'

import Card from '../Card'

SwiperCore.use(Pagination)

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        767: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 4
        }
      }}
    >
      <SwiperSlide>
        <Card
          img={Church}
          place="Igreja Matriz"
          hasBraille={false}
          hasAudio={true}
          hasAcessibleToilet={true}
          hasElevator={false}
          hasParking={true}
          hasGuideDog={false}
          hasTactileFloor={false}
          hasWideDoor={true}
          hasRamp={true}
          hasLibras={false}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
