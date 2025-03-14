import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    console.log(user)
    console.log(id);

    const submitJobApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkin =form.linkin.value;
        const github = form?.github?.value;
        const resume = form?.resume?.value;
        console.log(linkin, github, resume)

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkin,
            github,
            resume
        }
        fetch('http://localhost:5000/job-application', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                console.log(data)
            })

    }



    return (
        <div className="hero bg-base-200 min-h-[70vh]">
            <div className=" flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-4xl shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold">job apply  now!</h1>
                    <form onSubmit={submitJobApplication} className="card-body">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">linkin URL</span>
                            </label>
                            <input type="url" name='linkin' placeholder="linkin url" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">github URL</span>
                            </label>
                            <input type="url" name='github' placeholder="github url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">resume</span>
                            </label>
                            <input type="url" name='resume' placeholder="resume" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Job Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;