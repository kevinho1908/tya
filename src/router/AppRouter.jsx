import { Routes, Route, Navigate } from 'react-router-dom'

import { LoginPage } from '../auth'
import { CursoPage, PerfilPage, PrincipalPage, ReportesPage, SafeRoutes, TableroPage } from '../plataforma'
import { useAuthStore } from '../hook';
import { useEffect, useState } from 'react';
import { HomePage } from '../plataforma/pages/admin';






export const AppRouter = () => {
    const { status, checkAuthToken, user } = useAuthStore();

    const [first, setfirst] = useState()

    useEffect(() => {
      checkAuthToken();
      user.isAdmin
    }, []);

    
    if ( status === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }

  
    return (
        <>
          
          {status === 'not-authenticated' ? (
            <Routes>
              <Route path="/auth/*" element={<LoginPage />} />
              <Route path="/*" element={<Navigate to="/auth/login" />} />
            </Routes>
          ) : user.isAdmin ? (
            <Routes>
              <Route path="homePage" element={<HomePage />} />
              <Route path="/*" element={<Navigate to="/homePage" />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="principalPage" element={<PrincipalPage />} />
              <Route path="tableroPage" element={<TableroPage />} />
              <Route path="perfilPage" element={<PerfilPage />} />
              <Route path="cursoPage" element={<CursoPage />} />
              <Route path="reportesPage" element={<ReportesPage />} />
              <Route path="/*" element={<PrincipalPage />} />
            </Routes>
          )}
        </>
      );
    };