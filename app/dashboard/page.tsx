'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col p-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Secure Chat Dashboard</h1>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Welcome, {session?.user?.name || 'User'}!</h2>
        <p className="mb-4">You are now signed in to the secure chat application.</p>
        
        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-medium mb-4">Your Conversations</h3>
          <p className="text-gray-500">No conversations yet. Start chatting!</p>
        </div>
      </div>
    </div>
  );
} 