// Global
import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";

// Export function
export function Results({ children }) {
	return <CardDeck className="flex-column">{children}</CardDeck>;
}

export function ResultCard({
	type,
	id,
	title,
	authors,
	description,
	image,
	link,
	save,
	remove,
}) {
	return (
		<Card className="mt-3">
			<Navbar bg="light" variant="light" className="justify-content-between">
				<div>
					<Card.Title>{title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{authors}</Card.Subtitle>
				</div>
				<Form inline>
					<Button
						variant="outline-dark"
						size="sm"
						className="px-3 mr-2"
						href={link}
						target="_blank">
						View
					</Button>
					{type === "google" ? (
						<Button
							variant="outline-dark"
							size="sm"
							className="px-3"
							id={id}
							onClick={save}>
							Save
						</Button>
					) : (
						<Button
							variant="outline-dark"
							size="sm"
							className="px-3"
							id={id}
							onClick={remove}>
							Remove
						</Button>
					)}
				</Form>
			</Navbar>
			<Card.Body>
				<Media>
					<img width={120} className="mr-3" src={image} alt="Book Thumbnail" />
					<Media.Body>
						<p>{description}</p>
					</Media.Body>
				</Media>
			</Card.Body>
		</Card>
	);
}
