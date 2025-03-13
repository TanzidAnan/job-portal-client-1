import React from 'react';
import { useLoaderData } from 'react-router-dom';
import bannerJobsDetails from '../../assets/jobDetails/thumb (1).png'
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "motion/react"
import { easeInOut } from 'motion';


const JobDetails = () => {
    const { company_logo, description, company, category, location, title, } = useLoaderData();
    return (
        <div>
            <div>
                <img className='rounded-lg' src={bannerJobsDetails} alt="" />
            </div>
            <div className="card lg:card-side bg-slate-200 text-black shadow-sm mt-10">
                <div className="card-body className='w-1/2'">
                    <motion.h2
                    animate={{color:['#32a852','#6eb581','#52bfa8','#00ebb8']}}
                    transition={{delay:1,repeat:Infinity,ease:easeInOut,duration:2}}
                    className="card-title text-4xl font-semibold">JOB:{company}</motion.h2>
                    <h2  className="card-title text-2xl font-bold">Title:{title}</h2>
                    <p className='text-lg'>{description}</p>
                    <h3 className='text-purple-800'>{category}</h3>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-[#633bc9]"><IoLocationSharp /> {location}</button>
                        <button className="btn btn-primary">Apply Now</button>
                    </div>
                </div>
                <div className='w-1/2 items-end flex justify-center pr-10 py-6'>
                    <figure className='w-40 '>
                        <img
                            src={company_logo}
                            alt="Album" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;