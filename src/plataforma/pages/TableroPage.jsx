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
        <Slider />
    </>
  )
}
