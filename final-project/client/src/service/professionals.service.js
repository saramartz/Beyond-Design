import axios from 'axios'

export default class ProfessionalsService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
    }

    getUsers = () => this.apiHandler.get('/users/getAllUsers')
    getUser = userId => this.apiHandler.get(`/users/getOneUser/${userId}`) 
}