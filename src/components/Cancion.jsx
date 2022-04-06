import React from 'react'
import { useNavigate } from 'react-router-dom'


const Cancion = ({cancion}) => {
  const navigate = useNavigate()
  const {nombre, fecha, album, autor, id} = cancion
  return (
    <>
      <tr className='border-b-2 hover:bg-gray-200'>
        <td className='p-3'>{nombre}</td>
        <td className='p-3'>{fecha}</td>
        <td className='p-3'>{album}</td>
        <td className='p-3'>{autor}</td>
        <td className='p-3'>
          <button 
            onClick={()=>(navigate(`/canciones/${id}`))}
            type='button' 
            className='block w-full bg-yellow-700  hover:bg-yellow-600 
          p-1 mt-0 rounded-sm shadow-sm transition-colors text-white text-sm uppercase font-bold'>
            Ver
          </button>
          <button 
            onClick={()=>(navigate(`/canciones/editar/${id}`))}
            type='button' 
            className='block w-full bg-blue-700  hover:bg-blue-600 
          p-1 mt-1 rounded-sm shadow-sm transition-colors text-white text-sm uppercase font-bold'>
            Editar
          </button>
          <button
            type='button' 
            className='block w-full bg-red-700  hover:bg-red-600 
          p-1 mt-1 rounded-sm shadow-sm transition-colors text-white text-sm uppercase font-bold'>
            Eliminar
          </button>
        </td>
      </tr>
        
        
    </>
  )
}

export default Cancion