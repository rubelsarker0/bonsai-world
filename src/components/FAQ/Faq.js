import React from 'react';
import { Accordion, Col, Container, ListGroupItem, Row } from 'react-bootstrap';

const Faq = () => {
	return (
		<Container className="my-5">
			<Row>
				<Col lg={9} sm={9}>
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								<div className="text-uppercase fs-5">How react works</div>
							</Accordion.Header>
							<Accordion.Body>
								<li className="text-align-justify">
									React is a declarative, efficient, and flexible JavaScript
									library developed by Facebook for building user interfaces
									using virtual DOM (VDOM). ReactJS is an open-source,
									component-based front-end library responsible only for the
									view layer of the application.
								</li>
								<li className="text-align-justify">
									DOM (The Document Object Model (DOM) is an application
									programming interface (API) for HTML and XML documents. It
									defines the logical structure of documents and the way a
									document is accessed and manipulated.).However change anything
									in the DOM we need to re-render the entire webpage each time,
									which is time-consuming and very slow for the applications.
									React implements a virtual DOM that is basically a DOM tree
									representation in JavaScript. So when it needs to read or
									write to the DOM, it will use the virtual representation of
									it. Then the virtual DOM will try to find the most efficient
									way to update the browser’s DOM. Unlike browser DOM elements,
									React elements are plain objects and are cheap to create.
									React DOM takes care of updating the DOM to match the React
									elements. The reason for this is that JavaScript is very fast
									and it’s worth keeping a DOM tree in it to speed up its
									manipulation.
								</li>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<div className="text-uppercase fs-5">props vs state</div>
							</Accordion.Header>
							<Accordion.Body>
								<li className="text-align-justify">
									props and state are both plain JavaScript objects both hold
									information that influences the output of render.
								</li>
								<li className="text-align-justify">
									Props, make components reusable by giving components the
									ability to receive data from their parent component in the
									form of props. They are equivalent to function parameters.
									however, props are read-only we can not change or assign the
									value of the props.
								</li>
								<li className="text-align-justify">
									The state is the local state of the component which cannot be
									accessed and modified outside of the component. It's
									equivalent to local variables in a function.
								</li>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								<div className="text-uppercase fs-5">how use state works</div>
							</Accordion.Header>
							<Accordion.Body>
								<li className="text-align-justify">
									Like every other hook in react, the useState hook is a special
									JavaScript function and hence must be invoked as a function.
									When it is invoked inside a function component, it declares a
									piece of a state which React keeps track of under the hood for
									subsequent re-renders of the element. useState provide
									two-parameter one to keep the information of the current
									value, and another one is a function that allows changing the
									value of the other parameter
								</li>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
};

export default Faq;
