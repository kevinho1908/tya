import React, { useState } from 'react'
import './login.css';
import { useNavigate } from 'react-router-dom';


export const Login = () => {


    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/', {
            replace: true
        })

    }

    return (

        <div className="login-container">
            <form action="" className='login-form'>
                <div className=''>
                    <input
                        type="email"
                        placeholder="Nombre de Usuario"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                    />
                    <button
                        className='btn btn-primary'
                        onClick={onLogin}
                    >
                        Login
                    </button>
                    <hr />
                </div>
            </form>
        </div>
    )
}
