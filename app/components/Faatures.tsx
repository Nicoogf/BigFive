import React from 'react'
import Feature1 from "../../public/assets/feature-1.svg"
import Feature2 from "../../public/assets/feature-2.svg"
import Feature3 from "../../public/assets/feature-3.svg"
import Check from "../../public/assets/check.svg"
import Image from 'next/image'
import BlueButton from "../../public/assets/blue-button.svg"
import GreenButton from "../../public/assets/green-button.svg"
import PinkButton from "../../public/assets/pink-button.svg"

const Features = () => {
  return (
    <section className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]'>
        <div className='flex flex-col gap-x-6 sm:flex-row-reverse '>
            <Image src={ Feature1 } alt="feature" className='hidden w-1/2 sm:block'/>
            <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                <h3 className='font-medium text-[#0085ff] lg:text-[18px]'>
                Con Nuestro Plan de Acción Lograras
                </h3>
                <h1 className='pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>
                Crear una Estrategia de Impacto
                </h1>
                <Image src={ Feature1 } alt="feature" className='pt-[24px] sm:hidden'/>
                <p className='py-[24px] text-[#36485C] lg:text-[18px]'> Te guiaremos para que juntos podamos convertir tus conocimientos y experiencias en contenido que no solo eduque, sino que ayude a transformar vidas. Cursos digitales que realmente conecten con tu publico y los convierta en una mejor versión de si.
                </p>
                <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                    <li className='flex items-center gap-x-2 text-[#36485C]'> 
                        <span> 
                            <Image src={Check} alt="checkmarck" /> 
                        </span>
                        Crear una Estrategia de Impacto
                    </li>

                    <li className='flex items-center gap-x-2 text-[#36485C]'> 
                        <span> 
                            <Image src={Check} alt="checkmarck" /> 
                        </span>
                        Escalar tu Negocio al Próximo Nivel
                    </li>

                    <li className='flex items-center gap-x-2 text-[#36485C]'> 
                        <span> 
                            <Image src={Check} alt="checkmarck" /> 
                        </span>
                        Maximizar tus Ingresos
                    </li>
                </ul>

                <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#0085ff] lg:text-[18px]'> Agendar asesoria gratuita <Image src={BlueButton} alt=" Blue Button" /> </p>
            </div>
        </div>

        <div className='flex flex-col gap-x-6 sm:flex-row '>
            <Image src={ Feature2 } alt="feature" className='hidden w-1/2 sm:block'/>
            <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
                <h3 className='font-medium text-[#00A424] lg:text-[18px]'>
                Ademas  
                </h3>
                <h1 className='pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>
                Escalar tu Negocio al Próximo Nivel
                </h1>
                <Image src={ Feature2 } alt="feature" className='pt-[24px] sm:hidden'/>
                <p className='py-[24px] text-[#36485C] lg:text-[18px]'> Construiremos paso a paso los cimientos sobre los cuales podremos escalar tu negocio. Transitando por una ruta probada para escalar de manera efectiva.  Desde la optimización de tu propuesta de valor hasta las técnicas de marketing que te permitirán lograr el alcance soñado. 
                </p>
                <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                    <li className='flex items-center gap-x-2 text-[#36485C]'> 
                        <span> 
                            <Image src={Check} alt="checkmarck" /> 
                        </span>
                        Crear una Estrategia de Impacto
                    </li>

                    <li className='flex items-center gap-x-2 text-[#36485C]'> 
                        <span> 
                            <Image src={Check} alt="checkmarck" /> 
                        </span>
                        Escalar tu Negocio al Próximo Nivel
                    </li>

                    <li className='flex items-center gap-x-2 text-[#36485C]'> 
                        <span> 
                            <Image src={Check} alt="checkmarck" /> 
                        </span>
                        Maximizar tus Ingresos
                    </li>
                </ul>

                <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]'> Agendar asesoria gratuita <Image src={GreenButton} alt=" Blue Button" /> </p>
            </div>
        </div>

        <div className='flex flex-col gap-x-6 sm:flex-row-reverse '>
            <Image src={ Feature3 } alt="feature" className='hidden w-1/2 sm:block'/>
            <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                <h3 className='font-medium text-[#EB2891] lg:text-[18px]'>
                Con la posibilidad de 
                </h3>
                <h1 className='pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>
                Maximizar tus Ingresos
                </h1>
                <Image src={ Feature3 } alt="feature" className='pt-[24px] sm:hidden'/>
                <p className='py-[24px] text-[#36485C] lg:text-[18px]'> Comenzaras a tener ingresos constantes que superaran tus expectativas. Veras que es posible multiplicar tus ingresos en poco tiempo y que lograr vivir de lo que te apasiona esta a la vuelta de la esquina.
                </p>
              
                <div className='flex w-full gap-x-[24px]'>
                    <div className='w-1/2 flex flex-col gap-y-3'>
                        <h3 className='text-[20px] font-medium text-[#172026]'> +100 </h3>
                        <p className='text-[#36485c]'> Ventas realizadas</p>
                    </div>
                    <div className='w-1/2 flex flex-col gap-y-3'>
                         <h3 className='text-[20px] font-medium text-[#172026]'> +80 </h3>
                         <p className='text-[#36485c]'> Calificaciones Positivas </p>
                    </div>
                </div>

                <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]'> Agendar asesoria gratuita <Image src={PinkButton} alt=" Blue Button" /> </p>
            </div>
        </div>
    </section>
  )
}

export default Features