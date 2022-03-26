import React, { useEffect, useState } from 'react';
import Bonsai from '../Bonsai/Bonsai';
import Cart from '../Cart/Cart';
import './Bonsais.css';

const Bonsais = () => {
	const [bonsais, setBonsais] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	const getAllBonsai = async () => {
		try {
			const bonsaiUrl = `./bonsai.json`;
			const response = await fetch(bonsaiUrl);
			const bonsaiData = await response.json();
			setBonsais(bonsaiData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllBonsai();
	}, []);

	const addToCartHandler = (newBonsai) => {
		setCartItems([...cartItems, newBonsai]);
	};

	return (
		<div className="container my-5">
			<div className="row text-black">
				<div className="col-md-9 col-sm-12 order-md-first order-lg-first">
					<div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
						{bonsais.map((bonsai) => (
							<Bonsai
								key={bonsai.id}
								bonsai={bonsai}
								addToCartHandler={addToCartHandler}
							></Bonsai>
						))}
					</div>
				</div>
				<div className="col-md-3 col-sm-12 order-first mb-2">
					<Cart cartItems={cartItems}></Cart>
				</div>
			</div>
		</div>
	);
};

export default Bonsais;
