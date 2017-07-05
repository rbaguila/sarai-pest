import { Assistance } from '/imports/api/assistance/assistance.js';
import { advanceAssistance } from '/imports/api/advance-assistance/advance-assistance.js';
import { Logs } from '/imports/api/logs/logs.js';
import { Result } from '/imports/api/result/result.js';
import { Meteor } from 'meteor/meteor';
import './assistance-cms.html';
import '../../components/clinic-cms-navbar.html';
import '../../components/cms-sidenav.html';

var emailaddress="";
var name = "";
var entry;
var Log;
Template.assistanceUpdate.onCreated(function() {
	Meteor.subscribe('usersList');
	Meteor.subscribe('assistance.all');
	Meteor.subscribe('logs.all');
	Meteor.subscribe('result.all');
	Meteor.subscribe('advance_assistance.all');
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
		            subject: $('#subjectField').val(),
		            text: $('#msgField').val()
		        };
		        Meteor.call('sendEmail',$("#emailField").val(),$("#pwdField").val(), email, (error) => {
					if (error) {
						console.log(error);
					  	alert(error.error);
					} else {
						console.log("Email sent!");
						var newLog = {
							id: updateLog._id,
							dateReplied: moment().format('MMMM Do YYYY, h:mm:ss a'),
							adminUsername: Meteor.user().username,
							adminEmail: $("#emailField").val() + '@gmail.com',
							reply: $('#msgField').val()
						};
						Meteor.call('logs.updateLog', newLog, (error) => {
							if (error) {
							  	alert(error.error);
							} else {
								console.log("Log updated!");
								var newResult = {
									email: updateLog.email ,
							        subject: updateLog.subject,
							        message: updateLog.message,
							        user: updateLog.user,
							        date: updateLog.date,
							        month: updateLog.month,
							        year: updateLog.year,
							        problem: updateLog.problem,
							        control: updateLog.control,
							        username: updateLog.username,
							        dateReplied: moment().format('MMMM Do YYYY, h:mm:ss a'),
							        adminUsername: newLog.adminUsername,
							        adminEmail: newLog.adminEmail,
							        reply: newLog.reply
								};
								//console.log(newResult);
								Meteor.call('result.addResults', newResult, (error) => {
									if (error) {
									  	alert(error.error);
									} else {
										console.log("Result added!");	
										Meteor.call('assistance.removeAssistance', entry._id	, (error) => {
									      if (error) {
									        alert(error.error);
									      } else {
									    	console.log("form result");
									    	$('#subject').html('');
											$('#user').html('');
											$('#date').html('');
											$('#message').html('');
											$('#answer-button').html('');
											$("#answerFields").hide();
									      }
										});
									}
								});
							}
						});
						$('#subjectField').val('');
						$('#msgField').val('');
				        $('#emailField').val('');
				        $('#pwdField').val('');
				        $("#enterCredentials").modal('hide');
				        $("#answerFields").hide();
				        $("#answerSent").modal('show');
					}
				});
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
			entry = Assistance.findOne({'_id': this.id});

			emailaddress = entry.email;
			name=entry.user;
			updateLog = Logs.findOne({
				email: entry.email,
				subject: entry.subject,
				message: entry.message,
				user: entry.user,
				date: entry.date,
				month: entry.month,
				year: entry.year,
				problem: entry.problem,
				control: entry.control
			});
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