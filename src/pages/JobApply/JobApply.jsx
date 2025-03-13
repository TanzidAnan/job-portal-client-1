import React from 'react';
import { useParams } from 'react-router-dom';

const JobApply = () => {
    const { id } = useParams();
    console.log(id);

    const submitJobApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkin = form.linkin.value
        const github = form.github.value
        const resume = form.resume.value
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-base-100 w-full max-w-full shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Apply job and goog Luck now!</h1>
                        <fieldset onClick={submitJobApplication} className="fieldset">
                            <label className="fieldset-label">LinkeIN URL</label>
                            <input type="url" name='linkin' className="input w-full" placeholder="LinkeIn" />
                            <label className="fieldset-label">GitHub URL</label>
                            <input type="url" name='github' className="input w-full" placeholder="GitHub URL" />
                            <label className="fieldset-label">Resume</label>
                            <input type="url" name='resume' className="input w-full" placeholder="Resume URL" />
                            <button className="btn bg-purple-500 mt-4">Apply</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;