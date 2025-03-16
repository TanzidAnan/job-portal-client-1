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
                            <th>Email</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            application.map((app,index) => <tr key={app._id} className="bg-base-200">
                                <th>{index+1}</th>
                                <td>{app.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;