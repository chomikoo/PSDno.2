module.exports = function(grunt) {
    
    
    //Project configuration.
    grunt.initConfig({
        watch: {
            css: {
                files: 'sass/main.sass',
                tasks: ['sass']
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'sass/main.sass'
                }
            }
        }
    });
    //Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //Default task(s).
    grunt.registerTask('default', ['watch', 'sass']);
};