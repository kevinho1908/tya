import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { SafeRoutes } from '../plataforma'
import { HomePage } from '../plataforma/pages/admin'


export const AppRouter = () => {
    return (
        <>
            <Routes>             
                <Route path='/' element={<LoginPage/>}/>   
                <Route path='/*' element={<SafeRoutes/>}/>    
                <Route path='logout' element={<LoginPage />} />
                <Route path='homePage/:user' element={<HomePage />} />
            </Routes>
        </>
    )
}
