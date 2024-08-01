import { useState, createContext } from 'react'

export const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [userData, setUserData] = useState('1');

    return (
        <PostContext.Provider value={{ userData }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider;