"use client"

import React from 'react'
import Link from 'next/link';

const navItems = [
  {
    name: 'ALL TASKS',
    path: '/', 
  },
  {
    name: 'IMPORTANT',
    path: '/important', 
  },
  {
    name: 'COMPLETED',
    path: '/completed', 
  },
  {
    name: 'PENDING',
    path: '/pending', 
  },
  {
    name: 'TODAY',
    path: '/today', 
  },
  {
    name: 'THIS WEEK',
    path: '/this-week', 
  },
  {
    name: 'THIS MONTH',
    path: '/this-month', 
  },
];

export default function SideBar() {
  return (
  <div className='mt-8 rounded-xl w-1/4 h-fit bg-[#fafafa] hidden lg:flex flex-col border-2  border-[#bbb]'>
    <div className='p-4'>
      <div className="">
        <h2 className='text-2xl font-bold mb-6'>Lists</h2>
        
        {/* CLOSE MENU TOGGLE BUTTON */}

        <ul className='flex flex-col gap-3 justify-items-center'>
          {navItems.map((item, index) => (
              <li key={index}>
                <button className="w-full text-white rounded-xl pl-4 h-12 bg-gradient-to-r from-orange-500 to-amber-400">
                <Link className='text-xl font-bold' href={item.path} passHref>
                {item.name}</Link>
              </button>  
              </li>
            ))}
        </ul>
      </div>
    </div>
  </div>
  )
}
