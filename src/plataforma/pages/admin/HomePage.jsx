import { Code } from '@mui/icons-material'
import React from 'react'
import { MainContent, Siderbar } from '../../../ui/components'


export const HomePage = ( {props} ) => {
    console.log('hola mundo ' + JSON.stringify(props))
    
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
