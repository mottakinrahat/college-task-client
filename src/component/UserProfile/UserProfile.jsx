import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authProvider/AuthProviders';

const UserProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [email, setEmail] = useState(user?.email || '');
    const [updating, setUpdating] = useState(false);

    useEffect(() => {

        setName(user?.displayName || '');
        setEmail(user?.email || '');
    }, [user]);

    const handleUpdate = () => {
        setUpdating(true);
        updateUserProfile(name, user.photoURL)
            .then(() => {
                console.log('Profile updated successfully.');
                setUpdating(false);
            })
            .catch((error) => {
                console.error('Error updating profile:', error.message);
                setUpdating(false);
            });
    };

    return (
        <div className='flex justify-center items-center h-screen my-20'>
            <div className="card w-[500px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL} alt="Profile" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered mb-2"
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered mb-2"
                        placeholder="Email"
                    />
                    <h2 className="card-title"> {email}</h2>
                    
                    <div className="card-actions">
                        <button
                            className={`btn btn-primary ${updating ? 'loading' : ''}`}
                            onClick={handleUpdate}
                            disabled={updating}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;

