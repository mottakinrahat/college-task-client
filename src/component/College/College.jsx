import React, { useEffect, useState } from 'react';
import SingleCollege from '../SingleCollege/SingleCollege';

const College = () => {
    const [clgData, setClgData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/clgInfo')
            .then(res => res.json())
            .then(data => setClgData(data))
    }, [])
    return (
        <div>
            <div className='md:grid md:grid-cols-3 gap-2 justify-between items-center mb-10 mt-5'>
                {
                    clgData.map(clg =><SingleCollege key={clg._id} clg={clg}></SingleCollege>)
                }
            </div>
        </div>
    );
};

export default College;