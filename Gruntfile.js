module.exports = function(grunt) {

    /**
     * tasks configurations.
     */
    var config = require('./grunt_tasks/configs');
    var copy = require('./grunt_tasks/copy');
    var clean = require('./grunt_tasks/clean');
    var stylus = require('./grunt_tasks/stylus');
    var connect = require('./grunt_tasks/connect');
    var concat = require('./grunt_tasks/concat');
    var watch = require('./grunt_tasks/watch');
    var requirejs = require('./grunt_tasks/requirejs');
    var docco = require('./grunt_tasks/docco');

    /**
     * initialize configuration
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        configs: config,
        copy: copy,
        clean: clean,
        stylus: stylus,
        connect: connect,
        concat: concat,
        watch: watch,
        requirejs: requirejs,
        docco: docco
    });

    /**
     * load tasks.
     */
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-docco');

    /**
     * register tasks.
     */
    grunt.registerTask('default', ['run']);
    grunt.registerTask('docs', ['docco', 'connect:docs']);
    grunt.registerTask('move', ['copy:assets', 'copy:src', 'copy:vendors']);
    grunt.registerTask('build', ['clean', 'move', 'stylus:dev', 'concat']);
    grunt.registerTask('debug', ['build', 'connect', 'watch']);
    grunt.registerTask('production', [
        'clean',
        'build',
        'concat:production',
        'copy:production',
        'stylus:production',
        'requirejs'
    ]);
};