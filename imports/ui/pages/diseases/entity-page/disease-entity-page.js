import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Meteor } from 'meteor/meteor';
import './disease-entity-page.html';

Template.diseaseEntityPage.onCreated(function () {
  Meteor.subscribe('plant_problem.all');
});

Template.diseaseEntity.onRendered(function () {
	 $('[data-toggle="tooltip"]').tooltip();
	 $('.swipebox').swipebox(); 
});

Template.diseaseEntity.helpers({
	disease(){
		return Plant_Problem.findOne({_id: FlowRouter.current().params._id});
	},
});

Template.diseaseEntity.events({

	'click .back': function(event){
		FlowRouter.go("/diseases");
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