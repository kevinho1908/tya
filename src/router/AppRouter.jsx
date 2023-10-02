import { Routes, Route, Navigate } from 'react-router-dom'

import { LoginPage } from '../auth'
import { CursoPage, PerfilPage, PrincipalPage, ReportesPage, SafeRoutes, TableroPage } from '../plataforma'
import { useAuthStore } from '../hook';
import { useEffect, useState } from 'react';
import { AddCourse, HomePage } from '../plataforma/pages/admin';
import { UsersCourse } from '../plataforma/pages/admin/UsersCourse';
import { MensajesCourse } from '../plataforma/pages/admin/MensajesCourse';
import { ConfiguracionCourse } from '../plataforma/pages/admin/ConfiguracionCourse';
import { CursoEdit } from '../plataforma/pages/admin/CursoEdit';






export const AppRouter = () => {
  const { status, checkAuthToken, user } = useAuthStore();

  const [first, setfirst] = useState()

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === 'checking') {
    return (
      <h3>Cargando...</h3>
    )
  }


  return (
      <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <>
              <Route path="/auth/*" element={<LoginPage />} />
              <Route path="/*" element={<Navigate to="/auth/login" />} />
            </>
          ) : user.isAdmin ? (
            <>
              <Route path="dashboard" element={<HomePage />} />
              <Route path="*" element={<Navigate to="dashboard" />} />
              <Route path="/" element={<Navigate to="dashboard" />} />
              <Route path="add" element={<AddCourse />} />
              <Route path="reportes" element={<AddCourse />} />
              <Route path="mensajes" element={<MensajesCourse />} />
              <Route path="usuarios" element={<UsersCourse />} />
              <Route path="configuracion" element={<ConfiguracionCourse />} />
              <Route path='curso/:id' element={<CursoEdit />} />
            </>
          ) :  (
            <>
              <Route path="principalPage" element={<PrincipalPage />} />
              <Route path="tableroPage" element={<TableroPage />} />
              <Route path="perfilPage" element={<PerfilPage />} />
              <Route path="cursoPage" element={<CursoPage />} />
              <Route path="reportesPage" element={<ReportesPage />} />
              <Route path="/*" element={<PrincipalPage />} />
            </>
          )}
      </Routes>
    
  );
};