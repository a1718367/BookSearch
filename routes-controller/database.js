// Global
const router = require("express").Router();

// Local
const db = require("../database");

// Get
router.route("/").get((req, res) => {
	db.Book.find(req.query)
		.sort({ added: -1 })
		.then((results) => res.json(results))
		.catch((err) => res.status(422).json(err));
});
// Post
router.route("/").post((req, res) => {
	db.Book.create(req.body)
		.then((results) => res.json(results))
		.catch((err) => res.status(422).json(err));
});
// Delete
router.route("/:id").delete((req, res) => {
	db.Book.findById({ _id: req.params.id })
		.then((results) => results.remove())
		.then((results) => res.json(results))
		.catch((err) => res.status(422).json(err));
});

module.exports = router;
