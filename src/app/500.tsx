'use client';

import { useRouter } from 'next/navigation';

const Custom500 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">500</h1>
      <p className="text-xl mt-4">Internal Server Error</p>
      <button
        onClick={() => router.push('/admin')}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default Custom500;
