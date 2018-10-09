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
          {expand: true, flatten: true, src: ['./dist/**'], dest: 'docs/', filter: 'isFile'},
        ],
      },
      css: {
        files: [
          {expand: true, flatten: true, src: ['./dist/project-vitruvious.*.css'], dest: './project-vitruvious/.', filter: 'isFile'},
          {expand: true, flatten: true, src: ['./dist/project-vitruvious-icons.*.css'], dest: './project-vitruvious/.', filter: 'isFile'},
        ],
      },
    },
    rename: {
      css: {
        files: [
          {src: ['./project-vitruvious/project-vitruvious.*.css'], dest: './project-vitruvious/project-vitruvious.<%= pkg.version %>.css'},
          {src: ['./project-vitruvious/project-vitruvious-icons.*.css'], dest: './project-vitruvious/project-vitruvious-icons.<%= pkg.version %>.css'},
        ]
      }
    },
    clean: ['./project-vitruvious']
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['watch'])
  grunt.registerTask('buildGhPages', ['copy:main'])
  grunt.registerTask('build', ['clean', 'copy:css', 'rename:css'])
};
