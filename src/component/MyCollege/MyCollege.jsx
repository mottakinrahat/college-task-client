import React, { useContext, useEffect, useState } from 'react';
import CollegeData from './CollegeData/CollegeData';
import { AuthContext } from '../authProvider/AuthProviders';

const MyCollege = () => {
    const{user}=useContext(AuthContext)
    const [collegeInfo, setCollegeInfo] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`https://endgame-college-server.vercel.app/candidateData?email=${user.email}`)
                .then(res => res.json())
                .then(data => setCollegeInfo(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [user?.email]);
    return (
        <div>
            {/* <div className="overflow-x-auto">
                <table className="table">
            <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Student Name</th>
                            <th>Selected College</th>
                            <th>Subject</th>
                            <th>Address</th>
                            <th>number</th>
                            <th></th>
                        </tr>
                    </thead>
                <tbody> */}
                    {
                        collegeInfo.map((college, index) => (
                            <CollegeData key={index + 1} college={college} ></CollegeData>
                        ))
                    }
                {/* </tbody>
                </table>

            </div> */}
        </div>
    );
};

export default MyCollege;