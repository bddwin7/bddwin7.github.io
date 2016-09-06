module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['*.scss'],
                    dest: 'public/css',
                    ext: '.css'
                }]
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['*.js'],
                    dest: 'public/js/'
                }]
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/typed.js/dist/typed.min.js'
                ],
                dest: 'public/js/vendor.js'
            }
        },


        watch: {
            scss: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['copy']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['sass', 'copy', 'concat']);
};