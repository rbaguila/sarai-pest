import { Pests } from '/imports/api/pests/pests.js';
import { Meteor } from 'meteor/meteor';
import './pest-entity-page.html';

Template.entityPage.onCreated(function () {
  Meteor.subscribe('pests.all');
});

Template.entity.helpers({
	pest(){
		console.log(Pests.findOne({_id: FlowRouter.current().params._id }));
		return Pests.findOne({_id: FlowRouter.current().params._id});
	},
});