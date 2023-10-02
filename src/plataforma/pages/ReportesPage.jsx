import React, { useEffect } from 'react'
import '../../ui/components/App.css'
import { Nav } from '../../ui'
import { useAuthStore } from '../../hook';

export const ReportesPage = () => {
  const { user } = useAuthStore();
  useEffect(() => {
    user.isAdmin
  },)
  return (
    <>
      <Nav />
      <div className='p-top-57'>reportesPage</div>
    </>
  )
}
