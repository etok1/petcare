import React from 'react';
import { SyncLoader } from "react-spinners";


export function Loading() {
    return (
      <div className='flex flex-col items-center'>
        <p className='mb-10 text-xs sm:text-sm md:text-lg'>Идет загрузка!</p>
        <SyncLoader size={10} color='#059669' />
      </div>
    );
  }