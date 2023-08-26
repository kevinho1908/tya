import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth'
import { SafeRoutes } from '../plataforma'



export const AppRouter = () => {

    const authStatus = 'not-authenticated';

    return (
        <>
            <Routes>    
                {
                    (authStatus === 'not-authenticated')
                    ? <Route path='/auth/*' element={<LoginPage/>}/>  
                    : <Route path='/*' element={<SafeRoutes/>}/>    
                }               
                <Route path='/*' element={ <Navigate to='/auth/login'/>} />
            </Routes>
        </>
    )
}
