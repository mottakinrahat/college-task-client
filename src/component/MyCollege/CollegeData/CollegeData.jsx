import React from 'react';
import { Link } from 'react-router-dom';

const CollegeData = ({ college }) => {
    console.log(college);
    const { _id, candidate_Image, candidate_Name, college_name, candidate_Address, candidate_Number,events, candidate_Subject, research_history, college_image } = college;
    return (
        <div>
            <div className="hero  mb-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={college_image} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                       <h2 className='text-3xl font-semibold text-red-600'>{college_name}</h2>
                       <h2 className=''>Subject: {candidate_Subject}</h2>
                       <h2 className=''>{candidate_Number}</h2>
                       <h2 className=''>Event: {events}</h2>
                        <p className="py-6">{ research_history }</p>
                        <Link to={`/mycollege/${_id}`}> <button className="btn btn-ghost  bg-blue-700 text-white btn-xs">Add review</button></Link>
                    </div>
                </div>
            </div>
        </div>

        // <tr>
        //     <th>

        //     </th>
        //     <td>
        //         <div className="flex items-center space-x-3">
        //             <div className="avatar">
        //                 <div className="mask mask-squircle w-12 h-12">
        //                     <img src={candidate_Image} alt="Avatar Tailwind CSS Component" />
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className="font-bold">{candidate_Name}</div>

        //             </div>
        //         </div>
        //     </td>
        //     <td>
        //         {college_name}
        //     </td>
        //     <td>{candidate_Subject}</td>
        //     <td>{candidate_Address}</td>
        //     <td>{candidate_Number}</td>
        //     <th>
        //         <Link to={`/mycollege/${_id}`}> <button className="btn btn-ghost bg-blue-700 text-white btn-xs">details</button></Link>
        //     </th>
        // </tr>


    );
};

export default CollegeData;