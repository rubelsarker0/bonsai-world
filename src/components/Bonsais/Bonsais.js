import React, { useEffect, useState } from 'react';
import Bonsai from '../Bonsai/Bonsai';
import Cart from '../Cart/Cart';
import ProductModal from '../Modal/ProductModal';
import RandomModal from '../RandomModal/RandomModal';
import './Bonsais.css';

const Bonsais = () => {
	const [bonsais, setBonsais] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [randomItems, setRandomItems] = useState({});
	const [randomModal, setRandomModal] = useState(false);
	const [isExists, setIsExists] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const getAllBonsai = async () => {
		try {
			const bonsaiUrl = `/bonsai.json`;
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
		if (cartItems.length < 4) {
			const findExistsItem = cartItems.find(
				(existsItem) => existsItem.id === newBonsai.id
			);
			if (!findExistsItem) {
				setCartItems([...cartItems, newBonsai]);
				setIsExists(false);
			} else {
				setIsExists(true);
			}
		} else {
			setShowModal(true);
		}
	};

	const handleClose = () => {
		setShowModal(false);
		setRandomModal(false);
	};

	const handleChooseOne = () => {
		if (cartItems.length > 1) {
			const randomProduct =
				cartItems[Math.floor(Math.random() * cartItems.length)];
			setRandomItems(randomProduct);
			setRandomModal(true);
		}
	};

	const handleChooseAgain = () => {
		if (cartItems.length >= 1) {
			setCartItems([]);
		}
	};

	const deleteSingleCartItem = (id) => {
		const newItems = cartItems.filter((item) => item.id !== id);
		setCartItems(newItems);
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
					<Cart
						cartItems={cartItems}
						isExists={isExists}
						handleChooseOne={handleChooseOne}
						handleChooseAgain={handleChooseAgain}
						deleteSingleCartItem={deleteSingleCartItem}
					></Cart>
				</div>
			</div>
			<ProductModal
				showModal={showModal}
				handleClose={handleClose}
			></ProductModal>
			<RandomModal
				randomItems={randomItems}
				randomModal={randomModal}
				handleClose={handleClose}
			></RandomModal>
		</div>
	);
};

export default Bonsais;
