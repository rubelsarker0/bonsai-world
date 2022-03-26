import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCannabis, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';
import Items from '../Items/Items';

const Cart = ({ cartItems }) => {
	let totalAmount = cartItems.reduce(
		(previous, current) => previous + current.price,
		0
	);

	return (
		<div className="col">
			<div className="card item-cart border-primary border-bottom border-top border-start-0 border-end-0 border-3 h-100 mb-2">
				<div className="card-body">
					<p className="text-center">
						<FontAwesomeIcon
							icon={faCannabis}
							className="generic-color fs-3 fa-lg"
						/>
						<span className="ms-2 fw-bold fs-5">
							Total Items: {cartItems.length}
						</span>
					</p>
					<p className="text-center">
						<FontAwesomeIcon
							icon={faDollarSign}
							className="generic-color fa-lg fs-3"
						/>
						<span className="fw-bold fs-4"> {totalAmount}</span>
					</p>

					<hr />
					{cartItems.map((items) => (
						<Items items={items}></Items>
					))}
				</div>
				<div className="card-footer text-center d-flex justify-content-center">
					<button className="btn btn-success add-to-cart text-uppercase me-1">
						Choose 1
					</button>
					<button className="btn btn-success add-to-cart text-uppercase">
						choose again
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
