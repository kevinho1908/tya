
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../../hook'

export const MainContent = () => {
    const menuBar = document.querySelector('.content .navbar-content .bx.bx-menu')
    const sideBar = document.querySelector('.sidebar')
    // const { startLogout, user} = useAuthStore();

    const handleFunction = () => {
        console.log("works!!!")
       sideBar.classList.toggle('close')
    }
 
    return (
        <div className='content'>
            <div className='navbar-content'>
                <i className='bx bx-menu' onClick={handleFunction}></i>
                <form action="">
                    <div className="form-input">
                        <input type="search" placeholder='Search...' />
                        <button className='search-btn' type='submit'>
                            <i className='bx bx-search' ></i>
                        </button>
                    </div>
                </form>
                <input type="checkbox" id="theme-toggle" />
                <label htmlFor="" className='theme-toggle'></label>
                <Link to={''} className='notif'>
                    <i className='bx bx-bell' ></i>
                    <span className="count">12</span>
                </Link>
                <Link to={''} className='perfil'>
                
                    <img src={`/assets/TyALogo.png`} alt="" />
                </Link>
            </div>
        </div>
    )
}
