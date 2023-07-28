import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { SafeRoutes } from '../plataforma'


export const AppRouter = () => {
    return (
        <>
            <Routes>         
                <Route path='login' element={<LoginPage/>}/>     
                <Route path='/*' element={<SafeRoutes/>}/>                  
            </Routes>
        </>
    )
}
