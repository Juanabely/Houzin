import React from 'react'
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import './residence.css'
import 'swiper/css'
import data from '../../utils/slider.json'
import { Card } from '@chakra-ui/react'
import { sliderSettings } from '../../utils/common'

function Residencies() {
  return (
   <section className="r-wrapper" >
    <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
             <span className='orangeText'>Best choices</span>
             <span className='primaryText'>Popular Residence</span>
        </div>
        
        <Swiper {...sliderSettings}>
            <SliderButonns/>
            {
                data.map((card,i)=>(
                    <SwiperSlide key={i}>
                      <div className="flexColStart r-card">
                        <img src={card.image} alt="home" />
                        <span className='secondaryText r-price'>
                            <span style={{
                                color:'orange'
                            }}>$</span>
                            <span>{card.price}</span>
                        </span>
                        <span className="primaryText">{card.name}</span>
                        <span className="secondaryText">{card.detail}</span>
                        
                        </div>  
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
   </section>
  )
}

export default Residencies
const SliderButonns=()=>{
    const swiper = useSwiper();
    const handleNext=()=>{
        swiper.slideNext()
    }
    const handlePrev =()=>{
        swiper.slidePrev()
    }
    return(
        <div className="flexCenter r-buttons">
            <button onClick={handlePrev}>&lt;</button>
            <button onClick={handleNext}>&gt;</button>
        </div>
    )
}
