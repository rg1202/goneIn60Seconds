const session = require("express-session");
const bodyParser = require("body-parser");
const express = require("express");
const exphbs = require("express-handlebars");
const helpers = require("../utils/helpers"); // Adjust the path to your helpers

module.exports = {
	sessionMiddleware: session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			httpOnly: true,
			secure: false,
			maxAge: 24 * 60 * 60 * 1000,
		},
	}),
	bodyParserJson: bodyParser.json(),
	bodyParserUrlencoded: bodyParser.urlencoded({ extended: false }),
	expressStatic: express.static("public"),
	handlebars: (app) => {
		const hbs = exphbs.create({ helpers });
		app.engine("handlebars", hbs.engine);
		app.set("view engine", "handlebars");
	},
};
