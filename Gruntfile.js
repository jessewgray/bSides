module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
   	dist: {
		files: {
			'style.css' : 'style.scss'
	   	}
	}
   },
   watch: {
   	css:{
   		files: ['style.scss'],
   		tasks: ['sass', 'autoprefixer', 'svginject']
   	},
   	options: {
   		livereload: true
   	}
   },
   autoprefixer: {
   	options: {
   		browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
   	},
   	no_dest: {
   		src: 'style.css'
   	}
   },
   connect: {
   	server: {
   		options: {
   			port: 2222,
   			base: ''
   		}
   	}
   },
   svginject: {
      all: {
         options: {},
         files: {
            'dest/SVGinject.js' : ['svgs/*.svg']}

         }
      }
   }
 );

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-svginject');

 // Default task(s).
 grunt.registerTask('default', ['connect','watch']);
};