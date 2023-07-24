import React, { useEffect, useState } from 'react';
import AddAdmission from './AddAdmisson/AddAdmission';

const Admisson = () => {
    const [canData, setCanData] = useState([]);
    useEffect(() => {
        fetch('https://endgame-college-server.vercel.app/clgInfo')
            .then(res => res.json())
            .then(data => setCanData(data))
    }, [])
    return (
        <div>
            <h2 className='text-xl md:font-semibold md:text-center mt-4'>CLick up on the college name for apply on the college</h2>
      {
          canData.map(candidate=><AddAdmission key={candidate._id} candidate={candidate}></AddAdmission>)
      }
        </div>
    );
};

export default Admisson;