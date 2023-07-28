import React from 'react'
import { CursoPage, PerfilPage, PrincipalPage, TableroPage } from '../pages'
import { Route, Routes } from 'react-router-dom'
import { Nav, Navbar } from '../../ui'



export const SafeRoutes = () => {
  return (
    <>
    <Nav />
    <div className="container">
        <Routes>
            <Route path='PrincipalPage' element={<PrincipalPage />} />    
            <Route path='/' element={<PrincipalPage />} />    
            <Route path='tablero' element={ <TableroPage /> }/>
            <Route path='Perfil' element={ <PerfilPage /> }/>
            <Route path='CursoPage' element={ <CursoPage/> } />
        </Routes>
    </div>
</>
  )
}
