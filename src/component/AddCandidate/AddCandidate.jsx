import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProviders';
import admission from '../../assets/admission.json';
import Lottie from 'lottie-react'
const AddCandidate = () => {
    const{user}=useContext(AuthContext);
    const clgData = useLoaderData();
    console.log(clgData);
    const { college_name, admission_date, admission_process, college_image, events, events_details, research_details, research_history,
        research_works, sports, sports_category_details } = clgData;

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
            email: candidateEmail,
            candidate_Number: candidateNumber,
            candidate_Address: candidateAddress,
            candidate_Birth: candidateBirth,
            candidate_Image: candidateImage,
            college_name: college_name,
            admission_date: admission_date,
            admission_process: admission_process,
            events: events,
            research_history: research_details,
            research_details: research_details,
            research_works: research_works,
            sports: sports,
            sports_category_details: sports_category_details,
            college_image:college_image,


        }
        console.log(addCandidateData);
        fetch('https://endgame-college-server.vercel.app/candidateData', {
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
                        <Lottie animationData={admission}></Lottie>
                        <p className="py-6">Fill the form and submit for admission</p>
                    </div>
                    <div className="card flex-shrink-0 md:w-1/2  shadow-2xl bg-base-100">
                        <form onSubmit={handleCandidateInfo}>
                            <div className="card-body ">
                                <div className='md:grid md:grid-cols-2 justify-between items-center gap-2'>
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
                                        <input type="text" defaultValue={user?.email} placeholder="add your email" name='candidateEmail' className="input input-bordered" />
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