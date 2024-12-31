'use client';

import { useRouter } from 'next/navigation';

const Custom404 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4">Page not found</p>
      <button
        onClick={() => router.push('/admin')}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default Custom404;
