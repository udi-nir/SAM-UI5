sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"SAM/state/HomeState"
], function(JSONModel, HomeState) {
	"use strict";

	return {
		model: null,

		addItemInEdit: function(){
			var items = this.model.getProperty("/list");
			var itemInEdit = this.model.getProperty("/itemInEdit");
			
			items.push(itemInEdit);                 // add the item
			this.model.setProperty("/list", items);
			
			this.model.setProperty("/itemInEdit", { // clear editor
				title: "",
				description: ""
			});
			
			this._updateState();
		},
		
		addItem: function(title, description){
			var items = this.model.getProperty("/list");
			items.push({                           // add the item
				title: title,
				description: description
			});            
			this.model.setProperty("/list", items);
			
			this.model.setProperty("/itemInEdit", { // clear editor
				title: "",
				description: ""
			});
			
			this._updateState();
		},
		
		saveItem: function(index, title, description){
			this.model.setProperty("/list/" + index, {
				title: title,
				description: description
			});
			
			this._updateState();
		},
		
		removeItem: function(index){
			var items = this.model.getProperty("/list");
			items.splice(index, 1);
			this.model.setProperty("/list", items);
			this._updateState();
		},
		
		removeSelected: function(){
			var index = this.model.getProperty("/selectedIndex");
			var items = this.model.getProperty("/list");
			items.splice(index, 1);
			this.model.setProperty("/list", items);
			this._updateState();
		},
		
		selectItem: function(index){
			this.model.setProperty("/selectedIndex", index);
			this._updateState();
		},
		
		enterEditMode: function(){
			this.model.setProperty("/inEditMode", true);
			var items = this.model.getProperty("/list");
			var selectedIndex = this.model.getProperty("/selectedIndex");
			var item = items[selectedIndex];
			var itemClone = jQuery.sap.extend(true, {}, item);
			this.model.setProperty("/itemInEdit", itemClone);
			
			this._updateState();
		},
		
		cancelEditMode: function(){
			this.model.setProperty("/inEditMode", false);
			var item = {
				title: "",
				description: ""
			};
			this.model.setProperty("/itemInEdit", item);
			
			this._updateState();
		},
		
		saveEdit: function(){
			this.model.setProperty("/inEditMode", false);
			var selectedIndex = this.model.getProperty("/selectedIndex");
			var editedItem = this.model.getProperty("/itemInEdit");
			this.model.setProperty("/list/" + selectedIndex, editedItem); // update list
			
			var item = {
				title: "",
				description: ""
			};
			this.model.setProperty("/itemInEdit", item); // update edited item
			
			this._updateState();
		},
		
		_updateState: function(){
			HomeState.update(this.model.getData());
		},

		createModel: function() {
			var data = {
				list: [
					{
						title: "Cornflakes",
						description: "Gluten free toasted corn flakes"
					},
					{
						title: "Baileys",
						description: "The original Irish Cream"
					}
				],
				itemInEdit: {
					title: "",
					description: ""
				},
				selectedIndex: null,
				inEditMode: false,
				events: {
					getEvents: false
				}
			};
			
			this.model = new JSONModel(data);
			return this.model;
		}
	};
});