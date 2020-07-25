// Global
import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

// Local
import API from "../utils/API";
import { Results, ResultCard } from "../components/Results";


// Page Content
function Books() {
	// Set states
	const [savedBooks, setSavedBooks] = useState([]);

	// Get books from database
	useEffect(() => {
		getBooks();
	}, []);

	// Get all books from database
	const getBooks = () => {
		API.get()
			.then((res) => setSavedBooks(res.data))
			.catch((err) => console.log(err));
	};

	// Remove book from database
	const removeBook = (event) => {
		event.preventDefault();
		API.remove(event.target.id)
			.then((res) => getBooks())
			.catch((err) => console.log(err));
	};

	return (
		<div className="container">

			{!savedBooks.length ? (
				<Alert variant="success">
					<p>No books in your library.</p>
				</Alert>
			) : (
				<Results>
					{savedBooks.map((result) => {
						return (
							<ResultCard
								key={result._id}
								id={result._id}
								title={result.title}
								authors={result.authors}
								description={result.description}
								image={result.image}
								link={result.link}
								remove={removeBook}
							/>
						);
					})}
				</Results>
			)}
		</div>
	);
}

export default Books;
