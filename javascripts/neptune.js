"use strict";

function outputTo(domElement, getNeptuneTemplate){

	var neptuneInfo = {
		name: "Neptune",
		yearDiscovered: "0",
		mass: "5.972 × 1024 kg (or 1.317 × 1025 lb)",
		size: "3,959 Miles",
		distanceFromSun: "92.96 Million Miles",
		composition: ["oxygen", "silicon", "aluminum", "iron", "calcium", "magnesium","potassium", "sodium"],
		satellites: 1419,
		probes: ""
	};

	var neptuneTemplate = getNeptuneTemplate(neptuneInfo);
	domElement.html(neptuneTemplate);

}

module.exports = outputTo;