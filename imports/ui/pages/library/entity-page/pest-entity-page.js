import { Pests } from '/imports/api/pests/pests.js';
import { Meteor } from 'meteor/meteor';
import './pest-entity-page.html';

Template.entityPage.onCreated(function () {
  Meteor.subscribe('pests.all');
});

Template.entity.helpers({
	pest(){
		return Pests.findOne({_id: FlowRouter.current().params._id});
	},
});

Template.entity.events({

	'click .back': function(event){
		FlowRouter.go("/library");
	},

	'click .facebook': function(event){
		FlowRouter.go("facebook.com");
	},

	'click .twitter': function(event){
		FlowRouter.go("twitter.com");
	},

	'click .google': function(event){
		FlowRouter.go("gmail.com");
	},
});