import { Meteor } from 'meteor/meteor';
import { CMS } from '/imports/api/cms/cms.js';
import { Plant_Problem } from '/imports/api/plant_problem/plant_problem.js';
import { Assistance } from '/imports/api/assistance/assistance.js';
import { Logs } from '/imports/api/logs/logs.js';
import './request-assistance.html';

Template.requestAssistance.onCreated(function () {
	Meteor.subscribe('plant_problem.all');
	Meteor.subscribe('assistance.all');
	Meteor.subscribe('logs.all');
	
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
		var userName = '';
		if( !($("#email").val()=='') && !($("#subject").val()=='') && !($("#message").val()=='') && !($("#name").val()=='') ){
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
			if(Meteor.user()){
				userName = Meteor.user().username;
			}
			var newLog = {
				email: newAssistance.email,
				subject: newAssistance.subject,
				message: newAssistance.message,
				user: newAssistance.user,
				date: newAssistance.date,
				month: newAssistance.month,
				year: newAssistance.year,
				problem: newAssistance.problem,
				control: newAssistance.control,
		        username: userName,
		        dateReplied: '',
		        adminUsername: '',
		        adminEmail: '',
		        reply: ''
			}
			
			Meteor.call('assistance.addAssistance', newAssistance, (error) => {
		      if (error) {
		        alert(error.error);
		      } else {
		      	Meteor.call('logs.addlogs',newLog);
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
	'click #advanceFormBTN': function(event){
		FlowRouter.go("/advance-request-assistance");
	},
	'click #viewPastBTN': function(event){
		FlowRouter.go("/past-requested-assistance");
	},
});