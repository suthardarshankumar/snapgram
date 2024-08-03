import React from 'react';
import { PostCard } from '../components/index';
import { usePost } from '../context/PostContext';

const Home = () => {
    const { posts } = usePost();

    return (
        <div className='text-slate-50'>
            <div className='w-[75%] bg-transparent py-5 px-32'>
                <div className='m-0 p-0 mt-8'>
                    <h2 className='font-bold text-4xl'>Home Feed</h2>
                </div>
                {posts.map((post) => (
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
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
