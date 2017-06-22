import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-clinic-update.html';
import '../components/clinic-cms-navbar.html';
import '../components/cms-sidenav.html';

Template.pestClinicUpdate.onCreated(function() {
	Meteor.subscribe('usersList');
	Meteor.subscribe('cms.all');
});

Template.pestClinicUpdate.onRendered(function() {
	$('#viewChangesBTN').hide();
});

Template.pestClinicUpdate.helpers({
	getCMS(){
		return CMS.findOne({info: "finalClinic"});
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

	row1ImageFile(){
		return {
			finished: function(index, fileInfo, context) {
				Session.set('row1Image', '/upload/' + fileInfo.name);
			}
		}
	},

	row2ImageFile(){
		return {
			finished: function(index, fileInfo, context) {
				Session.set('row2Image', '/upload/' + fileInfo.name);
			}
		}
	},
});

Template.pestClinicUpdate.events({
	'click #saveBTN': function(event){
		event.preventDefault();

		// GET THE VALUES
		var newCMS = {
			bannerImage: (Session.get('bannerImage') == undefined) ? CMS.findOne({info: "finalClinic"}).bannerImage : Session.get('bannerImage'),
			bannerText : $("#bannerText").val(),
			bannerSubText : $("#bannerSubText").val(),
			row1HeadText: $("#row1HeadText").val(),
			row1Image: (Session.get('row1Image') == undefined) ? CMS.findOne({info: "finalClinic"}).row1Image : Session.get('row1Image'),
			row2HeadText: $("#row2HeadText").val(),
			row2SubText: $("#row2SubText").val(),
			row2Image: (Session.get('row2Image') == undefined) ? CMS.findOne({info: "finalClinic"}).row2Image : Session.get('row2Image'),
		}
		
		// UPDATES THE DATABASE
		Meteor.call('cms.updatePestClinic', newCMS, (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
	       	$('#cancelBTN').hide(); 
	       	$('#viewChangesBTN').show(); 
	      }
	    });
	},

	'click #cancelBTN': function(event){
		event.preventDefault();
	},

	'click #viewChangesBTN': function(event){
		event.preventDefault();
		FlowRouter.go("/pests-clinic");
	}
});