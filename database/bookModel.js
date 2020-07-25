// Global
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const bookSchema = new Schema({
	title: { type: String, required: true },
	authors: Array,
	description: String,
	image: String,
	link: String,
	added: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
