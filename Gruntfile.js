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
            js: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['*.js'],
                    dest: 'public/js/'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/ionicons/fonts',
                    src: ['*'],
                    dest: 'public/fonts'
                }]
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/jquery-validation/dist/jquery.validate.js',
                    'node_modules/typed.js/dist/typed.min.js',
                    'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
                    'node_modules/masonry-layout/dist/masonry.pkgd.min.js',
                    'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
                    'src/vendor/multipleFilterMasonry.js'
                ],
                dest: 'public/js/vendor.js'
            },
            css: {
                src: [
                    'node_modules/ionicons/css/ionicons.min.css',
                    'node_modules/magnific-popup/dist/magnific-popup.css',
                    'node_modules/animate.css/animate.min.css'
                ],
                dest: 'public/css/vendor.css'
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