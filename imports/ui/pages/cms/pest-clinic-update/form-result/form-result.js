import { Result } from '/imports/api/result/result.js';
import { Logs } from '/imports/api/logs/logs.js';
import { Meteor } from 'meteor/meteor';
import './form-result.html'
import '../../components/clinic-cms-navbar.html';
import '../../components/cms-sidenav.html';


Template.formResult.onCreated(function() {
  	Meteor.subscribe('usersList');
	Meteor.subscribe('result.all');
	Meteor.subscribe('logs.all');
});

Template.formResult.helpers({
	result(){
		return Result.find().fetch();
	},
	
});
Template.formResult.events({
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
	'click #confirmDelete': function(event) {
		$('#deleteEntry').modal('hide');
		Meteor.call('result.removeResult', Session.get('id'), (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
	    	$('#subject').html('');
			$('#user').html('');
			$('#date').html('');
			$('#problem').html('');
			$('#message').html('');
			$('#expertUsername').html('');
			$('#dateReplied').html('');
			$('#reply').html('');
			$('#close-button').html('');
	      }
		});
	},
});
Template.resultButton.events({
	'click .view': function(event, template){
		if( !(this.id == undefined) || !(this.id == null) ){
			var entry = Result.findOne({'_id': this.id});
			console.log(entry);
			var adminUsername = 'Expert';
			$('#subject').html("<h5><b>"+ entry.subject +"</b></h5><hr/>");
			$('#user').html("<h5><b>"+ entry.user + "</b> <small>" + entry.email + "</small></h5>");
			$('#date').html("<em>" + entry.date + "</em>");
			$('#problem').html("<br/> Problem: " + entry.problem +"<br/>");
			$('#message').html("<br/>" + entry.message +"<br/><hr/>");
			$('#expertUsername').html("<h5><b>"+ adminUsername + "</b> <small>" + entry.adminEmail + "</small></h5>");
			$('#dateReplied').html("<em>" + entry.dateReplied + "</em>");
			$('#reply').html("<br/>" + entry.reply +"<br/><hr/>");
			$('#close-button').html("<button type='button' class='btn btn-primary answer'>Close</button>");
				
		}

	},
	'click .delete': function(event, template){
		Session.set('id', this.id);
		$("#deleteEntry").modal('show');
	},
});