import { Modal } from 'react-bootstrap'
import cancel from "./cancel.png"

const PopupDelete = ({ show, title, handleModal, children }) => {
    return (
        <Modal size="md" show={show} onHide={() => handleModal(false)} className="modal-delete-container" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className="modal-header" id="contained-modal-title-vcenter">
                <Modal.Title id="contained-modal-title-vcenter" className="col-12 text-center mt-4">
                    {title} 
                    <hr className="delete-hr mt-3"></hr>
                </Modal.Title>            
            </Modal.Header>
            <Modal.Body className="modal-body text-center">
                <img src={cancel} className="mb-2" style={{opacity: 0.7}}></img>
                <h5 className="mb-3">Are you sure ?</h5>
                <p>This action cannot be undone</p>
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default PopupDelete