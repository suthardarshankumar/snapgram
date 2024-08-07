import React, { useState } from 'react';
import { usePost } from '../context/PostContext';
import { UserCard, Input } from '../components/index';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const CreatePost = () => {
    const navigate = useNavigate()

    const { posts, setPosts, mainUser } = usePost();

    const [caption, setCaption] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const handleCaption = (e) => {
        setCaption(e.target.value);
    };

    const handleTags = (e) => {
        setTags(e.target.value);
    };

    const handleImg = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
            setImagePreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            id: Date.now(),
            name: mainUser.name,
            username: mainUser.username,
            profilePic: mainUser.profilePic,
            caption: caption,
            tags: Array.from(tags.split(',').map(tag => tag.trim())),
            photo: image ? URL.createObjectURL(image) : null,
            likeNo: 23,
            like: false,
            saved: false
        };

        setPosts([...posts, formData]);
        setCaption('');
        setTags('');
        setImage(null);
        setImagePreview('');
        navigate('/')
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="w-[85%] p-10 bg-[#171717] my-24 rounded-3xl">
                <div className=''>
                    <div className="w-full mb-5">
                        <UserCard
                            name={mainUser.name}
                            username={mainUser.username}
                            img={mainUser.profilePic}
                        />
                    </div>
                    <div className="w-full mt-10">
                        <label className='text-xl text-slate-50'>Caption</label>
                        <textarea
                            placeholder="Caption"
                            value={caption}
                            rows={6}
                            onChange={handleCaption}
                            className="w-full text-2xl text-slate-50 bg-transparent border-[0.1px] border-slate-50 rounded-xl px-5 py-2 font-normal mt-3"
                        />
                    </div>
                    <div className="w-full mt-10">
                        <label className='text-xl text-slate-50'>Add Tags (separated by comma " , ")</label>
                        <Input
                            placeholder="Art, Learn"
                            value={tags}
                            onChange={handleTags}
                            className="text-2xl text-slate-50 bg-transparent border-[0.1px] border-slate-50 rounded-xl px-5 py-2 font-normal mt-3"
                        />
                    </div>
                    <div className="w-full mt-10">
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                            Add Photo
                            <VisuallyHiddenInput type="file" onChange={handleImg} />
                        </Button>
                        {imagePreview && (
                            <div className="mt-4">
                                <img src={imagePreview} alt="Preview" className="w-[100px] h-[100px] rounded-lg" />
                            </div>
                        )}
                    </div>
                    <div className='mt-10 float-right'>
                        <Button
                            variant="contained"
                            type='submit'
                            sx={{
                                transition: "0.5s",
                                cursor: "pointer",
                                backgroundColor: "transparent",
                                border: "1px solid #fefefe",
                                padding: "8px 20px",
                                color: "#fefefe",
                                '&:hover': {
                                    backgroundColor: "#fefefe",
                                    color: "#000",
                                },
                            }}
                        >
                            Create Post
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
