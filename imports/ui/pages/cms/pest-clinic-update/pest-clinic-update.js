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
	
	isSelected(position){
		var banner = CMS.findOne({info:'finalClinic'});
		return position == banner.bannerContentPosition; // may error daw sa bannerContentPosition!!!!!???
	}
});