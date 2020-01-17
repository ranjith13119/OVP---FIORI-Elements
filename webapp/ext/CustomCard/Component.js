(function () {
	"use strict";

	/* component for custom card */

	jQuery.sap.declare("OVP.OverViewPage.ext.CustomCard.Component");
	jQuery.sap.require("sap.ovp.cards.custom.Component");

	sap.ovp.cards.custom.Component.extend("OVP.OverViewPage.ext.CustomCard.Component", {
		// use inline declaration instead of component.json to save 1 round trip
		metadata: {
			properties: {
				"contentFragment": {
					"type": "string",
					"defaultValue": "OVP.OverViewPage.ext.CustomCard.CustomCardFragment"
				},
				"headerFragment": {
					"type": "string",
					"defaultValue": ""
				},
				"footerFragment": {
					"type": "string",
					"defaultValue": ""
				}
			},

			version: "@version@",

			library: "sap.ovp",

			includes: [],

			dependencies: {
				libs: ["sap.m"],
				components: []
			},
			config: {},
			customizing: {
				"sap.ui.controllerExtensions": {
					"sap.ovp.cards.generic.Card": {
						controllerName: "OVP.OverViewPage.ext.CustomCard.CustomCardFragment"
					}
				}
			}
		}
	});
})();