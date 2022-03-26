import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Bonsai.css';

const Bonsai = ({ bonsai, addToCartHandler }) => {
	const { bonsaiImg, bonsaiName, bonsaiDesc, price } = bonsai;

	return (
		<div className="col">
			<div className="card border-success border-bottom border-3 border-0 h-100 mb-2">
				<img
					src={bonsaiImg}
					className="img-fluid rounded "
					alt="bonsai-images"
				/>
				<div className="card-body">
					<div className="d-flex justify-content-between">
						<h4 className="card-title">{bonsaiName}</h4>
						<h4 className="">{`$${price}`}</h4>
					</div>
					<div className="card-description">
						<p className="text-align-justify">{bonsaiDesc.slice(0, 120)}</p>
					</div>
				</div>
				<div className="card-footer text-center">
					<button
						className="btn btn-success add-to-cart mx-auto"
						onClick={() => addToCartHandler(bonsai)}
					>
						<FontAwesomeIcon icon={faShoppingCart} />
						<span className="ms-2">ADD TO CART</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Bonsai;
