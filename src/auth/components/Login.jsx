import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../../ui/components/App.css';
import axios from 'axios';
import { useAuthStore, useForm } from '../../hook';
import Swal from 'sweetalert2';

// const baseURL = "http://localhost:8000/login"

const loginFormFields = {
    loginUsername: '',
    loginPassword: '',
}

export const Login = () => {
    const { startLogin, errorMessage } = useAuthStore();
    const { loginUsername, loginPassword, onInputChange:onLoginInputChange } = useForm( loginFormFields )

    const loginSubmit = ( event ) => {
        event.preventDefault();
        if( loginUsername === '' || loginPassword === ''){
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }else{
            startLogin( { username: loginUsername, password: loginPassword });
        }
    }

    useEffect(() => {
        if ( errorMessage !== undefined ) {
          Swal.fire('Error en la autenticación', errorMessage, 'error');
        }    
      }, [errorMessage])
      
  
  
//     const navigate = useNavigate();

//     const [post, setPost] = useState(null);
//     const [username,setUsername] = useState({
//         username:'',
//     });
//     const [password , setPassword] = useState({
//         password:'',
//     });

//     const onLogin = (event) => {
//         event.preventDefault();
  
//         axios.post(baseURL, {
//             username: username,
//             password: password,
//         })
//         .then((response) => {
//             const { data }= response;
//             const { ok } = data;
//             const { grupo } = data
//             const { VAD } = data;
//             if(ok === true){
//                 setPost(response.data); 
//                 console.log( VAD );
//                 console.log(ok) 
//                 console.log( 'valor de grupo = '+ grupo )                                                                               
//                 return (grupo === true) ? navigate(`/homePage/${username}` ,{
//                     replace: true,                
//                     value: grupo,
                    
//                 }) :navigate(`/principalPage/${username}` ,{
//                     replace: true,                  
//                 })     
//             }else{
//                 console.log(ok) 
//                 setPost(response.data);             
//                 alert('valores incorrectos')
//             }            
//             });                        
// }
        



    return (
        <div className="login-container animate__animated animate__fadeInLeft">
            <form action="" className='login-form' onSubmit={ loginSubmit}>
                <div className=''>
                    <input
                        type="text"
                        placeholder="Nombre de Usuario" 
                        name='loginUsername'      
                        value={ loginUsername }  
                        onChange={ onLoginInputChange }                                                  
                        // onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"   
                        name='loginPassword'      
                        value={ loginPassword }  
                        onChange={ onLoginInputChange }                                                  
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className='btn btn-primary'                       
                    >
                        Login                                    
                    </button>
                    <hr />
                </div>
            </form>
        </div>
    )
}
