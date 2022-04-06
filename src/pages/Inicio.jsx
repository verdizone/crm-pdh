import Cancion from '../components/Cancion';
import { useState, useEffect } from 'react'


const Inicio = () => {
    const [canciones, setCanciones] = useState([])

    useEffect(()=>{
      const consultarCancionesAPI = async () =>{
        try {
          const url = "http://localhost:4000/canciones"
          const respuesta = await fetch(url)
          const resultado  = await respuesta.json()
          setCanciones(resultado);
        } catch (error) {
          console.log(error);
        }
      }
      consultarCancionesAPI()
    }, [])

    return (
      <div>
        <h1 className='text-3xl font-bold text-stone-300 shadow-md px-10 pt-14'>Canciones</h1>
        <p className='px-10 pt-10 pb-10'>Administra tus canciones.</p>

        <div className='md: w-5/6 m-auto' >

            <table className="bg-white block w-full table-auto mb-10 border-2 ">
                <thead className="bg-amber-800 text-white font-bold capitalize">
                    <tr >
                        <td className="p-2">Canción</td>
                        <td className="p-2">Fecha de creación</td>
                        <td className="p-2">Album</td>
                        <td className="p-2">Autor</td>
                        <td className="p-2">Acciones</td>
                    </tr>
                </thead>
                <tbody>
                  {canciones.map((cancion)=>(
                    <Cancion 
                      key={cancion.id}
                      cancion={cancion}
                    />
                  ))}
                  
                </tbody>
            </table>
        
        </div>

      </div>
    )
}

export default Inicio