
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore, useForm } from '../../../hook'
import { detenerConteo, iniciarConteo } from '../../../helpers' 
import io from 'socket.io-client';

const loginFormFields = {
  titleCourse: '',
  descrCourse: '',
}
//const socket = io('http://localhost:8000');

export const MainContent = () => {
  
  //-----------------------------------------------------------------------------------------//
  const menuBar = document.querySelector('.content .navbar-content .bx.bx-menu')
  const sideBar = document.querySelector('.sidebar')

  const { titleCourse, descrCourse, imgCourse, onInputChange: onCourseInputChange } = useForm(loginFormFields)
  // const { startLogout, user} = useAuthStore();
  const { user } = useAuthStore();
  const handleFunction = () => {
    console.log("works!!!")
    sideBar.classList.toggle('close')
  }



  const [userCount, setUserCount] = useState(0);

  // useEffect(() => {
  //   socket.on('userCount', (count) => {
  //     setUserCount(count);
  //   });

  //   return () => {
  //     socket.disconnect(); // Desconecta el socket al desmontar el componente
  //   };
  // }, []);
 
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
        <input type="checkbox" id="theme-toggle" hidden/>
        <label htmlFor="theme-toggle" className="theme-toggle"></label>
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
