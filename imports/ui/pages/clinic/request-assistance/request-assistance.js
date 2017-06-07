import { Meteor } from 'meteor/meteor';
import { CMS } from '/imports/api/cms/cms.js';
import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Assistance } from '/imports/api/assistance/assistance.js';
import './request-assistance.html';

Template.requestAssistance.onCreated(function () {
	Meteor.subscribe('plant_problem.all');
	Meteor.subscribe('assistance.all');
});

Template.requestAssistance.helpers({
	pests(){
		return Plant_Problem.find({type: "Pest"});
	}
});

Template.requestAssistance.events({
	'click #submitBTN': function(event){
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var date = new Date();

		if( !($("#email").val()=='') || !($("#subject").val()=='') || !($("#message").val()=='') || !($("#name").val()=='') ){
			var newAssistance = {
				email: $("#email").val(),
				subject: $("#subject").val(),
				message: $("#message").val(),
				user: $("#name").val(),
				date: moment().format('MMMM Do YYYY, h:mm:ss a'),
				month: months[date.getMonth()],
				year: date.getFullYear().toString(),
				problem: $("#problem option:selected").val(),
				control: (Assistance.find().count() + 1)
			}
			console.log(newAssistance);

			Meteor.call('assistance.addAssistance', newAssistance, (error) => {
		      if (error) {
		        alert(error.error);
		      } else {
		      	$("#email").val(''),
				$("#subject").val(''),
				$("#message").val(''),
				$("#name").val(''),
				$("select#problem").val('').prop('selected', true);
		      	$('#requestSubmitted').modal('show');
		      }
		    });
		} else{
			$('#incompleteForm').modal('show');
		}
	},

	'click #backBTN': function(event){
		FlowRouter.go("/pests-clinic");
	},
});