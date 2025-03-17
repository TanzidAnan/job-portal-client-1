import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplication = () => {

    const neveget =useNavigate();

    const application = useLoaderData();

    const hendleStatusUpdate = (e, id) => {
        console.log(e.target.value, id);
        const data = {
            status: e.target.value
        }
        fetch(`http://localhost:5000/job-application/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    neveget('/myPostedJobs')
                }
            })
    }

    return (
        <div>
            <h2>Application for this Job {application.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>status</th>
                            <th>Update States</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            application.map((app, index) => <tr key={app._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>status</td>
                                <td>
                                    <select
                                        onChange={(e) => hendleStatusUpdate(e, app._id)}
                                        defaultValue={app.States || 'Change Status'}
                                        className="select select-secondary">
                                        <option disabled={true}>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interviw</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;