import axios from 'axios'

export default class BoardService {

    constructor() {
        this.apiHandler = axios.create({            
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
    }

    getBoards = () => this.apiHandler.get('/boards/getAllBoards')
    getBoard = boardId => this.apiHandler.get(`/boards/getOneBoard/${boardId}`)    
    createBoard = boardInfo => this.apiHandler.post(`/boards/newBoard`, boardInfo)
    editBoard = (boardId, boardInfo) => this.apiHandler.put(`/boards/editBoard/${boardId}`, boardInfo)
    deleteBoard = boardId => this.apiHandler.delete(`/boards/deleteBoard/${boardId}`)
}