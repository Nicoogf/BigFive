import Image from 'next/image'
import React from 'react'
import Check from "../../public/assets/check.svg" ;

const Pricing = () => {
  return (
    <section className='py-[48px] lg:py-[60px]'>
        <h3 className='text-[#172026] text-center font-medium text-2xl lg:text-[42px]'>
            Consulta los distintos planes
        </h3>
        <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]"> 
        No dudes en consultar
        </p>

        <div className='flex flex-col gap-y-6 gap-x-[24px] lg:flex-row'>

            <div className='w-full rounded-[8px] bg-[#dddceb] p-6 flex-col lg:justify-between'>
                <div>
                    <h3 className='font-medium text-[#4328EB] text-[18px] lg:text-xl'> 
                     Consulta gratis
                    </h3>
                    <p className='pt-[12px] text-[#36485C] lg:text-[18px]'>  
                    Video llamada para asesoramiento e introduccion 
                    </p>
                    <h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>
                        0$ <span className='text-[#5f7896]'> /month</span>
                    </h2>

                    <ul className='flex flex-col gap-y-2 pt-4 text-[#5F7896]'>
                        <li className='flex items-center gap-x-2'> 
                           <span> 
                                <Image src={Check} alt="check" />
                           </span> Lorem ipsum 
                        </li>
                        <li className='flex items-center gap-x-2'> 
                           <span> 
                                <Image src={Check} alt="check" />
                           </span> Lorem ipsum 
                        </li>
                        <li className='flex items-center gap-x-2'> 
                           <span> 
                                <Image src={Check} alt="check" />
                           </span> Lorem ipsum 
                        </li>
                    </ul>
                </div>

                <button className='mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium'>
                    Comenzar prueba 
                </button>
            </div>

            <div className='w-full rounded-[8px] bg-[#4238EB] p-6 flex-col lg:justify-between'>
                <div>
                    <h3 className='font-medium text-white text-[18px] lg:text-xl'> 
                     Consulta gratis
                    </h3>
                    <p className='pt-[12px] text-[#FAF8FA] lg:text-[18px]'>  
                    Bussines 
                    </p>
                    <h2 className='pt-4 text-2xl font-medium lg:text-[32px] text-white'>
                        500$ <span className='text-[#f4f8fa]'> /month</span>
                    </h2>

                    <ul className='flex flex-col gap-y-2 pt-4 text-[#f4f8fa]'>
                        <li className='flex items-center gap-x-2'> 
                           <span> 
                                <Image src={Check} alt="check" />
                           </span> Lorem ipsum 
                        </li>
                        <li className='flex items-center gap-x-2'> 
                           <span> 
                                <Image src={Check} alt="check" />
                           </span> Lorem ipsum 
                        </li>
                        <li className='flex items-center gap-x-2'> 
                           <span> 
                                <Image src={Check} alt="check" />
                           </span> Lorem ipsum 
                        </li>
                        <li className='flex items-center gap-x-2'> 
                           <span> 
                                <Image src={Check} alt="check" />
                           </span> Lorem ipsum 
                        </li>
                        <li className='flex items-center gap-x-2'> 
                           <span> 
                                <Image src={Check} alt="check" />
                           </span> Lorem ipsum 
                        </li>
                    </ul>
                </div>

                <button className='mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium'>
                    Comenzar prueba 
                </button>
            </div>

            <div className='w-full rounded-[8px] bg-[#dddceb] p-6 flex-col lg:justify-between'>
                <div>
                    <h3 className='font-medium text-[#4328EB] text-[18px] lg:text-xl'> 
                     Consulta gratis
                    </h3>
                    <p className='pt-[12px] text-[#36485C] lg:text-[18px]'>  
                    Custom
                    </p>
                    
                  <p className='pt-4 text-[16px] text-[#36485c]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam nostrum nihil perspiciatis necessitatibus? Quibusdam exercitationem consequuntur fugit officiis                     
                  </p>

                  <p className='pt-2 text-[16px] text-[#36485c'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam nostrum nihil perspiciatis necessitatibus? Quibusdam exercitationem consequuntur fugit officiis                     
                  </p>
                </div>

                <button className='mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium'>
                    Comenzar prueba 
                </button>
            </div>

        </div>
    </section>
  )
}

export default Pricing