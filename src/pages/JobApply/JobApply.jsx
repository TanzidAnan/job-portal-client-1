import React from 'react';
import { useParams } from 'react-router-dom';

const JobApply = () => {
    const {id}=useParams();
    console.log(id);

    const submitJobApplication =(e) =>{
        e.preventDefault();

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">LinkeIN URL</label>
                            <input type="url" name='linkin' className="input" placeholder="LinkeIn" />
                            <label className="fieldset-label">GitHub URL</label>
                            <input type="url" name='github' className="input" placeholder="GitHub URL" />
                            <label className="fieldset-label">Resume</label>
                            <input type="url" name='resume' className="input" placeholder="Resume URL" />
                            <button className="btn btn-neutral mt-4">Apply</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;