import { Meteor } from 'meteor/meteor';
import { CMS } from '/imports/api/cms/cms.js';
import { Experts } from '/imports/api/cms/cms.js';
import './pest-clinic.html';

Template.App_clinic.onRendered(function() {
	Session.set("currentPage", "finalClinic"); // set the current page to change banner
});

Template.pestClinic.onCreated(function() {
	Meteor.subscribe('cms.all');
	Meteor.subscribe('experts.all');
});

Template.about.helpers({
	getCMS: function(){
		return CMS.findOne({info:'finalClinic'});
	},
});

Template.about2.helpers({
	getCMS: function(){
		return CMS.findOne({info:'finalClinic'});
	},
});

Template.experts.helpers({
	getExperts: function(){
		return Experts.find();
	},
});