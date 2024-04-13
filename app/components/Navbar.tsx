import Image from 'next/image';
import React from 'react'
import logo from "../../public/assets/Logo.svg"
import User from "../../public/assets/User.svg"
import Menu from "../../public/assets/Menu.svg"
import Link from 'next/link';

const navLinks = [
    {name:"Features"},
    {name:"Pricing"},
    {name:"Enterprise"},
    {name:"Careers"}
]

const Navbar = () => {
  return (
    <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20'>
      
        <div className='flex lg:flex items-center'>
            <Image src={logo} alt='Logo'/>
            
            <div className='hidden lg:flex pl-[74px] gap-x-[56px]'>
                {navLinks.map(( items , index ) => (
                    <p key={index} className='text-[#36485C] font-medium'> 
                        { items.name } 
                    </p>
                ))}
            </div>

        </div>

        <div className='flex gap-x-5'>

            <p className='hidden lg:block font-medium text-[#36485C] pr-[56px]'>Open an Account</p>

            <div className='flex items-center gap-x-2'>
                <Image src={User} alt="User Profile" />
                <span className='hidden font-medium text-[#36485C] lg:block'> Sign in </span>
            </div>

            <Image src={Menu} alt="Menu" className='lg:hidden'/>
        </div>
    </nav>
  )
}

export default Navbar ;