"use strict";

function outputTo(domElement, getVenusTemplate){

	var venusInfo = {
		name: "Venus",
		yearDiscovered: "0",
		mass: "5.972 × 1024 kg (or 1.317 × 1025 lb)",
		size: "3,959 Miles",
		distanceFromSun: "92.96 Million Miles",
		composition: ["oxygen", "silicon", "aluminum", "iron", "calcium", "magnesium","potassium", "sodium"],
		satellites: 1419,
		probes: ""
	};

	var venusTemplate = getVenusTemplate(venusInfo);
	domElement.html(venusTemplate);

}

module.exports = outputTo;