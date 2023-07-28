import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';



export const Siderbar = () => {
    return (
        <>
            <div className='sidebar'>
                <Link to={`/`}> Mas... </Link>
                <Link to={`/tablero`}> Mas... </Link>
            </div>
        </>
    )
}
