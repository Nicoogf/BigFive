import Image from 'next/image'
import React from 'react'
import Arrow from "../../public/assets/arrow.png"

const Cta = () => {
  return (
    <section className='w-full py-[56px] px-[32] text-center rounded-[16px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 lg:my-[60px] lg:px-[324px] lg:py-[89px]'>
            <h3 className='text-white text-[32px] font-medium lg:text-[56px] leading-[64px]'> 
            Monitor your website 
            </h3>

            <p className='text-white pt-6 lg:pt-[48px] lg:text-[18px]'> 
                124 Calificaciones positivas de  clientes contratando nuestros servicios 
            </p>

            <div className='mt-[40px] flex flex-col w-full items-center lg:flex-row lg;mt-[56px] lg:justify-center gap-x-[40px]'>
                <button className='pt-[16px] px-[32px] bg-white rounded-[4px] text-pink-500 font-medium lg:w-fit'> 
                Prueba gratis
                </button>

                <button className='flex w-full items-center justify-center gap-x-3 mt-[32px] text-white font-medium lg:w-fit lg:mt-0'>
                    Contactar
                    <span> <Image src={Arrow} alt="Arrow" /></span>
                </button>
            </div>    
    </section>
  )
}

export default Cta