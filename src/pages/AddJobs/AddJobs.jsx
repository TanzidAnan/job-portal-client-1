import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/UseAuth';

const AddJobs = () => {

    const {user} =useAuth()

    const hendleAddJobs = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.entries());
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);

        const { min, max, currency, ...newJobs } = initialData;
        newJobs.salaryRange = { min, max, currency }
        newJobs.requirements = newJobs.requirements.split('\n');
        newJobs.responsibilities = newJobs.responsibilities.split('\n');
        console.log(newJobs)

        fetch(`http://localhost:5000/jobs`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJobs)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <h2>Post A new Jobs</h2>
            <form onSubmit={hendleAddJobs} className="card-body bg-slate-50 text-black">
                {/* job title */}
                <div className="form-control grid grid-cols-1 gap-2">
                    <label className="label">
                        <span className="label-text">job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="job Title" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control grid grid-cols-1 gap-2">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name='location' placeholder="job Location" className="input input-bordered" required />
                </div>
                {/* job type */}
                <div className="form-control grid grid-cols-1 gap-2">
                    <label className="label">
                        <span className="label-text">job type</span>
                    </label>
                    <select name='jobType' className="select select-ghost w-full max-w-xs border-indigo-400">
                        <option disabled selected>Pick a job type</option>
                        <option>Full Time</option>
                        <option>pat Time</option>
                        <option>Intain</option>
                    </select>
                </div>
                {/* job type */}
                <div className="form-control grid grid-cols-1 gap-2 ">
                    <label className="label">
                        <span className="label-text">job Field</span>
                    </label>
                    <select name='category' className="select select-ghost w-full max-w-xs border-indigo-400">
                        <option disabled selected>Pick a job Field</option>
                        <option>Engineering</option>
                        <option>Markting</option>
                        <option>teaching</option>
                    </select>
                </div>
                {/* job company */}
                <div className="form-control grid grid-cols-1 gap-2">
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
                        <select name='currency' className="select select-ghost w-full max-w-xs border-indigo-400">
                            <option disabled selected>currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
                {/* job description */}
                <div className="form-control grid grid-cols-1 gap-2">
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered text-white w-full" placeholder="description"></textarea>
                </div>
                {/* job requirements */}
                <div className="form-control grid grid-cols-1 gap-2">
                    <label className="label">
                        <span className="label-text">job requirements</span>
                    </label>
                    <textarea name='requirements' className="textarea textarea-bordered text-white w-full" placeholder="requirements"></textarea>
                </div>
                {/* job responsibilities */}
                <div className="form-control grid grid-cols-1 gap-2">
                    <label className="label">
                        <span className="label-text">job responsibilities</span>
                    </label>
                    <textarea name='responsibilities' className="textarea textarea-bordered text-white w-full" placeholder="responsibilities"></textarea>
                </div>
                {/* hr_name */}
                <div className="form-control grid grid-cols-1 gap-2">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
                </div>
                {/* hr_email */}
                <div className="form-control grid grid-cols-1 gap-2">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name='hr_email' placeholder="HR Email" className="input input-bordered" required />
                </div>
                {/* company logo */}
                <div className="form-control grid grid-cols-1 gap-2">
                    <label className="label">
                        <span className="label-text">company logo URL</span>
                    </label>
                    <input type="text" name='company_logo' placeholder="company logo URL" className="input input-bordered" required />
                </div>
                {/* application Deadline*/}
                <div className="form-control grid grid-cols-1 gap-2">
                    <label className="label">
                        <span className="label-text">application Deadline</span>
                    </label>
                    <input type="date" name='applicationDeadline' placeholder="company logo URL" className="input input-bordered text-white" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddJobs;