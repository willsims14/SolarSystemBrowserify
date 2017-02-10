"use strict";

console.log("BEFORE");

// Handlebars
let Handlebars = require('hbsfy/runtime'),
	planetTemplate = require('../templates/planetTemplate.hbs');


// Grab each planet's method
let earth = require("./earth.js"),
	jupiter = require("./jupiter.js"),
	mars = require("./mars.js"),
	mercury = require("./mercury.js"),
	neptune = require("./neptune.js"),
	saturn = require("./saturn.js"),
	uranus = require("./uranus.js"),
	venus = require("./venus.js");


// Get DOM elements to pass into each planet's method
let earthDiv = $("#earthDiv"),
	jupiterDiv = $("#jupiterDiv"),
	marsDiv = $("#marsDiv"),
	mercuryDiv = $("#mercuryDiv"),
	neptuneDiv = $("#neptuneDiv"),
	saturnDiv = $("#saturnDiv"),
	uranusDiv = $("#uranusDiv"),
	venusDiv = $("#venusDiv");

// Invoke each planets' method
earth(earthDiv, planetTemplate);
jupiter(jupiterDiv, planetTemplate);
mars(marsDiv, planetTemplate);
mercury(mercuryDiv, planetTemplate);
neptune(neptuneDiv, planetTemplate);
saturn(saturnDiv, planetTemplate);
uranus(uranusDiv, planetTemplate);
venus(venusDiv, planetTemplate);



