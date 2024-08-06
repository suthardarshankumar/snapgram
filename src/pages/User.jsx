import React, { useEffect } from 'react';
import { PostList, UsersProfile } from '../components/index';
import { usePost } from '../context/PostContext';
import { useParams } from 'react-router-dom';

const User = () => {
    const { user, userPosts, getUserData } = usePost();
    const { username } = useParams();

    useEffect(() => {
        getUserData(username);
    }, [username, getUserData]);

    return (
        <>
            <div className='p-7'>
                <div>
                    {user && (
                        <UsersProfile
                            profile={user.profilePic}
                            name={user.name}
                            username={user.username}
                            bio={user.bio}
                            postsNo={userPosts.length}
                            follower={user.follower}
                            following={user.following}
                        />
                    )}
                </div>
                <div className='w-full mt-16'>
                    <PostList
                        postsData={userPosts}
                    />
                </div>
            </div>
        </>
    );
}

export default User;
