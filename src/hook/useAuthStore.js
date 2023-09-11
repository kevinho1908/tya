import { useDispatch, useSelector } from "react-redux"
import SafePageApi from "../api/SafePageApi"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store"
import { detenerConteo, iniciarConteo } from "../helpers";


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ username, password }) => {
        dispatch ( onChecking() )
        iniciarConteo()
        try {
            const {data} = await SafePageApi.post('/auth', { username , password });
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime() );
            sessionStorage.setItem('token', data.token)
            dispatch( onLogin({username: data.VAD.username , name : data.VAD.name, isAdmin: data.grupo }))
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() =>{
                dispatch( clearErrorMessage() )
            }, 3000);
        }
    }

    const checkAuthToken = async() =>{
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );

        try {
            const { data } = await SafePageApi.get('auth/renew');
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }


    return {
        //propiedades
        status, 
        user, 
        errorMessage,

        //metodos
        checkAuthToken,
        startLogin,
        startLogout
    }

}


