import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import ReviewData from '../ReviewData/ReviewData';

const StudentReview = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch('https://endgame-college-server.vercel.app/ratingreview')
            .then(res => res.json())
            .then(data => setReviewData(data))
    }, [])
    return (
        <>
            <h2 className='text-2xl text-red-600 text-center mb-4'>Review of Students</h2>
            <div  className='md:grid grid-cols-3 mb-10 justify-between items-center'>
                {
                    reviewData.map(reviews => <ReviewData key={reviews._id} reviews={reviews}></ReviewData>)
                }
            </div></>
    );
};

export default StudentReview;