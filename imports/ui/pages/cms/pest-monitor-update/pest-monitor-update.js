import { CMS } from '/imports/api/cms/cms.js';
import { Meteor } from 'meteor/meteor';
import './pest-monitor-update.html';
import '../components/cms-navbar.html';
import '../components/cms-sidenav.html';

Template.pestMonitorUpdate.onCreated(function () {
	Meteor.subscribe('cms.all');
});

Template.pestMonitorUpdate.onRendered(function() {
	$('#viewChangesBTN').hide();
});

Template.pestMonitorUpdate.helpers({
	getCMS(){
		return CMS.findOne({info: "finalMonitor"});
	},
	
	isSelected(position){
		var banner = CMS.findOne({info:'finalMonitor'});
		return position == banner.bannerContentPosition; // may error daw sa bannerContentPosition!!!!!???
	}
});

Template.pestMonitorUpdate.events({
	'click #saveBTN': function(event){
		event.preventDefault();
		
		// GET THE VALUES
		var newCMS = {
			bannerPosition: $("#bannerPosition option:selected").val(),
			bannerText : $("#bannerText").val(),
			bannerSubText : $("#bannerSubText").val()
		}
		
		// UPDATES THE DATABASE
		Meteor.call('cms.updatePestMonitor', newCMS, (error) => {
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
		FlowRouter.go("/pests-monitor");
	}
});