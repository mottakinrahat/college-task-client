import React, { useEffect, useState } from 'react';
import AddAdmission from './AddAdmisson/AddAdmission';

const Admisson = () => {
    const [canData, setCanData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/candidateInfo')
            .then(res => res.json())
            .then(data => setCanData(data))
    }, [])
    return (
        <div>
      {
          canData.map(candidate=><AddAdmission key={candidate._id} candidate={candidate}></AddAdmission>)
      }
        </div>
    );
};

export default Admisson;