import React, { useEffect } from 'react'
import { CursoPage, PerfilPage, PrincipalPage, ReportesPage, TableroPage } from '../pages'
import { HomePage } from '../pages/admin'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Nav, Navbar } from '../../ui'
import { useAuthStore } from '../../hook'



export const SafeRoutes = () => {
  const { user } = useAuthStore();
  useEffect(() => {
    user.isAdmin
  },)
  
  console.log(user.isAdmin)
  return (


    <Routes>{


      (user.isAdmin) ?
        (
          <>
            <Route path="*" element={<HomePage />} />
            <Route path="/*" element={<Navigate to="/" />} />
            <Route path='homePage' element={<HomePage />} />

          </>
        )
        :
        (
          <>
            <Route path='principalPage' element={<PrincipalPage />} />
            <Route path='*' element={<PrincipalPage />} />
            <Route path='tableroPage' element={<TableroPage />} />
            <Route path='perfilPage' element={<PerfilPage />} />
            <Route path='cursoPage' element={<CursoPage />} />
            <Route path='reportesPage' element={<ReportesPage />} />

          </>
        )
    }

    </Routes>


  )
}
