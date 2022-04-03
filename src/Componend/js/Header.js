import React, { useState } from 'react';
import CustomLink from './CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
// import '../css/Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-slate-700 py-4 items-center'>
            <div className=' container mx-auto flex justify-between px-2'>
                <div className='text-2xl'>
                    <h3>Tanvir's Portfolio</h3>
                </div>
                <div onClick={() => setOpen(!open)} className='h-8 w-8 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <nav className={`md:flex md:static absolute duration-500 bg-slate-700 ${open ? 'right-0 top-16' : 'right-0 top-[-160px]'}`}>
                    <CustomLink className='text-xl md:mx-4 px-3 py-2' to='/'>Home</CustomLink>
                    <CustomLink className='text-xl md:mx-4 px-3 py-2' to='/service'>Service</CustomLink>
                    <CustomLink className='text-xl md:mx-4 px-3 py-2' to='/project'>Project</CustomLink>
                    <CustomLink className='text-xl md:mx-4 px-3 py-2' to='/contact'>Contact</CustomLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;