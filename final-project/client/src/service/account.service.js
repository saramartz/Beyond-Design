import axios from 'axios'

export default class AccountService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
    }

    getUser = userId => this.apiHandler.get(`/account/${userId}`)     
    editUser = (userId, userInfo) => this.apiHandler.put(`/account/editUser/${userId}`, userInfo)
    deleteUser = userId => this.apiHandler.delete(`/account/deleteUser/${userId}`)
}