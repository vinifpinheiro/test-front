import axios from "axios"
import {IDataResults} from "../interfaces/IDataResults"

export const api = axios.create({
     baseURL: 'https://demo8933322.mockable.io'
})
 export const getData = async () => {
    return api.get<IDataResults>('/api')
}