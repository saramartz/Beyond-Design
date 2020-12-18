import { Modal } from 'react-bootstrap'

const PopupBoard = ({ show, title, handleModal, children }) => {
    return (
        <Modal size="md" show={show} onHide={() => handleModal(false)} className="modal-board-container" aria-labelledby="contained-modal-title-vcenter"
      centered >
            <Modal.Header closeButton className="modal-header mb-2" id="contained-modal-title-vcenter">
                <Modal.Title id="contained-modal-title-vcenter" className="col-12 text-center" >{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default PopupBoard
