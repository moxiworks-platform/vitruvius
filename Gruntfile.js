module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    exec: {
      buildCSS: {
        cmd: 'npm run buildCSS'
      },
      rmBuild: {
        cmd: 'rm -rf build'
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
          {expand: true, flatten: true, src: ['./dist/project-vitruvious.*.css'], dest: './build/.', filter: 'isFile'},
          {expand: true, flatten: true, src: ['./dist/project-vitruvious-icons.*.css'], dest: './build/.', filter: 'isFile'},
        ],
      },
      fonts: {
        files: [
          {expand: true, flatten: true, src: ['./css/fonts/*'], dest: './build/.', filter: 'isFile'},
        ],
      },
    },
    rename: {
      css: {
        files: [
          {src: ['./build/project-vitruvious.*.css'], dest: './build/project-vitruvious.css'},
          {src: ['./build/project-vitruvious-icons.*.css'], dest: './build/project-vitruvious-icons.css'},
        ]
      }
    },
    clean: ['./project-vitruvious'],
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './build',
          src: ['*.css', '!*.min.css'],
          dest: './build',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['watch'])
  grunt.registerTask('build', ['exec:rmBuild', 'copy:css', 'rename:css', 'cssmin', 'copy:fonts', 'copy:main'])
};
