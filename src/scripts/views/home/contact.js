define([
	'backbone',
	'hbs!templates/home/contact'
	], function(Backbone, template){
		
		var HomeView = Backbone.View.extend({

			el: '#container',
			template: template,

			/**
			 * initialize view
			 */
			initialize: function() {
				this.render();
			},

			/**
			 * render view
			 */
			render: function() {
				this.$el.html(this.template);
			}
		});

		return HomeView;
});