import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-full max-w-6xl mx-auto px-3 sm:px-8 md:px-12 lg:px-14 xl:px-0'>
        {children}
    </div>
  )
}
