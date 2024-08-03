import React from 'react';
import { UserCard } from '../index';
import { usePost } from '../../context/PostContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PostCard = ({
    name,
    username,
    profilePic,
    caption,
    tags,
    photo,
    likeNo,
    like,
    id,
}) => {
    const { updateLike } = usePost();

    return (
        <div className='p-7 mt-12 rounded-3xl border-[#efefef] bg-[#171717]'>
            <UserCard img={profilePic} name={name} username={username} />
            <div>
                <div className='my-5 leading-6 text-justify'>{caption}</div>
                <div className='mb-3'>
                    {tags.map((tag) => (
                        <span key={tag} className='mr-2'>
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className='w-full h-[540px] rounded-3xl overflow-hidden'>
                <img src={photo} alt={username} className='w-full h-full' />
            </div>
            <div className='flex justify-between mt-4'>
                <div className='flex items-center text-[18px]'>
                    {like ?
                        (
                            <FavoriteIcon
                                onClick={() => updateLike(id)}
                                className='text-[#877eff]'
                            />
                        ) : (
                            <FavoriteBorderIcon
                                onClick={() => updateLike(id)}
                            />
                        )}
                    <span className='ml-1'>{likeNo}</span>
                </div>
                <div>
                    <BookmarkBorderOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default PostCard;