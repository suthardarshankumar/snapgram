import React from 'react'
import { Link } from 'react-router-dom';

//components
import { UserCard } from '../index';

//logo and images
import logo from '../../assets/Logo/logo.svg'
import profileImg from '../../assets/User/MainUserProfile.jpg'

const LeftSidebar = () => {
    return (
        <>
            <div
                className='p-5 box-border bg-[#171717] text-slate-100 w-full min-h-full'>
                <div className='mt-5 ml-1'>
                    <Link to="/">
                        <img src={logo} className='w-[250] h-[36]' />
                    </Link>
                </div>
                <div className='w-full'>
                    <UserCard
                        img={profileImg}
                        name="S D"
                        username="@sd58"
                    />
                </div>
            </div>
        </>
    )
}

export default LeftSidebar;