import React from 'react'
import ArticleMoelcule from '../molecules/ArticleMoelcule'
import doctor from '../../assets/imagenes/presentacion.jpeg'

function Section1() {
  return (
    <section className='screen grid gap-8 justify-items-center pb-12 items-center md:grid-cols-2 md:py-24 '>
        <img src={doctor} alt="images" style={{ maxWidth: '50%', height: 'auto' }} />

<div>
       <ArticleMoelcule
        title="Odontologia Integral Tu Camino hacia una Salud Bucal Óptima"
        />
        <div className='text-sky-500'>
        <ArticleMoelcule
         content="Cirujano Destisa Ricardo Gomez G"
        />
        </div>
        
</div>
        
    </section>
  )
}

export default Section1
