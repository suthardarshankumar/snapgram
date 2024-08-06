import React from 'react'
import { UserCard } from '../index'
import { usePost } from '../../context/PostContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PostDetails = ({
    id,
    name,
    username,
    profilePic,
    caption,
    tags,
    photo,
    likeNo,
    like,
    saved
}) => {
    const { updateLike, addSave, deleteSave } = usePost();

    const handleSaveClick = () => {
        if (saved) {
            deleteSave(id);
        } else {
            addSave({ id, name, username, profilePic, caption, tags, photo, likeNo, like });
        }
    };

    return (
        <>
            <div className='w-full p-5'>
                <div className='w-full flex rounded-3xl border-[0.2px] border-[#292929] p-5'>
                    <div
                        className='w-[50%] overflow-hidden h-[450px]'>
                        <img
                            src={photo}
                            alt={username}
                            className='w-full h-full object-contain'
                        />
                    </div>
                    <div
                        className='w-[50%] p-5 relative'>
                        <div
                            className='w-full pb-5 border-b-[0.1px] border-[#292929]'>
                            <UserCard
                                img={profilePic}
                                name={name}
                                username={username}
                            />
                        </div>
                        <div
                            className='w-full mt-5 h-[280px] overflow-hidden overflow-y-auto'>
                            <div
                                className='text-slate-50 text-justify leading-6'>
                                {caption}
                            </div>
                            <div
                                className='text-[#7878a3] mt-1'>
                                {tags.map((tag) => (
                                    <span key={tag} className='mr-2'>
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div
                            className='w-full absolute bottom-3 pr-10'>
                            <div className='w-full flex justify-between mt-4'>
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
                                                className='text-slate-50'
                                            />
                                        )}
                                    <span className='ml-1 text-slate-50'>{likeNo}</span>
                                </div>
                                <div>
                                    {saved ? (
                                        <BookmarkIcon
                                            onClick={handleSaveClick}
                                            className='text-[#877eff] cursor-pointer'
                                        />
                                    ) : (
                                        <BookmarkBorderOutlinedIcon
                                            onClick={handleSaveClick}
                                            className='cursor-pointer text-slate-50'
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetails;