import React, { use, useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    console.log(jobs)
    const {_id} =jobs;

    console.log(user.email)

    useEffect(() => {


        // fetch(`http://localhost:5000/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))

         axios.get(`http://localhost:5000/job-application?email=${user.email}`,
            {withCredentials:true}
         )
         .then(res=>{
            setJobs(res.data)
            console.log(res.data)
         }) 

    }, [user.email])

    const hendleDelete =(id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/job-application/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
          });
    }

    return (
        <div>
            <h1 className='text-center text-2xl font-extrabold pb-6'>MY application {jobs.length}</h1>
            <div className="overflow-x-auto bg-slate-300 text-black">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-black'>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job => <tr key={job._id}>
                               
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.title}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job.title}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{job.location}</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button onClick={()=>hendleDelete(job._id)} className="btn btn-ghost btn-md text-white bg-red-700">x</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplication;