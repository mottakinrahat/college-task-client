import React from 'react';
import { Link } from 'react-router-dom';

const CollegeData = ({ college }) => {
    console.log(college);
    const{_id,candidate_Image,candidate_Name,college_name, candidate_Address,candidate_Number,candidate_Subject}=college;
    return (

        <tr>
            <th>
               
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={candidate_Image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{candidate_Name}</div>
                
                    </div>
                </div>
            </td>
            <td>
               {college_name}
            </td>
            <td>{candidate_Subject}</td>
            <td>{candidate_Address}</td>
            <td>{candidate_Number}</td>
            <th>
               <Link to={`/mycollege/${_id}`}> <button className="btn btn-ghost bg-blue-700 text-white btn-xs">details</button></Link>
            </th>
        </tr>

    );
};

export default CollegeData;