import React from 'react'
import { CursoPage, PerfilPage, PrincipalPage, ReportesPage, TableroPage } from '../pages'
import { HomePage } from '../pages/admin'
import { Route, Routes } from 'react-router-dom'
import { Nav, Navbar } from '../../ui'


export const AdminRoutes = () => {
  return (
   <>
   
      <Routes>
        <Route path='homePage' element={<HomePage />} />
      </Routes>
   </>
  )
}
