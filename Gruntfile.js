module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		     	imagemin: {
				      dynamic: {
				             options: {
				                     optimizationLevel: 7
		                                },
	                                files: [
		                                  {expand: true, cwd: "images/", src:["*.{png,jpeg,jpg,svg}"], dest: "images/"}
	                        	        ]
		                        }
			}

	});
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.registerTask("default", ["imagemin"]);
};
