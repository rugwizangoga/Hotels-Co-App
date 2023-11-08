'use client'
import React from 'react'
import Image from 'next/image'

interface avatarProps{
  src?:string
}

const Avatar: React.FC<avatarProps> = ({src}) => {
  return (
    <Image className='rounded-full'
    height={30}
    width={30}
    alt='Avatar'
    src={src || '/images/user.jpg'}
    />
  )
}

export default Avatar