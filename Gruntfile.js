module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      dist: {
        expand: true, cwd: 'src/', src: ['js/**'], dest: 'dist/'
      }
    }, 
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/jquery.placepicker.min.js': [ 'dist/js/jquery.placepicker.js']
        }
      }
    }, 
    jekyll_docs: {
      build: {
        dest: 'docs', 
        cwd: 'src', 
        expand: true,  
        src: [
          '../README.md', 
          '**/*.{md,js,css}' 
        ]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jekyll-docs');

  grunt.registerTask('default', ['copy', 'uglify']);
  grunt.registerTask('docs', ['jekyll_docs']);
  
};