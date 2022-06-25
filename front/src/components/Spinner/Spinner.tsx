import { FC } from 'react';

/**
 * スピナーコンポーネント
 */
export const Spinner: FC = () => {
  return (
    <div className='bg-stone-50 flex justify-center min-h-screen items-center'>
      <div className='animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent' />
    </div>
  );
};
