sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"SAM/model/models",
	"SAM/utils/Sensor"
], function(UIComponent, Device, models, Sensor) {
	"use strict";

	return UIComponent.extend("SAM.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// activate the sensor
			Sensor.tick(2000);
		}
	});
});