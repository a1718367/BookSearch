// Global
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

// Local
import API from "../utils/API";
import Search from "../components/Search";
import { Results, ResultCard } from "../components/Result";



// Page Content
function Home() {
	// Set states
	const [searchFor, setSearchFor] = useState();
	const [searchResults, setSearchResults] = useState([]);
	const [emptyResults, setEmptyResults] = useState(false);

	// Capture search input
	const handleInput = (event) => {
		setSearchFor(event.target.value);
	};

	// Perform google search
	const handleSearch = (event) => {
		event.preventDefault();
		API.search(searchFor)
			.then((results) => {
				results.data.items
					? handleResults(results.data.items)
					: setEmptyResults(true);
			})
			.catch((err) => console.log(err));
	};

	// Handle search results
	const handleResults = (items) => {
		const resultArray = items.map((item) => {
			const title = item.volumeInfo.title;
			const authors = item.volumeInfo.authors
				? item.volumeInfo.authors.join(", ")
				: "";
			const description = item.volumeInfo.description;
			const image =
				item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail

			const link = item.volumeInfo.infoLink;
			return { title, authors, description, image, link };
		});
		setEmptyResults(false);
		setSearchResults(resultArray);
	};

	// Save google book to database
	const saveBook = (event) => {
		event.preventDefault();
		API.save(searchResults[event.target.id])
			.then((res) => console.log("res: ", res))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<div className="container">
			<Search handleInput={handleInput} handleSearch={handleSearch} />

			</div>
			<div className="container">
					<Results>
						{searchResults.map((result, index) => {
							return (
								<ResultCard
									type="google"
									key={result.link}
									id={index}
									title={result.title}
									authors={result.authors}
									description={result.description}
									image={result.image}
									link={result.link}
									save={saveBook}
								/>
							);
						})}
					</Results>

			</div>

		</div>
	);
}

export default Home;
