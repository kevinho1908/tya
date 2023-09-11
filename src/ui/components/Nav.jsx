import React, { useEffect } from 'react'
import './App.css'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faPuzzlePiece, faRightFromBracket, faSquarePollVertical, faStar } from '@fortawesome/free-solid-svg-icons'
import { useAuthStore } from '../../hook/useAuthStore';


//<FontAwesomeIcon icon={faPuzzlePiece} size="xl" style={{color: "#a3a3a3",}} />

export const Nav = () => {

    const { startLogout, user} = useAuthStore();

    useEffect(() => {
        user.isAdmin
    }, )
    

    return (
        <>
            <nav >
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
                            <p>{user.username}</p>
                            </Link>
                        </div>

                        <button className='nav-item nav-link btn '
                            onClick={ startLogout }>
                            <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#ffffff",}} />
                        </button>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}
