require.config({
  baseUrl: '/scripts/',
  paths:{
      'jquery'    : '/scripts/vendors/jquery',
      'bootstrap' : '/scripts/vendors/bootstrap',
      'underscore': '/scripts/vendors/underscore',
      'handlebars': '/scripts/vendors/handlebars',
      'backbone'  : '/scripts/vendors/backbone',
      'hbs'       : '/scripts/vendors/hbs',
      'text'      : '/scripts/vendors/text'
  },
  shim: {
      'jquery': {'exports' : '$'},
      'bootstrap': ['jquery'],
      'handlebars': {
          exports: 'Handlebars'
      },
      'backbone': {
          exports: 'Backbone',
          deps: ['jquery', 'underscore']
      },
      'underscore': {
          exports: '_'
      }
    }
});