module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
        css: {
           src: [
                 'static/css/*'
                ],
            dest: 'combined.css'
        },
        js : {
            src : [
                'static/js/*'
            ],
            dest : 'combined.js'
          }
        },
        cssmin : {
            css:{
                src: 'combined.css',
                dest: 'combinedcss.min.css'
            }
        },
        uglify : {
        js: {
            files: {
                'combined.js' : [ 'combined.js' ]
            }
        }
    },
    watch: {
     files: ['static/css/*', 'static/js/*'],
     tasks: ['concat', 'cssmin', 'uglify']
  },
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js', 'watch:watch' ]);
};
