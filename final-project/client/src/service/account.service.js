import axios from 'axios'

export default class AccountService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/account',
            withCredentials: true
        })
    }

    getUser = userId => this.apiHandler.get(`/${userId}`)     
    editUser = (userId, userInfo) => this.apiHandler.put(`/editUser/${userId}`, userInfo)
    deleteUser = userId => this.apiHandler.delete(`/deleteUser/${userId}`)
}