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
		var filename="";
		var reply = {
			subject: $('#subjectField').val(), 
			message: $('#msgField').val()
		};
		var email = {
            to: name+" <" + emailaddress + ">",
            from: 'mendozama.angelica@gmail.com',
            //replyTo: 'abct@failtracker.com',
            subject: $('#subjectField').val(),
            text: $('#msgField').val(),
            attachments:[
              {
                filePath: filename
              }
            ]
        };
        console.log("Sending...");
        Meteor.call('sendEmail', email);
        $("#answerFields").hide();
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