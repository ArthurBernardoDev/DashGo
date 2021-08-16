import axios from 'axios'

export const api = axios.create({
    baseURL: "htttp://localhost:3000/api"
})