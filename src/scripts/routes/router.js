define([
	'backbone',
    'marionette'
	], function(Backbone, Marionette, Controller){
	
	var Router = Backbone.Marionette.AppRouter.extend({

        /**
         * routes handler
         */
        appRoutes: {
            ""       : "home",
            "contact": "contact"
        }
    });

	return Router;
});