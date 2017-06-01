import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-id-update.html';
import '../components/cms-navbar.html';
import '../components/cms-sidenav.html';

Template.pestIdUpdate.onCreated(function () {
	Meteor.subscribe('cms.all');
});

Template.pestIdUpdate.onRendered(function() {
	$('#viewChangesBTN').hide();
});

Template.pestIdUpdate.helpers({
	getCMS(){
		return CMS.findOne({info: "finalId"});
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

Template.pestIdUpdate.events({
	'click #saveBTN': function(event){
		event.preventDefault();
		
		// GET THE VALUES
		var newCMS = {
			bannerImage: (Session.get('bannerImage') == undefined) ? CMS.findOne({info: "finalId"}).bannerImage : Session.get('bannerImage'),
			bannerPosition: $("#bannerPosition option:selected").val(),
			bannerText : $("#bannerText").val(),
			bannerSubText : $("#bannerSubText").val()
		}
		
		// UPDATES THE DATABASE
		Meteor.call('cms.updatePestId', newCMS, (error) => {
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
		FlowRouter.go("/pests-id");
	}
});