'use client'
import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import Plus from "../../public/assets/Plus.svg"
import Image from 'next/image';

const items = [
    {
        question: "Serás un Infoproductor",
        answer: "Te enseñaremos a pensar como un infoproductor y crearemos una estrategia para tu Oferta Irresistible"
    },
    {
        question: "Crearemos tu Avatar",
        answer: "No le puedes vender a quien no conoces, tenemos que encontrar que características comparte el 80% de tus clientes potenciales."
    },
    {
        question: "La Transformación",
        answer: "Es el eje central de tu producto, aquí esta la base del éxito de tu curso. Las personas no quieren tu producto, quieren La Transformación que les genera."
    },
    {
        question: "Organizaremos tus Entregables",
        answer: "Que? Como? Cuando? Cuanto? Garantía y Bonos. Tienes que dejar muy claro todo esto en tu oferta."
    },
    {
        question: "Crearas tu primer Video de Venta Infalible ",
        answer: "En la oferta hay una secuencia especifica que garantiza tus ventas. Problemas, dolores, transformación, benéficos. Un buen vendedor no improvisa"
    },
    {
        question: "Llego la hora de tu Lanzamiento",
        answer: "El lanzamiento semilla es la opción ideal para terminar de mejorar tu producto. Es hora de Lanzar y mejorar."
    }
]

const Faqs = () => {
  return (
    <section className='flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-4'>
       <div className='lg:w-1/3 lg:py-[32px] lg:pr-[56px]'>
            <h3 className='text-[#EB2891] text-[14px] font-medium lg:text-base'> 
            Preguntas Frecuentes 
            </h3>

            <h1 className='py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>
                Aclaremas algunas dudas que tengas
            </h1>

            <p className='text-[#36485c] pb-[24px]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolores deserunt quasi, tempore libero aspernatur earum quaerat beatae
            </p>
       </div>

       <div className='lg:w-2/3'>
        <Accordion.Root type='single' defaultValue='item-1' collapsible className='flex flex-col gap-y-4'>
            {items.map((item,index)=> (
                <div key={index}>
                    <Accordion.Item value={`item-${index- 1}`} className='bg-[#E3F1FF] p-[16px] rounded-[8px]'>
                        <Accordion.Header>
                            <Accordion.Trigger className='flex w-full items-center justify-between'>
                                <p className='text-left font-medium text-[#172026] lg:text-[18px]'>{item.question}</p>
                                <span>
                                    <Image src={Plus} alt="add" className='h-10 w-10 lg:w-6 lg:h-6'/>
                                </span>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <p className='pt-2 text-[#36485c]'>
                                {item.answer}
                            </p>
                        </Accordion.Content>
                    </Accordion.Item>
                </div>
            ))}
        </Accordion.Root>
       </div>
    </section>
  )
}

export default Faqs