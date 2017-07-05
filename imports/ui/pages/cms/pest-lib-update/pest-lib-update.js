import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-lib-update.html';
import '../components/library-cms-navbar.html';
import '../components/cms-sidenav.html';



Template.pestLibUpdate.onCreated(function () {
	Meteor.subscribe('usersList');
	Meteor.subscribe('plant_problem.all');
	Meteor.subscribe('cms.all');
});

Template.pestLibUpdate.onRendered(function() {
	$('#viewChangesBTN').hide();
});

Template.pestLibUpdate.helpers({

	getCMS(){
		return CMS.findOne({info: "finalLib"});
	},

	pestType(){
		var data = Plant_Problem.find().fetch();
		var distinctData = _.uniq(data, false, function(d) {return d.plant_affected});
		return _.pluck(distinctData, "plant_affected");
	},

	isChecked(pestType) {
		return CMS.find({info: "finalLib", viewPestType: pestType}).count() > 0? true : false;
	},

	isSelected(value, position){
		return value == position;
	},

	bannerImageFile(){
		return {
			finished: function(index, fileInfo, context) {
				Session.set('bannerImage', '/upload/' + fileInfo.name);
			}
		}
	},
});

var file;
var files = [];
Template.pestLibUpdate.events({
	'submit form': function(e, t){
        e.preventDefault();
		file = $('#userimage')[0].files[0];
		files.push(file);
		$('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    }, 

	'click #saveBTN': function(event){
		event.preventDefault();
		var imgURL;
		var pestType = [];
		$( "input[type=checkbox]:checked" ).map(function() {
		    pestType.push($( this ).val());
		});
		
		Cloudinary.upload(file, function(err, res) {
          console.log("Upload Error: " + err);
          console.log("Upload Result: " + res);
          imgURL = res.public_id;
          Session.set('bannerImage', 'http://res.cloudinary.com/project-sarai/image/upload/' + imgURL);
		// GET THE VALUES
			var newCMS = {
				bannerImage: (Session.get('bannerImage') == undefined) ? CMS.findOne({info: "finalLib"}).bannerImage : Session.get('bannerImage'),
				bannerText : $("#bannerText").val(),
				bannerSubText : $("#bannerSubText").val(),
				searchlabel : $("#searchlabel").val(),
				pestNumbers : parseInt( $("#pestsperpage").val() ),
				pestType : pestType
			}
			
			// UPDATES THE DATABASE
			Meteor.call('cms.updatePestLib', newCMS, (error) => {
		      if (error) {
		        alert(error.error);
		      } else {
		       	$('#cancelBTN').hide(); 
		       	$('#viewChangesBTN').show(); 
		      }
		    });
	    });
	    $('.progress .progress-bar').css("width",
                function() {
                    return "0%";
                }
        )
	},

	'click #cancelBTN': function(event){
		event.preventDefault();
	},

	'click #viewChangesBTN': function(event){
		event.preventDefault();
		FlowRouter.go("/pests");
	}
});