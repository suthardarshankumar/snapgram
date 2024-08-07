import React, { useState, useEffect } from 'react';
import { usePost } from '../../context/PostContext';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';
import Input from '../FormInput/Input';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const EditPage = () => {
    const navigate = useNavigate();
    const { mainUser, setMainUser } = usePost();
    const [profilePic, setProfilePic] = useState(mainUser.profilePic);
    const [name, setName] = useState(mainUser.name);
    const [username, setUsername] = useState(mainUser.username);
    const [bio, setBio] = useState(mainUser.bio);

    useEffect(() => {
        return () => {
            if (profilePic && typeof profilePic === 'object') {
                URL.revokeObjectURL(profilePic);
            }
        };
    }, [profilePic]);

    const handleImg = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfilePic(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            ...mainUser,
            profilePic,
            name,
            username,
            bio
        };
        setMainUser(updatedUser);
        navigate('/profile');
    };

    return (
        <div className='w-full min-h-screen p-16'>
            <div className='text-slate-50 text-3xl'>Edit Profile</div>
            <form onSubmit={handleSubmit} className='w-full mt-16'>
                <div className='w-full flex'>
                    <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
                        <img src={profilePic} alt={username} className='w-full h-full' />
                    </div>
                    <div className='h-[100px] max-w-full flex items-center ml-10'>
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                            Change Profile Image
                            <VisuallyHiddenInput type="file" onChange={handleImg} />
                        </Button>
                    </div>
                </div>
                <div className='w-full mt-10'>
                    <label className='text-slate-50 text-2xl font-light'>Name</label>
                    <Input
                        value={name}
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mt-1 text-slate-50 text-lg border-[1px] border-[#2e2e2e] rounded-xl py-3 px-5 bg-transparent"
                    />
                </div>
                <div className='w-full mt-7'>
                    <label className='text-slate-50 text-2xl font-light'>Username</label>
                    <Input
                        value={username}
                        type='text'
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full mt-1 text-slate-50 text-lg border-[1px] border-[#2e2e2e] rounded-xl py-3 px-5 bg-transparent"
                    />
                </div>
                <div className='w-full mt-7'>
                    <label className='text-slate-50 text-2xl font-light'>Bio</label>
                    <Input
                        value={bio}
                        type='text'
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full mt-1 text-slate-50 text-lg border-[1px] border-[#2e2e2e] rounded-xl py-3 px-5 bg-transparent"
                    />
                </div>
                <div className='w-full mt-7'>
                    <Button variant="contained" type='submit'>
                        Update Profile
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditPage;
