define([
    'backbone', 
    'marionette',
    'views/home/home',
    'views/home/contact',
    ],
    function (Backbone, Marionette, HomeView, ContactView) {

        var controller = Backbone.Marionette.Controller.extend({

            initialize:function (options) {
                this.App = options.App;
            },

            home: function(){
                this.App.mainRegion.show(new HomeView());
            },

            contact: function(){
                this.App.mainRegion.show(new ContactView());
            }
        });

        return controller;
});