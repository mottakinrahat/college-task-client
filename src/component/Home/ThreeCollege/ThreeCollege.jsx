import React, { useEffect, useState } from 'react';
import SingleThree from '../../singleThree/SingleThree';

const ThreeCollege = () => {
    const [clgData,setClgData]=useState([]);
    useEffect(()=>{
        fetch('https://endgame-college-server.vercel.app/clgInfo')
        .then(res=>res.json())
        .then(data=>setClgData(data))
    },[])
    return (
        <div className='md:flex justify-between items-center mb-10 mt-5'>
            {
                clgData.slice(0,3).map(clg=><SingleThree key={clg._id} clg={clg}></SingleThree>)
            }
        </div>
    );
};

export default ThreeCollege;