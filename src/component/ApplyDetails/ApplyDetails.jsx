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
            fetch('https://endgame-college-server.vercel.app/ratingreview', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ratingandreview)
            })
        }
    return (
        <div>
            <div className="hero md:min-h-screen bg-base-200 ">
                <div className="md:hero-content flex-col lg:flex-row md:text-center">
                    
                    <div>
                        <h1 className="text-3xl font-bold">{college_name}</h1>
                        <p className="py-2"><span className='font-semibold'>Admission Date:</span> {admission_date}</p>
                        <p className="py-2"><span className='font-semibold'>Admission Process:</span> {admission_process}</p>
                        <p className="py-2"><span className='font-semibold'>Events:</span> {events}</p>
                        <p className="py-2"><span className='font-semibold'>Research History:</span> {research_history}</p>
                        <p className="py-2"><span className='font-semibold'>Sports:</span> {sports}</p>


                        <form onSubmit={handleReview} className='md:px-40'>
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