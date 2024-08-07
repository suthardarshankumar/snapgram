import React from 'react';
import { usePost } from '../../context/PostContext';
import { UsersProfile } from '../index';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { mainUser } = usePost();

    return (
        <div className='p-10 w-full'>
            <div className='w-full relative'>
                <div className='w-full'>
                    <UsersProfile
                        profile={mainUser.profilePic}
                        name={mainUser.name}
                        username={mainUser.username}
                        postsNo={mainUser.postNo}
                        bio={mainUser.bio}
                        follower={mainUser.follower}
                        following={mainUser.following}
                    />
                </div>
                <div className='absolute top-1 right-1'>
                    <Link
                        to='edit-page'
                        className='w-full py-3 px-5 text-slate-900 bg-slate-50 border-[1px] border-slate-50 rounded-xl duration-500 hover:text-slate-50 hover:bg-transparent'>
                        Edit Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
