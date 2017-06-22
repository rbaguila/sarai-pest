import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';

Meteor.methods({
	'disease/generate_pdf': function(currid) {
    	if (Meteor.isServer) {
 
	      // SETUP
	      // Grab required packages
	      var webshot = Meteor.npmRequire('webshot');
	      var fs      = Npm.require('fs');
	      var Future = Npm.require('fibers/future');
	 
	      var fut = new Future();
	 
	      var fileName = "disease-report.pdf";
	 
	      // GENERATE HTML STRING
	 	  var css = Assets.getText('style.css');
	      SSR.compileTemplate('layout', Assets.getText('layout.html'));
	 
	      Template.layout.helpers({
	        getDocType: function() {
	          return "<!DOCTYPE html>";
	        }
	      });
	 
	      SSR.compileTemplate('disease_report', Assets.getText('disease-entity-report.html'));
	 
	      // PREPARE DATA

	      var disease = Plant_Problem.findOne({_id: currid});
	      var data = {
	        disease: disease
	      }
	 
	      var html_string = SSR.render('layout', {
	        css: css,
	        template: "disease_report",
	        data: data
	      });
	 
	      console.log(html_string);
	            var options = {
          //renderDelay: 2000,
          "paperSize": {
              "format": "Letter",
              "orientation": "portrait",
              "margin": "1cm"
          },
          siteType: 'html'
      };
 
      // Commence Webshot
      console.log("Commencing webshot...");
      webshot(html_string, fileName, options, function(err) {
          fs.readFile(fileName, function (err, data) {
              if (err) {
                  return console.log(err);
              }
 
              fs.unlinkSync(fileName);
              fut.return(data);
 
          });
      });
      
      let pdfData = fut.wait();
      let base64String = new Buffer(pdfData).toString('base64');
 
      return base64String;
    	}
 
  	},
	'pest/generate_pdf': function(currid1) {
    	if (Meteor.isServer) {
 
	      // SETUP
	      // Grab required packages
	      var webshot = Meteor.npmRequire('webshot');
	      var fs      = Npm.require('fs');
	      var Future = Npm.require('fibers/future');
	 
	      var fut = new Future();
	 
	      var fileName = "pest-report.pdf";
	 
	      // GENERATE HTML STRING
	 	  var css = Assets.getText('pest-style.css');
	      SSR.compileTemplate('layout', Assets.getText('layout.html'));
	 
	      Template.layout.helpers({
	        getDocType: function() {
	          return "<!DOCTYPE html>";
	        }
	      });
	 
	      SSR.compileTemplate('pest_report', Assets.getText('pest-entity-report.html'));
	 
	      // PREPARE DATA

	      var pest = Plant_Problem.findOne({_id: currid1});
	      var data = {
	        pest: pest
	      }
	 
	      var html_string = SSR.render('layout', {
	        css: css,
	        template: "pest_report",
	        data: data
	      });
	 
	      console.log(html_string);
	            var options = {
          //renderDelay: 2000,
          "paperSize": {
              "format": "Letter",
              "orientation": "portrait",
              "margin": "1cm"
          },
          siteType: 'html'
      };
 
      // Commence Webshot
      console.log("Commencing webshot...");
      webshot(html_string, fileName, options, function(err) {
          fs.readFile(fileName, function (err, data) {
              if (err) {
                  return console.log(err);
              }
 
              fs.unlinkSync(fileName);
              fut.return(data);
 
          });
      });
      
      let pdfData = fut.wait();
      let base64String = new Buffer(pdfData).toString('base64');
 
      return base64String;
    	}
 
  	},
})