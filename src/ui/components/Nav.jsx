import React from 'react'
import './App.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faPuzzlePiece, faRightFromBracket, faSquarePollVertical, faStar } from '@fortawesome/free-solid-svg-icons'


//<FontAwesomeIcon icon={faPuzzlePiece} size="xl" style={{color: "#a3a3a3",}} />

export const Nav = () => {


    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/logout', {
            replace: true
        })
    }

    return (
        <>
            <nav className='animate__animated animate__backInLeft'>
                <div className='logo'>
                    <Link className='imagen'
                        to={'/principalPage'}>
                        <img src={`/assets/tierra-y-armonia-logo-blanco-33e867d8.svg`} alt="" />
                    </Link>
                    <div className="search">
                        <img src={`/assets/search.svg`} alt="" />
                        <input type="search" placeholder='Buscar en TyA' />
                    </div>
                    <div className='options'>
                        <Link
                            className='options-icon-svg '
                            to={'/principalPage'}>
                            <FontAwesomeIcon icon={faHouse} size="xl" style={{ color: "#fff", }} />
                        </Link>
                        <Link
                            className='options-icon-svg'
                            to={'/reportesPage'}>
                            <FontAwesomeIcon icon={faStar} size="xl" style={{ color: "#fff", }} />
                        </Link>

                        <Link
                            className='options-icon-svg '
                            to={'/cursoPage'}>
                            <FontAwesomeIcon icon={faPuzzlePiece} size="xl" style={{ color: "#fff", }}/>
                        </Link>

                    </div>
                    <div className='options-two'>
                        <div className="profile">
                            <Link
                            className='profile'
                            to={'/perfilPage'}>
                            <img src="" alt="" />
                            <p> Kevin Gonzalez</p>
                            </Link>
                        </div>

                        <button className='nav-item nav-link btn '
                            onClick={onLogout}>
                            <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#ffffff",}} />
                        </button>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}
