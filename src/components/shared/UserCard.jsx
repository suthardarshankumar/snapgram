import React from 'react';

const UserCard = ({ img, name, username }) => {
    return (
        <div className='flex gap-x-3'>
            <div className='w-14 h-14 ml-1 rounded-full overflow-hidden object-center'>
                <img src={img} className='w-full h-full' alt="User profile" />
            </div>
            <div>
                <div className='text-lg mt-1 font-bold'>{name}</div>
                <div className='text-[#7878a3] text-sm -mt-1'>@{username}</div>
            </div>
        </div>
    );
};

export default UserCard;
