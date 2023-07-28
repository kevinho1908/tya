import React from 'react'

import '../../ui/components/App.css';
import { CursoCard } from '../components/CursoCard'


export const PrincipalPage = () => {
  return (
    <>
        <main className='flex-main'>
         <div className="flex-nav">
            SIDENAV
         </div>
         <div className="flex-article">
          <CursoCard></CursoCard>
         </div>
         <div className="flex-aside">
          sidebar
         </div>
        </main>

        <div className="flex-footer">
          Tierra y Armonia
        </div>
    </>
  )
}
