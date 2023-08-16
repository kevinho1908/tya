import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';



export const Siderbar = () => {
    return (
        <>
            <div className='sidebar'>
                <Link to={''} className='logo td-none'>
                    <i className='bx bx-code-alt'></i>
                    <div className="logo-name"><span> TyA </span> Admin </div>
                </Link>
                <ul className='side-menu'>
                    <li className='active '> <Link to={''} className='td-none'>  <i className='bx bxs-dashboard ' ></i> Dashboard</Link></li>
                    <li> <Link to={''}  className='td-none'>  <i className='bx bx-message-square-add' > </i> Add</Link></li>
                    <li> <Link to={''}  className='td-none'>  <i className='bx bx-analyse' ></i> Reportes</Link> </li>
                    <li> <Link to={''}  className='td-none'>  <i className='bx bx-message-square-dots' ></i> Mensajes</Link></li>
                    <li> <Link to={''}  className='td-none'>  <i className='bx bx-group' > </i> Usuarios</Link></li>
                    <li> <Link to={''}  className='td-none'>  <i className='bx bx-cog' > </i> Configuracion</Link></li>
                </ul>
                <ul className='side-menu'>
                    <li>
                        <Link to={'/logout'} className='logout td-none'><i className='bx bx-log-out-circle' ></i> Logout</Link>
                    </li>
                </ul>

            </div>
        </>
    )
}
