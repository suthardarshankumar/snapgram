import React from 'react';
import { usePost } from '../../context/PostContext';
import { PostList } from '../index'


const Explore = () => {
    const { posts } = usePost();

    return (
        <>
            <PostList
                postsData={posts}
            />
        </>
    );
};

export default Explore;
