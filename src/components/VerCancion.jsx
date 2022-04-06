import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


const VerCancion = () => {
  const {id} = useParams()
  console.log(id);  
  const [cancion, setCancion] = useState([])

  const {nombre, fecha, album, autor } = cancion

  useEffect(()=>{
    const consultarCancionesAPI = async () =>{
      try {
        const url = `http://localhost:4000/canciones/${id}`
        const respuesta = await fetch(url)
        const resultado  = await respuesta.json()
        setCancion(resultado);
      } catch (error) {
        console.log(error);
      }
    }
    consultarCancionesAPI()
  }, [])

  return (
  <>
    <h1 className='text-3xl font-bold text-stone-300 shadow-md px-10 pt-14'>Ver: {nombre}</h1>
    <p className='px-10 pt-10'>Información acerca de la canción.</p>

    <div className='text-4xl mx-10'>
      {cancion.nombre ? (
        <p 
          className='text-4xl mt-14 text-gray-900'>
            <span 
              className='text-gray-700 uppercase'>Canción:
            </span> {nombre}
        </p>
      ):null}
      {cancion.fecha ? (
        <p 
          className='text-2xl mt-5 text-gray-900'>
            <span 
              className='text-gray-700 uppercase'>Fecha:
            </span>  {fecha}
        </p>
      ):null}
      {cancion.album ? (
        <p 
          className='text-2xl mt-5 text-gray-900'>
            <span 
              className='text-gray-700 uppercase'>Album:
            </span> {album}
        </p>
      ):null}
      {cancion.autor ? (
        <p 
          className='text-2xl mt-5 text-gray-900'>
            <span 
              className='text-gray-700 uppercase'>Autor:
            </span> {autor}
        </p>
      ):null}
    </div>
  </>
  )
}

export default VerCancion