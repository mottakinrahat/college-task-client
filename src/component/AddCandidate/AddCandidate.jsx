import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddCandidate = () => {
    const clgData = useLoaderData();
    console.log(clgData);
    const { collegeName } = clgData;

    const handleCandidateInfo = (e) => {
        e.preventDefault();
        const form = e.target;
        const candidateName = form.candidateName.value;
        const candidateSubject = form.candidateSubject.value;
        const candidateEmail = form.candidateEmail.value;
        const candidateNumber = form.candidateNumber.value;
        const candidateAddress = form.candidateAddress.value;
        const candidateBirth = form.candidateBirth.value;
        const candidateImage = form.candidateImage.value;

        const addCandidateData = {
            candidate_Name: candidateName,
            candidate_Subject: candidateSubject,
            candidate_Email: candidateEmail,
            candidate_Number: candidateNumber,
            candidate_Address: candidateAddress,
            candidate_Birth: candidateBirth,
            candidate_Image: candidateImage,
            college_name: collegeName

        }
        console.log(addCandidateData);
        fetch('http://localhost:5000/candidateData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addCandidateData)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Apply now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-1/2  shadow-2xl bg-base-100">
                        <form onSubmit={handleCandidateInfo}>
                            <div className="card-body ">
                                <div className='grid grid-cols-2 justify-between items-center gap-2'>
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Candidate Name</span>
                                        </label>
                                        <input type="text" placeholder="add your name" name='candidateName' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Subject</span>
                                        </label>
                                        <input type="text" placeholder="add your subject" name='candidateSubject' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Candidate Email</span>
                                        </label>
                                        <input type="text" placeholder="add your email" name='candidateEmail' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input type="text" placeholder="add phone number" name='candidateNumber' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input type="text" placeholder="your address" name='candidateAddress' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date of Birth</span>
                                        </label>
                                        <input type="date" placeholder="select date of birth" name='candidateBirth' className="input input-bordered" />

                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Add Image</span>
                                    </label>
                                    <input type="text" placeholder="add Image link" name='candidateImage' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6 text-center">
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

export default AddCandidate;