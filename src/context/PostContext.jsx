import React, { useState, createContext, useContext } from 'react';
import { postsData, usersData } from '../data/data';

export const PostContext = createContext();

export const usePost = () => {
    return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
    const [userData, setUserData] = useState(usersData);
    const [posts, setPosts] = useState(postsData);

    const updateLike = (id) => {
        setPosts(posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    like: !post.like,
                    likeNo: post.like ? post.likeNo - 1 : post.likeNo + 1
                }
            }
            return post;
        }));
    };

    return (
        <PostContext.Provider value={{ userData, posts, updateLike }}>
            {children}
        </PostContext.Provider>
    );
};
