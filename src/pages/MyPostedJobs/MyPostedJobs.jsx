import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth';

const MyPostedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data)
            })
    }, [user.email])

    return (
        <div>
            <h1>MY Posted Jobs {jobs.length}</h1>
            <div className="overflow-x-auto bg-slate-400 text-black">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job title</th>
                            <th>Application Deadline</th>
                            <th>Application Count</th>
                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job,index) => <tr className="bg-white text-black">
                                <th>{index+1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <button className='btn btn-link'>View Application</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;