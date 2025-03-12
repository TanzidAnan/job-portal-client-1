import React from 'react';
import Banner from './Banner';
import About from './About';
import HotJobs from './HotJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;