sap.ui.define([
	"SAM/model/HomeModel",
	"SAM/utils/Sensor"
], function(HomeModel, Sensor) {
	"use strict";

	return {
		addItemInEdit: function(){
			HomeModel.addItemInEdit();
		},
		
		addItem: function(title, description){
			HomeModel.addItem(title, description);
		},
		
		save: function(params){
			HomeModel.saveItem(params.index, params.name, params.description);
		},
		
		removeItem: function(index){
			HomeModel.removeItem(index);
		},
		
		removeSelected: function(){
			HomeModel.removeSelected();
		},
		
		selectItem: function(index){
			HomeModel.selectItem(index);
		},

		enterEditMode: function(){
			HomeModel.enterEditMode();
		},
		
		cancelEditMode: function(){
			HomeModel.cancelEditMode();
		},
		
		saveEdit: function(){
			HomeModel.saveEdit();
		}, 

		startEvents: function(){
			Sensor.addListener("1", this.save, this.removeItem);
		},
		
		stopEvents: function(){
			Sensor.removeListener("1");
		}
	};
});