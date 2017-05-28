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
	
	isSelected(position){
		var banner = CMS.findOne({info:'finalId'});
		return position == banner.bannerContentPosition; // may error daw sa bannerContentPosition!!!!!???
	}
});