import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

const PostList = ({ postsData }) => {
    const posts = postsData;

    return (
        <div className='w-full'>
            <ImageList
                sx={{ width: "100%", height: "auto", overflow: "hidden" }}
                variant="quilted"
                cols={4}
                rowHeight={330}
            >
                {[...posts].reverse().map((post) => (
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
    );
};

export default PostList;
