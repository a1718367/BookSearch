// Global
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


// Export function
function NavMenu() {
	return (
		<Navbar bg="primary" variant="dark" className="mb-5 py-2">
			<div className="container">
				<Navbar.Brand href="/" className="mr-sm-4">
					Google Books Search
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/">Search</Nav.Link>
					<Nav.Link href="/mybooks">My Books</Nav.Link>
				</Nav>
			</div>
		</Navbar>
	);
}

export default NavMenu;
