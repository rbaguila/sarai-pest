import { Meteor } from 'meteor/meteor';
import { Logs } from '/imports/api/logs/logs.js';
import './past-requested-assistance.html';

Template.pastAssistance.onCreated(function () {
	Meteor.subscribe('logs.all');
	
});

Template.pastAssistance.helpers({
	past(){
		return Logs.find({username: Meteor.user().username}).fetch();
	},
});

Template.pastAssistance.events({
	'click #backBTN': function(event){
		FlowRouter.go("/request-assistance");
	},
	'click .answer': function(event){
		$('#subject').html('');
		$('#user').html('');
		$('#date').html('');
		$('#problem').html('');
		$('#message').html('');
		$('#expertUsername').html('');
		$('#dateReplied').html('');
		$('#reply').html('');
		$('#close-button').html('');
	},
});
Template.viewButton.events({
	'click .view': function(event, template){
		if( !(this.id == undefined) || !(this.id == null) ){
			var entry = Logs.findOne({'_id': this.id});
			console.log(entry);
			var adminUsername = '';
			
			$('#subject').html("<h5><b> <big>"+ entry.subject +"</big></b></h5><hr/>");
			$('#user').html("<h5><b>"+ entry.user + "</b> <small>" + entry.email + "</small></h5>");
			$('#date').html("<em>" + entry.date + "</em>");
			$('#problem').html("<br/> <b> Problem: </b>" + entry.problem +"<br/>");
			$('#message').html("<br/>" + entry.message +"<br/><hr/>");
			if(entry.reply != ''){
				adminUsername = 'Expert';
				$('#expertUsername').html("<h5><b>"+ adminUsername + "</b> <small>" + entry.adminEmail + "</small></h5>");
				$('#dateReplied').html("<em>" + entry.dateReplied + "</em>");
				$('#reply').html("<br/>" + entry.reply +"<br/><hr/>");
			}else{
				$('#expertUsername').html('');
				$('#dateReplied').html('');
				$('#reply').html('');
			}
			
			$('#close-button').html("<button type='button' class='btn btn-primary answer'>Close</button>");	
		}
	},
});