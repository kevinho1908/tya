import React, { useEffect, useState } from 'react'
import '../../ui/components/App.css';
import { useForm } from '../../hook/useForm'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const baseURL = "http://localhost:8000/login"

export const Login = () => {

    const navigate = useNavigate();
    const [post, setPost] = useState(null);    
    useEffect(() => {
        axios.post(`${baseURL}`).then((response) => {
            setPost(response.data);            
            
        });
    }, []);
    const onLogin = (event) => {
        event.preventDefault();
        let user = document.getElementById("usuario").value;
        let pass = document.getElementById("contrasena").value;;
        
        axios.post(baseURL, {
            username: user+'@tierrayarmonia.local',
            password: pass,
        })
        .then((response) => {
            const {data }= response;
            const {ok} =data;
            if(ok === true){
                setPost(response.data); 
                navigate('/PrincipalPage' ,{
                    replace: true,
                })
                console.log('response = '+response.data)
            }
            console.log(ok) 
                     
            });
    }
    if (!post) return "No mandamos nada !"

    return (

        <div className="login-container">
            <form action="" className='login-form'>
                <div className=''>
                    <input
                        type="email"
                        placeholder="Nombre de Usuario"
                        id='usuario'
                        
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        id='contrasena'
                    />
                    <button
                        className='btn btn-primary'
                        onClick={ onLogin }
                    >
                        Login
                    </button>
                    <hr />
                </div>
            </form>
        </div>
    )
}
