import React from 'react'
import './App.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faPuzzlePiece, faSquarePollVertical, faStar } from '@fortawesome/free-solid-svg-icons'


//<FontAwesomeIcon icon={faPuzzlePiece} size="xl" style={{color: "#a3a3a3",}} />

export const Nav = () => {


    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        })
    }

    return (
        <>
            <nav>
                <div className='logo'>
                    <Link className='imagen'
                        to={'/tablero'}>
                        <img src={`/assets/tierra-y-armonia-logo-blanco-33e867d8.svg`} alt="" />
                    </Link>
                    <div className="search">
                        <img src={`/assets/search.svg`} alt="" />
                        <input type="search" placeholder='Buscar en TyA' />
                    </div>
                    <div className='options'>
                        <Link
                            className='options-icon-svg '
                            to={'/PrincipalPage'}>
                            <FontAwesomeIcon icon={faHouse} size="xl" style={{ color: "#a3a3a3", }} />
                        </Link>
                        <Link
                            className='options-icon-svg'
                            to={'/Reportes'}>
                            <FontAwesomeIcon icon={faStar} size="xl" style={{ color: "#a3a3a3", }} />
                        </Link>

                        <Link
                            className='options-icon-svg '
                            to={'/CursoPage'}>
                            <FontAwesomeIcon icon={faPuzzlePiece} size="xl" style={{ color: "#a3a3a3", }} />
                        </Link>

                    </div>
                    <div className='options-two'>
                        <div className="profile">
                            <img src="" alt="" />
                            <p> Kevin Gonzalez</p>
                        </div>

                        <button className='nav-item nav-link btn'
                            onClick={onLogout}>
                            logout
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
