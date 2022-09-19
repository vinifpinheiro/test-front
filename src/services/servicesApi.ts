import axios from "axios"
import {IResults} from "../interfaces/IDataResults"

export const api = axios.create({
     baseURL: 'https://demo8933322.mockable.io'
})
 export const getData = async () => {
    return api.get<IResults>('/apiFake')
}