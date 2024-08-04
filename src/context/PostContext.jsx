import React, { useState, createContext, useContext } from 'react';
import { postsData, usersData } from '../data/data';

export const PostContext = createContext();

export const usePost = () => {
    return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
    const [userData, setUserData] = useState(usersData);
    const [posts, setPosts] = useState(postsData);
    const [savedPosts, setSavedPosts] = useState([]);

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

    const addSave = (post) => {
        setSavedPosts([...savedPosts, post]);
        setPosts(posts.map((p) => p.id === post.id ? { ...p, saved: true } : p));
    };

    const deleteSave = (id) => {
        setSavedPosts(savedPosts.filter((post) => post.id !== id));
        setPosts(posts.map((p) => p.id === id ? { ...p, saved: false } : p));
    };

    return (
        <PostContext.Provider value={{ userData, posts, updateLike, savedPosts, addSave, deleteSave }}>
            {children}
        </PostContext.Provider>
    );
};
