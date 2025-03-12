import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {

    const [jobs,setJobs] =useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data =>{
            setJobs(data)
            console.log(data)
        })
    },[])

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4'>
                {
                    jobs.map(job =><HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;