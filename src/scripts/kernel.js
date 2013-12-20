define([
	'jquery',
	'backbone',
	'routes/router',
	'bootstrap'
	], function($, Backbone, Router, bootstrap){

		$(function() {

			Backbone.history.start({
		      pushState: false,
		      root: '/',
		      silent: true
		    });

			var router = new Router();

			Backbone.history.loadUrl();
		});
		
});