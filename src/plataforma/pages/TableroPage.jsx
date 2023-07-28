import React from 'react'
import {  Slider } from '../components'
import { styled } from 'styled-components'

const TableroPageName = styled.h1`
    text-align: center;
`;

export const TableroPage = () => {
  return (
    <>
    
        <TableroPageName>¡Bienvenido de vuelta, TyA!</TableroPageName>
        <hr />

        <div className='contedor-tablero-1'>
            <h4> Plataforma de aprendizaje sobre Seguridad Informática</h4>
              <p>Aprende a detectar y protegerte de las principales amenazas de Seguridad Informática.</p>
        </div>
        <hr />
        <h5> Temas principales </h5>
        

        
    </>
  )
}
