import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const HotJobCard = ({ job }) => {
    const { _id, title, category, company, company_logo, description, jobType, salaryRange, location, requirements } = job
    return (
        <div className="card bg-zinc-200 text-black shadow-sm">
            <div className='flex gap-2 pt-5 pl-5'>
                <figure>
                    <img
                        className='w-14'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className='text-2xl font-bold hover:text-blue-400'> {company}</h4>
                    <div className='flex gap-2 items-center'>
                        < HiLocationMarker className='text-lg text-orange-700' />
                        <p className='text-lg'>{location}</p>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge bg-purple-500">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex gap-3 flex-wrap'>
                    {
                        requirements.map((skill, index) => <p
                            key={index}
                            className='border-2 border-gray-800 rounded-lg p-1 text-center hover:bg-purple-500 hover:text-white'
                        >{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center mt-4 flex">
                    <p className=' font-bold flex items-center '>Salary <FaDollarSign /> {salaryRange.min} -{salaryRange.max}  {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;