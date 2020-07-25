// Global
const express = require("express");
const mongoose = require("mongoose");

// Local
const routes = require("./routes-controller");

// Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
if (process.env.NODE_ENV === "production") {
	console.log(process.env.NODE_ENV);
	app.use(express.static("client/build"));
}
// Routes
app.use(routes);

// Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
	useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once("open", () =>
	console.log("MongoDB database connection established")
);

// Start API server
app.listen(PORT, function () {
	console.log("Server now listening on PORT", PORT);
});
