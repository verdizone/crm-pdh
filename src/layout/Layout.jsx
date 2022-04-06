import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
      <div className='md:flex md:min-h-screen'>
        <div className='md:w-2/6 bg-amber-800'>
          <h1 className='text-4xl text-white font-bold text-center pt-14 bg-amber-800 rounded-sm shadow-white'>CMR - PDH</h1>
          <nav className='m-5 pt-3 pb-12'>
            <Link
             /*  className='block w-full mt-5 text-white px-5 py-2 text-lg 
              font-semibold bg-amber-600 hover:text-2xl transition-all rounded-md'  */
              className='block w-full mt-5 text-white px-5 py-2 text-2xl 
              font-semibold hover:bg-amber-50 hover:text-3xl hover:text-amber-800 transition-all rounded-md'
              to="/">Inicio
            </Link>
            <Link
              className='block w-full mt-5 text-white px-5 py-2 text-2xl 
              font-semibold hover:bg-amber-50 hover:text-3xl hover:text-amber-800 transition-all rounded-md'
              to="/canciones/ingresar">Ingresar Canción
            </Link>
            <Link
              className='block w-full mt-5 text-white px-5 py-2 text-2xl 
              font-semibold hover:bg-amber-50 hover:text-3xl hover:text-amber-800 transition-all rounded-md'
              to="/canciones">Mostrar Canciones
            </Link>
          </nav>
        </div>
        <div className='md:w-4/6'>
          <Outlet />
        </div>
      </div>
  )
}

export default Layout