import axios from "axios";
import { getEnvVariables } from "../helpers";
import SafePageApi from "../api/SafePageApi";
const { VITE_API_URL } = getEnvVariables()

export const getCursos = async() => {
    console.log('hola')
    const {data} = await SafePageApi.get('/course/curso'); 
    console.log(data)
    return data
}