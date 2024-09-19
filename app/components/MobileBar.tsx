"use client"

import React, { useState } from "react";
import Link from 'next/link';
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

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


export default function MobileBar() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="relative flex flex-col items-center">
      <div className="flex justify-center items-center lg:hidden">
      {/* Button to toggle menu */}
      <button
        className="w-screen text-3xl focus:outline-none bg-gradient-to-r from-orange-500 to-amber-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RxTriangleDown className="mx-auto"/> : <RxTriangleUp className="mx-auto"/>} {/* Show close icon if menu is open, otherwise show menu icon */}
      </button>
      </div>
      <div className="w-full">
      {/* Mobile Menu */}
      
      {isOpen && (
        <div className="rounded-xl mt-2 p-4 h-fit lg:hidden flex flex-row bg-[#fafafa] border-2 border-[#bbb]">
          <ul className="flex flex-col gap-3 justify-items-center w-full">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link className='text-xl font-bold' href={item.path} passHref>
                <button className="w-full text-white rounded-xl pt-2 pl-4 h-12 bg-gradient-to-r from-orange-500 to-amber-400">
                  {item.name}
              </button>  
              </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}