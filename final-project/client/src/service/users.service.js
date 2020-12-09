import axios from 'axios'

export default class allUsersService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/users',
            withCredentials: true
        })
    }

    getUsers = () => this.apiHandler.get('/getAllUsers')
    getUser = userId => this.apiHandler.get(`/getOneUser/${userId}`)   

}