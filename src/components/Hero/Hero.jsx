import React from 'react'
import './Hero.css'
import {EnvironmentOutlined} from '@ant-design/icons'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

function Hero() {
    return (

        <>
            <section className="hero-wrapper">
                <div className="paddings innerWidth flexCenter hero-container">

                    <div className="flexColStart hero-left">
                        <div className="hero-title">
                            <div className="orange-circle"/>
                            <motion.h1
                            initial={{y:'2rem',opacity:0}}
                            animate={{y:0,opacity:1}}
                            transition={{
                                duration:3,
                                type:'spring'
                            }}
                            >Discover <br /> most suitable <br /> property</motion.h1>
                        </div>
                        <div className="flexColStart hero-des">
                            <span>
                                Find a variety of properties that suit you very easily
                            </span>
                            <span>
                                Forget all the difficulties in finding a residence for you
                            </span>
                        </div>
                        <div className="flexCenter search-bar">
                            <EnvironmentOutlined style={{
                                color:'var(--blue)',
                                width:'25px'
                            }}/>
                            <input type="text" />
                            <button className='button'>search</button>
                        </div>
                        <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8000} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Premium products
                            </span>
                            
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Happy customers
                            </span>
                            
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp  end={28} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Award wining
                            </span>
                            
                        </div>
                        </div>
                        
                    </div>

                    <div className="flexCenter hero-right">
                        <motion.div className="image-container"
                        initial={{
                            x:'7rem',opacity:0
                        }}
                        animate={{
                            x:0,opacity:1
                        }}
                        transition={{
                            duration:3,
                            type:"spring"
                        }}
                        >
                            <img src="./modern-house.jpeg" alt="" />
                        </motion.div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero