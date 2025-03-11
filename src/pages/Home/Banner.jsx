import React from 'react';
import { motion } from "motion/react"
import { easeInOut, easeOut } from 'motion';
import teme1 from '../../assets/banner/teme1.jpg'
import teme2 from '../../assets/banner/teme2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1 ml-16'>
                        <motion.img
                            animate={{ y: [100, 50, 100] }}
                            transition={{ duration: 7, repeat: Infinity }}
                            src={teme1}
                            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500 shadow-2xl" />
                        <motion.img
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 7, repeat: Infinity }}
                            src={teme2}
                            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500 shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <motion.h1
                            animate={{ x: 50, color: ['#28fc03', '#03adfc', '#a103fc'] }}
                            transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                            className="text-5xl font-bold">The Easiest Way
                            to Get Your New Job</motion.h1>
                        <motion.p
                        animate={{x:50}}
                        transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                        className="py-6 w-96">
                            Each month, more than 3 million job seekers turn to
                            website in their search for work, making over 140,000
                            applications every single day
                        </motion.p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;