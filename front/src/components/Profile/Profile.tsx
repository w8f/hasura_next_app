import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import React from 'react';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <div>
        <Image src={user.picture || ''} alt={user.name || ''} width='300' height='300' />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  }
  return (
    <>
      <p>未ログイン</p>
    </>
  );
}
