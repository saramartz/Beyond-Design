import axios from 'axios'

export default class WorkService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/works',
            withCredentials: true
        })
    }

    getWorks = () => this.apiHandler.get('/getAllWorks')
    getWork = workId => this.apiHandler.get(`/getOneWork/${workId}`)    
    saveWork = workInfo => this.apiHandler.post(`/newWork/`, workInfo)
}