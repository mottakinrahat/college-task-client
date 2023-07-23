import React from 'react';

const ReviewData = ({reviews}) => {
    const { candidate_Name, college_image, college_name, review } = reviews;
    return (

        <div>

            <div className="card w-96 image-full">

                <figure><img src={college_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{college_name}</h2>
                    <p className='py-4'>Student Name: {candidate_Name}</p>
                    <p>Review: {review}</p>

                </div>
            </div>

        </div>

    );
};

export default ReviewData;