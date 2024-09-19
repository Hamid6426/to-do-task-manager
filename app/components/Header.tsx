"use client"

import Image from 'next/image'

export default function Header() {
  return (
    <div>
      <header className='w-[100vw] border-b-2 border-[#bbb] px-[1vw] bg-[#fafafa] text-black '>
        <section className='h-16 flex flex-row justify-between place-items-center'>
        <div className="w-full flex flex-row items-center">
        <div className='mx-1 w-10 h-10 '>
          <Image 
            src="/to-do-logo.png"
            alt="Logo"
            width="40"
            height="40"
          />
        </div>
        <div className=''>
          <h1 className='font-bold text-2xl ml-4'>To-Do Task Manager</h1>
        </div>
      </div>
        </section>
      </header>
    </div>

  );
}
