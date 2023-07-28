import { Link, NavLink, useNavigate } from 'react-router-dom';



export const Navbar = () => {

    //custom hook creado por los de react

    const navigate = useNavigate();

    const onLogout = () => {

        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link
                className="navbar-brand"
                to="/PrincipalPage"
            >
                Tierra y Armonia
            </Link>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                        to="/PrincipalPage"
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                        to="/tablero"
                    >
                        Mi aprendizaje
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        kevin
                    </span>
                    <button className='nav-item nav-link btn'
                        onClick={onLogout}>
                        logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}