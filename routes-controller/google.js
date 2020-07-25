// Global
const router = require("express").Router();
const axios = require("axios");

// Variables
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// Google API "/google"
router.route("/:query").get((req, res) => {
	axios
		.get(BASEURL + req.params.query)
		.then((results) => res.json(results.data))
		.catch((err) => console.log(err));
});

module.exports = router;
