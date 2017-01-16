/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
// Project configuration.
grunt.initConfig({
pkg: grunt.file.readJSON('package.json'),
        cssmin: {

        target: {
        files: {
        'css/recipedesign.min.css': ['css/recipedesign.css']
        }
        }
        },
        uglify:{
        options:{
        mangle:false
        },
                target:{
                files:{
                'js/recipeapp.min.js':['js/recipectrl.js','js/recipeservice.js']
                }
                }
        },
        copy:{
        bower:{
        files:[
        {src:'bower_components/bootstrap/dist/css/bootstrap.min.css', dest:'css/bootstrap.min.css'},
        {src:'bower_components/bootstrap/dist/js/bootstrap.min.js', dest:'js/bootstrap.min.js'},
        {src:'bower_components/angular/angular.min.js', dest:'js/angular.min.js'},
        {src:'bower_components/angular-ui-router/release/angular-ui-router.min.js', dest:'js/angular-ui-router.min.js'},
        {src:'bower_components/jquery/dist/jquery.min.js', dest:'js/jquery.min.js'}
        ]

        },
                toDist:{
                files:[
                {src:'js/**.min.js', dest:'dist/'},
                {src:'css/**.min.css', dest:'dist/'},
                {src:'templates/*', dest:'dist/'},
                {src:'*.html', dest:'dist/'}
                
                ]
                }

        },
        clean:['dist/']


});
        //ladda våra plugins
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-clean');
        //Skapa tasks!pluralis
        grunt.registerTask('default', ['cssmin', 'uglify', 'copy']);
        grunt.registerTask('build', ['cssmin', 'uglify', 'clean', 'copy']);
        };
