"use client"

import { useState } from 'react';
import { signInWithGoogle } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      router.push('/dashboard');
    } catch (error) {
      console.error('Error signing in with Google', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      <Button onClick={handleSignIn} disabled={loading}>
        {loading ? 'Signing in...' : 'Sign in with Google'}
      </Button>
    </div>
  );
}