'use client'
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import Categories from './Categories'
const Navbar = () => {
  return (
    <header className=' bg-white fixed w-full z-10 shadow-sm'>
        <nav className='py-4 border-b-[1px]'>
          <Container>
            <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                <Logo />
                <Search />
                <UserMenu />
            </div>
          </Container>
        </nav>
        <Categories />
    </header>
  )
}

export default Navbar