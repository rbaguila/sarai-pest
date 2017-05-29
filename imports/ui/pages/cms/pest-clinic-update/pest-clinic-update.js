import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-clinic-update.html';
import '../components/cms-navbar.html';
import '../components/cms-sidenav.html';

Template.pestClinicUpdate.onCreated(function () {
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
	}
});

Template.pestClinicUpdate.events({
	'click #saveBTN': function(event){
		event.preventDefault();
		
		// GET THE VALUES
		var newCMS = {
			bannerPosition: $("#bannerPosition option:selected").val(),
			bannerText : $("#bannerText").val(),
			bannerSubText : $("#bannerSubText").val(),
			row1HeadText: $("#row1HeadText").val(),
			row2HeadText: $("#row2HeadText").val(),
			row2SubText: $("#row2SubText").val()
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