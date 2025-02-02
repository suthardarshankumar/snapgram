import React, { useState, createContext, useContext } from 'react';
import { postsData, usersData } from '../data/data';
import profileImg from '../assets/User/MainUserProfile.jpg';

export const PostContext = createContext();

export const usePost = () => {
    return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
    const [userData, setUserData] = useState(usersData);
    const [posts, setPosts] = useState(postsData);
    const [savedPosts, setSavedPosts] = useState([]);
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [mainUser, setMainUser] = useState({
        name: "S D",
        username: "sd5885",
        profilePic: profileImg,
        follower: 175,
        following: 196,
        bio: "🔒 Bio unavailable"
    });

    const mainUserPostNo = posts.filter((p) => p.username === mainUser.username);
    mainUser.postNo = mainUserPostNo.length;

    const updateLike = (id) => {
        setPosts(posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    like: !post.like,
                    likeNo: post.like ? post.likeNo - 1 : post.likeNo + 1
                };
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

    const getUserData = (username) => {
        const foundUser = userData.find((user) => user.username === username);
        const foundUserPosts = posts.filter((post) => post.username === username);
        setUser(foundUser);
        setUserPosts(foundUserPosts);
    };

    return (
        <PostContext.Provider
            value={{
                userData,
                posts,
                setPosts,
                updateLike,
                savedPosts,
                addSave,
                deleteSave,
                user,
                userPosts,
                getUserData,
                mainUser,
                setMainUser
            }}
        >
            {children}
        </PostContext.Provider>
    );
};
