import React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import { UserCard } from '../index';

// Logo and images
import logo from '../../assets/Logo/logo.svg';
import profileImg from '../../assets/User/MainUserProfile.jpg';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const LeftSidebar = () => {

    const SidebarIcons = [
        {
            icon: <HomeOutlinedIcon />,
            iconName: "Home",
            path: "/"
        },
        {
            icon: <ExploreOutlinedIcon />,
            iconName: "Explore",
            path: "/explore"
        },
        {
            icon: <PeopleOutlinedIcon />,
            iconName: "People",
            path: "/people"
        },
        {
            icon: <BookmarkBorderOutlinedIcon />,
            iconName: "Saved",
            path: "/saved"
        },
        {
            icon: <AddBoxOutlinedIcon />,
            iconName: "Create Post",
            path: "/create-post"
        }
    ];

    return (
        <div className='p-5 box-border bg-[#171717] text-slate-100 w-full h-screen'>
            <div className='mt-5 -ml-8'>
                <NavLink to="/">
                    <img src={logo}
                        alt="Logo"
                        className='w-[250px] h-[36px]'
                    />
                </NavLink>
            </div>
            <div className='w-full mt-11'>
                <UserCard
                    img={profileImg}
                    name="S D"
                    username="sd58"
                />
            </div>
            <div className='w-full mt-10 px-[6px]'>
                {SidebarIcons.map((icons, index) => (
                    <NavLink
                        to={icons.path}
                        key={index}
                        className={({ isActive }) =>
                            `flex gap-x-3 w-full p-3 mb-6 border-0 rounded-lg font-medium font-mono duration-500 hover:bg-[#877eff] ${isActive ? 'bg-[#877eff]' : ''}`
                        }
                    >
                        <div>
                            {icons.icon}
                        </div>
                        <div className='text-slate-50 flex items-center'>{icons.iconName}</div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default LeftSidebar;
