import React from 'react'
import { FaCode } from 'react-icons/fa'

export default function Topbar() {
  return (
    <div className='bg-surface-muted-90 border border-soft flex justify-center items-center py-3 rounded-lg px-6'>
           <div className='flex items-center gap-2'>
                 <FaCode className='primary_color text-5xl'/>
                 <h1 className='text-2xl font-bold text-heading capitalize'>SHORIF</h1>
             </div>
    </div>
  )
}
