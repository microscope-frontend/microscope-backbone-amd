require.config({
    baseUrl: '/scripts/',
    paths: {
        'jquery': 'vendors/jquery',
        'bootstrap': 'vendors/bootstrap',
        'underscore': 'vendors/underscore',
        'handlebars': 'vendors/handlebars',
        'backbone': 'vendors/backbone',
        'marionette': 'vendors/marionette',
        'hbs': 'vendors/hbs',
        'text': 'vendors/text'
    },
    shim: {
        'jquery': {
            'exports': '$'
        },
        'bootstrap': ['jquery'],
        'handlebars': {
            exports: 'Handlebars'
        },
        'backbone': {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        'marionette': {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
        'underscore': {
            exports: '_'
        }
    }
});