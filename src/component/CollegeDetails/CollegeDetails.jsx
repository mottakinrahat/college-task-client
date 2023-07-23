import React, { useEffect } from 'react';
import { useFetcher, useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const collegeData = useLoaderData();
    const { _id, admission_date, admission_process, college_image, college_name, events, events_details, research_details, research_history,
        research_works, sports, sports_category_details } = collegeData;
    return (
        <div className='relative '>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${college_image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{college_name}</h1>


                    </div>
                </div>
            </div>
            <div className='md:flex md:justify-between items-center -mt-10 px-6'>
                <div className="card w-96 bg-neutral bg-opacity-90 text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Event</h2>
                        <p>{events}</p>
                       
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sports</h2>
                        <p>{sports}</p>
                       
                    </div>
                </div>
                {/* <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cookies!</h2>
                        <p>We are using cookies for no reason.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Accept</button>
                            <button className="btn btn-ghost">Deny</button>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='mt-20'>
                <h2 className='mb-10'><span className='font-bold'>Event: </span>{ events_details}</h2>
                <h2 className='text-2xl font-semibold text-center text-blue-600'>Sport Details</h2>
                <h2><span className='font-bold'></span>Volleyball:{sports_category_details.Volleyball}</h2>
                <h2><span className='font-bold'> </span>Tennis:{sports_category_details.Volleyball}</h2>
                <h2><span className='font-bold'> </span>Athletics:{sports_category_details.Volleyball}</h2>
            </div>
        </div>
    );
};

export default CollegeDetails;