import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables()

//console.log(VITE_API_URL)
const SafePageApi  = axios.create({
    baseURL: VITE_API_URL
});

//TODO: Configurar interceptores.

SafePageApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})


export default SafePageApi;