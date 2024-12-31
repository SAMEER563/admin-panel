'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children, hasPermission }: { children: React.ReactNode; hasPermission: boolean }) => {
  const router = useRouter();

  useEffect(() => {
    if (!hasPermission) {
      router.push('/404'); // Redirect to 404 if unauthorized
    }
  }, [hasPermission, router]);

  if (!hasPermission) {
    return null; // Optionally show a loading spinner while redirecting
  }

  return <>{children}</>;
};

export default ProtectedRoute;
