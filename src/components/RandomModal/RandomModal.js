import React from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';

const RandomModal = ({ randomItems, randomModal, handleClose }) => {
	const { bonsaiImg, bonsaiName, bonsaiDesc, price } = randomItems;
	return (
		<Modal
			show={randomModal}
			onHide={handleClose}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Body>
				<Row lg={1} xs={1}>
					<Col className="col">
						<div className="row g-0">
							<div className="col-md-4">
								<img src={bonsaiImg} className="card-img" alt="" />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h3 className="card-title">{bonsaiName}</h3>
									<p className="card-text text-muted text-align-justify  ">
										{bonsaiDesc}
									</p>
									<h5 className="text-muted ">
										Price:
										<span className="text-danger ps-2">{`$${price}`}</span>
									</h5>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<div className="d-flex align-items-end justify-content-end">
					<Button
						className="text-uppercase bg-danger border-0"
						onClick={handleClose}
					>
						Close
					</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default RandomModal;
