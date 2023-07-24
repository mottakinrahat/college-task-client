import React from 'react';
import { Link } from 'react-router-dom';

const SingleCollege = ({ clg }) => {
    const { _id, admission_date, admission_process, college_image, college_name, events, events_details, research_details, research_history,
        research_works, sports, sports_category_details, } = clg;
    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg p-4 w-96">
                <img
                    src={college_image}
                    alt="College"
                    className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="py-4">
                    <h2 className="text-xl font-semibold mb-2">{college_name}</h2>
                    <p className="text-sm mb-2">Admission Date:{admission_date}</p>
                    <p className="text-sm mb-2">College rating:{admission_date}</p>
                    <p className="text-sm mb-2">Number of Research:3</p>

                </div>
                <Link to={`/collegeDetails/${_id}`}> <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-2">
                    Details
                </button></Link>
            </div>
            
        </div>
    );
};

export default SingleCollege;