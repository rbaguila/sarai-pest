import { Assistance } from '/imports/api/assistance/assistance.js';
import { Meteor } from 'meteor/meteor';
import './assistance-cms.html';
import '../../components/clinic-cms-navbar.html';
import '../../components/cms-sidenav.html';

var emailaddress="";
var name = "";
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

	'click #confirmDelete': function(event) {
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

	'click #submitBTN': function(event){
		if(!($("#subjectField").val()=='') && !($("#msgField").val()=='') ){
	    	$("#enterCredentials").modal('show');
	    }else{
	    	$("#incompleteForm").modal('show');
	    }
	},
	'click #cancelBTN': function(event){
		$('#subjectField').val('');
		$('#msgField').val('');
		$("#answerFields").hide();
	},
	
	'click #confirmSend': function(event) {
		var regex = /^[a-zA-Z0-9]+[^ ]*@[^ ]*\.(org|net|com|gov\us|edu)$/;
	    if(regex.test($('#emailField').val())){
	    	$("#notAcceptedUsername").modal('show');
	    }else{
	    	if(!($("#emailField").val()=='') && !($("#pwdField").val()=='') ){
	    		var email = {
		            to: name+" <" + emailaddress + ">",
		            from: $("#emailField").val()+'@gmail.com',
		            //replyTo: 'abct@failtracker.com',
		            subject: $('#subjectField').val(),
		            text: $('#msgField').val()
		        };
		        Meteor.call('sendEmail',$("#emailField").val(),$("#pwdField").val(), email);
		        $('#subjectField').val('');
				$('#msgField').val('');
		        $('#emailField').val('');
		        $('#pwdField').val('');
		        $("#enterCredentials").modal('hide');
		        $("#answerFields").hide();
		        $("#answerSent").modal('show');
	    	}else{
	    		$("#incompleteForm").modal('show');
	    	}
	    }
	},

});

Template.assistanceButton.events({
	'click .view': function(event, template){
		$("#answerFields").hide();

		if( !(this.id == undefined) || !(this.id == null) ){
			var entry = Assistance.findOne({'_id': this.id});

			emailaddress = entry.email;
			name=entry.user;
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