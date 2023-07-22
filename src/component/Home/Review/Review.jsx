import React from 'react';

const Review = () => {
    return (
        <div>
            <h2 className='text-2xl text-red-600 text-center mb-4'>Review of Students</h2>

            <div className='md:grid md:grid-cols-3 justify-between items-center gap-6 '>
                <div className="card w-96 image-full">
                
                    <figure><img src="https://i.ibb.co/Rp4rxtR/college-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Williams College</h2>
                        <p>Reviewed by: John Smith</p>
                       
                    </div>
                </div>
                <div className="card w-96  image-full">
                    <figure><img src="https://i.ibb.co/8M2Vz0f/college-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Amherst College</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96  image-full">
                    <figure><img src="https://i.ibb.co/PDr9203/college-3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wellesley College</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96  image-full">
                    <figure><img src="https://i.ibb.co/fXwnx3k/college-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Swarthmore College</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96  image-full">
                    <figure><img src="https://i.ibb.co/QpfqHTH/college-5.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Reed College</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96  image-full">
                    <figure><img src="https://i.ibb.co/jkWyZv6/college-6.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;