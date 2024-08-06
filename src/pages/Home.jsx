import React from 'react';
import { PostCard, UsersList } from '../components/index';
import { usePost } from '../context/PostContext';

const Home = () => {
    const { posts, userData } = usePost();

    return (
        <div className='text-slate-50 flex h-screen'>
            <div className='w-[75%] bg-transparent py-5 px-32 border-r-[0.1px] border-[#232323] overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#877eff] scrollbar-thumb-rounded-full'>
                <div className='m-0 p-0 mt-8'>
                    <h2 className='font-bold text-4xl'>Home Feed</h2>
                </div>
                {[...posts].reverse().map((post) => (
                    <PostCard
                        key={post.id}
                        name={post.name}
                        username={post.username}
                        profilePic={post.profilePic}
                        caption={post.caption}
                        tags={post.tags}
                        photo={post.photo}
                        likeNo={post.likeNo}
                        like={post.like}
                        id={post.id}
                        saved={post.saved}
                    />
                ))}
            </div>
            <div className='w-[25%] bg-transparent py-5 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#877eff] scrollbar-thumb-rounded-full'>
                <div className='p-0 mt-5 ml-7'>
                    <h2 className='font-bold text-2xl'>Top Creators</h2>
                    <div className='flex flex-wrap justify-center mt-5 gap-y-5 pr-7'>
                        {userData.map((user) => (
                            <UsersList
                                key={user.username}
                                img={user.profilePic}
                                name={user.name}
                                username={user.username}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
