import React from 'react'
import Formulario from '../components/Formulario';

const EditarCancion = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-stone-300 shadow-md px-10 pt-14'>Editar Canción</h1>
      <p className='px-10 pt-10 pb-10'>Edita la canción con ayuda del siguiente formulario.</p>

      <div className='w-2/3 m-auto' >
        <Formulario />
      </div>
  
  </div>
  )
}

export default EditarCancion