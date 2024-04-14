import Image from 'next/image'
import React from 'react'
import Logo from "../../public/assets/Logo.svg"
import Facebook from "../../public/assets/Facebook.svg"
import Feed from "../../public/assets/Feed.svg"

const Footer = () => {
  return (
    <footer className='pt-[80px] pb-[40px]'>

        <div className='flex items-center justify-center gap-x-[12px]'>
            <Image src={Logo} alt="Logo" />
            <p className='font-bold text-[#36485c] text-[17px]'>  Big five</p>
        </div>

        <ul className='flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485c] sm:justify-center sm:gap-x5 sm:pt-5'>
            <li> Features </li>
            <li> Pricing </li>
            <li> Enterprise </li>
            <li> Carrers </li>
        </ul>

        <p className='pt-[56px] text-center text-[14px] font-medium text-[#5f7896]'>  Bigfive 2024 </p>
    
        <div className='flex items-center justify-center gap-x-[56px] pt-[40px]'>
            <Image src={Facebook} alt="" />
            <Image src={Feed} alt="" />
            <Image src={Facebook} alt="" />            
        </div>
    </footer>
  )
}

export default Footer