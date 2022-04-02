import React, { useState } from 'react';
import CustomLink from './CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import '../css/Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex my-3 justify-between'>
            <div className='text-2xl'>
                <h3>Tanvir's Portfolio</h3>
            </div>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <nav className={`md:flex text-lg justify-center absolute md:static duration-700 ease-in ${open ? 'right-1 top-9' : 'right-1 top-[-160px]'}`}>
                <CustomLink className='mx-2' to='/'>Home</CustomLink>
                <CustomLink className='mx-2' to='/service'>Service</CustomLink>
                <CustomLink className='mx-2' to='/portfolio'>Portfolio</CustomLink>
                <CustomLink className='mx-2' to='/contact'>Contact</CustomLink>
            </nav>
        </div>
    );
};

export default Header;