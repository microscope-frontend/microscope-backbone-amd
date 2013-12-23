define([
	'backbone',
	'marionette',
	'hbs!templates/home/contact'
	], function(Backbone, Marionette, template){
		
		var ContactView = Backbone.Marionette.ItemView.extend({

			initialize:function () {
			
			},

			template: template,
			ui:{},
			events: {}
		});

		return ContactView;
});