require([
	'jquery',
	'backbone',
	'marionette',
	'bootstrap',
	'application'
	], function($, Backbone, Marionette, bootstrap, App, Router, Controller){

		$(function() {
			App.start();
		});
});