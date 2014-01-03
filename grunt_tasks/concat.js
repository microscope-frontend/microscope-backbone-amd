module.exports = {
	dev:{
		src: ['<%= configs.bower %>/requirejs/require.js', 'src/scripts/require-config.js', 'src/scripts/kernel.js'],
		dest: 'www/scripts/index.js'
	},
	production:{
		src: ['<%= configs.bower %>/requirejs/require.js', 'src/scripts/kernel.js'],
		dest: 'www/scripts/kernel.js'
	}
}