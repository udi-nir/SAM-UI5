sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"SAM/model/HomeModel",
	"SAM/action/HomeAction",
	"SAM/state/HomeState"
], function(Controller, HomeModel, HomeAction, HomeState) {
	"use strict";

	return Controller.extend("SAM.controller.Home", {
		onInit: function(){
			HomeState.setHomeAction(HomeAction);
			
			var model = HomeModel.createModel();
			this.getView().setModel(model);
		},
		
		_addItem: function(){
			HomeAction.addItemInEdit();
		},
		
		_removeSelected: function(){
			HomeAction.removeSelected();
		},
		
		_selectionChange: function(event){
			var selectedItem = event.getParameter("listItem");
			var list = event.getSource();
			var listItems = list.getItems();
			var index = listItems.findIndex(function(item){
				return item === selectedItem;
			});
			
			HomeAction.selectItem(index);
		},
		
		_enterEditMode: function(event) {
			HomeAction.enterEditMode();
		},
		
		_cancelEdit: function(event) {
			HomeAction.cancelEditMode();
		},
		
		_SaveEdit: function(){
			HomeAction.saveEdit();
		},
		
		_isSelectedIndex: function(value){
			return value !== null;
		},
		
		_isFalse: function(value) {
			return !value;
		},
		
		_startStopEvents: function(event) {
			var pressed = event.getParameter("pressed");
			if(pressed) {
				HomeAction.startEvents();	
			}
			else {
				HomeAction.stopEvents();	
			}
		}
	});
});