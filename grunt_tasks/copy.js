module.exports = {
	vendors: {
	  files: [
	  	// bower vendors
	    {src: '<%= configs.bower %>/bootstrap/dist/js/bootstrap.js', dest: '<%= configs.vendors %>/bootstrap.js'},
	    {src: '<%= configs.bower %>/jquery/jquery.js', dest: '<%= configs.vendors %>/jquery.js'},
	    {src: '<%= configs.bower %>/requirejs/require.js', dest: '<%= configs.vendors %>/require.js'},
	    {src: '<%= configs.bower %>/backbone/backbone.js', dest: '<%= configs.vendors %>/backbone.js'},
	    {src: '<%= configs.bower %>/underscore/underscore.js', dest: '<%= configs.vendors %>/underscore.js'},
	    {src: '<%= configs.bower %>/handlebars/handlebars.js', dest: '<%= configs.vendors %>/handlebars.js'},
	    {src: '<%= configs.bower %>/requirejs-hbs/hbs.js', dest: '<%= configs.vendors %>/hbs.js'},
	    {src: '<%= configs.bower %>/text/text.js', dest: '<%= configs.vendors %>/text.js'},
	    
	    // bower assets
	    {src: '<%= configs.bower %>/bootstrap/dist/css/bootstrap.css', dest: '<%= configs.wwwFolder %>/styles/bootstrap.css'},
	    {expand: true, cwd: '<%= configs.bower %>/bootstrap/dist/fonts/', src: ['**'], dest: '<%= configs.wwwFolder %>/fonts/'}
	  ]
	},
	src:{
		files:[
			// application scripts
	  		{expand: true, cwd: 'src/scripts/',src: ['**'], dest: '<%= configs.wwwFolder %>/scripts/'},
		]
	},
	assets:{
		files:[
			// application assets
	    	{expand: true, cwd: '<%= configs.assetsFolder %>/', src: ['**'], dest: '<%= configs.wwwFolder %>/'}
		]
	}
};