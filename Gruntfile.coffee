module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    jasmine:
      test:
        src: 'src/*.js'
        options:
          keepRunner: true
          specs: 'spec/*.js'

  grunt.loadNpmTasks 'grunt-contrib-jasmine'

  grunt.registerTask 'test', ['jasmine:test']
