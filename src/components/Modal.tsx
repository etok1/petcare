import React, { useState } from 'react';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { BadgeAlert } from 'lucide-react';


// interface propsModal{
//     isOpen: boolean,
//     onClose: (arg0: boolean
// }

export function Modal({isOpen, onClose}) {


    return (
      <>
        <Dialog open={isOpen} onClose={onClose} className='relative z-[10020] '>
            <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
            <DialogPanel className="max-w-lg space-y-4 bg-white rounded-md p-12 border-2 border-red-600 text-center">
                <DialogTitle className="font-bold text-lg md:text-2xl text-red-600 flex items-center justify-center gap-4"><BadgeAlert size={40}/>Внимание!</DialogTitle>
                <p className='text-xs md:text-sm'>Информация о животных может быть <strong className='text-red-600'>устаревшей или неточной</strong>. Пожалуйста, свяжитесь с <strong className='text-red-600'>приютом</strong>, чтобы узнать актуальные данные о конкретном животном!</p>
                <div>
                    <Button onClick={onClose}  className="px-4 text-xs py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300">Ясно, спасибо!</Button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
      </>
    );
  }