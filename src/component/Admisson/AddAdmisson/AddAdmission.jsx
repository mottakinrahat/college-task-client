import React from 'react';
import { Link } from 'react-router-dom';

const AddAdmission = ({candidate}) => {
    const{college_name,_id}=candidate;
    return (
        <div>
            <h2 className='cursor-pointer'><Link to={`/addcandidate/${_id}`}>{college_name}</Link></h2>
        </div>
    );
};

export default AddAdmission;