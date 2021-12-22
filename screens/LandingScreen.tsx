import React from 'react';
import Image from 'next/image';
import LoginForm from '@/components/LoginForm';
import Card from '@/components/Card';
import Link from 'next/link';

const LandingScreen = () => {
  return (
    <div>
      <div className='container flex items-center h-screen max-w-screen-md mx-auto'>
        <div className='hidden w-3/5 md:flex'>
          <Image
            height={1236}
            width={908}
            src='/images/iphone-with-profile.jpg'
            alt='iPhone with Instagram app'
          />
        </div>
        <div className='flex flex-col px-5 space-y-2 lg:w-2/5 lg:px-0'>
          <LoginForm />
          <Card>
            <div className='text-sm text-center text-gray-700'>
              <p>
                Don't have an account?
                <Link href='/accounts/signup'>
                  <a className='font-semibold'>Signup</a>
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
