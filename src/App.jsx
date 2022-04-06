import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './pages/Inicio';
import IngresarCancion from './pages/IngresarCancion'
import EditarCancion from './pages/EditarCancion'
import VerCancion from './components/VerCancion';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/canciones' element={<Layout />}>
            <Route index element={<Inicio />}/>
            <Route path='ingresar' element={<IngresarCancion />}/>
            <Route path='editar/:id' element={<EditarCancion />}/>
            <Route path=':id' element={<VerCancion />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App