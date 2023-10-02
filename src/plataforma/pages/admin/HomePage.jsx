import { Code } from '@mui/icons-material'
import React from 'react'
import { MainContent, Siderbar } from '../../../ui/components'
import { useParams } from 'react-router-dom'
import { useAuthStore } from '../../../hook'


export const HomePage = () => {

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
          </div>
        </div>
      </main>
      </div>
    </div>
  )
}
