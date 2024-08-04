import React from 'react'
import { UsersList } from '../components/index'
import { usePost } from '../context/PostContext'

const People = () => {
    const { userData } = usePost()

    return (
        <>
            <div
                className='w-full p-5 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#877eff] scrollbar-thumb-rounded-full'>
                <div
                    className='mt-8 ml-5'>
                    <h2
                        className='text-4xl text-slate-50'>
                        All User
                    </h2>
                </div>
                <div
                    className='w-full mt-10 flex flex-wrap justify-between gap-y-5'>
                    {userData.map((user) => (
                        <div
                            key={user.username}
                            className='w-[350px]'>
                            <UsersList
                                img={user.profilePic}
                                name={user.name}
                                username={user.username}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default People