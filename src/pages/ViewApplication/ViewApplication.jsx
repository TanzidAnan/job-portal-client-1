import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {

    const application =useLoaderData();

    return (
        <div>
            <h2>Application for this Job {application.length}</h2>
        </div>
    );
};

export default ViewApplication;