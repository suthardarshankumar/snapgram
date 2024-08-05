import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({
    img,
    name,
    username
}) => {
    return (
        <div className='w-full border-[0.5px] border-[#232323] rounded-3xl px-5 py-8 hover:shadow hover:shadow-slate-50'>
            <Link to={`/user/${username}`}>
                <div className='flex justify-center'>
                    <div className='w-14 h-14 ml-1 rounded-full overflow-hidden object-center'>
                        <img src={img} className='w-full h-full' alt="User profile" />
                    </div>
                </div>
                <div className='text-md mt-4 font-semibold text-center text-slate-50'>
                    {name}
                </div>
                <div className='text-[#7878a3] text-sm mt-1 text-center'>
                    @{username}
                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#877eff] text-slate-50 px-6 py-2 text-sm rounded-md mt-3 duration-500 hover:bg-[#6d65d7]'>
                        Follow
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default UsersList;
