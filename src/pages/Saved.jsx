import React from 'react';
import { usePost } from '../context/PostContext';
import { PostList } from '../components/index';

const Saved = () => {
    const { savedPosts } = usePost();

    if (savedPosts.length === 0) {
        return <div className='text-slate-50 w-full h-full text-3xl flex justify-center items-center'>No Saved Posts</div>
    }

    return (
        <div
            className='w-full p-5 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#877eff] scrollbar-thumb-rounded-full'>
            <div className='mt-8 ml-5'>
                <h2 className='text-4xl text-slate-50'>
                    All Saved Posts
                </h2>
            </div>
            <div className='w-full mt-7'>
                <PostList
                    postsData={savedPosts}
                />
            </div>
        </div>
    );
};

export default Saved;
