// Global
import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function Search({ handleInput, handleSearch }) {
	return (
		<Form className="mt-5" onSubmit={handleSearch}>
			<InputGroup className="mb-3">
				<Form.Control
					as="input"
					type="text"
					placeholder="Search for Books"
					aria-label="search for books"
					size="lg"
					onChange={handleInput}
				/>
				<InputGroup.Append>
					<Button variant="outline-dark" type="submit" className="px-sm-5">
						Search
					</Button>
				</InputGroup.Append>
			</InputGroup>
		</Form>
	);
}

export default Search;
