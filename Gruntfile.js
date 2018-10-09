module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: {
      www: ['eventualy....'],
    },
    exec: {
      buildCSS: {
        cmd: 'npm run buildCSS'
      }
    },
    watch: {
      scripts: {
        files: ['./src/css/**/*.css', './src/css/**/*.js'],
        tasks: ['exec'],
        options: {
          spawn: false,
        },
      },
    },
    copy: {
      main: {
        files: [
          // flattens results to a single level
          {expand: true, flatten: true, src: ['./dist/**'], dest: 'docs/', filter: 'isFile'},
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['watch'])
  grunt.registerTask('buildGhPages', ['copy:main'])
};
