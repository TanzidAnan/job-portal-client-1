import React from 'react';

const HotJobCard = ({ job }) => {
    const { title, category, company, company_logo, description, jobType, salaryRange, location } = job
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
                    <p className='text-lg'>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;