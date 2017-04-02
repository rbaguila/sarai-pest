import { Pests } from '/imports/api/pests/pests.js';
import { Meteor } from 'meteor/meteor';
import './edit-pest.html';

Template.editPest.onCreated(function () {
	Meteor.subscribe('pests.all');
});

Template.editPestCMS.onRendered(function () {
	$('[data-toggle="tooltip"]').tooltip(); 
});

Template.editPestCMS.helpers({
	getPests(){
		return Pests.find();
	}
});

Template.button.events({
	'click .edit': function(event, template) {
		console.log("EDIT: " + this.id);
		FlowRouter.go('/edit-pest/' + this.id);
	},	

	'click .remove': function(event, template) {
		console.log("DELETE: " + this.id);
		var answer = confirm("Are you sure you want to delete " + this.name + "?");
        if(answer){
			Meteor.call('pests.removePest', this.id, (error) => {
		      if (error) {
		        alert(error.error);
		      } else {
	        	alert("Pest successfully removed!");
	        	event.preventDefault();	
		      }
    		});
    	}
	},
});