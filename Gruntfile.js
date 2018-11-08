module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    watch: {
      tailwinds: {
        files: ['./tailwinds/*.css', './tailwinds/*.js'],
        tasks: ['exec:tailwinds'],
        options: {
          spawn: false,
        },
      },
      riot: {
        files: ['./riotjs/**/*.tag'],
        tasks: ['exec:riot'],
        options: {
          spawn: false,
        },
      },
      package: {
        files: ['./package.json'],
        tasks: ['copy:packagejson'],
        options: {
          spawn: false,
        }
      },
    },
    exec: {
      rm: {
        cmd: 'rm -rf build && rm -rf docs'
      },
      tailwinds: {
        cmd: 'npm run buildCSS'
      },
      riot: {
        cmd: 'riot riotjs/components src/components'
      },
      buildVue: {
        cmd: 'npm run build'
      }
    },
    copy: {
      docs: {
        cwd: 'dist',  // set working folder / root to copy
        src: '**/*',           // copy all files and subfolders
        dest: 'docs',    // destination folder
        expand: true,          // required when using cwd
      },
      css: {
        files: [
          {expand: true, flatten: true, src: ['./public/css/project-vitruvius.css'], dest: './build/.', filter: 'isFile'},
          {expand: true, flatten: true, src: ['./public/css/project-vitruvius-icons.css'], dest: './build/.', filter: 'isFile'},
        ],
      },
      fonts: {
        files: [
          {expand: true, flatten: true, src: ['./public/css/fonts/*'], dest: './build/fonts/.', filter: 'isFile'},
        ],
      },
      components: {
        files: [
          {expand: true, flatten: true, src: ['./src/components/**/*.js'], dest: './build/components/.', filter: 'isFile'},
        ],
      },
      packagejson: {
        files: [
          {expand: true, flatten: true, src: ['./package.json'], dest: './public/.', filter: 'isFile'},
        ]
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build',
          src: ['*.css', '!*.min.css'],
          dest: 'build',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['watch'])
  grunt.registerTask('build', ['exec:rm', 'exec:buildVue', 'copy:docs', 'copy:css', 'copy:fonts', 'copy:components', 'cssmin']);
}