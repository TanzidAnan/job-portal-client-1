import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth';

const MyPostedJobs = () => {

    const [jobs,setJobs] =useState([]);
    const {user} =useAuth();

    useEffect(() =>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            setJobs(data)
        })
    },[user.email])

    return (
        <div>
            <h1>MY Posted Jobs {jobs.length}</h1>
        </div>
    );
};

export default MyPostedJobs;