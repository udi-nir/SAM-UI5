sap.ui.define([
], function() {
	"use strict";

	return {
		listeners: {},

		addListener: function(id, cbSave, cbDelete){
			this.listeners[id] = {
				"save": cbSave,
				"delete": cbDelete
			};
		},
		
		removeListener: function(id){
			delete this.listeners[id];
		},
		
		tick: function(interval, toggle){ // simulate changes
			var me = this;
			
			me._sendEvent("save", {
				index: 0,
				name: "Cornflakes",
				description: toggle ? 
					"Gluten free toasted corn flakes - coming form event" : 
					"Gluten free toasted corn flakes - coming form another event"
			});
			
			setTimeout(function(){
				me.tick(interval, !toggle);
			}, interval);
		},
			
		_sendEvent: function(type, params){
			for (var i in this.listeners){
				var listener = this.listeners[i];
				listener[type](params);
			}
		}
	};
});