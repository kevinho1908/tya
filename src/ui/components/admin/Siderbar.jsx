import React from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useAuthStore } from '../../../hook';



export const Siderbar = () => {
    const { startLogout, user} = useAuthStore();
    const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

    sideLinks.forEach(item => {
        const li = item.parentElement;
        item.addEventListener('click', () => {
            sideLinks.forEach(i => {
                i.parentElement.classList.remove('active');
            })
            li.classList.add('active');
        })
        
    });
    const handleFunction = () => {
        console.log("works!!!")

    }

    return (
        <>
            <div className='sidebar'>
                <Link to={''} className='logo td-none'>
                    <i className='bx bx-code-alt' onClick={handleFunction}></i>
                    <div className="logo-name"><span> TyA </span> Admin </div>
                    
                </Link>
                <p className=" logo td-none " > {user.username}</p>
                <ul className='side-menu'>
                    <li className='active '> <Link to={'/dashboard'} className='td-none'>  <i className='bx bxs-dashboard ' ></i> Dashboard</Link></li>
                    <li> <Link to={'/add'} className='td-none'>  <i className='bx bx-message-square-add' > </i> Add</Link></li>
                    <li> <Link to={'/reportes'} className='td-none'>  <i className='bx bx-analyse' ></i> Reportes</Link> </li>
                    <li> <Link to={'/mensajes'} className='td-none'>  <i className='bx bx-message-square-dots' ></i> Mensajes</Link></li>
                    <li> <Link to={'/usuarios'} className='td-none'>  <i className='bx bx-group' > </i> Usuarios</Link></li>
                    <li> <Link to={'/configuracion'} className='td-none'>  <i className='bx bx-cog' > </i> Configuracion</Link></li>
                </ul>
                <ul className='side-menu'>
                    <li>
                        <Link className='logout td-none' onClick={startLogout}><i className='bx bx-log-out-circle' ></i> Logout</Link>
                    </li>
                </ul>

            </div>
        </>
    )
}
