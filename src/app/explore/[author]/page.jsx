"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import BookCard from '../../../components/BookCard'

export default function Author() {
  const router = useRouter()
//   const id = router.query.author
  const [selected, setSelected] = useState(null);
  const books = [
    {id: 1, name: 'The Adventures of Vin Fiz', date: '2006-12-1'},
    {id: 2, name: 'The Chase', date: '2007-10-30'},
    {id: 3, name: 'The Wrecker', date: '2009-11-27'},
    {id: 4, name: 'The Spy', date: '2010-05-27'},
  ]
  return (
    <div className='!bg-[#FFFFFF] h-screen'>
        <div className="fixed flex flex-row pt-[40px] pl-[90px] pb-[20px] w-full">
            <Image src="/back.png" width={40} height={40} alt="Back" />
            <Link href='/explore'>Explore</Link>
        </div>
        <div className="flex lg:mx-[90px] flex-row">
            <div className='flex flex-col w-393 pt-[20px] pr-[20px] space-y-[32px]'>
                <div className='flex flex-col px-[20px] py-[8px] space-x-[4px]'>
                    <div>Clive Cussler</div>
                    <div className='font-regular text-[12px] text-[#7E7E7E]'>Select a book to see details</div>
                </div>
                <div className='flex flex-col space-y-[12px]'>
                    {books.map(book => 
                        <BookCard key={book.id} name={book.name} date={book.date} />
                    )}
                </div>
            </div>
            <div className='px-[100px]'>

            </div>
        </div>
    </div>
  )
}
