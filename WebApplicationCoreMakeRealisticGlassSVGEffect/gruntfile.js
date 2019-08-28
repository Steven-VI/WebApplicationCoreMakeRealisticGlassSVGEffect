/// <binding BeforeBuild='default' />

module.exports = function (grunt) {

    const sass = require('node-sass');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true, // Recursive

                    cwd: "sass", // The startup directory

                    src: ["**/*.scss"], // Source files

                    dest: "wwwroot", // Destination

                    ext: ".css" // File extension
                }]
            }
        }
    });

    // Load the plugin

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
};