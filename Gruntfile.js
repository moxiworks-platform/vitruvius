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
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch'])
};
