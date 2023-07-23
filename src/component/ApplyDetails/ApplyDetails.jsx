import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ApplyDetails = () => {
    const detailData = useLoaderData();
    console.log(detailData);
    const { _id, admission_date, admission_process, college_image, college_name, events, events_details, research_details, research_history,
        research_works, sports,candidate_Name,sports_category_details } = detailData;

        const handleReview=(e)=>{
            e.preventDefault()
            const form=e.target;
            const rating=form.rating.value;
            const review=form.review.value;

            const ratingandreview={
                rating:rating,
                review:review,
                candidate_Name:candidate_Name,
                college_name:college_name,
                college_image:college_image
              
            }
            fetch('http://localhost:5000/ratingreview', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ratingandreview)
            })
        }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={college_image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{college_name}</h1>
                        <p className="py-2"><span>Admission Date:</span> {admission_date}</p>
                        <p className="py-2"><span>Admission Process:</span> {admission_process}</p>
                        <p className="py-2"><span>Events:</span> {events}</p>
                        <p className="py-2"><span>Research History:</span> {research_history}</p>
                        <p className="py-2"><span>Sports:</span> {sports}</p>


                        <form onSubmit={handleReview} className='px-40'>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Add your rating</span>
                                    </label>
                                    <input type="text" placeholder="Rating" name='rating' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Review</span>
                                    </label>
                                    <input type="text" placeholder="Add your Review" name='review' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyDetails;