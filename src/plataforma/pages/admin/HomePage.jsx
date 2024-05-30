import { Code } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { MainContent, Siderbar } from '../../../ui/components'
import { useParams } from 'react-router-dom'
import { useAuthStore } from '../../../hook'
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8000');

export const HomePage = () => {

  const [connectedUsers, setConnectedUsers] = useState(0);

  useEffect(() => {
    socket.on('updateUsers', (users) => {
      setConnectedUsers(users);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      {/* Incia Sidebar */}
      <Siderbar />
      {/* Fin sidebar */}

      {/* main content */}
      <MainContent />
      {/* termina main content */}

      <div className="content">
      <main>
        <div className='header'>
          <div className="lef">
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
              
            </ul>
            <h1>Usuarios Conectados: {connectedUsers}</h1>
          </div>
        </div>
      </main>
      </div>
    </div>
  )
}
