import axios from 'axios'

export default class AuthService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
            withCredentials: true
        })
    }

    signup = (username, password) => this.apiHandler.post('/signup', {username, password})
    login = (username, password) => this.apiHandler.post('/login', {username, password})
    logout = () => this.apiHandler.post('/logout')
    isLoggedIn = () => this.apiHandler.get('/loggedin')
}