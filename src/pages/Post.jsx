import React from 'react'
import { PostDetails } from '../components/index'
import { usePost } from '../context/PostContext'
import { useParams } from 'react-router-dom'

const Post = () => {
    const { posts } = usePost()
    const { id } = useParams()

    const post = posts.find((p) => p.id === parseInt(id));

    console.log(post)

    if (!post) {
        return <div>Post not found</div>;
    }


    return (
        <>
            <div
                className='w-full py-10 px-20 box-border'>
                <div
                    className='w-full'>
                    <PostDetails
                        id={post.id}
                        name={post.name}
                        username={post.username}
                        profilePic={post.profilePic}
                        caption={post.caption}
                        tags={post.tags}
                        photo={post.photo}
                        likeNo={post.likeNo}
                        like={post.like}
                        saved={post.saved}
                    />
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Post