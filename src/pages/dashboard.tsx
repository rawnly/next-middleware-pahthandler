import React from 'react';
import { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';

interface PageProps { }

const Page: NextPage<PageProps> = _ => {
  const session = useSession()

  return (
    <div className='flex items-center flex-col justify-center w-screen h-screen'>
      <h1 className='text-3xl font-bold'>Dahboard Page</h1>
      <a onClick={() => signOut({ redirect: true, callbackUrl: '/' })} className='text-blue-500 underline' href='#'>
        Logout
      </a>
      <h3>{session.data?.user?.name ?? 'user'} session:</h3>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
};

Page.displayName = 'DashboardPage';

export default Page;
