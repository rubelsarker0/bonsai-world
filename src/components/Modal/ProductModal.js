import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ProductModal = ({ showModal, handleClose }) => {
	return (
		<>
			<Modal
				show={showModal}
				onHide={handleClose}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Body className="p-5">
					<div className="text-center mb-5">
						<FontAwesomeIcon
							icon={faXmark}
							className="text-danger fa-lg fs-1 rounded-circle border border-3 border-danger"
							style={{ width: '100px', height: '100px' }}
						/>
						<h1 className="pt-3 pb-2">Oops...!!</h1>
						<h5>Can't select more then 4!!!</h5>
					</div>
					<div className="d-flex align-items-center justify-content-center">
						<Button
							className="text-uppercase bg-danger border-0"
							onClick={handleClose}
						>
							Close
						</Button>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ProductModal;
