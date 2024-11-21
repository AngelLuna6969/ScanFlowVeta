import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Personas from '../screnns/personas'
import { Menu } from '../components'
import {Informes, Mobiliario, Usuarios, Login} from '../screnns'
import { Ubicaciones } from '../screnns/Ubicaciones'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Personas />} />
        {/* Aqui las demas rutas */}
        <Route path='/menu' element={<Menu />} />
        <Route path='/usuarios' element={<Usuarios/>} />
        <Route path='/ubicaciones' element={<Ubicaciones/>} />
        <Route path='/mobiliario' element={<Mobiliario/>} />
        <Route path='/informes' element={<Informes/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}
