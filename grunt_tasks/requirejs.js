module.exports = {
	compile: {
		options: {
			almond: true,
			name: 'kernel',
			baseUrl: "www/scripts/",
			mainConfigFile: "www/scripts/require-config.js",
			out: 'build/scripts/index.js',
			preserveLicenseComments: false
		}
	}
};