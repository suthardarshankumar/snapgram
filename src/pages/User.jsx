import React, { useEffect } from 'react';
import { UsersProfile } from '../components/index';
import { usePost } from '../context/PostContext';
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

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
                    <ImageList
                        sx={{ width: "100%", height: "auto", overflow: "hidden" }}
                        variant="quilted"
                        cols={4}
                        rowHeight={330}
                    >
                        {[...userPosts].reverse().map((post) => (
                            <ImageListItem key={post.id} cols={1} rows={1} sx={{
                                width: "100%", height: "100%", "&:hover": {
                                    cursor: "pointer"
                                }
                            }}>
                                <img
                                    {...srcset(post.photo, 330)}
                                    alt={post.caption}
                                    loading="lazy"
                                    className='w-full h-full object-contain'
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>
        </>
    );
}

export default User;
