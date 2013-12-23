define([
	'backbone',
	'marionette',
	'hbs!templates/home/home'
	], function(Backbone, Marionette, template){
		
		var HomeView = Backbone.Marionette.ItemView.extend({

			initialize:function () {
				
			},

			template: template,
			ui:{},
            events: {}
		});

		return HomeView;
});