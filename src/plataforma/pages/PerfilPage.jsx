import React from 'react'
import { PerfilCard } from '../components/PerfilCard'
import { Nav } from '../../ui'
import { useParams } from 'react-router-dom';

export const PerfilPage = () => {
    const { username } = useParams();
    console.log(username)
    return (
        <>
            <Nav />
            <PerfilCard />
        </>
    )
}
