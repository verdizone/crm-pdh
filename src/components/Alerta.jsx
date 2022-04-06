import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center 
              uppercase font-bold text-sm p-3 my-5 rounded-md shadow-md">
        <p>{children}</p>
    </div>
  )
}

export default Alerta