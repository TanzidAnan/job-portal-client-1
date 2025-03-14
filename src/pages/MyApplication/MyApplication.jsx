import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth';

const MyApplication = () => {
    const {user} =useAuth();
    const [jobs,setJobs] =useState([]);
   
    console.log(user.email)

    useEffect(() =>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res => res.json())
        .then(data =>setJobs(data))
    } ,[user.email])

    return (
        <div>
            <h1>MY application {jobs.length}</h1>
        </div>
    );
};

export default MyApplication;