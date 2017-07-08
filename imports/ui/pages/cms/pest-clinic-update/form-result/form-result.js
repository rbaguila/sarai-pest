import { Forms } from '/imports/api/forms/forms.js';
import { Result } from '/imports/api/result/result.js';
import { Meteor } from 'meteor/meteor';
import './form-result.html'
import '../../components/clinic-cms-navbar.html';
import '../../components/cms-sidenav.html';


Template.formResult.onCreated(function() {
  	Meteor.subscribe('usersList');
	//Meteor.subscribe('forms.all');
	Meteor.subscribe('result.all');
});

Template.formResult.onRendered(function() {
	//$("#answerField").hide();
});

Template.formResult.helpers({
	result(){
		return Result.find().fetch();
	},
	
});

Template.formResult.events({
	'click .answer': function(event){
		$("#answerField").show();
	},

	'click .closebtn': function(event){
		/*$('#subject').html('');
		$('#floc').html('');
		$('#area').html('');
		$('#src').html('');
		$('#variety').html('');
		$('#cstages').html('');
		$('#pesttype').html('');
		$('#symptoms').html('');
		$('#parts').html('');
		$('#distribution').html('');
		$('#damage').html('');
		$('#fertilizer').html('');
		$('#insecticide').html('');
		$('#herbicide').html('');
		$('#fungicide').html('');
		$('#weather').html('');
		$('#chemapplied').html('');
		$('#weatherobserved').html('');
		$('#close-button').html('');
		$('#answer-button').html('');
		$("#answerField").hide();*/
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
		console.log(Session.get('id'));
		//Meteor.call('forms.removeForm', Session.get('id'), (error) => {
		Meteor.call('result.removeResult', Session.get('id'), (error) => {
	      if (error) {
	      	console.log(error);
	        alert(error.error);
	      } else {
			/*$('#subject').html('');
			$('#floc').html('');
			$('#area').html('');
			$('#src').html('');
			$('#variety').html('');
			$('#cstages').html('');
			$('#pesttype').html('');
			$('#symptoms').html('');
			$('#parts').html('');
			$('#distribution').html('');
			$('#damage').html('');
			$('#fertilizer').html('');
			$('#insecticide').html('');
			$('#herbicide').html('');
			$('#fungicide').html('');
			$('#weather').html('');
			$('#chemapplied').html('');
			$('#weatherobserved').html('');
			$('#close-button').html('');
			$('#answer-button').html('');*/
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

	/*'click #cancelBTN': function(event){
		$('#subjectField').val('');
		$('#msgField').val('');
		$("#answerField").hide();
	},*/
});
Template.resultButton.events({
	'click .view': function(event, template){
		if( !(this.id == undefined) || !(this.id == null) ){
			var entry = Result.findOne({'_id': this.id});
			console.log(entry);

			var adminUsername = 'Expert';
			$('#subject').html("<h5><b><big>"+ entry.subject +"</big></b></h5><hr/>");
			$('#user').html("<h5><b>"+ entry.user + "</b> <small>" + entry.email + "</small></h5>");
			$('#date').html("<em>" + entry.date + "</em>");
			$('#problem').html("<br/> <b>Problem: </b>" + entry.problem +"<br/>");
			$('#message').html("<br/>" + entry.message +"<br/><hr/>");
			$('#expertUsername').html("<h5><b>"+ entry.adminUsername + "</b> <small>" + entry.adminEmail + "</small></h5>");
			$('#dateReplied').html("<em>" + entry.dateReplied + "</em>");
			$('#reply').html("<br/>" + entry.reply +"<br/><hr/>");
			$('#close-button').html("<button type='button' class='btn btn-primary answer'>Close</button>");
/*
			$('#subject').html("<h5><b>" + entry.email + " </b><small>" + entry.date + "</small></h5><hr/>");
			$('#floc').html("<h5>Location: " + entry.location + "</h5>");
			$('#area').html("<h5>Area: " + entry.area + "</h5>");
			$('#src').html("<h5>Source: " + entry.source + "</h5>");
			$('#variety').html("<h5>Variety: " + entry.variety + "</h5>");
			$('#cstages').html("<h5>Crop Stage: " + entry.cropStage + "</h5>");
			$('#pesttype').html("<h5>Pest Type: " + entry.pesttype + "</h5>");
			$('#symptoms').html("<h5>Sypmtoms: " + entry.symptoms + "</h5>");
			$('#parts').html("<h5>Parts: " + entry.parts + "</h5>");
			$('#distribution').html("<h5>Distribution: " + entry.distribution + "</h5>");
			$('#damage').html("<h5>Damage: " + entry.damage + "</h5>");
			$('#fertilizer').html("<h5>Fertilizer: " + entry.fertilizer + "</h5>");
			$('#insecticide').html("<h5>Insecticide: " + entry.insecticide + "</h5>");
			$('#herbicide').html("<h5>Herbicide: " + entry.herbicide + "</h5>");
			$('#fungicide').html("<h5>Fungicide: " + entry.fungicide + "</h5>");
			$('#weather').html("<h5>Weather: " + entry.weather + "</h5>");
			$('#chemapplied').html("<h5>Chemical Applied: " + entry.chemapplied + "</h5>");
			$('#weatherobserved').html("<h5>Weather Observed: " + entry.weatherobserved + "</h5><hr/>");			
			$('#answer-button').html("<button type='button' class='btn btn-primary answer'>Answer</button>");	
			$('#close-button').html("<button type='button' class='btn btn-secondary closebtn'>Close</button>");
*/
		}

	},
	'click .delete': function(event, template){
		Session.set('id', this.id);
		$("#deleteEntry").modal('show');
	},
});