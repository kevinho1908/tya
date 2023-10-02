import React, { useEffect } from 'react'
import { PerfilCard } from '../components/PerfilCard'
import { Nav } from '../../ui'
import { useParams } from 'react-router-dom';
import { useAuthStore } from '../../hook';

export const PerfilPage = () => {
const { user } = useAuthStore();    
    useEffect(() => {
      user.isAdmin
    },)
    return (
        <>
            <Nav />
            <PerfilCard />
        </>
    )
}
