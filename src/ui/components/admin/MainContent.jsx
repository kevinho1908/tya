import React from 'react'
import { Link } from 'react-router-dom'

export const MainContent = () => {
    return (
        <div className='content'>
            <div className='navbar-content'>
                <i className='bx bx-menu'></i>
                <form action="">
                    <div className="form-input">
                        <input type="search" placeholder='Search...' />
                        <button className='search-btn' type='submit'>
                            <i className='bx bx-search' ></i>
                        </button>
                    </div>
                </form>
                <input type="checkbox" id="theme-toggle" hidden />
                <label htmlFor="theme-toggle"
                    className='theme-toggle'></label>
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
