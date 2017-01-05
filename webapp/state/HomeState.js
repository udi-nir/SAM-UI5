sap.ui.define([
], function() {
	"use strict";

	return {
		homeAction: null, // reference to the HomeAction utility
		
		setHomeAction: function(homeAction){
			this.homeAction = homeAction;
		},
		
		update: function(data){
			this._nextAction(data);
		},
		
		_nextAction: function(data){
			var list = data.list;
			var iceCreamFound = false;
			var chocolateSyrupFound = false;
			
			list.forEach(function(item){
				if (item.title === "Ice Cream") {
					iceCreamFound = true;
				}
				
				if (item.title === "Chocolate Syrup") {
					chocolateSyrupFound = true;
				}
			});
			
			if (iceCreamFound && !chocolateSyrupFound) {
				var me = this;
				setTimeout(function() {
					me.homeAction.addItem("Chocolate Syrup", "Dark chocolate flavor syrup");
				}, 1000);				
			}
		}
	};
});