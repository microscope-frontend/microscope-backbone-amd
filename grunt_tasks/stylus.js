module.exports = {
    dev: {
        options: {
                compress : false
        },
        files: {
                '<%= configs.wwwFolder %>/styles/application.css': 'src/styles/application.styl'
        }
    },
    release:{
        options: {
                compress : true
        },
        files: {
                '<%= configs.wwwFolder %>/styles/application.css': 'src/styles/application.styl'
        }        
    },
    production:{
        options: {
            compress : true
        },
        files: {
                'build/styles/application.css': 'src/styles/application.styl'
        }
    }
};