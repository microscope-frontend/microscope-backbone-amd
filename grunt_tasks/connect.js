module.exports = {
    server: {
        options: {
            port: '<%= configs.port %>',
            open: true,
            target: 'http://localhost:<%= configs.port %>',
            base: 'www'
        }
    },
    docs: {
        options: {
            port: '<%= configs.port %>',
            open: true,
            target: 'http://localhost:<%= configs.port %>/application.html',
            base: 'docs',
            keepalive: true
        }
    }
};