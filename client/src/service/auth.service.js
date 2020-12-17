import axios from 'axios'

export default class AuthService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
    }

    signup = (username, password, name, birthday, country, city) => this.apiHandler.post('/auth/signup', {username, password, name, birthday, country, city})
    login = (username, password) => this.apiHandler.post('/auth/login', {username, password})
    logout = () => this.apiHandler.post('/auth/logout')
    isLoggedIn = () => this.apiHandler.get('/auth/loggedin')
}