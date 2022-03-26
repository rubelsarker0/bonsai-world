import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
	return (
		<Navbar expand="lg" className="bg-color mb-2">
			<Container>
				<Navbar.Brand href="#home">
					<img
						src={logo}
						width="250"
						className="d-inline-block align-top"
						alt="Bonsai World logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#home" className="fs-5 text-dark text-uppercase">
							Home
						</Nav.Link>
						<Nav.Link href="#bonsai" className="fs-5 text-dark text-uppercase">
							Bonsai
						</Nav.Link>
						<Nav.Link href="#gallery" className="fs-5 text-dark text-uppercase">
							Gallery
						</Nav.Link>
						<Nav.Link href="#contact" className="fs-5 text-dark text-uppercase">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
