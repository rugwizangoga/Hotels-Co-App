'use client'
import React, { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'
import useRegisterModal from '../hooks/useRegisterModal'
import useLoginModal from '../hooks/useLoginModal'
import { useUser } from '@/app/providers/UserContext'
import { string } from 'yup'

const UserMenu = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  },[]) 
  
  const { logout, currentUser } = useUser()
  function handleLoginMenuItemClick() {
    loginModal.onOpen();
    toggleOpen();
  }
  function handleRegisterMenuItemClick() {
    registerModal.onOpen();
    toggleOpen();
  }
  function handleLogoutClick() {
    logout()
    toggleOpen();
  }
  return (
    <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
            <div onClick={()=>{}} className='
            hidden
            py-3
            px-4
            md:block
            font-semibold
            rounded-full
            hover:bg-neutral-100
            cursor-pointer
            text-sm
            transition'
            >
                Add your Room
            </div>
            <div onClick={toggleOpen} className='
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            '
            >
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    <Avatar src={currentUser?.image} />
                </div>
            </div>
        </div>
            {isOpen && (
                <div className='
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflow-hidden
                right-0
                top-12
                text-sm'>  
                    <div className='flex flex-col cursor-pointer'>
                        { currentUser? (
                            <>
                                <MenuItem onClick={()=>{}} label='My favourites' />
                                <MenuItem onClick={()=>{}} label='My reservations' />
                                <MenuItem onClick={()=>{}} label='My Hotels' />
                                <MenuItem onClick={()=>{}} label='Add your hotel' />
                                <hr />
                                <MenuItem onClick={handleLogoutClick} label='Logout' />
                            </>
                        ): (
                        <>
                            <MenuItem onClick={handleLoginMenuItemClick} label='Login' />
                            <MenuItem onClick={handleRegisterMenuItemClick} label='Sign up' />
                        </>
                        )};
                    </div>
                </div>
            )}
    </div>
  )
}

export default UserMenu