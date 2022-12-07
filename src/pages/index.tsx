import React from 'react';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react'

interface PageProps { }

const Page: NextPage<PageProps> = props => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-screen h-screen'>
      <h1 className='text-3xl font-bold'>Public Page</h1>
      <button
        className='rounded px-4 py-2 text-white bg-blue-500 hover:opacity-75 transition-opacity duration-150'
        onClick={() => signIn('github', { redirect: true, callbackUrl: '/dashboard' })}>
        Login with Github
      </button>
    </div>
  )
};

Page.displayName = 'Page';

export default Page;
