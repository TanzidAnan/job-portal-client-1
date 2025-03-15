import React from 'react';

const AddJobs = () => {
    return (
        <div>
            <h2>Post A new Jobs</h2>
            <form className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="job Title" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name='location' placeholder="job Location" className="input input-bordered" required />
                </div>
                {/* job type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">job type</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Pick a job type</option>
                        <option>Full Time</option>
                        <option>pat Time</option>
                        <option>Intain</option>
                    </select>
                </div>
                {/* job type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">job Field</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Pick a job Field</option>
                        <option>Engineering</option>
                        <option>Markting</option>
                        <option>teaching</option>
                    </select>
                </div>
                {/* job company */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">company</span>
                    </label>
                    <input type="text" name='company' placeholder="job company" className="input input-bordered" required />
                </div>
                {/* salary Raing */}
                <p>Salary Range</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> 
                    <div className="form-control">
                        <input type="number" name='min' placeholder="min Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="number" name='max' placeholder="Max Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <select className="select select-ghost w-full max-w-xs">
                            <option disabled selected>currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddJobs;