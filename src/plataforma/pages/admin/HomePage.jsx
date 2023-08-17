import { Code } from '@mui/icons-material'
import React from 'react'
import { MainContent, Siderbar } from '../../../ui/components'
import { useParams } from 'react-router-dom'


export const HomePage = (  ) => {
    
    const { username } = useParams(); 
    console.log(username)

  return (
    <div>
      {/* Incia Sidebar */}
      <Siderbar />
      {/* Fin sidebar */}
 
      {/* main content */}
      <MainContent/>
      {/* termina main content */}
    </div>
  )
}
