import React from 'react';
import { motion } from "motion/react"
import { easeInOut } from 'motion';
import teme1 from '../../assets/banner/teme1.jpg'
import teme2 from '../../assets/banner/teme2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <img
                            src={teme1}
                            className="max-w-sm w-64 rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <motion.h1
                            animate={{ x: 50, color: ['#28fc03','#03adfc','#a103fc'] }}
                            transition={{ duration: 2, delay: 1, ease: easeInOut ,repeat:Infinity}}
                            className="text-5xl font-bold">The Easiest Way
                            to Get Your New Job</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;