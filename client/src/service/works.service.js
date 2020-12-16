import axios from 'axios'

export default class WorkService {

    constructor() {
        this.apiHandler = axios.create({            
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
    }

    getWorks = () => this.apiHandler.get('/works/getAllWorks')
    getWork = workId => this.apiHandler.get(`/works/getOneWork/${workId}`)    
    saveWork = workInfo => this.apiHandler.post(`/works/newWork`, workInfo)
    editWork = (workId, workInfo) => this.apiHandler.put(`/works/editWork/${workId}`, workInfo)
    deleteWork = workId => this.apiHandler.delete(`/works/deleteWork/${workId}`)
}



