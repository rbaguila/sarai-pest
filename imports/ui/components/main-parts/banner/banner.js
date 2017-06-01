import { Meteor } from 'meteor/meteor';
import { CMS } from '/imports/api/cms/cms.js';
import './banner.html';

Template.banner.onCreated(function bannerOnCreated() {
	Meteor.subscribe('cms.all');
});

Template.banner.helpers({

	getCMS(){
		return CMS.findOne({info: Session.get("currentPage")});
	}, 
  
});

Template.banner.events({
  
});
