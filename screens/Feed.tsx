import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import Post from '@/components/Post';
import  useAuth from '@/hooks/useAuth';

const Feed = () => {
  const {loginWithGoogle} = useAuth();
  return (
    <AppLayout>
      <div className='grid max-w-6xl grid-cols-12 mx-auto'>
        <div className='col-span-7'>
          <Post />
          <button onClick={loginWithGoogle}>Login kor</button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Feed;
