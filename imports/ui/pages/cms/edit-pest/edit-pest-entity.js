import { Pests } from '/imports/api/pests/pests.js';
import { Meteor } from 'meteor/meteor';
import './edit-pest-entity.html';

Template.entityPage.onCreated(function () {
  Meteor.subscribe('pests.all');
});

Template.pestEntity.onRendered(function () {
	 $('[data-toggle="tooltip"]').tooltip(); 
});

Template.pestEntity.helpers({
	pest(){
		return Pests.findOne({_id: FlowRouter.current().params._id});
	},
});

Template.pestEntity.events({
	'click #saveBTN': function(event){
		event.preventDefault();
	},
});

Template.pestEntity.events({
	'click .back-button': function(event) {
		FlowRouter.go('/edit-pest');
	},	
});