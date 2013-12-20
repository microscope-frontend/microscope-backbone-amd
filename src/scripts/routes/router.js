define([
	'backbone',
	'views/home/home',
    'views/home/contact'
	], function(Backbone, HomeView, ContactView){
	
	var Router = Backbone.Router.extend({

        /**
         * routes handler
         */
        routes: {
            ""       : "home",
            "contact": "contact"
        },

        home: function(){
        	var homeView = new HomeView();
        },

        contact: function(){
            var contactView = new ContactView();
        }
    });

	return Router;
});