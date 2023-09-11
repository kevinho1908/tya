import React, { useEffect } from 'react'
import '../../ui/components/App.css';
import { CursoCard } from '../components/CursoCard'
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { Nav } from '../../ui';
import { useAuthStore } from '../../hook';

const TableroPageName = styled.h1`
    text-align: center;
    padding-top: 57px;
`;

export const PrincipalPage = () => {
  const { user } = useAuthStore();
  useEffect(() => {
    user.isAdmin
  },)

  return (
    <>
      <Nav />
      <TableroPageName>¡Bienvenido de vuelta, TyA! </TableroPageName>
      <hr />
      <div className='contedor-tablero-1'>
        <h4> Plataforma de aprendizaje sobre Seguridad Informática</h4>
        <p>Aprende a detectar y protegerte de las principales amenazas de Seguridad Informática.</p>
      </div>
      <hr />
      <b><h5> Temas principales </h5></b>
      <hr />
      <main className='flex-main'>
        <div className="flex-nav">
          SIDENAV
        </div>
        <div className="flex-article">
          <CursoCard></CursoCard>
        </div>
        <div className="flex-aside">
          sidebar
        </div>
      </main>

      <div className="flex-footer">
        Tierra y Armonia
      </div>
    </>
  )
}
