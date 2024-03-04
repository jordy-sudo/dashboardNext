'use client';
import React from 'react'
import { SimpleWidget } from '..'
import { IoCafeOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
    const count = useAppSelector( state => state.counter.count );
  return (
    <div className='felx flex-wrap p-2 items-center justify-center'>
        
        <SimpleWidget   label='Card 1' 
                        title='Contador' 
                        count ={count}
                        subtitle='Contador Heredado'
                        icon={<IoCafeOutline size={50} />}
                        href='/dashboard/counter'
        />
        {/* <SimpleWidget /> */}
      </div> 
  )
}
