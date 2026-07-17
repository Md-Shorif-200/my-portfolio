import React from 'react'
import { FaSpinner } from 'react-icons/fa'

export default function Loading() {
  return (
    <div className='w-full min-h-screen bg_color primary_color flex justify-center items-center'>
         <FaSpinner className='text-5xl primary_color animate-spin' />
    </div>
  )
}
