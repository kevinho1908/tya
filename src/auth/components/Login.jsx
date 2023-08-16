import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../../ui/components/App.css';
import { useForm } from '../../hook/useForm'
import axios from 'axios';

const baseURL = "http://localhost:8000/login"


export const Login = () => {

    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [username,setUsername] = useState({
        username:'',
    });
    const [password , setPassword] = useState({
        username:'',
    });

    const onLogin = (event) => {
        event.preventDefault();
  
        axios.post(baseURL, {
            username: username,
            password: password,
        })
        .then((response) => {
            const { data }= response;
            const { ok } = data;
            const { grupo } = data
            if(ok === true){
                setPost(response.data); 
             
                console.log(ok) 
                console.log( 'valor de grupo = '+ grupo )                                                                               
                return (grupo === true) ?  navigate('/homePage' ,{
                    replace: true,                
                    value: grupo,
                    
                }) :navigate('/principalPage' ,{
                    replace: true,
                  
                })     
            }else{
                console.log(ok) 
                setPost(response.data);             
                alert('valores incorrectos')
            }            
            });                        
}
        

console.log(JSON.stringify({username, password}))

    return (
        <div className="login-container animate__animated animate__fadeInLeft">
            <form action="" className='login-form'>
                <div className=''>
                    <input
                        type="text"
                        placeholder="Nombre de Usuario"                                                           
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"    
                                           
                        onChange={(e) => setPassword(e.target.value)}
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
