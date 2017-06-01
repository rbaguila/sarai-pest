import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Meteor } from 'meteor/meteor';
import './edit-pest.html';
import '../../components/cms-navbar.html';
import '../../components/cms-sidenav.html';

Template.editPest.onCreated(function () {
	Meteor.subscribe('plant_problem.all');
});

Template.editPest.onRendered(function () {
	$('[data-toggle="tooltip"]').tooltip(); 
});

var count = 0;
Template.editPest.helpers({
	getPestsType(){
		var pests = Plant_Problem.find().fetch();
		var pestsType = _.uniq(pests, false, function(d) {return d.plant_affected});
		return _.pluck(pestsType, "plant_affected");
	},

	listPests(type){
		return Plant_Problem.find({'type': 'Pest', 'plant_affected': type});
	},

	rewritePestType(){
		return this.replace(/[\s,]+/g, '');
	},

	equals: function(v1, v2) {
		return (v1 === v2);
	},
});

Template.editPest.events({
	'click #addBTN': function(event){
		FlowRouter.go('/insert-pest');
	},
});

var id = "";

Template.button.events({
	'click .edit': function(event, template) {
		console.log("EDIT: " + this.id);
		FlowRouter.go('/edit-pest/' + this.id);
	},	

	'click .remove': function(event, template) {
		console.log("DELETE: " + this.id);
		id = this.id;
		$('#deletePest').modal('show');
	},

	'click .confirmDelete' : function(event) {
		$('#deletePest').modal('hide');
		Meteor.call('pests.removePest', id, (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
        	$('#pestDeleted').modal('show');
        	event.preventDefault();	
	      }
		});
	},
});