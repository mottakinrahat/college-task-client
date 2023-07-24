import React from 'react';
import { Link } from 'react-router-dom';

const AddAdmission = ({candidate}) => {
    const{college_name,_id}=candidate;
    return (
      <div>
        
          <div className='text-3xl my-10 md:mx-40 rounded-xl py-2 md:text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-60% to-emerald-500 to-90% border-blue-700 text-white'>
            <h2 className='cursor-pointer'><Link to={`/addcandidate/${_id}`}>{college_name}</Link></h2>
        </div>
      </div>
    );
};

export default AddAdmission;