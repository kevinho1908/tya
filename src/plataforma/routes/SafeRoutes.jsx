import React from 'react'
import { PrincipalPage, TableroPage } from '../pages'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'


export const SafeRoutes = () => {
  return (
    <>
    <Navbar />
    <div className="container">
        <Routes>
            <Route path='PrincipalPage' element={<PrincipalPage />} />    
            <Route path='/' element={<PrincipalPage />} />    
            <Route path='tablero' element={ <TableroPage /> }/>
        </Routes>
    </div>
</>
  )
}
