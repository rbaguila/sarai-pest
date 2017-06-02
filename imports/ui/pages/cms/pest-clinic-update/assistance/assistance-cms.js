import { Assistance } from '/imports/api/assistance/assistance.js';
import { Meteor } from 'meteor/meteor';
import './assistance-cms.html';
import '../../components/clinic-cms-navbar.html';
import '../../components/cms-sidenav.html';

Template.assistanceUpdate.onCreated(function() {
	Meteor.subscribe('assistance.all');
});

Template.assistanceUpdate.onRendered(function() {
	$("#answerFields").hide();
});

Template.assistanceUpdate.helpers({
	assistance(){
		return Assistance.find().fetch();
	},
});

Template.assistanceUpdate.events({
	'click .answer': function(event){
		$("#answerFields").show();
	},

	'click #confirmDelete' : function(event) {
		$('#deleteEntry').modal('hide');
		Meteor.call('assistance.removeAssistance', Session.get('id'), (error) => {
	      if (error) {
	        alert(error.error);
	      } else {
	    	$('#subject').html('');
			$('#user').html('');
			$('#date').html('');
			$('#message').html('');
			$('#answer-button').html('');
			$("#answerFields").hide();
	      }
		});
	},
});

Template.assistanceButton.events({
	'click .view': function(event, template){

		if( !(this.id == undefined) || !(this.id == null) ){
			var entry = Assistance.findOne({'_id': this.id});

			$('#subject').html("<h5><b>"+ entry.subject +"</b></h5><hr/>");
			$('#user').html("<h5><b>"+ entry.user + "</b> <small>" + entry.email + "</small></h5>");
			$('#date').html("<em>" + entry.date + "</em>");
			$('#message').html("<br/>" + entry.message +"<br/><hr/>");
			$('#answer-button').html("<button type='button' class='btn btn-primary answer'>Answer</button>");
		}
	},

	'click .delete': function(event, template){
		Session.set('id', this.id);
		$("#deleteEntry").modal('show');
	},
});