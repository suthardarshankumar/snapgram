import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LeftSidebar, EditPage, UserProfile } from './components/index';
import { Home, CreatePost, Explore, People, Saved, User, Post, Profile } from './pages/index';

const App = () => {
  return (
    <div className='w-full min-h-screen box-border m-0 p-0 bg-[#0c0c0c] flex'>
      <div className='w-[19%] fixed h-full'>
        <LeftSidebar />
      </div>
      <div className='w-[81%] ml-[19%] overflow-y-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/people' element={<People />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/user/:username' element={<User />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/profile' element={<Profile />}>
            <Route index element={<UserProfile />} />
            <Route path='edit-page' element={<EditPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
