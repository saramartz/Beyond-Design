import { Modal } from 'react-bootstrap'

const Popup = ({ show, title, handleModal, children }) => {
    return (
        <Modal size="lg" show={show} onHide={() => handleModal(false)} className="modal-container" >
            <Modal.Header closeButton className="modal-header">
                <Modal.Title className="col-12 text-center" >{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default Popup