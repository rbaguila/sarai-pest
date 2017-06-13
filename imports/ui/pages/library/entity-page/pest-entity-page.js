import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Meteor } from 'meteor/meteor';
import './pest-entity-page.html';

Template.entityPage.onCreated(function () {
  Meteor.subscribe('plant_problem.all');
});

Template.entity.onRendered(function () {
	 $('[data-toggle="tooltip"]').tooltip();
	 $('.swipebox').swipebox(); 
});

Template.entity.helpers({
	pest(){
		return Plant_Problem.findOne({_id: FlowRouter.current().params._id});
	},
});

Template.entity.events({

	'click .back': function(event){
		FlowRouter.go("/pests");
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