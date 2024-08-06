import React from 'react';
import { usePost } from '../context/PostContext';
import { PostList } from '../components/index';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

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
                <ImageList
                    sx={{ width: "100%", height: "auto", overflow: "hidden" }}
                    variant="quilted"
                    cols={4}
                    rowHeight={330}
                >
                    {[...savedPosts].reverse().map((post) => (
                        <ImageListItem key={post.id} cols={1} rows={1} sx={{
                            width: "100%", height: "100%", "&:hover": {
                                cursor: "pointer"
                            }
                        }}>
                            <Link to={`/post/${post.id}`}>
                                <img
                                    {...srcset(post.photo, 330)}
                                    alt={post.caption}
                                    loading="lazy"
                                    className='w-full h-full object-contain'
                                />
                            </Link>
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    );
};

export default Saved;
