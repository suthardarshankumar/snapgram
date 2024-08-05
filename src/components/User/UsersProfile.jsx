import React from 'react'

const UsersProfile = ({
    profile,
    name,
    username,
    bio,
    postsNo,
    follower,
    following
}) => {
    return (
        <>
            <div
                className='w-full h-[170px] p-7'>
                <div
                    className='w-full flex'>
                    <div
                        className='w-[170px] h-[170px] rounded-full overflow-hidden'>
                        <img
                            src={profile}
                            alt={username}
                            className='w-full h-full rounded-full'
                        />
                    </div>
                    <div
                        className='ml-7 relative'>
                        <div
                            className='w-full'>
                            <div
                                className='text-slate-50 text-4xl'>
                                {name}
                            </div>
                            <div
                                className='text-[#7878a3] text-xl mt-2 mb-1 tracking-wide'>
                                @{username}
                            </div>
                            <div
                                className='text-slate-50 tracking-wide'>
                                {bio}
                            </div>
                        </div>
                        <div className='flex gap-x-5 absolute bottom-0'>
                            <div
                                className='text-slate-50 text-xl'>
                                <span className='text-[#877eff]'>{postsNo}</span> Posts
                            </div>
                            <div
                                className='text-slate-50 text-xl'>
                                <span className='text-[#877eff]'>{follower}</span> Follower
                            </div>
                            <div
                                className='text-slate-50 text-xl'>
                                <span className='text-[#877eff]'>{following}</span> Following
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersProfile