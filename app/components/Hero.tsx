import React from 'react' ;
import BlueArrow from "../../public/assets/blue-button.svg"
import Image from 'next/image';
import Gradient from "../../public/assets/Gradient.svg"
import HeroImage from  "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg"
import Slack from "../../public/assets/Slack.svg"
import Truspilot from "../../public/assets/Trustpilot.svg"
import CNN from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg"

const Hero = () => {
  return (
    <main className="pt-4 lg:pt-10">
        <div className='px-[20px] lg:px-[280px]'>
            <h1 className='text-center text-[32px] leading-[40px] font-medium text-[#172026]lg:text-[64px] lg:leading-[72px]'>
                Transfórmate en un Info Productor de Éxito             
            </h1>
            <p className='text-center pt-6 text-[#36485c] lg:text-[18px] lg:leading-7'> 
            Incluso si no tienes experiencia en el mundo digital! Puedes lograr ingresos mensuales de $2000 USD o más compartiendo tus conocimientos y experiencia con las personas
            </p>
            <div className='flex w-full pt-8 justify-center gap-x-6'>
                <button className='bg-[#4328EB] w-1/2 py-4 px-8 rounded-lg  text-white lg:w-fit'>
                    Agendar Asesoria Gratuita
                </button>
                <button className='w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit '>
                    Ver servicios 
                    <span>
                         <Image src={BlueArrow} alt="Ir promocion" />
                    </span>     
                </button>

            </div>
        </div>

        <div className='relative flex h-full w-full justify-center'>
            <Image src={Gradient} alt ="Gradient" className='min-h-[500px] w-full object-cover lg:h-auto'/>

            <div className='absolute bottom-5 flex w-full flex-col items-center'>
                <Image src={HeroImage} alt="hero image" className='-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]'/>

                <div className='flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20'>
                    <p className='text-[#ffffff] text-center lg:text-[18px]'> Trusted by these companies</p>
                    <div className='grid grid-cols-3 items-center justify-center justify-items-center px-[20px] lg:grid-cols-5'>
                        <Image src={Google} alt="" />
                        <Image src={Slack} alt="" />
                        <Image src={Truspilot} alt="" />
                        <Image src={CNN} alt="" />
                        <Image src={Cluth} alt="" />
                    </div>
                </div>
            </div>

        </div>
    </main>

  )
}

export default Hero