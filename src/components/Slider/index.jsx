import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from './styles'
import { Card } from '../Card'

export const Slider = ({ info, title, id }) => {

    return (
        <Container id={id}>
            <h2>{title}</h2>
            <Swiper
                grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className='swiper'
                scrollbar={false}
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} />
                    </SwiperSlide>
                )

                )}

            </Swiper>
        </Container>
    )
}
