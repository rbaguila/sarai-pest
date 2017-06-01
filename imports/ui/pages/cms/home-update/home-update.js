import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './home-update.html';
import '../components/cms-navbar.html';
import '../components/cms-sidenav.html';

Template.homeUpdate.onCreated(function () {
	Meteor.subscribe('cms.all');
});

Template.homeUpdate.onRendered(function() {
	$('#viewChangesBTN').hide();
});

Template.homeUpdate.helpers({
	getCMS(){
		return CMS.findOne({info: "finalHome"});
	},
	
	isSelected(value, position){
		return value == position;
	},

	bannerImageFile(){
		return {
			finished: function(index, fileInfo, context) {
				Session.set('bannerImage', '/img/.uploads/' + fileInfo.name);
			}
		}
	},
});

Template.homeUpdate.events({
	'click #saveBTN': function(event){
		event.preventDefault();
		
		// GET THE VALUES
		var newCMS = {
			bannerImage: (Session.get('bannerImage') == undefined) ? CMS.findOne({info: "finalHome"}).bannerImage : Session.get('bannerImage'),
			bannerPosition: $("#bannerPosition option:selected").val(),
			bannerText : $("#bannerText").val(),
			bannerSubText : $("#bannerSubText").val()
		}
		
		// UPDATES THE DATABASE
		Meteor.call('cms.updateHome', newCMS, (error) => {
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
		FlowRouter.go("/");
	}
});