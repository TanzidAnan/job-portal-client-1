import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {

    const application = useLoaderData();

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
                            <th>States</th>
                            <th>Update States</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            application.map((app, index) => <tr key={app._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>{app.applicant_email}</td>
                                <td>
                                    <select defaultValue="Pick a language" className="select select-secondary">
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